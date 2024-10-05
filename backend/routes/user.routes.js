import { Router } from "express";
import protectedRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
const router = Router();
// to show users in sidebar
router.route("/").get(protectedRoute, getUsersForSidebar);
export default router;
