const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    password: String,
    role: String
}, { timestamps: true });


let UserModel = mongoose.model('users', userSchema);
exports.USER_MODEL = UserModel