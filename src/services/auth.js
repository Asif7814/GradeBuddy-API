const bcrypt = require("bcryptjs");

const User = require("../models/users");
const { BadRequestError } = require("../utils/errors");

const registerUser = async (name, email, password) => {
    // Check if required fields are provided
    if (!name || !email || !password) {
        throw new BadRequestError("Please provide all required fields");
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        throw new BadRequestError("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (!newUser) {
        throw new BadRequestError("Invalid user data");
    }

    return newUser;
};

const loginUser = async (email, password) => {
    // Check for user email
    const user = await User.findOne({ email });

    if (!user) {
        throw new BadRequestError("Invalid email");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw new BadRequestError("Invalid password");
    }

    return user;
};

const getUser = async (id) => {
    const user = await User.findById(id).select("-password");

    if (!user) {
        throw new BadRequestError("User not found");
    }

    return user;
};

module.exports = {
    registerUser,
    loginUser,
    getUser,
};
