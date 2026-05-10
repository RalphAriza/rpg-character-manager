import Character from "../models/Character.js";
import User from "../models/User.js";

export const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find().populate("userId", "username gender");

    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch characters",
      error: error.message,
    });
  }
};