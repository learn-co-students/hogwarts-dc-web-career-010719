import React, { Component } from 'react'

const HogDetails = props => {
  const {name, specialty, greased} = props.hog

  const annoyingKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
  const weight = props.hog[annoyingKey]

  const medalKey = 'highest medal achieved'
  const medal = props.hog[medalKey]

  // const re = new RegExp(/ /, 'g')
  // const safeName = name.toLowerCase().replace(re, '_')

  const detailClasses = ['hog-details', 'card']

  return (
    <div className="hog-details card">
      <div className="content">
        <div className="header">{name}</div>
        <div className="meta">{specialty}</div>
        <div className="description">
          Weight: {specialty}
          Medal: {medal}
        </div>
      </div>
    </div>
  )
}

export default HogDetails