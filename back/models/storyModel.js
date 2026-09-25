const mongoose = require('mongoose')

const StoryNodeSchema = new mongoose.Schema(
    {
        node_id:{
            type : Number,
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
        backgroud: {
            type: String,
            required: [true, ],
            trim: true,
        },
        reputation: {
            type: Number,
            trim: true,
        },
        nextNode: {
            type: Number,
            require: [true],
            trim: true,
        },
        nodeName: {
            type: String,
            trim: true
        },
        isEnding: {
            type: Boolean,
            trim: true,
        },
        Ending: { // a remodeler 
            type: Number,
            required: [true, 'Recognized hero', 'Anonymous hero', 'New criminal'],
            trim: true,
        }
    },
    {
        timestamps:true
    }
)


module.exports = mongoose.model('StoryNode',StoryNodeSchema)