import express from "express";
import { 
    getCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    getCharacterItems,
} from "../controllers/characterController.js";

const router = express.Router();

router
  .route("/")
  .get(getCharacters)
  .post(createCharacter);

router
  .route("/:id")
  .put(updateCharacter)
  .delete(deleteCharacter);

router.get("/:id/items", getCharacterItems);

export default router;