import React from "react";

export class PSTableEntry extends React.Component {
  state = {
    isInteractedWith: false,
  };

  toggleInteractionStatus = () => {
    this.setState({
      isInteractedWith: !this.state.isInteractedWith,
    });
  };

  show_state_table_information() {
    return this.props.stateValues.map((state, index) => <td key={ index }>{ state }</td>);
  }

  show_state_detailed_description() {
    return <td colSpan={ "3" } key={ Math.floor(Math.random() * 100000) + 1 }>{ this.props.description }</td>;
  }

  render() {
    return (
      <tr key={ this.props.propKey } onClick={ this.toggleInteractionStatus }>
        {
          this.state.isInteractedWith ?
            this.show_state_detailed_description() :
            this.show_state_table_information()
        }
      </tr>
    );
  }
}
