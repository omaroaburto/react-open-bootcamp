import React from "react";
import PropTypes from "prop-types";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS, Task } from "../../../models";

const taskSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name too short")
    .max(20, "Name too long")
    .required("Name is required"),
  description: Yup.string()
    .min(3, "Description too short")
    .max(500, "Description too long")
    .required("Description is required"),
  level: Yup.string()
    .oneOf(
      [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
      "Level must matches"
    )
    .required("Level is required"),
});

const TaskFormFormik = ({ add }) => {
  const initialTaskForm = {
    name: "",
    description: "",
    level: LEVELS.NORMAL,
  };
  const styleForm = {
    padding: "20px",
    backgroundColor: "white",
    minWidth: "320px",
    boxShadow: "5px 5px 5px black",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };
  const styleTextArea = {
    resize: "none",
    overflow: "auto",
  };
  const styleAlert = {
    maxWidth: "250px", 
    fontWeight: "bold",
    marginBottom: "opx",
    padding: "opx",
    color: "darkblue",
    textAlign: "center"
  }
  const addTask = (value) => {
    const newTask = new Task(value.name, value.description, false, value.level);
    add(newTask);
  };
  return (
    <div>
      <Formik
        initialValues={initialTaskForm}
        onSubmit={addTask}
        validationSchema={taskSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form style={styleForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="form-control mt-3"
              ></Field>
              {errors.name && touched.name && (
                <div className="alert alert-danger mt-2" style={styleAlert}>
                  <ErrorMessage name="name"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field
                style={styleTextArea}
                rows="4"
                cols="30"
                as="textarea"
                id="description"
                name="description"
                placeholder="Description"
                required
                className="form-control mt-3"
              ></Field>
              {errors.description && touched.description && (
                <div className="alert alert-danger mt-2" style={styleAlert}>
                  <ErrorMessage name="description"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="level">Level</label>
              <Field as="select" name="level" className="form-control mt-3 text-center">
                <option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
                <option value={LEVELS.URGENT}>{LEVELS.URGENT}</option>
                <option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
              </Field>
              {errors.level && touched.level && (
                <div className="alert alert-danger mt-2" style={styleAlert}>
                  <ErrorMessage name="level"></ErrorMessage>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-lg btn-dark mt-2 form-control"
            >
              Add Task
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

TaskFormFormik.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskFormFormik;
