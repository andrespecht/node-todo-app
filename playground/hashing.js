
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data,'123123dd');
console.log(token);

var decoded = jwt.verify(token,'123123dd');
console.log(decoded);
// var message = "I am to be encrypted";

// var hash = SHA256(message).toString();

// console.log("message hashed is ",hash);