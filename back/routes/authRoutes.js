const express = require ('express')
const router = express.Router()
const {register,login, getProfile, getGame} = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')


router.post('/register', register)
router.post('/login', login)
router.get('/me', authMiddleware, getProfile)
router.get('/save', authMiddleware, getGame)


module.exports = router