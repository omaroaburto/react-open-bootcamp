import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/ContactComponent";
import RegisterForm from "../pure/forms/RegisterForm";

const ContactList = ({ contact, update, remove, create }) => {
  const contact1 = new Contact("Juan", "Cristi", "jcristi@gmail.com", false);
  const contact2 = new Contact("Omaro", "Parra", "oparra@gmail.com", false);
  const contact3 = new Contact("Pamela", "Allende", "pallende@gmail.com", true);
  const [contacts, setContacts] = useState([contact1, contact2, contact3]);

  const updateContact = (contact) => {
    console.log("update contact");
    const contactData = [...contacts];
    const index = contacts.indexOf(contact);
    contactData[index].connected = !contactData[index].connected;
    setContacts(contactData);
  };

  const removeContact = (contact) => {
    console.log("remove contact");
    const contactData = [...contacts];
    const index = contacts.indexOf(contact);
    contactData.splice(index, 1);
    setContacts(contactData);
  };

  const createContact = (contact) => {
    console.log("create contact");
    const contactData = [...contacts, contact];
    setContacts(contactData);
  };
  useEffect(() => {
    console.log("ContactList has been modified");

    return () => {
      console.log("ContactList component is going to ammount.");
    };
  }, [contacts]);

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "row",
      }}
    >
      <RegisterForm create={createContact} />
      <div
        className="card"
        style={{ 
            minWidth: "auto", 
            boxShadow: "5px 5px 5px black", 
        }}
      >
        <div className="card-header">
          <h5>Contact List</h5>
        </div>
        <div className="card-body">
          <table className="table text-center table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">State</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => {
                return (
                  <ContactComponent
                    key={index}
                    update={updateContact}
                    contact={contact}
                    remove={removeContact}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

ContactList.propTypes = {
  contact: PropTypes.instanceOf(Contact),
  update: PropTypes.func,
  remove: PropTypes.func,
};

export default ContactList;
