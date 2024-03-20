const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(

    {
        userId: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }

);

const User = mongoose.model('users', userSchema);

module.exports = User;