import Region from "../models/region.js";

export const getRegions = async (req, res, next) => {
  try {
    const regions = await Region.find().sort({ name: 1 });
    res.status(200).json({ success: true, count: regions.length, data: regions });
  } catch (error) {
    next(error);
  }
};

export const getRegionById = async (req, res, next) => {
  try {
    const region = await Region.findById(req.params.id);
    if (!region) {
      return res.status(404).json({ success: false, message: "Region not found" });
    }
    res.status(200).json({ success: true, data: region });
  } catch (error) {
    next(error);
  }
};

export const createRegion = async (req, res, next) => {
  try {
    const region = await Region.create(req.body);
    res.status(201).json({ success: true, data: region });
  } catch (error) {
    next(error);
  }
};

export const updateRegion = async (req, res, next) => {
  try {
    const region = await Region.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!region) {
      return res.status(404).json({ success: false, message: "Region not found" });
    }
    res.status(200).json({ success: true, data: region });
  } catch (error) {
    next(error);
  }
};

export const deleteRegion = async (req, res, next) => {
  try {
    const region = await Region.findByIdAndDelete(req.params.id);
    if (!region) {
      return res.status(404).json({ success: false, message: "Region not found" });
    }
    res.status(200).json({ success: true, message: "Region deleted" });
  } catch (error) {
    next(error);
  }
};