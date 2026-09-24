const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const validator = require('validator')


const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = '24h'

const generateToken = (id) => {
    return jwt.sign({id}, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    })
}

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if(!name || !email || !password){
            return res.status(400).json({message: 'Please, provide a name, email and paswword'})
        }

        const existingUser = await User.findOne( { email })
        if(existingUser){
            return res.status(400).json({ message: 'Email already use'})
        }

        //Create new user

        const user = await User.create({
            name,
            email,
            password,
        })

        const token = generateToken(user._id)

        res.status(201).json({
            message: 'User registered succesfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        })
            
    } catch (err) {
        res.status(500).json({ message: 'Server error during registration', error: err.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if( !email, !password){
            return res.status(500).json({message: 'Please provide an email and a password'})
        }

        const user = await User.findOne({ email }).select('+password')

        if(!user){
            return res.status(400).json({ message: 'Invalid credentials'})
        }

         const isMatch = await user.comparePassword(password)
        if(!isMatch){
            return res.status(401).json({message: 'invalid credentials'})
        }


        const token = generateToken(user._id)

        res.status(200).json({
            message : 'Login succesful',
            token,
            user:{
                id: user._id,
                name: user.name,
                email : user.email,
                role : user.role,
            }
        })


    } catch (err) {
        res.status(500).json({ message: 'Server error while login', error: err.message })
    }
}


const getProfile = async (req, res) => {
    try {
       
        const { name, password } = req.body
        // utilisateur déjà authentifié (middleware)
        const user = await User.findById(req.user._id)

        if (!user) {
            return res.status(404).json({ message: 'user not found' })
        }

        if (name) {
            user.name = name
        }

        if (password) {
            const isPasswordOK = validator.isStrongPassword(password, {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            })

            if (!isPasswordOK) {
                return res.status(400).json({ message: 'le mdp doit contenir... (tout le tralala)' })
            }

            user.password = password // sera hashé automatiquement par le hook pre('save')
        }

        // note : email et role ne sont pas modifiables ici

        await user.save()

        res.status(200).json({
            message: 'profile updated successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        })

    } catch (err) {
        res.status(500).json({ message: 'Server error while getting profile information', error: err.message })
    }
}

module.exports = {register, login, getProfile}