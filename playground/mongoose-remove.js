const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })
// ;

Todo.findByIdAndRemove("5a3180c51b198c7f963e6c1d").then((todo) => {
    console.log(todo);
})