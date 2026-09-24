const mongoose = require('mongoose')

const GameSave = new mongoose.Schema(
    {
        user_id:{
            type : Int,
            required : [true, 'Name is required'],
            trim : true,
        },
        progress: {
            type : String,
            trim : true,
        },
        reputationScore: {
            type : Int,
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


module.exports = mongoose.model('GameSave')