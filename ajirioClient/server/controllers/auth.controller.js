import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ fullName, email, password: hashed });

    res.json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Incorrect password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ success: true, token, user });
};
