const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoDb', (err, db) => {
    if (err) {
        return console.log("could not connect");
    }
     console.log("connected to mongodb");



});