import React, {Component} from 'react'
import HogDetails from './HogDetails'

class HogInfo extends Component {
  constructor() {
    super()
    this.state = {
      details: "Show Hog Details",
      hogDetails: null
    }
  }

  handleClickOfHog = () => {
    if (this.state.details === "Show Hog Details") {
      this.setState({hogDetails: <HogDetails hog={this.props.hog}/>, details: "Hide Hog Details"})
    } else {
      this.setState({hogDetails: null, details: "Show Hog Details"})
    }
  }

  render() {
    let hogImage = this.props.hog.name.toLowerCase().split(" ").join("_")
    return (
      <div className="ui eight wide column">
        <img src={require(`../hog-imgs/${hogImage}.jpg`)}/>
        <p>{this.props.hog.name}</p>
        {this.state.hogDetails}
        <button onClick={this.handleClickOfHog}>{this.state.details}</button>
      </div>
    )
  }
}

export default HogInfo
