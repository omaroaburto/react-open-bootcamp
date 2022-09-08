import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models";

const ComponenteB = ({ contact }) => {
  return (
    <div>
      <div>
        <span>Nombre: {contact.firstName}</span>
      </div>
      <div>
        <span>Apellido: {contact.lastName}</span>
      </div>
      <div>
        <span>Email: {contact.email}</span>
      </div>
      <div>
        <span>
          Estado:{" "}
          {contact.connected ? "Contacto En Línea" : "Contacto No Disponible"}
        </span>
      </div>
    </div>
  );
};

ComponenteB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponenteB;
