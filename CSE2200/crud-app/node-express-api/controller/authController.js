import User from "../model/user.js";

import { hashPassword, comparePassword } from "../utils/helpers.js";

import jwt from "jsonwebtoken";

const lifetime = "3600000";


// =========================
// SIGN UP
// =========================

export const signup = async (req, res) => {

  const { username, email, password } = req.body;

  try {

    // Check if username already exists
    const otherUser = await User.findOne({
      username,
    }).select(["username"]);

    if (otherUser) {

      return res.status(400).json({
        error: "Username already in use",
      });

    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    // Every new account is a normal user
    const newUser = new User({

      username,

      email,

      password: hashedPassword,

      role: "user",

    });

    // Save user
    await newUser.save();

    return res.status(201).json({
      message: "New user added successfully",
    });

  } catch (err) {

    return res.status(400).json(err);

  }

};


// =========================
// LOGIN
// =========================

export const login = async (req, res) => {

  const {
    username,
    password,
    loginRole,
  } = req.body;

  try {

    // Find user
    const user = await User.findOne({
      username: username,
    }).select(["-__v"]);

    // User not found
    if (!user) {

      return res.status(404).json({
        error: "User not found",
      });

    }

    // Check password
    const isSame = await comparePassword(
      password,
      user.password
    );

    if (!isSame) {

      return res.status(400).json({
        error: "Wrong password",
      });

    }

    // Check selected role
    // with actual role from MongoDB
    if (user.role !== loginRole) {

      return res.status(403).json({
        error: `This account is registered as ${user.role}`,
      });

    }

    // Create JWT
    const token = jwt.sign(

      {
        id: user.id,
        username: user.username,
        role: user.role,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: lifetime,
      }

    );

    // Store token in cookie
    res.cookie("token", token, {

      maxAge: lifetime,

      httpOnly: true,

      secure: true,

      sameSite: "none",

      path: "/",

    });

    // Send user information
    return res.status(200).json(user);

  } catch (err) {

    return res.status(400).json(err);

  }

};


// =========================
// LOGOUT
// =========================

export const logout = (req, res) => {

  res.clearCookie("token", {

    httpOnly: true,

    secure: true,

    sameSite: "none",

    path: "/",

  });

  return res.status(200).json({
    message: "Logout successful",
  });

};