const express = require ('express')
const router = express.Router()
const { saveGame } = require('../controllers/gameSaveController')
const authMiddleware = require('../middlewares/authMiddleware')


router.post('/save', authMiddleware ,saveGame)



module.exports = router