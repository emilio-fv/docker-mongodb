const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String
})

const User = mongoose.model('user', UserSchema);

module.exports = {
    User
}