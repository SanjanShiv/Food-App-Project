const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'userName is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    address: {
        type: Array,
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
    },
    userType: {
        type: String,
        required: [true, 'User type is required'],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver'],
    },
    profile: {
        type: String,
        default: 'https://www.vectorstock.com/royalty-free-vector/avatar-photo-default-user-icon-picture-face-vector-48139643',
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'],
    },
}, {
    timestamps: true,
});

//export
module.exports = mongoose.model('User', userSchema);