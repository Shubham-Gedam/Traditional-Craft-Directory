import mongoose from "mongoose";

const craftCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Craft category name is required"],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

const CraftCategory = mongoose.model("CraftCategory", craftCategorySchema);

export default CraftCategory;