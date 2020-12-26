import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { PrincelyStateWindow } from "./princely-state-window";

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

export class PrincelyStateTable extends React.Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  map_to_record(value) {
    return <td>{ value }</td>;
  }

  make_header() {
    return (
      <thead>
      <tr>
        { stateHeaders.map(this.map_to_record) }
      </tr>
      </thead>
    );
  }

  make_body(states) {
    const renderState = (state, index) => {
      return (
        <tr key={ index } onClick={ this.togglePop }>
          { Object.values(state).map(this.map_to_record) }
          {this.state.seen ? <PrincelyStateWindow toggle={this.togglePop}/> : null}
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
