import React, { useRef } from "react";
import io from "socket.io-client";

const Join = (props) => {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    const servidorSocket = await io.connect("http://192.168.10.123:3001");
    servidorSocket.emit("set_username", username);

    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
    <div
     style={{
    minHeight: "100vh",      // Altura total da tela
    width: "100%",           // Largura total da tela
    backgroundColor: "#d4edda", // Verde claro ou a cor que você quiser
  }}
  className="d-flex justify-content-center align-items-center"
>
      <div className="text-center">
        <h1 className="fw-bold" style={{ color: "#f48fb1" }}>devChat</h1>

        <div
          id="join-box"
          className="mt-4 bg-light rounded-4 py-4 px-5 d-flex flex-column justify-content-center align-items-center gap-3"
        >
          <h3 className="text-dark">Bem-vindo ao devChat!</h3>
          <div className="form-floating mb-3 w-100">
            <input
              ref={usernameRef}
              type="text"
              className="form-control"
              id="nomeUsuario"
              placeholder="Nome de usuário"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <label htmlFor="nomeUsuario">Nome de usuário</label>
          </div>
          <button
            className="btn btn-success px-5 py-2"
            onClick={handleSubmit}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
