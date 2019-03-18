import React, { Component } from 'react'

class MenuBar extends Component {
  constructor() {
    super()
    this.state = {greased: "item", name: "item", weight: "item"}
  }

  handleFilterClick = () => {
    this.props.handleFilter()
    this.state.greased === "item" ? this.setState({greased: "item active"}) : this.setState({greased: "item"})
  }

  handleNameClick = (e) => {
    this.props.handleSort(e)
    this.state.name === "item" ? this.setState({name: "item active", weight: "item"}) : this.setState({name: "item"})
  }

  handleWeightClick = (e) => {
    this.props.handleSort(e)
    this.state.weight === "item" ? this.setState({weight: "item active", name: "item"}) : this.setState({weight: "item"})
  }

  render() {
    return (
      <div id="menu-bar">
        <div className="ui three item menu" id="menu-content">
          <a
            className={this.state.greased}
            onClick={this.handleFilterClick}
          >Show greased hogs only</a>
          <a
            className={this.state.name}
            id="name"
            onClick={this.handleNameClick}
          >Sort by name</a>
          <a
            className={this.state.weight}
            id="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            onClick={this.handleWeightClick}
          >Sort by weight</a>
        </div>
      </div>
    )
  }
}

export default MenuBar
