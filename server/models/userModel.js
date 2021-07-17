const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    passwordHash: { type: String, required: true }
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;

  

