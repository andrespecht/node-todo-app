const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a2c6546dd9bad1366bd11bf';

var id2 = '5a24452bbb5b6c1654b5093b'


Todo.find({_id: id}).then((todos) =>{
    console.log('Todos',todos);
});

Todo.findOne({_id: id}).then((todo) =>{
    console.log('Todo',todo);
});

Todo.findById(id).then((todo) => {
    console.log(todo);
})

User.findById(id2).then((user) => {
    if(!user){
        return console.log('User not found!');
    }
    console.log(user);
}).catch((err) =>{
    console.log(err);
});