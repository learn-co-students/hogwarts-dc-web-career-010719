import React, { Component } from 'react';

class ControlPanel extends Component {

  greased = (event) => {
    event.stopPropagation();
    console.log(event.target.checked)
    event.target.checked ? this.props.handleCheck(true)
      : this.props.handleCheck(false);
  }

  render() {
    return (
      <div onChange={this.props.handleSort}>
        <label>Sort by: </label>
        <select class="ui dropdown">
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <div class="ui checkbox" onChange={this.greased}>
          <input type="checkbox" name="greased"/>
          <label>Greased</label>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
