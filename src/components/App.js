import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: hogs,
      onlyGreased: false
    };
  }

  handleNameSort = () => {
    let hogs = this.state.hogs;
    let sortedHogs = hogs.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    this.setState({
      hogs: sortedHogs
    });
  };

  handleWeightSort = () => {
    let hogs = this.state.hogs;
    let sortedHogs = hogs.sort(function(a, b) {
      return (
        a[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ] -
        b[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ]
      );
    });
    this.setState({
      hogs: sortedHogs
    });
  };

  handleGreaseFilter = () => {
    this.setState({
      onlyGreased: !this.state.onlyGreased
    });
  };

  greaseFilteredHogs = () => {
    return this.state.onlyGreased
      ? this.state.hogs.filter(hog => {
          return hog.greased === true;
        })
      : hogs;
  };

  render() {
    return (
      <div className="App">
        <Nav
          handleNameSort={this.handleNameSort}
          handleWeightSort={this.handleWeightSort}
          handleGreaseFilter={this.handleGreaseFilter}
        />
        <HogsContainer greaseFilteredHogs={this.greaseFilteredHogs} />
      </div>
    );
  }
}

export default App;
