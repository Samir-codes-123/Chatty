import { Router } from "express";
import { sendMsg, getMsg } from "../controllers/message.controller.js";
import protectedRoute from "../middleware/protectRoute.js";
const router = Router();

router.route("/:id").get(protectedRoute, getMsg);
router.route("/send/:id").post(protectedRoute, sendMsg);

export default router;
