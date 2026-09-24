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

        const isMatch (email)



    } catch (err) {
        res.status(500).json({ message: 'Server error while login', error: err.message })
    }
}

module.exports = {register, login}