import React from "react";
import PropTypes from "prop-types";
const state = {
  fecha: new Date(),
  edad: 0,
  nombre: "Martín",
  apellidos: "San José",
};
const ClockHook = (props) => {
  const [person, setPerson] = useState(state);
  const tick = () =>{
    const edad = person.edad + 1;
    setPerson({
        ...person,
        fecha: new Date(),
        edad
    })
  }
  useEffect(() => {
    const timerID = setInterval(() => tick, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [person]);

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

ClockHook.propTypes = {};

export default ClockHook;
