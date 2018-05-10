const mongoose = require('mongoose');
const { Schema } = mongoose;

class recipientSchema = new Schema({
    email: String,
    responded: {
        type: Boolean,
        default: false
    }
});

module.exports = recipientSchema;