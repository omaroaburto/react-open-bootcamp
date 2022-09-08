import React from "react";
import { Contact } from "../../models";
import ComponenteB from "../pure/ComponenteB";

const ComponenteA = () => {
  const defaultContact = new Contact(
    "juanito",
    "abarca",
    "jabarca@gmail.com",
    true
  );
  return (
    <div>
      <ComponenteB contact={defaultContact} />
    </div>
  );
};
export default ComponenteA;
