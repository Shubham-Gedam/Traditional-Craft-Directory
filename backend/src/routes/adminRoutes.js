import express from "express";
import { registerAdmin, loginAdmin, logoutAdmin, getAdminProfile } from "../controllers/adminController.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", protect, logoutAdmin);
router.get("/me", protect, getAdminProfile);

export default router;