const mongoose = require('mongoose')

const StoryNodeSchema = new mongoose.Schema(
    {
        node_id:{
            type : Int,
            trim : true,
        },
        character: {
            type : String,
            trim : true,
        },
        text: {
            type : String,
            trim : true,
        },
        choices: {
            type: String,
            required: [true, 'Need to select a choice'],
            trim: true,
        },
        // backgroud: {
        //     type: Image,
        //     required: [true, ],
            
        //     trim: true,
        // },
        reputation: {
            type: Int,
            trim: true,
        },
        nextNode: {
            type: Int,
            require: [true],
            trim: true,
        },
        isEnding: {
            type: Boolean,
            trim: true,
        },
        Ending: {
            type: Int,
            required: [true, 'Recognized hero', 'Anonymous hero', 'New criminal'],
            trim: true,
        }
    },
    {
        timestamps:true
    }
)


module.exports = mongoose.model('StoryNode',StoryNodeSchema)