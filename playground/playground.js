const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoDb',(err,db)=>{
    if(err){
        return console.log("could not connect");
    }
    // console.log("connected to mongodb");
    // db.collection('Todos').insertOne({text: "do something else",completed: false},
    //     (err,result)=> {
    //         if(err){
    //             return console.log("could not insert data");
    //         }
    //         console.log(JSON.stringify(result.ops,undefined,2));
    //     }
    // );

//     db.collection('Users').insertOne({name: 'Donald Duck', age: 60, location: 'at home'},(err,res)=>{
//         if(err){
//         return console.log('could not insert data');
//         }
//         console.log(JSON.stringify(res.ops,undefined,2));
//         console.log(res.ops[0]._id.getTimestamp());
//     });
//     db.close();
// });
