var {
    ObjectID
} = require('mongodb');
var jwt = require('jsonwebtoken');

var {
    User
} = require('./../../models/user');
var {
    Todo
} = require('./../../models/todo');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
        _id: userOneId,
        email: 'one@user.de',
        password: 'onePassword',
        tokens: [{
            access: 'auth',
            token: jwt.sign({
                _id: userOneId,
                access: 'auth'
            }, 'abc123').toString()
        }]
    },
    {
        _id: userTwoId,
        email: 'two@user.de',
        password: 'twoPassword',
        tokens: [{
            access: 'auth',
            token: jwt.sign({
                _id: userTwoId,
                access: 'auth'
            }, 'abc123').toString()
        }]
    }

];

const todos = [{
        _id: new ObjectID(),
        title: "the first title",
        text: "the first text",
        _creator: userOneId
    },
    {
        _id: new ObjectID(),
        title: "the second title",
        text: "the second text",
        completed: true,
        completedAt: 3333,
        _creator: userTwoId

    }
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne,userTwo]);
    }).then(()=> done());
}

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
}