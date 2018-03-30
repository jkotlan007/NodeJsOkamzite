let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

let username = "testUser";
let password = "testPassword";
let address = '@ds227939.mlab.com:27939/testingdb';
connect();

function connect() {
    let url = 'mongodb://' + username + ':' + password + address;
    mongoose.connect(url);
}

function disconnect() {mongoose.disconnect()};