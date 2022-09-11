import React from "react";

const ClockHook = (props) => {
  const state = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };
  const [person, setPerson] = useState(state);
  const tick = () => {
    const edad = person.edad + 1;
    setPerson({
      ...person,
      fecha: new Date(),
      edad,
    });
  };
  useEffect(() => {
    const timerID = setInterval(() => tick, 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <h2>
        Hora Actual:
        {person.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {person.nombre} {person.apellidos}
      </h3>
      <h1>Edad: {person.edad}</h1>
    </div>
  );
};

export default ClockHook;
