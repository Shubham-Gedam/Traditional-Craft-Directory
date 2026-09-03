import CraftCategory from "../models/craftCategory.js";

export const getCraftCategories = async (req, res, next) => {
  try {
    const categories = await CraftCategory.find().sort({ name: 1 });
    res.status(200).json({ success: true, count: categories.length, data: categories });
  } catch (error) {
    next(error);
  }
};

export const getCraftCategoryById = async (req, res, next) => {
  try {
    const category = await CraftCategory.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: "Craft category not found" });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
};

export const createCraftCategory = async (req, res, next) => {
  try {
    const category = await CraftCategory.create(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
};

export const updateCraftCategory = async (req, res, next) => {
  try {
    const category = await CraftCategory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res.status(404).json({ success: false, message: "Craft category not found" });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
};

export const deleteCraftCategory = async (req, res, next) => {
  try {
    const category = await CraftCategory.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: "Craft category not found" });
    }
    res.status(200).json({ success: true, message: "Craft category deleted" });
  } catch (error) {
    next(error);
  }
};