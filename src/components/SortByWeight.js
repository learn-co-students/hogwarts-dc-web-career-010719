import React, {Component} from 'react'

const SortByWeight = props => {
  return (
    <button onClick={props.onSortByWeight}>{props.buttonText}</button>
  )
}

export default SortByWeight
