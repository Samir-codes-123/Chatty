import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 5000;

//parsing request
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  res.send("hello world!!");
});

//routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server running on ${PORT}`);
});
