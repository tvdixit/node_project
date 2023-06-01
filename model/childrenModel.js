const mongoose = require('mongoose');

const ChildrenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    profile_photo: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('childrendatas', ChildrenSchema)
