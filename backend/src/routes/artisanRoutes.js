import express from "express";
import {
  getArtisans,
  getArtisanById,
  createArtisan,
  updateArtisan,
  verifyArtisan,
  deleteArtisan,
  getArtisanStats,
} from "../controllers/artisanController.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/stats/kpi", protect, getArtisanStats);
router.get("/", getArtisans);
router.get("/:id", getArtisanById);
router.post("/", protect, createArtisan);
router.put("/:id", protect, updateArtisan);
router.patch("/:id/verify", protect, verifyArtisan);
router.delete("/:id", protect, deleteArtisan);

export default router;