const jwtToken = require('jsonwebtoken');

module.exports = function verifyUsersTask(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) {
        return res.status(401).json({ message: "Access denied: No token provided" });
    }

    try {
        const decoded = jwtToken.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" })
    }
}