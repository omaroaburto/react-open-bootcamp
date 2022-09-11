import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Taks } from "../../models/";
import '../../styles/taks.scss';
const TaksComponent = ({ taks }) => {
  useEffect(() => {
    console.log("create taks");
    return () => {
      console.log(`Task: ${taks.name} is going to unmound`);
    }
  },[taks])
  
  return (
    <div>
      <h2 className="task-name">Nombre: {taks.name}</h2>
      <h3>Descripción: {taks.description}</h3>
      <h4>Nivel: {taks.level}</h4>
      <h5>Esta tarea está {taks.completed ? "COMPLETED" : "PENDING"}</h5>
    </div>
  );
}

TaksComponent.propTypes = {
  taks: PropTypes.instanceOf(Taks),
};

export default TaksComponent;
