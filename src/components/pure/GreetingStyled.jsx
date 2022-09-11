import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models";

const loggedStyle = {
  color: "white",
};
const unloggedStyle = {
  color: "#fff000",
  fontWeigth: "bold",
};

const GreetingStyled = ({ contact }) => {
  const [logged, setLogged] = useState(false);
  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? (<p>Hola, {contact.firstName}</p>) : (<p>Please Login</p>)}
      <button
        className="btn btn-success btn-lg"
        onClick={() => {
          console.log("Botón clickeado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

GreetingStyled.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default GreetingStyled;
