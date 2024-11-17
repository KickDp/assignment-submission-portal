const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT and authorize roles
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];  // Extract Bearer token

    if (!token) {
        return res.status(401).json({ error: 'Access Denied: No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;  // Attach user info to the request object
        next();
    });
};

// Middleware to check if user is an admin
const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Access Denied: Admins only' });
    }
    next();
};

module.exports = { authenticateJWT, authorizeAdmin };
