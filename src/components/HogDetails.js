import React, { Component } from "react";

class HogDetails extends Component {
  render() {
    return (
      <div>
        <p>Specialty : {this.props.specialty}</p>
        <p>Weight : {this.props.weight}</p>
        <p>Medals : {this.props.medals}</p>
        <p>Greased : {this.props.greased.toString()}</p>
      </div>
    );
  }
}

export default HogDetails;
