/**
 * Ejemplo de uso del método componentWillUnmount para complemento de clase
 * Ejemplo de uso del hook para componente funcional
 * (cuando el componente va desparecer)
 */
import React, { Component, useEffect } from "react";

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desapareezca");
  }
  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    );
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    //aquí no agregamos coss
    return () => {
      console.log("Comportamiento antes de que el componente desapareezca");
    };
  }, []); //se ejecuta una vez

  return (
    <div>
      <h1>WillUnMountHook</h1>
    </div>
  );
};
