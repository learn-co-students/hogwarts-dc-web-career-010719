import piggy from '../porco.png'
import React from 'react'

const Nav = () => {
	return (
		<div className="ui menu">
		  <a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231" id="logo">
				<img src={piggy} className="App-logo floated left" alt="Pig logo"></img>
			</a>
			<h1 className="ui header" id="heading">
				Hogwarts
				<div className="sub header">A React App for County Fair Hog Fans</div>
			</h1>
		</div>
	)
}

export default Nav
