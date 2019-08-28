const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/jwtTest2', { useNewUrlParser: true })

module.exports.User = require('./user')