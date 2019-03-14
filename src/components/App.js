import React, { Component } from 'react';
import '../App.css';

import Nav from './Nav'
import Filter from './Filter'
import HogContainer from '../containers/HogContainer'
// import HogDetails from './HogDetails'

import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      greased: undefined
    }
  }
  
  onFilter = (event) => {
    switch (event.target.value) {
      case 'all':
        this.setState({hogs: hogs})
        break;
      case 'greased':
        this.setState({hogs: hogs.filter(h => h.greased)})
        break;
      case 'ungreased':
        this.setState({hogs: hogs.filter(h => !h.greased)})
        break;
      case 'name':
        this.sortHogs('name')
        break;
      case 'weight':
        this.sortHogs('weight')
        break;
      default:
        break;
    }
  }

  sortHogs = (attr) => {
    if (attr === 'weight')
      attr = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    
    const sortedHogs = this.state.hogs.slice()
    sortedHogs.sort((hog1, hog2) => {
      return hog1[attr].toString().localeCompare(hog2[attr].toString())
    })

    this.setState({hogs: sortedHogs})
  }
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Filter onFilter={this.onFilter} />
        <HogContainer hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
