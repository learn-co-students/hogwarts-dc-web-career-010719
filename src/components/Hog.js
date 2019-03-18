import React, { Component } from 'react'

class Hog extends Component {

  constructor() {
    super()
    this.state = {
      full: false,
      hidden: false
    }
  }

  snakeCaseHogName = (name) => {
    return name.toLowerCase().split(' ').join('_')
  }

  capitalizeMedal = () => {
    let medal = this.props.hogObj['highest medal achieved']
    return medal.charAt(0).toUpperCase() + medal.slice(1)
  }

  toggleFullCard = () => {
    this.setState({full: !this.state.full})
  }

  hideHog = () => {
    this.setState({
      full: false,
      hidden: true
    })
  }

  render() {
    let {name, specialty, greased} = this.props.hogObj
    if (this.state.full === true) {
      return (
        <div className="card" id="hog-card" onClick={this.toggleFullCard}>
          <div className="content">
            <div className="header" id="full-card-header">{name}</div>
            <div className="description">
              {`Specialty is ${specialty.toLowerCase()}; weighs ${
              this.props.hogObj["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]} refrigerators`}
            </div>
          </div>
          <div>
            <img
              src={require(`../hog-imgs/${this.snakeCaseHogName(name)}.jpg`)}
              alt={name}
              id="full-card-image"
            ></img>
          </div>
          <div className="extra content">
            <span className="right floated">
              {greased === true ? "Greased" : "Ungreased"}
            </span>
            <span>{`${this.capitalizeMedal()} medalist`}</span>
          </div>
        </div>
      )
    } else if (this.state.hidden === false){
      return (
        <div className="card" id="hog-card" >
          <div className="image" onClick={this.toggleFullCard}>
            <img
              src={require(`../hog-imgs/${this.snakeCaseHogName(name)}.jpg`)}
              alt={name}
            ></img>
          </div>
          <div className="content" id="half-content">
            <span className="right floated">
              <div
                className="mini ui button"
                id="hide-button"
                onClick={this.hideHog}
              >Hide</div>
            </span>
            <span className="header" id="half-card-header">{name}</span>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Hog
