import React, { useRef } from "react";

const Child = ({name, send, update }) => {
  const messageRef = useRef('');
  const nameRef = useRef('');
  const pressButton = () => {
    const message = messageRef.current.value;
    alert(`message : ${message}`);
  };

  const submitName = (e) =>{
    e.preventDefault();
    update(nameRef.current.value);

  }
  const pressButtonParams = (text) => {
    alert(text);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        minWidth: "720px",
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '5px 5px 1px black'
        
      }}
    >
        <h1 onMouseOver={() => console.log("on mouse over")}>Hola {name}</h1>
        <button
            onClick={() => console.log("press button")}
            className="btn btn-lg btn-primary"
        >
            Button 1
        </button>
        <button onClick={pressButton} className="btn btn-lg btn-primary">
            Button 2
        </button>
        <button
            onClick={() => pressButtonParams("hola")}
            className="btn btn-lg btn-primary"
        >
            Button 3
        </button>
        <input
            type="text"
            name="texto"
            placeholder="Insert text"
            className="form-control border border-primary"
            onFocus={() => console.log("input focused")}
            onChange={(e) => console.log("input charged ", e.target.value)}
            onCopy={(e) => console.log("copy : ", e.target.value)}
            ref={messageRef}
        />
        <button className="btn btn-lg btn-dark" onClick={() => send(messageRef.current.value)}>Send Message</button>

        <div>
            <form onSubmit={submitName}>
                <input className="form-control border border-primary mb-3" ref={nameRef} placeholder="New Name" type="text" />
                <button className="btn btn-outline-primary" type="submit" >Update name</button>
            </form>
        </div>
    </div>
  );
};

export default Child;
