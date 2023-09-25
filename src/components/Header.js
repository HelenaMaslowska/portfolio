import React from 'react'
import './Header.scss'
import brush from "../images/brush-stroke.svg"
import { Link } from "react-router-dom";

export default function Header() {
  return (
	<header>
		<div className="headerImage">
			<img src={brush} alt=""/>
			
		</div>
		
		<div className="headerButtons">
			<Link to=""><button>Home</button></Link>
			<Link to="projects"><button>Projects</button></Link>
			<Link to="contact"><button>Contact me</button></Link>
		</div>
	</header>
  )
}
