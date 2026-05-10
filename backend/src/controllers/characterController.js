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

export const createCharacter = async (req, res) => {
  try {
    const newCharacter = await Character.create(req.body);

    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create character",
      error: error.message,
    });
  }
};

export const updateCharacter = async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!updatedCharacter) {
      return res.status(404).json({ message: "Character not found" });
    }

    res.status(200).json(updatedCharacter);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update character",
      error: error.message,
    });
  }
};