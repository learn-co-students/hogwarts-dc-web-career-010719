// import react to use JSX
import React from 'react'
import Hog from './Hog' //to pass onto Hog Card via props

// collects all subcomponents together and gives them the props they need

class PigPen extends React.Component{

  render(){
    return(
      <div>
      {this.props.hogs.map(hog => < Hog key={hog.name} hog={hog}/>)}
      </div>
    )
  }
}

export default PigPen
