import React, { Component } from "react";
import Hog from "./Hog";

class HogsContainer extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.greaseFilteredHogs().map((hog, index) => {
          return <Hog key={index} hog={hog} handleClick={this.handleClick} />;
        })}
      </div>
    );
  }
}

export default HogsContainer;
