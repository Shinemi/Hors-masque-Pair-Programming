const mongoose = require('mongoose')

const gameSaveSchema = new mongoose.Schema(
    {
        user_id:{
            type : String,
            required : [true, 'Name is required'],
            trim : true,
        },
        progress: {
            type : String,
            trim : true,
        },
        reputationScore: {
            type : String,
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