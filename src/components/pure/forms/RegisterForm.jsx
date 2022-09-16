/**
 * RegisterForm is a component that containts a sign up form
 */
import React from "react";
import { useRef } from "react";
import { Contact } from "../../../models";
//import PropTypes from 'prop-types'

const RegisterForm = ({ create }) => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");

  const createContact = (e) => {
    e.preventDefault();
    const newContact = new Contact(
      firstNameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      false
    );
    create(newContact);
  };

  return (
    <div
      className="card"
      style={{ 
        minWidth: "40%", 
        boxShadow: "5px 5px 5px black" 
      }}
    >
      <div className="card-header">
        <h5>Contact Record</h5>
      </div>
      <div className="card-body">
        <form onSubmit={createContact} className="form p-3">
          <div className="form-group mb-3">
            <label htmlFor="firstName">First Name</label>
            <input
              ref={firstNameRef}
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstName"
              className="form-control mt-3 border-success"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              ref={lastNameRef}
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              type="text"
              className="form-control mt-3 border-success"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              className="form-control mt-3 border-success"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            <span>create contact</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
