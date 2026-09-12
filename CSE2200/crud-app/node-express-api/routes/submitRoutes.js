import express from "express";

import { createSubmit } from "../controller/submitController.js";

import upload from "../middlewares/upload.js";

import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.post(
  "/",
  checkToken,
  upload.single("image"),
  createSubmit
);

export default router;