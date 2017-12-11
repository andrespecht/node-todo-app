const expect = require('expect');
const request = require('supertest');
var {
    ObjectID
} = require('mongodb');

var {
    app
} = require('../server');
var {
    Todo
} = require('../models/todo');

const todos = [{
        _id: new ObjectID(),
        title: "the first title",
        text: "the first text"
    },
    {
        _id: new ObjectID(),
        title: "the second title",
        text: "the second text"

    }
];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {


    it('should create a new todo', (done) => {
        var text = "this is my todo text";

        request(app).post('/todos').send({
                text: text
            }).expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find({
                    text: text
                }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });

    });

    it('should not create a todo with invalid body', (done) => {
        request(app).post('/todos').expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find({}).then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((err) => done(err))
            })

    });

});

describe('GET /todos', () => {

    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                console.log(res.body.todos);
                expect(res.body.todos.length).toBe(2);
            }).end(done);
    });

});

describe('GET /todos/:id', () => {

    it('should get todo by id', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done);
    });

    it('should return 404 if todo is not found', (done) => {
        var oid = new ObjectID();
        request(app)
            .get(`/todos/${oid.toHexString()}`)
            .expect(404)
            .end(done);

    });

    it('should return 404 if id is not valid', (done) => {
        request(app)
            .get('/todos/123')
            .expect(404)
            .end(done);
    });

});