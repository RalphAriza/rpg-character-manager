import express from "express";
import { 
    getCharacters,
    createCharacter,
    updateCharacter,
} from "../controllers/characterController.js";

const router = express.Router();

router
  .route("/")
  .get(getCharacters)
  .post(createCharacter);

router.put("/:id", updateCharacter);

export default router;