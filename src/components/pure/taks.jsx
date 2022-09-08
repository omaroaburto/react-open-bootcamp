import React from "react";
import PropTypes from "prop-types";
import { Taks } from "../../models/";

function TaksComponent({ taks }) {
  return (
    <div>
      <h2>Nombre: {taks.name}</h2>
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
