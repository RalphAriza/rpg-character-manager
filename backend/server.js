import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import characterRoutes from "./src/routes/characterRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

const PORT = process.env.PORT || 5000;

app.use("/api/characters", characterRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});