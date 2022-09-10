import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidMount() {
    console.log("comportamiento antes de que el componente sea añadido al doom");
  }
  render() {
    return <div>DidMount</div>;
  }
}

import React from "react";

export const DidMountHook = () => {
    useEffect(() => {
        console.log("comportamiento antes de que el componente sea añadido al doom");
    }, []); //se ejecuta una vez
    
    return (<div>DidMount</div>);
};
