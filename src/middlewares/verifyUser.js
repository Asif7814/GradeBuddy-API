const User = require("../models/users");

const { UnauthorizedError, BadRequestError } = require("../utils/errors");

const verifyUser = async (req, res, next) => {
    const userID = req.user._id;

    const user = await User.findById(userID);

    console.log("USER ID", userID);
    console.log("USER", user);

    // Check for user
    if (!user) {
        throw new BadRequestError("User not found");
    }

    // Ensure logged in user matches the user in the request
    if (userID.toString() !== user._id.toString()) {
        throw new UnauthorizedError("User not authorized");
    }

    next();
};

module.exports = { verifyUser };
