import React, { useState } from "react";

const Ejemplo1 = () => {
  const initialValue = 0;
  const initialPerson = {
    name: "Juan",
    email: "jcarrasco@gmail.com",
  };

  const [count, setCount] = useState(initialValue);
  const [person, setPerson] = useState(initialPerson);

  const updatePerson = () => {
    setPerson({
      name: "Pedro",
      email: "pedro.pe@gmail.com",
    });
  };
  return (
    <div>
      <h1>Ejemplo de useState()</h1>
      <h2>Contador {count}</h2>
      <h2>Datos de personas</h2>
      <h3>Nombre: {person.name}</h3>
      <h3>Email: {person.email}</h3>
      
      <button className="btn" onClick={() => setCount(count + 1)}>Valor+</button>
      <button className="btn" onClick={() => setCount(count - 1)}>Valor-</button>
      <button className="btn" onClick={() => setCount(0)}>Reset Value</button>
      <button className="btn" onClick={updatePerson}>Persona</button>
    </div>
  );
};

export default Ejemplo1;
