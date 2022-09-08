import React from "react";
import { Taks, LEVELS } from "../../models/";
import TaksComponent from "../pure/taks";

const TaskListComponent = () => {
  const defaultTaks = new Taks(
    "juanto",
    "descripcion importante",
    false,
    LEVELS.NORMAL
  );
  return (
    <div>
      <div>Tus tareas</div>
      {/* TODO: crear una lista con un map*/}
      <TaksComponent taks={defaultTaks} />
    </div>
  );
};

export default TaskListComponent;
