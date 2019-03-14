import React, { PureComponent } from 'react'

export default class Hog extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {showDetails: false}
  }

  safeName() {
    const re = new RegExp(/ /, 'g')
    const name = this.props.hog.name
    return name.toLowerCase().replace(re, '_')
  }

  onHogSelect = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  onToggle = () => {
    
  }

  render() {
    const {name, specialty, greased} = this.props.hog

    const annoyingKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const weight = this.props.hog[annoyingKey]

    const medalKey = 'highest medal achieved'
    const medal = this.props.hog[medalKey]

    const detailClasses = ['details']
    if (this.state.showDetails) detailClasses.push('enabled')

    return (
      <div className="hog-card card">
        <div className="image" onClick={this.onToggle}>
          <img src={require(`../hog-imgs/${this.safeName()}.jpg`)} alt={name} />
        </div>
        <div className="content" onClick={this.onHogSelect}>
          <div className="header">{name}</div>
          <div className={detailClasses.join(' ')}>
            <div className="meta">{specialty}</div>
            <div className="description">
              <p>Weight: {weight}</p>
              <p>Medal: {medal}</p>
              <p>{greased ? 'Greased' : 'Ungreased'}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}