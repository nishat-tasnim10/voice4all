import express from "express";
import { getDashboardData } from "../controller/dashboardController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.get("/", checkToken, getDashboardData);

export default router;