import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/User.js";
import Character from "./models/Character.js";
import Item from "./models/Item.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

console.log("MongoDB connected for seeding");

await User.deleteMany();
await Character.deleteMany();
await Item.deleteMany();

//
// USERS
//
const users = await User.insertMany([
  {
    username: "Ralph",
    gender: "Male",
  },
  {
    username: "Luna",
    gender: "Female",
  },
  {
    username: "Kael",
    gender: "Male",
  },
  {
    username: "Selene",
    gender: "Female",
  },
  {
    username: "Nyx",
    gender: "Others",
  },
]);

//
// CHARACTERS
//
const characters = await Character.insertMany([
  {
    name: "Aldric Stormblade",
    classType: "Warrior",
    level: 15,
    health: 250,
    mana: 40,
    strength: 22,
    intelligence: 6,
    agility: 10,
    userId: users[0]._id,
  },

  {
    name: "Lyra Moonveil",
    classType: "Mage",
    level: 18,
    health: 120,
    mana: 300,
    strength: 4,
    intelligence: 25,
    agility: 11,
    userId: users[1]._id,
  },

  {
    name: "Darius Nightfang",
    classType: "Assassin",
    level: 14,
    health: 160,
    mana: 80,
    strength: 14,
    intelligence: 10,
    agility: 24,
    userId: users[2]._id,
  },

  {
    name: "Seraphina Dawnlight",
    classType: "Priest",
    level: 20,
    health: 170,
    mana: 260,
    strength: 5,
    intelligence: 23,
    agility: 9,
    userId: users[3]._id,
  },

  {
    name: "Thorn Blackroot",
    classType: "Warrior",
    level: 12,
    health: 230,
    mana: 30,
    strength: 20,
    intelligence: 5,
    agility: 8,
    userId: users[4]._id,
  },
]);

//
// ITEMS
//
await Item.insertMany([
  {
    name: "Iron Longsword",
    type: "Weapon",
    rarity: "Common",
    power: 25,
    characterId: characters[0]._id,
  },

  {
    name: "Phoenix Staff",
    type: "Weapon",
    rarity: "Legendary",
    power: 80,
    characterId: characters[1]._id,
  },

  {
    name: "Shadow Daggers",
    type: "Weapon",
    rarity: "Epic",
    power: 45,
    characterId: characters[2]._id,
  },

  {
    name: "Blessed Tome",
    type: "Artifact",
    rarity: "Rare",
    power: 35,
    characterId: characters[3]._id,
  },

  {
    name: "Steel Shield",
    type: "Armor",
    rarity: "Common",
    power: 20,
    characterId: characters[4]._id,
  },
]);

console.log("Seed data inserted");

mongoose.connection.close();