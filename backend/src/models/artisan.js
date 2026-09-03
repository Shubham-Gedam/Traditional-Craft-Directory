import mongoose from "mongoose";

const artisanImageSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
    },
    caption: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: true }
);

const artisanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Artisan name is required"],
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    craftCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CraftCategory",
      required: [true, "Craft category is required"],
    },
    region: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Region",
      required: [true, "Region is required"],
    },
    experienceYears: {
      type: Number,
      required: [true, "Years of experience is required"],
      min: 0,
    },
    workshopAddress: {
      type: String,
      required: [true, "Workshop address is required"],
      trim: true,
    },
    contactPhone: {
      type: String,
      trim: true,
    },
    contactEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
    techniques: {
      type: String,
      trim: true,
      default: "",
    },
    images: [artisanImageSchema],
    isVerified: {
      type: Boolean,
      default: false,
    },
    profileViewCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

artisanSchema.index({ name: "text", bio: "text", techniques: "text" });

const Artisan = mongoose.model("Artisan", artisanSchema);

export default Artisan;