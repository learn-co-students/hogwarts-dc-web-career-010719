import React, { Component } from "react";

class Hog extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
      showHog: true
    };
  }

  handleClick = () => {
    let details = this.state.showDetails;
    this.setState({ showDetails: !details });
  };

  hideHog = () => {
    this.setState({
      showHog: false
    });
  };

  render() {
    let name = this.props.hog.name
      .toLowerCase()
      .split(" ")
      .join("_");
    return this.state.showHog ? (
      <div className="ui eight wide column">
        <h1>{this.props.hog.name}</h1>
        <img
          onClick={this.handleClick}
          src={require(`../hog-imgs/${name}.jpg`)}
        />
        {this.state.showDetails ? (
          <div>
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>Greased: {this.props.hog.greased.toString()}</p>
            <p>
              Weight:
              {
                this.props.hog[
                  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </p>
            <p>
              Highest medal earned: {this.props.hog["highest medal achieved"]}
            </p>
            <button onClick={this.hideHog}> HideHog</button>
          </div>
        ) : null}
      </div>
    ) : null;
  }
}

export default Hog;
