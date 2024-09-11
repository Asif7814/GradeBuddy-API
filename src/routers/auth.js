const { Router } = require("express");

const userController = require("../controllers/auth");

const userRouter = Router();

const { protect } = require("../middlewares/auth");

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/me", protect, userController.getUser);

module.exports = userRouter;
