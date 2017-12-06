const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TodoDb', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

module.exports = { mongoose };