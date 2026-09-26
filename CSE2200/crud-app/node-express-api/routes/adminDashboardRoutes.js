import express from "express";

import {
    getAllComplaints,
    updateComplaintStatus
} from "../controller/adminDashboardController.js";

import checkToken from "../middlewares/checkToken.js";

const router = express.Router();


// Get all complaints
router.get("/", checkToken, getAllComplaints);


// Update complaint status
router.patch("/:id/status", checkToken, updateComplaintStatus);


export default router;