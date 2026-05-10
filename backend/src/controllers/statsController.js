import Character from "../models/Character.js";

export const getHighestLevelCharacter = async (req, res) => {
  try {
    const character = await Character.findOne()
      .sort({ level: -1 })
      .populate("userId", "username gender");

    if (!character) {
      return res.status(404).json({ message: "No characters found" });
    }

    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch highest level character",
      error: error.message,
    });
  }
};