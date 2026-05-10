import Character from "../models/Character.js";
import User from "../models/User.js";
import Item from "../models/Item.js";

export const getCharacters = async (req, res) => {
  try {
    const filter = {};

    if (req.query.classType) {
      filter.classType = req.query.classType;
    }

    const characters = await Character.find(filter).populate(
      "userId",
      "username gender"
    );

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

export const deleteCharacter = async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);

    if (!deletedCharacter) {
      return res.status(404).json({ message: "Character not found" });
    }

    res.status(200).json({ message: "Character deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete character",
      error: error.message,
    });
  }
};

export const getCharacterItems = async (req, res) => {
  try {
    const items = await Item.find({ characterId: req.params.id });

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch character items",
      error: error.message,
    });
  }
};