import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleNameSort} name="name">
          Sort by Name
        </button>
        <button onClick={this.props.handleWeightSort} name="weight">
          Sort by Weight
        </button>

        <button onClick={this.props.handleGrease} name="greased">
          Greased?
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Filter;
