
import express from "express";
import { createSubmit } from "../controller/submitController.js";

const router = express.Router();

router.post("/", createSubmit);

export default router;

