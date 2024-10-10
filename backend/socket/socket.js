import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST"],
  },
});

export const getReciverSocketId = (reciverId) => userSocketMap[reciverId];
const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") userSocketMap[userId] = socket.id; // userId iskey and socket id is value
  io.emit("getOnlineUsers", Object.keys(userSocketMap)); // to fetch onlineusers

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUSers", Object.keys(userSocketMap)); // to fetch onlineusers
  });
});
export { app, server, io };
