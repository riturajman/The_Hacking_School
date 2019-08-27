const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{
        required : true,
        type : String,
    },

    email: {
        required : true,
        type : String,
    },

    password: {
        required : true,
        type : String,
    },
    token: String
})

const User = mongoose.model("User", userSchema)

module.exports = User