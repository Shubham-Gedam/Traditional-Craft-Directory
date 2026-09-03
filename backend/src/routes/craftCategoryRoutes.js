import express from "express";
import {
  getCraftCategories,
  getCraftCategoryById,
  createCraftCategory,
  updateCraftCategory,
  deleteCraftCategory,
} from "../controllers/craftCategoryController.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getCraftCategories);
router.get("/:id", getCraftCategoryById);
router.post("/", protect, createCraftCategory);
router.put("/:id", protect, updateCraftCategory);
router.delete("/:id", protect, deleteCraftCategory);

export default router;