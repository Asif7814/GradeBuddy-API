const jwt = require("jsonwebtoken");
const userServices = require("../services/auth");

const { JWT_SECRET } = process.env;

// Generate JWT token
const generateToken = (userID) => {
    return jwt.sign({ id: userID }, JWT_SECRET, {
        expiresIn: "30d",
    });
};

// @desc    Create user
// @route   POST /auth/users
// @access  Public
const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        let newUser = await userServices.registerUser(name, email, password);

        newUser = { ...newUser.toObject(), token: generateToken(newUser._id) };

        res.status(201).json({
            data: {
                newUser,
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        let user = await userServices.loginUser(email, password);

        user = { ...user.toObject(), token: generateToken(user._id) };

        res.status(201).json({
            data: {
                user,
            },
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getUser = async (req, res, next) => {
    try {
        const user = await userServices.getUser(req.user._id);

        res.status(200).json({
            data: {
                user,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUser,
};
