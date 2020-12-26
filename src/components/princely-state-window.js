import React from "react";
import * as ReactBootStrap from "react-bootstrap";


export class PrincelyStateWindow extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <ReactBootStrap.Modal>
        <ReactBootStrap.ModalBody>
          <span className="close" onClick={ this.handleClick }>&times;    </span>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
          <p>I'm A Pop Up!!!</p>
        </ReactBootStrap.ModalBody>
      </ReactBootStrap.Modal>
    );
  }
}
