import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const allUsers = await User.find().sort({ createdAt: -1 }).select(["-__v"]);
  return res.status(200).json(allUsers);
};

export const createUser = async (req, res) => {
  const { name, email } = req.body;
  const anotherUser = await User.exists({ email });
  if (anotherUser) {
    return res.status(400).json({ error: "Email is already in use" });
  }
  const newUser = await User.create({ email, name });
  return res.status(201).json(newUser);
};

export const updateUserByEmail = async (req, res) => {
  const { email } = req.params;
  const { name: newName } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = newName;
  user.save();

  return res.status(200).json({ message: "User updated" });
};

export const deleteUserByEmail = async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  await User.deleteOne({ email });

  return res.status(200).json({ message: "User deleted" });
};
