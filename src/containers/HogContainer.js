import React, { Component } from 'react'
import Hog from '../components/Hog'

class HogContainer extends Component {

  renderHogs = () => {

    return this.props.hogList.map(hog => {
      return <Hog key={hog.id} hogObj={hog}/>
    })
  }

  render() {
    return (
      <div className="ui cards" id="hog-container">
        {this.renderHogs()}
      </div>
    )
  }
}

export default HogContainer
