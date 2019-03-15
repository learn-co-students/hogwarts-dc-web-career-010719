import React, { Component } from 'react';
import HogsInfo from './HogsInfo';

class HogsCard extends Component {
constructor(props){
  super(props)
  this.state = { showDetails: false }
}

handleClick = () => {
//  console.log(this.state.showDetails)
  this.setState({
    showDetails: !this.state.showDetails
  })
}

  render() {
    return (
      <div className="ui card" onClick={this.handleClick}>
        <HogsInfo hog={this.props.hog} showDetails={this.state.showDetails}/>
      </div>
    );
  }
}
export default HogsCard;
