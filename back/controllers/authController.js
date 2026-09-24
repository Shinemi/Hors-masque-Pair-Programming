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