const User = require('../models/userModel')
const GameSave = require('../models/gameSaveModel')

const saveGame = async (req, res) => {
    try {
        const { user_id, progress, reputationScore, unlockedEndings} = req.body

        if(!user_id) {
            return res.status(400).json({message: 'Loading save not found'})
        }

        // const existingSave = await GameSave.findOne( { user_id })
        // if(existingSave){
        //     return res.status(200).json({message: 'Game loading successful'})
        // }

        const newGameSave = await GameSave.create({
            user_id,
            progress,
            nodeName,
            reputationScore,
            unlockedEndings
        })

        res.status(201).json({
            message: 'Game save succesfully',
            user: {
                id: user._id,
                progress: newGameSave.progress,
                nodeName: newGameSave.nodeName,
                reputationScore: newGameSave.reputation,
                unlockedEndings: newGameSave.ending
            }
        })


    } catch (err) {
        return res.status(500).json({message: 'Error while saving the game', error: err.message })
    }
}


module.exports = { saveGame }