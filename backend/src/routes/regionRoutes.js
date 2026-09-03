import express from "express";
import {
  getRegions,
  getRegionById,
  createRegion,
  updateRegion,
  deleteRegion,
} from "../controllers/regionController.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getRegions);
router.get("/:id", getRegionById);
router.post("/", protect, createRegion);
router.put("/:id", protect, updateRegion);
router.delete("/:id", protect, deleteRegion);

export default router;