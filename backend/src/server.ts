import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import carRoutes from "./routes/car.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://samiyabatool100:5XDxhRpg6pDK25Ja@cluster0.weo7udy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
