import React from "react";

function ChatBody({ mensajes }) {
  return (
    <div className="container">
      {mensajes.map((mensaje) =>
        mensaje.nombre === localStorage.getItem("nombre_usuario") ? (
          <div key={mensaje.id} className="w-50 ms-auto">
            <p className="text-end bg-gray">Tu</p>
            <div className="d-flex justify-content-end bg-light">
              <p className="text-end">{mensaje.texto}</p>
            </div>
          </div>
        ) : (
          <div key={mensaje.id} >
            <p className="ms-2 text-primary   ">{mensaje.nombre}</p>
            <div className="bg-primary w-50 rounded p-2 m-2">
              <p className="text-start mb-0">{mensaje.texto}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ChatBody;
