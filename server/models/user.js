const mongoose = require("mongoose");

const userSchema = mongoose.Schema
({
    username: String,
    socialId: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;