import express from "express";
import { getUsers, getUserCharacters } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id/characters", getUserCharacters);

export default router;