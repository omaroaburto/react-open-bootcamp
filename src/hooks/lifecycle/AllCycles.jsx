import React, { useEffect } from 'react'

export const AllCycles = () => {
    useEffect(() => {
      console.log("creación de componente");
      
      const intervalId = setInterval(()=>{
        document.title = `${ new Date() }`;
        console.log("Actualización de componente");
      },1000);
      return () => {
        console.log("El componente va desaparecer");
        clearInterval(intervalId);
      }
    }, [])
    
  return (
    <div><h1>AllCycles</h1></div>
  )
}
