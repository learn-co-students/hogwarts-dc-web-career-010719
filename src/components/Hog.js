import React, { Component } from "react";
import HogDetails from "./HogDetails";
class Hog extends Component {
  constructor() {
    super();
    this.state = {
      details: false
    };
  }
  handleHogClick = () => {
    this.setState({ details: true });
  };
  render() {
    let imgFile = this.props.hog.name
      .toLowerCase()
      .split(" ")
      .join("_");
    console.log(imgFile);
    return (
      <div className="ui  card">
        <p>{this.props.hog.name}</p>
        <img
          onClick={this.handleHogClick}
          src={require(`../hog-imgs/${imgFile}.jpg`)}
        />
        {this.state.details ? (
          <HogDetails
            specialty={this.props.hog.specialty}
            greased={this.props.hog.greased}
            weight={
              this.props.hog[
                "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
              ]
            }
            medals={this.props.hog["highest medal achieved"]}
          />
        ) : null}
      </div>
    );
  }
}

export default Hog;
