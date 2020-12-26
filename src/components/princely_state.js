import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const stateHeaders = [
  "State",
  "Ruling Prince",
  "Year",
];

const states = [
  { state: "Hyderabad", ruler: "Asif Jah VII", year: "1936" },
  { state: "Mysore", ruler: "Krishnaraja Wadiyar IV", year: "1936" },
  { state: "Bikaner", ruler: "Ganga Singh", year: "1936" },
];

export class PrincelyState extends React.Component {
  make_header() {
    return (
      <thead>
      <tr>
        { stateHeaders.map(header => <td>{ header }</td>) }
      </tr>
      </thead>
    );
  }

  make_body(states) {
    const renderState = (state, index) => {
      return (
        <tr key={ index }>
          { Object.values(state).map(state_value => <td>{ state_value }</td>) }
        </tr>
      );
    };
    return <tbody>{ states.map(renderState) }</tbody>;
  }

  render() {
    return (
      <div className="princely-state">
        <ReactBootStrap.Table striped bordered hover>
          { this.make_header() }
          { this.make_body(states) }
        </ReactBootStrap.Table>
      </div>
    );
  }
}
