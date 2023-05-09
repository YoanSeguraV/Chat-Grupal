import React, { useEffect, useState } from "react";
import ChatNavbar from "./ChatNavbar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

function Chat({ socket }) {
  const [mensajes, setmensajes] = useState([]);
  useEffect(() => {
    socket.on("mensajes", (data) => {
      setmensajes([...mensajes, data]);
    });
  }, [socket, mensajes]);
  return (
    <div className="d-flex p-5">
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary w-25 rounded mx-2">
        <p className="fw-bold fs-4">Usuarios conectados</p>
        <ChatNavbar socket={socket} />
      </div>
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary w-75 rounded mx-2">
       
        <ChatBody mensajes={mensajes} />
     
      <div>
        <ChatFooter socket={socket} />
      </div>
    </div>
    </div>
  );
}

export default Chat;
