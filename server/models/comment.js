const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    content: String,
    author:{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        username: String
    }
})

module.exports = mongoose.model("Comment", commentSchema)