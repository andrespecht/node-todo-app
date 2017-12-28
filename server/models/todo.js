const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    title: {
        type: String,
        trim: true,
        minLength: 1
    },
    text: {
        type: String,
        minLength: 1,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = { Todo }