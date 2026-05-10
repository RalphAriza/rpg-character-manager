import express from "express";
import { getHighestLevelCharacter } from "../controllers/statsController.js";

const router = express.Router();

router.get("/highest-level", getHighestLevelCharacter);

export default router;