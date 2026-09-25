const mongoose = require('mongoose')

const gameSaveSchema = new mongoose.Schema(
    {
        user_id:{
            type : String,
            required : [true, 'Name is required'],
            trim : true,
        },
        storyNode_id: {
            type : String,
            required : [true, 'Story node is required'],
            trim : true,
        },
        reputationScore: {
            type : Number,
            trim : true,
        },
        unlockedEndings :[
            "Recognized hero",
            "Anonymous hero",
            "New criminal"
        ],
    },
    {
        timestamps:true
    }
)


module.exports = mongoose.model('gameSave',gameSaveSchema)