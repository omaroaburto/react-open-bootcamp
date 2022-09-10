import React, { useState, useContext } from "react";

/**
 * @returns componente 1
 * Dispone de un contexto que va tener un valor
 * que recibe desde el padre
 */
const myContext = React.createContext(null);
const Componente1 = () => {
  //inicializamos un estado vacío que se va rellenar con los
  //datos del contexto padre
  const state = useContext(myContext);
  return (
    <div>
      <h1>El token es {state.token}</h1>
      {/** pintamos componente 2 */}
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(myContext);
  return (
    <div>
      <h2>La sesión es {state.sesion}</h2>
    </div>
  );
};

export const ComponenteConContexto = () => {
  const initialState = {
    token: '1234as',
    sesion: 1,
  }
  //crear estado de componente
  const [sesionData, setSesionData] = useState(initialState);
  const updateSesion = () =>{
    setSesionData({
      token: 'tyAmdafafa12_31',
      sesion: sesionData.sesion+1,
    })
  }
  return (
    <myContext.Provider value={sesionData}>
      <h1>Ejemplo de useState() y useContext()</h1>
      <Componente1/>
      <button className="btn" onClick={updateSesion}>Actualizar contexto</button>
    </myContext.Provider>
  );
};

  
