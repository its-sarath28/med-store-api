const express = require("express");
const userRouter = express.Router();

const {
  userRegisterController,
  userLoginController,
} = require("../../controllers/userController");

//POST: /api/v1/users/register -> register a new user
userRouter.post("/register", userRegisterController);

//POST: /api/v1/users/login -> register a new user
userRouter.post("/login", userLoginController);

module.exports = userRouter;
