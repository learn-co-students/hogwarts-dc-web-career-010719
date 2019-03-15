import React, {Component} from 'react'

const SortByName = props => {
  return (
    <button onClick={props.onSortByName}>{props.buttonText}</button>
  )
}

export default SortByName
