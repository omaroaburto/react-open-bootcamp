import React, { useEffect, useRef, useState } from "react";

const Ejemplo2 = () => {
  //crear 2 contadores
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseCount1 = () => {
    setCount1(count1 + 1);
  };

  const increaseCount2 = () => {
    setCount2(count2 + 1);
  };

  const miRef = useRef();
  /*
   * ? Case 1: siempre ejecutar un snippet de código
   * cada vez que haya un cambio en el estado de un componente
   * Se ejecut lo que contenga useEffect()
   
  useEffect(() => {
    console.log("Cambio en el estado de un componente");
    console.log("Mostrar referencia a elemento del doom");
    console.log(miRef);
  });
  */ 
  /**  
  * ? CASO 2: Ejecutar sólo cuando cambia count1
  * Cada vez que cambia count1, se ejecuta lo que diga useEffect()
  * En caso de que cambie count2, no se ejecuta.
  */

  // useEffect(() => {
  //   console.log("Cambio en el estado del contador 1");
  //   console.log("Mostrar referencia a elemento del doom"); 
  // }, [count1]);

  /** 
  * ? CASO 3: Ejecutar cuando cambia count1 o count2
  * Cada vez que cambia count1 o count2, se ejecuta lo que diga useEffect()
  * En caso de que cambie count2, no se ejecuta.
  */
  useEffect(() => {
    console.log("Cambio en el estado del count1 1 o count2");
    console.log("Mostrar referencia a elemento del doom"); 
  }, [count1, count2]);
  
  return (
    <div>
      <h1>Ejemplo de useState(), useEffect(), useRef()</h1>
      <h3>Contador 1: {count1}</h3>
      <h3>Contador 2: {count2}</h3>
      <h4 ref={miRef}>Elemento referenciado</h4>
      <div>
        <button className="btn" onClick={increaseCount1}>count1+</button>
        <button className="btn" onClick={increaseCount2}>count2+</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
