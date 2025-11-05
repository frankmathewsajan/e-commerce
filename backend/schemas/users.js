const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: function() {
            // Password is only required if user is NOT using OAuth
            // OAuth users won't have a password
            return !this.isOAuthUser
        }
    },
    role: {
        type: String,
        required: true
    },
    isOAuthUser: {
        type: Boolean,
        default: false
    }
})
const users =  mongoose.model("users", userSchema)
module.exports = users