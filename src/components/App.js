import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogContainer from './HogContainer'


class App extends Component {
  constructor() {
    super()

    this.state = {
      filter: '',
      greased: '',
      hogs: [],
      gifs: []
    }
  }

  handleSortChange = (e) => {
    this.setState({
      filter: e.target.value
    }, () => {
      if (this.state.filter === 'name') {
        this.sortHogsName()
      } else if (this.state.filter === ('weight')) {
        this.sortHogsWeight()
      } else {
        this.setState({hogs: [...hogs]})
      }
    })
  }

  handleGreasedChange = (e) => {
    if (e.target.value === 'greased') {
      this.setState({
        greased: true
      }, () => this.filterGreased())

    } else if (e.target.value === 'ungreased') {
      this.setState({
        greased: false
      }, () => this.filterGreased())

    } else {
      this.setState({
        greased: '',
        hogs: [...hogs]
      })
    }
  }

  sortHogsName = () => {
    let hogs = [...this.state.hogs]
    hogs.sort((a,b) => {return a.name.toLowerCase().localeCompare(b.name.toLowerCase())})
    this.setState({hogs})
  }

  sortHogsWeight = () => {
    let hogs = [...this.state.hogs]
    hogs.sort((a,b) => {return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']})
    this.setState({hogs})
  }

  filterGreased = () => {
    let filteredHogs = []
    filteredHogs = [...hogs].filter((hog) => {return hog.greased === this.state.greased})
    this.setState({hogs: filteredHogs})
  }

  componentDidMount() {
    this.fetchPigPics()
  }

  fetchPigPics() {
    let gifs = [...this.state.gifs]
    fetch('//api.giphy.com/v1/gifs/search?q=pigs&api_key=C7zb8nn7c8MrBWcC6WqWCSIVI1zfHNMx&limit=13')
    .then(res => res.json())
    .then(data => {
      let gifInfo = data.data
      gifInfo.forEach((gif) => {
        gifs.push(gif.images.original.url)
      })
      this.setState({
        gifs: gifs,
        hogs: [...hogs]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />

        <form className="ui form">
          <div className="two fields">
            <div className="field">
              <label>Sort Hogs By:</label>
              <select className="ui fluid dropdown" value={this.state.filter} onChange={this.handleSortChange}>
                <option defaultValue hidden>Please choose:</option>
                <option value='all'>No Sort</option>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
              </select>
            </div>

            <div className="field">
              <label>
                Filter Greased Hogs:
                <select className="ui fluid dropdown" value={this.state.greased} onChange={this.handleGreasedChange}>
                  <option defaultValue hidden>Please choose:</option>
                  <option value='all'>All</option>
                  <option value='greased'>Greased</option>
                  <option value='ungreased'>Ungreased</option>
                </select>
              </label>
            </div>
          </div>
        </form>

        <HogContainer hogs={this.state.hogs} gifs={this.state.gifs} />

      </div>
    )
  }
}

export default App
