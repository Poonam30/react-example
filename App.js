import React from "react";
import "./styles.css";
import Hexagonal from "./Hexagonal";
import Wave from "./wave";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Wave />
      <h2>Start editing to see some magic happen!</h2>
      <div className="pos1">
        <Hexagonal />
        <Hexagonal />{" "}
      </div>
      <div className="pos2">
        {" "}
        <Hexagonal />{" "}
      </div>
      <div className="pos3">
        {" "}
        <Hexagonal />{" "}
      </div>

      <div className="pos4">
        {" "}
        <Hexagonal />
        <Hexagonal />{" "}
      </div>
    </div>
  );
}
