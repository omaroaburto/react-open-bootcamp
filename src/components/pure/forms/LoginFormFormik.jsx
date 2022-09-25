import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { MY_AUTH_APP, useAuthContext } from "../../../context/AuthContext";

const passwordRegex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]/;
const errorPasswordRegex =
  "Password must contain at least one letter, at least one number, and be longer than six charaters.";
const loginSchema = Yup.object().shape({
  userName: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .matches(passwordRegex, errorPasswordRegex)
    .min(6,"Password too short")
    .max(15,"Password to long")
    .required("Password is required"),
});

const LoginFormFormik = () => {
  const initLogin = {
    userName: "",
    password: "",
  };

  const styleLoginForm = {
    margin: "0 auto",
    marginTop: "40px",
    maxWidth:"520px",
    backgroundColor: "tomato",
    boxShadow: "5px 5px 5px black",
    padding: "20px",
    borderRadius: "5px",
    color: "white",
    fontFamily: "'Ubuntu', sans-serif",
    border: "1px solid rgba(0, 0, 0, 0.3)",
  };

  const {login} = useAuthContext();
  const handleSubmit = (values, {setSubmitting}) =>{
     setSubmitting(false); 
     if(values.email === MY_AUTH_APP.userName && values.password === MY_AUTH_APP.password)
        login()
  }
  return (
    <div>
      <Formik
        initialValues={initLogin}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
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
          <Form className="form" style={styleLoginForm}>
            <div className="form-group p-2">
              <label htmlFor="userName">UserName</label>
              <Field
                type="email"
                id="userName"
                name="userName"
                placeholder="UserName"
                className="form-control mt-3"
              ></Field>
              {errors.userName && (
                <div className="alert alert-danger mt-2" style={{maxWidth:"420px"}}>
                  <ErrorMessage name="userName"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group p-2">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="form-control mt-3"
              ></Field>
              {errors.password && (
                <div className="alert alert-danger mt-2" style={{maxWidth:"250px"}}>
                  <ErrorMessage name="password"></ErrorMessage>
                </div>
              )}
            </div>
            <div className="form-group p-2"></div>
            <button className="btn btn-dark btn-lg form-control" type="submit">
              Login
            </button>
            <div className="form-group p-2"></div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormFormik;
