import express from "express";

import {
  createSubmit,
  getComplaints
} from "../controller/submitController.js";

import upload from "../middlewares/upload.js";

import checkToken from "../middlewares/checkToken.js";

const router = express.Router();


// GET complaints
router.get(
  "/",
  checkToken,
  getComplaints
);


// POST complaint
router.post(
  "/",
  checkToken,
  upload.single("image"),
  createSubmit
);


export default router;