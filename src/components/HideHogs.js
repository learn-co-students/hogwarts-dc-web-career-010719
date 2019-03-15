import React, {Component} from 'react'

const HideHogs = props => {
  return (
    <button onClick={props.onHideHogs}>{props.buttonText}</button>
  )
}

export default HideHogs
