import React, { useEffect, useState } from "react";
import { Taks, LEVELS } from "../../models/";
import TaksComponent from "../pure/taks";

const TaskListComponent = () => {
  const defaultTaks = new Taks(
    "juanto",
    "descripcion importante",
    false,
    LEVELS.NORMAL
  );
  const [taks, setTaks] = useState(defaultTaks)
  //control de ciclo de vida
  useEffect(() => {
    console.log("Taks state has been modified");
    return () => {
      console.log("TaskList component is going to ammount.");
    }
  }, [taks])
  
  const changeCompleted = (id) =>{
    console.log("TODO: Cambiar el estado de una terea");
  }
  return (
    <div>
      <div>Tus tareas</div>
      {/* TODO: crear una lista con un map*/}
      <TaksComponent taks={defaultTaks} />
    </div>
  );
};

export default TaskListComponent;
