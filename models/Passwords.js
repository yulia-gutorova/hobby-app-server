var mongoose = require('mongoose');

const PasswordsSchema = mongoose.Schema({

    password: {
        type: String,
        required: true
    },

}, { versionKey: false })

module.exports = mongoose.model('passwords', PasswordsSchema); 
