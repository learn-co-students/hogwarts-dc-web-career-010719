import React, { Component } from 'react'
import Hog from '../components/Hog'

export default class HogContainer extends Component {
  render() {
    return (
      <div className="hog-container ui cards">
      {this.props.hogs.map((hog, index) => {
        const id = btoa(hog.name + hog.specialty)
        return <Hog key={id} hog={hog} />
      })}
      </div>
    )
  }
}
