import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS, Task } from "../../../models";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    console.log(levelRef.current.value)
    add(newTask)
  };
  return (
    <form
      onSubmit={addTask}
      style={{
        padding: "20px",
        backgroundColor: "white",
        minWidth: '320px',
        boxShadow: '5px 5px 5px black',
        borderRadius: '1rem'
      }}
    >
      <div className="form-group mt-3">
        <label htmlFor="name">
          <span>Name</span>
        </label>
        <input ref={nameRef} className="form-control" type="text" required/>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="description">
          <span>Description</span>
        </label>
        <input ref={descriptionRef} className="form-control" type="text" required/>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="level">
          <span>Level</span>
        </label>
        <select ref={levelRef} className="form-control" >
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div> 
        <button type="submit" className="btn btn-lg btn-primary">Add Task</button>
       
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
