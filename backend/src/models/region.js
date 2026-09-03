import mongoose from "mongoose";

const regionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Region name is required"],
      trim: true,
      unique: true,
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

const Region = mongoose.model("Region", regionSchema);

export default Region;
