import React from 'react'

class ControlPanel extends React.Component {
  constructor(){
    super()
  }
  render() {
    return(
      <div>
      <label htmlFor="greased"> Greased?</label>
      <input name= "greased" type="checkbox" onChange={(event)=>this.props.handleGreased(event.target.checked)}/>
      <select onChange={this.props.handleSort}>
      <option value="name"> Sort By Name </option>
      <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"> Sort By Weight </option>
      </select>

      </div>
    )
  }
}

export default ControlPanel
