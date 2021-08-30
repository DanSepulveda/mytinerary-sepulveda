const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    admin: { type: Boolean, default: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    imageUrl: { type: String, required: true },
    country: { type: String, required: true },
    google: { type: Boolean, default: false }
})

const User = mongoose.model('user', userSchema)

module.exports = User