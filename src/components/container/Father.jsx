import React, { useState } from "react";
import Child from "../pure/Child";

const Father = () => {
  const [name, setMame] = useState('Humano');
  const showMessage = (message) => {
    alert(`Mensaje recibido: ${message}`);
  };
  const showName = (name) => {
    setMame(name)
  };
  return (
    <div
      style={{
        background: "#009055",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Child name={name} send={showMessage} update={showName} />
    </div>
  );
};

export default Father;
