const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    friendEmail: {
        type: String,
        require: true
    },
    jobRole:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, { timestamps: true });


const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;