import React, { useState } from "react";

const Square = () => {
  const [timer, setTimer] = useState(0);
  const [color, setColor] = useState("rgb(250,250,250)");
  const styleSquare = {
    backgroundColor: color,
    width: "250px",
    height: "250px",
    border: "1px solid white",
  };
  const getColor = () => Math.floor(Math.random() * 255);
  const generateColor = () => {
    const myColor = `rgb(${getColor()},${getColor()},${getColor()})`;
    return setColor(myColor);
  };
  const onChangeColor = () => {
    return setTimer(setInterval(generateColor, 1000));
  };
  const onStopChangeColor = () => {
    return clearInterval(timer);
  };

  const onDoubleClickchangeColor = () => {
    return clearInterval(timer);
  };
  return (
    <div
      style={styleSquare}
      onMouseOver={onChangeColor}
      onMouseOut={onStopChangeColor}
      onDoubleClick={onDoubleClickchangeColor}
    ></div>
  );
};

export default Square;
