var mongoose = require('mongoose');


const CraftsSchema = mongoose.Schema({ 
                 
    type: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    materials: {
        type: String,
        required: true,
    },

    size: {
        type: Number,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        required: false, 
        default: true
    },

}, { versionKey: false })

module.exports = mongoose.model('crafts', CraftsSchema); 
