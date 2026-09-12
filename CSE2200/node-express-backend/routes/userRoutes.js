import express from "express";
import {
  createUser,
  deleteUserByEmail,
  getAllUsers,
  updateUserByEmail,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);

router.put("/:email", updateUserByEmail);
router.delete("/:email", deleteUserByEmail);

export default router;
