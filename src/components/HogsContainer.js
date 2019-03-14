import React, { Component } from "react";
import Hog from "./Hog";
class HogsContainer extends Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.hogs.map((hog, index) => {
          return <Hog key={index} hog={hog} />;
        })}
      </div>
    );
  }
}

export default HogsContainer;
