const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    starred: {
        type: Boolean,
        default: false
    },
    isComp: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String
    },
    date: {
        type: String
    }
}
);

module.exports = mongoose.model('Tasks', dataSchema);