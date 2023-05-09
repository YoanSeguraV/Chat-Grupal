export default (io) => {
  let usuarios = [];
  io.on("connection", (socket) => {
    console.log(`usuario conectado ${socket.id}`);

    socket.on("nombre-usuario", (data) => {
      usuarios.push(data);
      console.log(usuarios)
      io.emit("usuarios", usuarios);
    });
    socket.on("mensaje-enviado", (data) => {
        console.log(data)
      io.emit("mensajes", data);
    });

    socket.on("disconnect", () => {
      console.log("usuario desconetado");
      usuarios = [];
    });
  });
};
