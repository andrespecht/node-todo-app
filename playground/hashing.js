
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = 'andrewhatisgoingon';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$WObIYeQYbrrG9NSKcMmfMuljx.vgJKxMh1CfmMUB285kczDK4u2my';

bcrypt.compare(password, hashedPassword, (err,res) => {
    console.log(res);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data,'123123dd');
// console.log(token);

// var decoded = jwt.verify(token,'123123dd');
// console.log(decoded);
// // var message = "I am to be encrypted";

// // var hash = SHA256(message).toString();

// console.log("message hashed is ",hash);