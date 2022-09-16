import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models";

const ContactComponent = ({ contact, update, remove }) => {
  const isConnected = () => {
    return contact.connected ? (
      <span className="badge bg-primary">connect</span>
    ) : (
      <span className="badge bg-danger ">disconect</span>
    );
  };

  const changeStatus = () => {
    return contact.connected ? (
      <i
        className="bi bi-toggle2-on clicked"
        style={{
          color: "blue",
        }}
        onClick={() => update(contact)}
      ></i>
    ) : (
      <i
        className="bi bi-toggle2-off clicked"
        style={{
          color: "blue",
        }}
        onClick={() => update(contact)}
      ></i>
    );
  };

  useEffect(() => {
    console.log("create contact");
    return () => {
      console.log(`contact is going to unmound`);
    };
  }, [contact]);

  return (
    <tr>
      <th>{contact.firstName}</th>
      <th>{contact.lastName}</th>
      <th>{contact.email}</th>
      <th>{isConnected()}</th>
      <th style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem'
      }}>
        {changeStatus()}
        <i
          className="bi bi-person-x-fill clicked"
          style={{
            color: "tomato",
          }}
          onClick={() => remove(contact)}
        ></i>
      </th>
    </tr>
  );
}; 

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}
 

export default ContactComponent;
