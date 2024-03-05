const bcrypt = require("bcryptjs");

const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const appError = require("../utils/appError");

const userRegisterController = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    //Check if email already exists
    const userFound = await User.findOne({ email });

    if (userFound) {
      return next(appError("User already exists"));
    }

    //Encrypting the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({
      status: "Success",
      data: user,
    });
  } catch (err) {
    console.log(err);
    next(appError(err.message));
  }
};

const userLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //Check if email exists in the database
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return next(appError("Invalid credentials", 401));
    }

    //Compare the password
    const isMatchPassword = await bcrypt.compare(password, userFound.password);

    if (!isMatchPassword) {
      return next(appError("Invalid credentials", 401));
    }

    res.json({
      status: "Success",
      data: {
        firstName: userFound.firstName,
        lastName: userFound.lastName,
        email: userFound.email,
        token: generateToken(userFound._id),
      },
    });
  } catch (err) {
    console.log(err);
    next(appError(err.message));
  }
};

module.exports = {
  userRegisterController,
  userLoginController,
};
