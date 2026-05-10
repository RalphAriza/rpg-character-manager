import mongoose from "mongoose";

const characterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    classType: {
      type: String,
      required: true,
      enum: ["Warrior", "Mage", "Archer", "Assassin", "Priest"],
    },

    level: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },

    health: {
      type: Number,
      required: true,
      min: 0,
    },

    mana: {
      type: Number,
      required: true,
      min: 0,
    },

    strength: {
      type: Number,
      required: true,
      min: 1,
    },

    intelligence: {
      type: Number,
      required: true,
      min: 1,
    },

    agility: {
      type: Number,
      required: true,
      min: 1,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("Character", characterSchema);

export default Character;