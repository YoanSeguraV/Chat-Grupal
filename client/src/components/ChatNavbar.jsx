import React, { useEffect, useState } from "react";

function ChatNavbar({ socket }) {
  const [usuarios, setusuarios] = useState([]);

  useEffect(() => {
    socket.on("usuarios", (data) => {
      setusuarios(data);
    });
  }, [socket]);
  return (
    <div>
      {usuarios.map((usuarios, index) => (
        <p key={index}>🟢{usuarios.nombreUsuario}</p>
      ))}
    </div>
  );
}

export default ChatNavbar;
