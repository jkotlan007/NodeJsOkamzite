let db = require('../lib/db');

let UserSchema = new db.Schema({
    username : {type: String, unique: true},
    password : String
});

let MyUser = db.mongoose.model('User', UserSchema);

module.exports.addUser = addUser;

function addUser(username, password, callback) {
    let instance = new MyUser();
    instance.username = username;
    instance.password = password;
    instance.save(function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, instance);
        }
    });
}