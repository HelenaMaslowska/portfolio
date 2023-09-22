import React from 'react'
import './Header.scss'
import brush from "../images/brush-stroke.svg"

export default function Header() {
  return (
	<header>
		<div className="headerImage">
			<img src={brush} />
			
		</div>
		
		<div className="headerButtons">
			<button>My projects</button>
			<button>My skills</button>
			<button>Contact me</button>
		</div>
	</header>
  )
}
