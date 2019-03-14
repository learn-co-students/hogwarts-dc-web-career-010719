import React from 'react'

const Details = (props) => {
  return (
    <div>
      <br/>
      <div className="description">
        <strong>Specialty:</strong> {props.hog.specialty}
      </div>
      <div className="description">
        <strong>Weight in Refrigerators:</strong> {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      </div>
      <div className="description">
        <strong>Highest Medal:</strong> {props.hog['highest medal achieved']}
      </div>
    </div>
  )
}

export default Details
