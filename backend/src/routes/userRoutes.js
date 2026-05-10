import express from "express";
import { getUserCharacters } from "../controllers/userController.js";

const router = express.Router();

router.get("/:id/characters", getUserCharacters);

export default router;