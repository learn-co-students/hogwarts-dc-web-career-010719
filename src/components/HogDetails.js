import React, {Component} from 'react'

class HogDetails extends Component {
  render() {
    return (
      <div>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greased: {this.props.hog.greased ? <input type="checkbox" checked/> : <input type="checkbox"/>}</p>
        <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Medal: {this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }
}

export default HogDetails
