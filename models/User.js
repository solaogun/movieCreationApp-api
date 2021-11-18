const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            min: 6

        }
    }
)
module.exports = mongoose.model('User', UserSchema)