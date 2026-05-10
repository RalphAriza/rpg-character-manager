import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    rarity: {
      type: String,
      required: true,
      enum: ["Common", "Rare", "Epic", "Legendary"],
    },

    power: {
      type: Number,
      required: true,
      min: 1,
    },

    characterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;