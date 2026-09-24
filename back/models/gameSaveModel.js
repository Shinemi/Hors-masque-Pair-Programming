const mongoose = require('mongoose')
const bcrypt = require ('bcryptjs')

const userSchema = new mongoose.Schema(
    {
        userId:{
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
            "héros reconnu",
            "héros anonyme",
            "nouveau criminel"
        ],

    },
    {
        timestamps:true
    }
)


module.exports = mongoose.model('GameSave')