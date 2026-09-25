const User = require('../models/userModel')
const StoryNode = require('../models/storyModel')
const validator = require('validator')

const NodeStory = async (req, res) => {
    try {
        const { user_id, progress, unlockedEndings } = req.body
        
        if(!user_id){
            return res.status(400).json({message: 'Story node not found'})
        }

        const existingNodeStory = await StoryNode.findOne({ progress })



    } catch (err) {
        return res.status(500).json({ message: 'Error while charging the next story node !', error: err.message})
    }
}

module.exports = {NodeStory}