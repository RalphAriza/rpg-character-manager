import express from "express";
import { 
    getCharacters,
    createCharacter,
} from "../controllers/characterController.js";

const router = express.Router();

router
  .route("/")
  .get(getCharacters)
  .post(createCharacter);

export default router;