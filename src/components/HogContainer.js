import React from 'react'
import Hog from './Hog'

const HogContainer = (props) => {
  return (
    <div className="ui cards">
      {props.hogs.map((hog, index) => {
        return <Hog hog={hog} key={hog.name} gifs={props.gifs} index={index} />
      })}
    </div>
  )
}

export default HogContainer
