import React, { useState } from "react";

function ChatFooter({ socket }) {
  const [mensaje, setmensaje] = useState("");

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (mensaje.trim() && localStorage.getItem("nombre_usuario")) {

        socket.emit("mensaje-enviado", {
        texto: mensaje,
        nombre: localStorage.getItem("nombre_usuario"),
        id:`${socket.id} ${Math.random()}`,
        
      });
      
    }
    setmensaje("");
  };

  return (
    <div className="mt-4">
      <form onSubmit={(e) => enviarMensaje(e)} className="d-flex">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="..."
            value={mensaje}
            onChange={(e) => setmensaje(e.target.value)}
          />
          <button className="btn btn-primary border-start-0 rounded-end">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatFooter;
