import React from "react";

export class PrincelyStateWindow extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return <p>{this.props.description}</p>;
  }
}
