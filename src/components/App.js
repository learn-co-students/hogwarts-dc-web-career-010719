import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import Filter from "./Filter";
class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: hogs
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
        b[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ] -
        a[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ]
      );
    });
    this.setState({ hogs: sortedHogs });
  };

  handleGrease = () => {
    let hogs = this.state.hogs;
    let greasedHogs = hogs.filter(hog => hog.greased === true);
    this.setState({ hogs: greasedHogs });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          handleNameSort={this.handleNameSort}
          handleWeightSort={this.handleWeightSort}
          handleGrease={this.handleGrease}
        />
        <HogsContainer
          hogs={this.state.hogs}
          handleHogClick={this.handleHogClick}
        />
      </div>
    );
  }
}

export default App;
