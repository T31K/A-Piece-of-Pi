const mongoose = require('mongoose')

const blogpostSchema = mongoose.Schema({
    title: String,
    image: String,
    description: String,
    content: String,
    author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

module.exports = mongoose.model("Blogpost", blogpostSchema)