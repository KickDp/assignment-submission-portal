const mongoose = require('mongoose');

// User schema definition
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], required: true },
});

// User model
const User = mongoose.model('User', userSchema);

module.exports = User;
