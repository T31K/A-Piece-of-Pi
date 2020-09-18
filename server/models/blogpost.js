const mongoose = require('mongoose')

const blogpostSchema = mongoose.Schema(
{
    title:  { type: String, required: true, trim: true, minlength: 4 },
    body:   { type: String, required: true, trim: true },
    author: { type: String, required: true},
    date:   { type: Date,   required: true },
    comments: [String]
},
    { timestamps: true }
)

module.exports = mongoose.model("Blogpost", blogpostSchema)