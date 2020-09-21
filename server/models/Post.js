const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
{
    title:  { type: String, required: true, },
    body:   { type: String, required: true, },
    author: { type: String, required: true},
    date:   { type: Date,   default: Date.now },
    comments: Array
}
)

module.exports = mongoose.model("Post", postSchema)