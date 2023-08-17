const mongoose = require('mongoose');

const User = require('./userSchema');

const messageSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    semail: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER'
    }

});

const Message = mongoose.model("MESSAGE", messageSchema);

module.exports = Message;
