import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Task, LEVELS } from "../../models/";
import TaskComponent from "../pure/taks";
import TaskForm from "../pure/forms/TaskForm";

const TaskListComponent = ({ task, complete, remove }) => {
  const defaultTaks1 = new Task(
    "tarea 1",
    "descripcion importante 1 ",
    true,
    LEVELS.NORMAL
  );
  const defaultTaks2 = new Task(
    "tarea 2",
    "descripcion importante 2 ",
    false,
    LEVELS.BLOCKING
  );
  const defaultTaks3 = new Task(
    "tarea 3",
    "descripcion importante 3",
    true,
    LEVELS.URGENT
  );
  const [tasks, setTaks] = useState([defaultTaks1, defaultTaks2, defaultTaks3]);
  const [loading, setLoading] = useState(true);

  const Spinner = () => {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  };
  const spinnerTable = <Spinner></Spinner>

  const Table = () => {
    return (
      <table className="table" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th scope="col">
              <span className="ms-2">Title</span>
            </th>
            <th scope="col">
              <span className="ms-2">Description</span>
            </th>
            <th scope="col">
              <span className="ms-2">Priority</span>
            </th>
            <th scope="col">
              <span className="ms-2">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={removeTask}
              />
            );
          })}
        </tbody>
      </table>
    );
  };

  let TaskTable =
    tasks.length > 0 ? (
      <Table></Table>
    ) : (
      <h5 style={{ width: "400px", alignText: "center" }}>
        It don't exist tasks
      </h5>
    );

  const completeTask = (task) => {
    console.log("Complete this Task: ", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTaks(tempTasks);
  };

  const removeTask = (task) => {
    console.log("Delete Task: ", task);
    const newTasks = tasks.filter((myTask) => myTask !== task);
    setTaks(newTasks);
    /**
     * ? otra forma
     * const index = tasks.indexOf(task);
     * const tempTask = [...taks];
     * tempTasks.splice(index,1);
     * setTasks[tempTasks];
     */
  };

  const addTask = (newTask) => {
    console.log("add task");
    console.log("la tarea es ", newTask.level);
    const tempTask = [...tasks];
    tempTask.push(newTask);
    setTaks(tempTask);
  };

  //control de ciclo de vida
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      console.log("TaskList component is going to ammount.");
    };
  }, [tasks]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <TaskForm add={addTask} />
        <div
          className="card"
          style={{
            boxShadow: "5px 5px 5px black",
            minWidth: "400px"
          }}
        >
          <div className="card-header p-3">
            <h5 className="text-dark">Tus tareas</h5>
          </div>
          <div
            className="card-body"
            style={{
              position: "relavite",
              height: "400px",
              color: "black",
            }}
            data-mdb-perfect-scrollbar="true"
          >
            {/* task table*/}
            {loading ? spinnerTable : TaskTable}
          </div>
        </div>
      </div>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskListComponent;
