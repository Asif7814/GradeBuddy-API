const jwt = require("jsonwebtoken");
const User = require("../models/users");

const { JWT_SECRET } = process.env;

const { UnauthorizedError } = require("../utils/errors");

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, JWT_SECRET);

            // Get user data
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401).json({ message: "Not authorized" });
            throw new UnauthorizedError("Not authorized");
        }
    }

    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
        throw new UnauthorizedError("Not authorized, no token");
    }
};

module.exports = { protect };

// NOTE: LINE 28 might not be working. line 34 works though.
