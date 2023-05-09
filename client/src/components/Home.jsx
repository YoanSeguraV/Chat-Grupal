import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Home({ socket }) {
  const navigate = useNavigate();
  const [nombre, setnombre] = useState("")

  const handleOnsumbit = (e) => {
    e.preventDefault();
    localStorage.setItem("nombre_usuario", nombre);
    socket.emit("nombre-usuario", { nombreUsuario: nombre, id: socket.id });
    navigate("/chat")
  };
  return (
    <div className="d-flex  mt-5  align-item-center justify-content-center vh-50">
      <div className="text-center w-50 shadow  p-3 mb-5 bg-light rounded">
        <h2 className="fw-bold">Como quieres que te llamemos?</h2>
        <form className="d-flex" onSubmit={handleOnsumbit}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              onChange={(e) => setnombre(e.target.value)}
            />
            <button className="btn btn-primary">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
