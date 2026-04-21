import express from "express";
import { login } from "../controllers/authController";
import { verifyUser } from "../middleware/User.middleware";
import { getUserDashboard } from "../controllers/dashboard/userdashboard";
const router = express.Router();

router.post("/login", login);
router.get("/dashboard-user", verifyUser, getUserDashboard);

export default router;
