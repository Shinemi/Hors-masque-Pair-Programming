const express = require ('express')
const router = express.Router()
const {} = require('../controllers/storyController')
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/story',StoryNode)

module.exports = router