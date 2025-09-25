import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("Chatbot Platform API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
