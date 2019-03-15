import React, {Component} from 'react'

const FilterByGreased = props => {
  return (
    <button onClick={props.onFilterByGreased}>{props.buttonText}</button>
  )
}

export default FilterByGreased
