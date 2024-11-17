const mongoose = require('mongoose');

// Assignment schema definition
const assignmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Refers to User
    task: { type: String, required: true },  // Task description
    admin: { type: String, required: true }, // Admin assigned to the task
    status: { 
        type: String, 
        enum: ['pending', 'accepted', 'rejected'], 
        default: 'pending',  // Default status is pending
    },
    createdAt: { type: Date, default: Date.now }, // Timestamp when assignment is created
});

// Assignment model
const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
