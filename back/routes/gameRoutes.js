const express = require ('express')
const router = express.Router()
const { saveGame } = require('../controllers/gameSaveController')
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/save', saveGame)

router.get('/me', authMiddleware, getProfile)


module.exports = router