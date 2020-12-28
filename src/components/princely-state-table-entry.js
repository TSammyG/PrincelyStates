import React from "react";

export class PrincelyStateTableEntry extends React.Component {
  state = {
    isInteractedWith: false,
  };

  toggleInteractionStatus = () => {
    this.setState({
      isInteractedWith: !this.state.isInteractedWith,
    });
  };

  show_state_information(states) {
    return states.map(state => <td>{ state }</td>);
  }

  show_state_description(description) {
    return <td colSpan={ "3" }>{ description }</td>;
  }

  render() {
    return (
      <tr key={ this.props.propKey } onClick={ this.toggleInteractionStatus }>
        {
          this.state.isInteractedWith ?
            this.show_state_description(this.props.description) :
            this.show_state_information(this.props.states)
        }
      </tr>
    );
  }
}
