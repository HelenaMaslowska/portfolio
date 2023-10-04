import React from 'react'
import './LeftNavbar.scss'

import { projects } from '../../ProjectsList/Projects.js';

export default function LeftNavbar() {
  return (
	<div className="LeftNavbar">
	  {projects.map((topic) => ( 
		<div className='navbarTopic'> {topic.title}</div>
	  ))}
	</div>
  )
}
