import React, {Component} from 'react'
import HogInfo from './HogInfo'

class HogsContainer extends Component {
  render() {
    const hogCards = this.props.hogs.map(hogObj => <HogInfo key={hogObj.name} hog={hogObj}/>)
    return (
      <div className="ui grid container">
      {hogCards}
      </div>
    )
  }
}

export default HogsContainer
