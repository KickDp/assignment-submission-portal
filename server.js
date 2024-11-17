require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const assignmentRoutes = require('./routes/assignments');
const { authenticateJWT } = require('./middleware/authenticateJWT');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); // For parsing application/json

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Connection Error:', err));

// Routes
app.use('/auth', authRoutes); // Authentication routes (register/login)
app.use('/assignments', authenticateJWT, assignmentRoutes); // Assignment-related routes

// Root route for basic testing
app.get('/', (req, res) => {
    res.send('Welcome to the Assignment Submission Portal');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
