import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'
import SortByName from './SortByName'
import SortByWeight from './SortByWeight'
import FilterByGreased from './FilterByGreased'
import HideHogs from './HideHogs'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      sortByName: "Sort By Name",
      sortByWeight: "Sort By Weight",
      filterByGreased: "Filter By Greased",
      hideHogs: "Hide Hogs"
    }
  }

  onSortByName = () => {
    if (this.state.sortByName === "Sort By Name") {
      let hogsToSort = [...hogs]
      this.setState({hogs: hogsToSort.sort(function(a, b) {return a.name.localeCompare(b.name)}), sortByName: "Unsort By Name"})
    } else {
      this.setState({hogs: hogs, sortByName: "Sort By Name"})
    }
  }

  onSortByWeight = () => {
    if (this.state.sortByWeight === "Sort By Weight") {
      let hogsToSort = [...hogs]
      this.setState({hogs: hogsToSort.sort(function(a, b) {return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']})})
      this.setState({sortByWeight: "Unsort By Weight"})
    } else {
      this.setState({hogs: hogs, sortByWeight: "Sort By Weight"})
    }
  }

  onFilterByGreased = () => {
    if (this.state.filterByGreased === "Filter By Greased") {
      let hogsToFilter = [...hogs]
      this.setState({hogs: hogsToFilter.filter(hog => hog.greased === true), filterByGreased: "Unfilter By Greased"})
    } else {
      this.setState({hogs: hogs, filterByGreased: "Filter By Greased"})
    }
  }

  onHideHogs = () => {
    if (this.state.hideHogs === "Hide Hogs") {
      this.setState({hogs: [], hideHogs: 'Unhide Hogs'})
    } else {
      this.setState({hogs: hogs, hideHogs: "Hide Hogs"})
    }
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <SortByName onSortByName={this.onSortByName} buttonText={this.state.sortByName}/>
          <SortByWeight onSortByWeight={this.onSortByWeight} buttonText={this.state.sortByWeight}/>
          <FilterByGreased onFilterByGreased={this.onFilterByGreased} buttonText={this.state.filterByGreased}/>
          <HideHogs onHideHogs={this.onHideHogs} buttonText={this.state.hideHogs}/>
          <HogsContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
