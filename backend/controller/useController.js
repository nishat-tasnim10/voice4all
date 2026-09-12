import { hashPassword } from "../utils/helpers.js";
import User from "../model/user.js";
import jwt from "jsonwebtoken";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().select(["-password", "-__v"]);

    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// Get user profile
export const getProfile = async (req, res) => {
  try {
    const { token } = req.cookies;

    const user = jwt.verify(token, process.env.JWT_SECRET);

    const userInfo = await User.findById(user.id).select(["-__v"]);

    return res.status(200).json(userInfo);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// Create new user
export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        error: "Username, email and password are required",
      });
    }

    const otherUser = await User.findOne({ username }).select("username");

    if (otherUser) {
      return res.status(400).json({
        error: "Username already in use",
      });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: "New user added successfully",
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

// Update user
export const updatedUser = async (req, res) => {
  const { email, username, password } = req.body;
  const { id } = req.params;

  try {
    if (!email || !username) {
      return res.status(400).json({
        error: "Username and email are required",
      });
    }

    const anotherUser = await User.findOne({ username })
      .select("_id")
      .lean();

    if (anotherUser && anotherUser._id.toString() !== id) {
      return res.status(400).json({
        error: "Username already in use",
      });
    }

    const updateData = {
      username,
      email,
    };

    if (password) {
      updateData.password = await hashPassword(password);
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      updateData,
      {
        new: true,
      }
    ).select("-__v -password");

    if (!updatedUser) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// Delete one user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.deleteOne({
      _id: id,
    });

    if (deletedUser.deletedCount === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json({
      message: "User deleted",
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

// Delete all users
export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany();

    return res.status(200).json({
      message: "All users deleted",
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};