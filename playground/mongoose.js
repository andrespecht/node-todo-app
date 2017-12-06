const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TodoDb', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

var Todo = mongoose.model('Todo', {
    title: String,
    text: String,
    completed: Boolean,
    completedAt: Number
});

var firstTodo = new Todo({
    title: "cook dinner",
    desc: "Soup and Spaghetti",
    completed: true
});
firstTodo.save().then((res) => {
    console.log("saved tod", res);
}, (e) => {

    console.log(e);
});