import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPen from './PigPen'
import ControlPanel from './ControlPanel'


class App extends Component {
  constructor() {
    super()
    this.state = {showGreased: true, sortBy: 'name'}
  }

  getFiltered = () => {
    if (this.state.showGreased) {return hogs;}
    else {return hogs.filter(hog => !hog.greased)}
  }

  getSorted = () => {
    const attribute = this.state.sortBy
    return this.getFiltered().sort((hog1, hog2) => {return hog1[attribute].toString().localeCompare(hog2[attribute].toString())})
  }

  handleSort = (event) => {
    const sort = event.target.value
    this.setState({sortBy: sort})
  }

  handleGreased = (value) => {this.setState({showGreased: value})}

  render() {
    return (
      <div className="App">
          < Nav />
          < ControlPanel handleSort={this.handleSort} handleGreased={this.handleGreased}/>
          < PigPen hogs={this.getSorted()} showGreased={this.state.showGreased}/>

      </div>
    )
  }
}

export default App;
