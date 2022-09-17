import React, { useState } from "react";

const LoginButton = ({ LoginAction }) => {
  return (
    <button className="btn btn-primary btn-lg" onClick={LoginAction}>
      Login
    </button>
  );
};

const LogoutButton = ({ LogoutAction }) => {
  return (
    <button className="btn btn-danger btn-lg" onClick={LogoutAction}>
      Logout
    </button>
  );
};

const OptionalRender = () => {
  const [access, setAccess] = useState(true);
  const [nMessages, setnMessages] = useState(0);

  const LoginAction = () => {
    setAccess(true);
  };

  const LogoutAction = () => {
    setAccess(false);
  };

  let button;
  button = access ? (
    <LogoutButton LogoutAction={LogoutAction} />
  ) : (
    <LoginButton LoginAction={LoginAction} />
  );

  //unread messages
  let addMessages = () => {
    setnMessages(nMessages + 1);
  };
  return (
    <>
      {button}
      {/** messages && <p className="text-light">You have {nMessages} new messages ....</p> */}
      {nMessages > 0 ? (
        <p className="text-light">
          You have {nMessages} new message{nMessages === 1 ? null:"s" } ....
        </p>
      ) : (
        <p className="text-light">Their are not messages.</p>
      )}

      <button onClick={addMessages} className="btn btn-light">
        +1
      </button>
    </>
  );
};

export default OptionalRender;
