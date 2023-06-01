const mongoose = require('mongoose');

const UserAccountSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    profilephoto: {
        type: String,
        required:true,
    },
    galleryphoto: {
        type: Array,
        required: true,
    },
    children_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"childrendatas",
        // required: true,
    },
});

module.exports = mongoose.model('userAccount', UserAccountSchema)
