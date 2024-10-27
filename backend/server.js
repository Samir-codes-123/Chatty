import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import msgRoutes from "./routes/msg.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});
import { app, server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;

//parsing request
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("hello world!!");
// });

//routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", msgRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectDB();
  console.log(`server running on ${PORT}`);
});
