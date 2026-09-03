import Artisan from "../models/artisan.js";

export const getArtisans = async (req, res, next) => {
  try {
    const { region, craftCategory, verified, search, page = 1, limit = 12 } = req.query;

    const filter = {};
    if (region) filter.region = region;
    if (craftCategory) filter.craftCategory = craftCategory;
    if (verified !== undefined) filter.isVerified = verified === "true";
    if (search) filter.$text = { $search: search };

    const skip = (Number(page) - 1) * Number(limit);

    const [artisans, total] = await Promise.all([
      Artisan.find(filter)
        .populate("region", "name state")
        .populate("craftCategory", "name")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Artisan.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      count: artisans.length,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
      data: artisans,
    });
  } catch (error) {
    next(error);
  }
};

export const getArtisanById = async (req, res, next) => {
  try {
    const artisan = await Artisan.findByIdAndUpdate(
      req.params.id,
      { $inc: { profileViewCount: 1 } },
      { new: true }
    )
      .populate("region", "name state")
      .populate("craftCategory", "name");

    if (!artisan) {
      return res.status(404).json({ success: false, message: "Artisan not found" });
    }

    res.status(200).json({ success: true, data: artisan });
  } catch (error) {
    next(error);
  }
};

export const createArtisan = async (req, res, next) => {
  try {
    const artisan = await Artisan.create(req.body);
    res.status(201).json({ success: true, data: artisan });
  } catch (error) {
    next(error);
  }
};

export const updateArtisan = async (req, res, next) => {
  try {
    const artisan = await Artisan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!artisan) {
      return res.status(404).json({ success: false, message: "Artisan not found" });
    }
    res.status(200).json({ success: true, data: artisan });
  } catch (error) {
    next(error);
  }
};

export const verifyArtisan = async (req, res, next) => {
  try {
    const { isVerified = true } = req.body;
    const artisan = await Artisan.findByIdAndUpdate(
      req.params.id,
      { isVerified },
      { new: true }
    );
    if (!artisan) {
      return res.status(404).json({ success: false, message: "Artisan not found" });
    }
    res.status(200).json({ success: true, data: artisan });
  } catch (error) {
    next(error);
  }
};

export const deleteArtisan = async (req, res, next) => {
  try {
    const artisan = await Artisan.findByIdAndDelete(req.params.id);
    if (!artisan) {
      return res.status(404).json({ success: false, message: "Artisan not found" });
    }
    res.status(200).json({ success: true, message: "Artisan deleted" });
  } catch (error) {
    next(error);
  }
};

export const getArtisanStats = async (req, res, next) => {
  try {
    const total = await Artisan.countDocuments();
    const verified = await Artisan.countDocuments({ isVerified: true });
    const viewsAgg = await Artisan.aggregate([
      { $group: { _id: null, totalViews: { $sum: "$profileViewCount" } } },
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalArtisans: total,
        verifiedArtisans: verified,
        verifiedRatio: total ? Number((verified / total).toFixed(2)) : 0,
        totalProfileViews: viewsAgg[0]?.totalViews || 0,
      },
    });
  } catch (error) {
    next(error);
  }
};