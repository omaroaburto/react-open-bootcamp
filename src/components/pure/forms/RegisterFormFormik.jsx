import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import { ROLES } from "../../../models/";
import * as Yup from "yup";

const passwordRegex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]/;
const errorPasswordRegex =
  "Password must contain at least one letter, at least one number, and be longer than six charaters.";

const registerSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "UserName too short")
    .max(15, "UserName too long")
    .required("UserName is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .matches(passwordRegex, errorPasswordRegex)
    .required("Password is required"),
  confirm: Yup.string()
    .when("password", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password must match"),
    })
    .required("Confirm password is required"),
  role: Yup.string()
    .oneOf([ROLES.USER, ROLES.ADMIN], "Role must matches")
    .required("Role is required"),
});

const RegisterFormFormik = () => {
  const initialRegister = {
    userName: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };
  const styleRegisterForm = {
    backgroundColor: "tomato",
    boxShadow: "5px 5px 5px black",
    padding: "20px",
    borderRadius: "5px",
    color: "white",
    fontFamily: "'Ubuntu', sans-serif",
    border: "1px solid rgba(0, 0, 0, 0.3)",
    display: 'flex',
    gap: "0px",
    flexDirection: "column"
  };

  const styleAlert = {
    maxWidth: "250px",
    fontSize: "small",
    fontWeight: "bold",
    marginBottom: "opx",
    padding: "opx"
  }
  return (
    <div>
      <Formik
        initialValues={initialRegister}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
          <Form className="form" style={styleRegisterForm}>
            <div className="form-group mt-2">
              <label htmlFor="userName">UserName</label>
              <Field
                id="userName"
                name="userName"
                placeholder="UserName"
                required
                className="form-control mt-2"
              ></Field>
              {errors.userName && touched.userName && (
                <div className="alert alert-danger mt-2" style={styleAlert}>
                  <ErrorMessage name="userName"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="example@example.com"
                required
                className="form-control mt-2"
              ></Field>
              {errors.email && touched.email && (
                <div className="alert alert-danger mt-2" style={styleAlert}>
                  <ErrorMessage name="email"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                required
                className="form-control mt-2"
              ></Field>
              {errors.password && touched.password && (
                <div className="alert alert-danger mt-2" style={styleAlert}>
                  <ErrorMessage name="password"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="confirm">Confirm Password</label>
              <Field
                id="confirm"
                name="confirm"
                placeholder="Confirm Password"
                required
                className="form-control mt-2"
              ></Field>
              { errors.confirm && touched.confirm &&  (
                <div className="alert alert-danger mt-2" style={styleAlert}>
                  <ErrorMessage name="confirm"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="role">Role</label>
              <Field
                as="select"
                id="role"
                name="role"
                required
                className="form-control mt-2 text-center"
              >
                <option value={ROLES.USER}>{ROLES.USER}</option>
                <option value={ROLES.ADMIN}>{ROLES.ADMIN}</option>
              </Field>
              {errors.role && touched.role && (
                <div className="alert alert-danger mt-2" style={styleAlert}>
                  <ErrorMessage name="role"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-dark form-control">
                Create User
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormFormik;
