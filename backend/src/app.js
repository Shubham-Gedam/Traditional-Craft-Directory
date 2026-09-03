import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.middleware.js";

import adminRoutes from "./routes/adminRoutes.js";
import regionRoutes from "./routes/regionRoutes.js";
import craftCategoryRoutes from "./routes/craftCategoryRoutes.js";
import artisanRoutes from "./routes/artisanRoutes.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "Traditional Craft Directory API is running" });
});

app.use("/api/admin", adminRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/craft-categories", craftCategoryRoutes);
app.use("/api/artisans", artisanRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

export default app;