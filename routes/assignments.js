const express = require('express');
const Assignment = require('../models/Assignment'); // Assignment model
const { authorizeAdmin } = require('../middleware/authenticateJWT');
const router = express.Router();

// User upload assignment
router.post('/upload', async (req, res) => {
    const { task, admin } = req.body;
    if (!task || !admin) {
        return res.status(400).json({ error: 'Please provide both task and admin' });
    }

    try {
        const newAssignment = new Assignment({
            userId: req.user._id,  // Assumes req.user is populated by JWT middleware
            task,
            admin: req.user.username, // Using logged-in user's username as the admin
        });
        await newAssignment.save();
        res.json({ message: 'Assignment uploaded successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error uploading assignment' });
    }
});

// Admin get all assignments
router.get('/', authorizeAdmin, async (req, res) => {
    console.log("Admin's username:", req.user.username);  // Log the admin's username for debugging

    try {
        const assignments = await Assignment.find({ admin: req.user.username }); // Find assignments for that admin
        res.json(assignments);
    } catch (err) {
        console.error("Error fetching assignments:", err);
        res.status(500).json({ error: 'Error fetching assignments' });
    }
});

// Accept an assignment
router.post('/:id/accept', authorizeAdmin, async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndUpdate(req.params.id, { status: 'accepted' }, { new: true });
        res.json({ message: 'Assignment accepted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error accepting assignment' });
    }
});

// Reject an assignment
router.post('/:id/reject', authorizeAdmin, async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndUpdate(req.params.id, { status: 'rejected' }, { new: true });
        res.json({ message: 'Assignment rejected' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error rejecting assignment' });
    }
});

module.exports = router;
