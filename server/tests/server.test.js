const expect = require('expect');
const request = require('supertest');

var {
    app
} = require('../server');
var {
    Todo
} = require('../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => done());
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
                Todo.find({}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });

    });

    it('should not create a todo with invalid body', (done) => {
        request(app).post('/todos').expect(400)
            .end((err,res) =>{
                if(err){
                    return done(err);
                }
                Todo.find({}).then((todos)=>{
                    expect(todos.length).toBe(0);
                    done();
                }).catch((err)=> done(err))
            })

    });

});