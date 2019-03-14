import React, { Component } from 'react';
import '../App.css';
import hogs from '../porkers_data';

import Nav from './Nav'
import HogGif from './HogGif'
import HogFilter from './HogFilter'
import HogContainer from './HogContainer'


class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs
    }
  }

  onSort = attr => {
    console.log(attr)
    const newHogs = [...this.state.hogs.sort((a, b) => {
      if (a[attr].toString() < b[attr].toString()) {
        return -1
      } else if (a[attr].toString() > b[attr].toString()) {
        return 1
      }
      return 0
    })]

    this.setState({hogs: newHogs})
  }

  handleGreased = e => {
    console.log(this.state.hogs)
    
    e.target.checked ? 
    this.setState({hogs: this.state.hogs.filter((h) => h.greased === true) })
    :
    this.setState({hogs: hogs})
    
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogGif />
          < HogFilter hogs={this.state.hogs} onSort={this.onSort} handleGreased={this.handleGreased} />
          < HogContainer hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
