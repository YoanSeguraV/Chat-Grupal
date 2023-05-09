import { Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "../components/Home";
import Chat from "../components/Chat";

const socket = io("http://localhost:3000");

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home  socket={socket}/> } />
      <Route path="/chat" element={<Chat  socket={socket} />} />
    </Routes>
  );
}

export default AppRoutes;
