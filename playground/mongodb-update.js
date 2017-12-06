const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoDb', (err, db) => {
    if (err) {
        return console.log("could not connect");
    }
    console.log("connected to mongodb");

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a21b68534170e17f4148424')
    }, {
        $set: {
            name: "Andre"
        },
        $inc:{
            age:5
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

});