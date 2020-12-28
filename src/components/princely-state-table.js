import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { PrincelyStateWindow } from "./princely-state-window";

const stateHeaders = ["State", "Ruling Prince", "Year"];

const stateInfo = [
  { stateName: "Hyderabad", stateRuler: "Asif Jah VII", stateYear: "1936" },
  {
    stateName: "Mysore",
    stateRuler: "Krishnaraja Wadiyar IV",
    stateYear: "1936",
  },
  { stateName: "Bikaner", stateRuler: "Ganga Singh", stateYear: "1936" },
];

export class PrincelyStateTable extends React.Component {
  state = {
    isInteractedWith: false,
  };

  toggleInteractionStatus = () => {
    this.setState({
      isInteractedWith: !this.state.isInteractedWith,
    });
  };

  make_table_entry(value, index) {
    return <td key={index}>{value}</td>;
  }

  make_header() {
    return (
      <thead>
        <tr>{stateHeaders.map(this.make_table_entry)}</tr>
      </thead>
    );
  }

  show_info(state, index) {
    let fragment;

    if (this.state.isInteractedWith) {
      fragment = (
        <tr key={index} onClick={this.toggleInteractionStatus}>
          <td></td>
          {this.make_table_entry(
            //NB: This toggle property links with line 6's properties object in princely-state-window
            <PrincelyStateWindow
              toggle={this.toggleInteractionStatus}
              description={"FUCK"}
            />
          )}
          <td></td>
        </tr>
      );
    } else {
      fragment = (
        <tr key={index} onClick={this.toggleInteractionStatus}>
          {Object.values(state).map(this.make_table_entry)}
        </tr>
      );
    }

    return fragment;
  }

  make_body(states) {
    const renderState = (state, index) => {
      return this.show_info(state, index);
    };
    return <tbody>{states.map(renderState)}</tbody>;
  }

  render() {
    return (
      <div className="princely-state">
        <ReactBootStrap.Table striped bordered hover>
          {this.make_header()}
          {this.make_body(stateInfo)}
        </ReactBootStrap.Table>
      </div>
    );
  }
}
