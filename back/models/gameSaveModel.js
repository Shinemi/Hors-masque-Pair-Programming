const mongoose = require('mongoose')

const gameSaveSchema = new mongoose.Schema(
    {
        user_id:{
            type : Number,
            required : [true, 'Name is required'],
            trim : true,
        },
        storyNode_id: {
            type : Number,
            required : [true, 'Story node is required'],
            trim : true,
        },
        nodeName: {
            type: String,
            trim: true
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