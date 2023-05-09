import express from "express";
import http from "http";
import cors from "cors";
import "dotenv/config";
import socket from "./socket/socket.js";
import { Server } from "socket.io";
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const httpserver = server.listen(PORT, () => {
  console.log("servidor corriendo en el puerto " + PORT);
});
const io = new Server(httpserver, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(cors());

socket(io);
