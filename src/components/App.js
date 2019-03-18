import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from '../containers/HogContainer'
import MenuBar from '../containers/MenuBar'

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentHogs: hogs,
      greased: false,
      sortBy: 'id'
    }
  }

  filterHogs = () => {
    return this.state.greased ? hogs.filter(h => h.greased === true) : hogs
  }

  handleFilter = () => {
    this.setState({greased: !this.state.greased})
  }

  sortHogs = () => {
    return this.filterHogs().sort((h1,h2) => {
      return h1[this.state.sortBy].toString().localeCompare(h2[this.state.sortBy].toString())
    })
  }

  handleSort = (event) => {
    this.state.sortBy != event.target.id ? this.setState({sortBy: event.target.id}) : this.setState({sortBy: 'id'})
  }

  render() {
    return (
      <div id="app">
        < Nav />
        <div className="ui grid" >
          <div className="four wide column"></div>
          <div className="eight wide column">
            <MenuBar
              sortBy={this.state.sortBy}
              handleSort={this.handleSort}
              handleFilter={this.handleFilter}
            />
          </div>
          <div className="sixteen wide column">
            <HogContainer
              hogList={this.sortHogs()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
