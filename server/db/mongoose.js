const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/TodoDb', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

module.exports = { mongoose };