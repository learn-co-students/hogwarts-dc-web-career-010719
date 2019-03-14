import React from 'react'
import Details from './Details'

class Hog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
      details: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      details: !prevState.details
    }))
  }

  handleChevronClick = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  render() {
    if (this.state.show) {
      return (
            <div className="ui card">
              <div className="content">
                <div className="right floated meta" onClick={this.handleChevronClick}><i className="chevron down icon"></i></div>
                {/* original hog images */}
                {/* <img className="left floated ui image" src={require('../hog-imgs/' + name.toLowerCase().split(' ').join('_') + '.jpg')} alt='pig pics'/> */}
                <img className="left floated ui image" src={this.props.gifs[this.props.index]} alt='pig pics'/>
                <div className="header">
                  {this.props.hog.name}
                </div>
                <div className="extra content">
                  <button className="ui inverted pink button" onClick={this.handleClick}>More Details</button>
                </div>
                {(this.state.details) ? (
                  <Details hog={this.props.hog}/>
                ) : (
                  null
                )}
              </div>
            </div>
          )
    } else {
      return (
            <div className="ui card" style={{height: '3rem'}}>
              <div className="content">
                <div className="right floated meta" onClick={this.handleChevronClick}><i className="chevron up icon"></i></div>
              </div>
            </div>
          )
    }
  }
}


export default Hog
