import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsCard from './HogsCard'
import ControlPanel from './ControlPanel'

class App extends Component {
  constructor(){
    super()
    this.state = {
    greased: false,
    sorted: "name"
    }
  }

handleSort = (event) => { 
this.setState({
  sorted: event.target.value
  })
  
}

handleCheck = (event) => {
  console.log(event)
this.setState({
  greased: event
  })    
}


sortHogs = () => {
  let newHogs = this.filterHogs()
  let sortHogs = newHogs.sort((a,b) => a[this.state.sorted].toString().localeCompare(b[this.state.sorted].toString()))
  return sortHogs
}

filterHogs = () => {
  let hogsArray = [...hogs]
  if(this.state.greased !== true){
    return hogsArray
  } else{
    console.log(this.state.greased)
    return  hogsArray.filter(hog => hog.greased === false)
  }
}

  
  render() {
    return (
      <div className="App">
          < Nav />
        <ControlPanel handleSort={this.handleSort} handleCheck={this.handleCheck}/>
          <div className="ui cards">
          {this.sortHogs().map( (hog, idx) => { return <HogsCard key={idx} hog={hog}/>}
          )}
        </div>
      </div>
    )
  }
}

export default App;
