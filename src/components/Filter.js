import React, { Component } from 'react'

const Filter = props => {
  return (
    <div className='filter-bar'>
      <select className='filter-item' id='sort-select' onChange={props.onFilter}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <select className='filter-item' id='greased-select' onChange={props.onFilter}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="ungreased">Ungreased</option>
      </select>
    </div>
  )
}

export default Filter