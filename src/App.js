import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

const App = () => {
  const states = [
    { state: "Hyderabad", ruler: "Osman Ali Khan", year: "1936" },
    { state: "Mysore", ruler: "Krishnaraja Wadiyar IV", year: "1936" },
    { state: "Bikaner", ruler: "Ganga Singh", year: "1936" },
  ];
  return (
    <div className="App">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>State</th>
            <th>Ruling Prince</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>{states.map(renderState)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

const renderState = (state, index) => {
  return (
    <tr key={index}>
      <td>{state.state}</td>
      <td>{state.ruler}</td>
      <td>{state.year}</td>
    </tr>
  );
};

export default App;
