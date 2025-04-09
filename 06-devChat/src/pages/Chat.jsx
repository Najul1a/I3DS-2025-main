import React, { useEffect, useRef, useState } from "react";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => props.socket.off("receive_message");
  }, [props.socket]);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message);
    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f9cce2", 
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          height: "600px",
          backgroundColor: "#f9cce2", // rosa bebê
          border: "3px solid #b2e0b2", // verde claro
          boxShadow: "0px 0px 25px #b2e0b2",
        }}
        className="rounded-4 p-4 d-flex flex-column"
      >
        <h3 className="text-center mb-3 text-dark fw-bold">devChat 💬</h3>

        <div className="d-flex flex-column gap-3 overflow-auto flex-grow-1 mb-3">
          {messageList.map((message, index) => (
            <div
              className={`${
                message.authorId === props.socket.id
                  ? "align-self-end ms-5"
                  : "align-self-start me-5"
              } bg-white bg-opacity-25 text-dark rounded-3 p-2`}
              key={index}
            >
              <div className="fw-semibold">{message.author}</div>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="input-group">
          <input
            id="messageInput"
            ref={messageRef}
            autoFocus
            type="text"
            className="form-control border-0"
            style={{
              backgroundColor: "#d0f5d3", // verde clarinho
              color: "#000000",
            }}
            placeholder="Digite sua mensagem..."
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            className="btn"
            style={{
              backgroundColor: "#b2e0b2",
              color: "#000",
              borderLeft: "2px solid white",
            }}
            onClick={handleSubmit}
          >
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
