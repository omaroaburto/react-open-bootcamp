import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task, LEVELS } from "../../models/";
//import '../../styles/taks.scss';
const TaskComponent = ({ task, complete, remove }) => {
  const switchLevel = () => {
    console.log(LEVELS.NORMAL);
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );
      default:
        return null;
    }
  };

  const taskIconCompleted = () => {
    return task.completed ? (
      <i
        className="bi bi-toggle-on clicked"
        onClick={() => complete(task)}
        style={{
          color: "green",
          fontWeight: "bold",
        }}
      ></i>
    ) : (
      <i
        className="bi bi-toggle-off clicked"
        onClick={() => complete(task)}
        style={{
          color: "green",
          fontWeight: "bold",
        }}
      ></i>
    );
  };
  useEffect(() => {
    console.log("create taks");
    return () => {
      console.log(`Task: ${task.name} is going to unmound`);
    };
  }, [task]);

  return (
    <tr className="fw-normal">
      <td>{task.name}</td>
      <td className="align-middle">{task.description}</td>
      <td className="align-middle">{switchLevel()}</td>
      <td
        className="align-middle"
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {taskIconCompleted()}
        <i
          onClick={() => remove(task)}
          className="bi bi-trash-fill clicked"
          style={{
            color: 'tomato'
          }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
