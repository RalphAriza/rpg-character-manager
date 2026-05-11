import Character from "../models/Character.js";
import User from "../models/User.js";

export const getUserCharacters = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const characters = await Character.find({ userId: req.params.id });

    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user characters",
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};