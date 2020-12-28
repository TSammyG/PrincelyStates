import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { PSTableEntry } from "./PSTableEntry";

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

export class PSTable extends React.Component {
  make_table_entry(value, index) {
    return <td key={ index }>{ value }</td>;
  }

  make_header() {
    return (
      <thead>
      <tr>
        { stateHeaders.map(this.make_table_entry) }
      </tr>
      </thead>
    );
  }

  make_body(stateInfos) {
    const stateEntries = stateInfos.map((state, index) => {
      return <PSTableEntry key={ index }
                           propKey={ index }
                           stateValues={ Object.values(state) }
                           description={ "FUCK" }/>;
    });

    return <tbody>{ stateEntries }</tbody>;
  }

  render() {
    return (
      <div className="princely-state">
        <ReactBootStrap.Table striped bordered hover>
          { this.make_header() }
          { this.make_body(stateInfo) }
        </ReactBootStrap.Table>
      </div>
    );
  }
}
