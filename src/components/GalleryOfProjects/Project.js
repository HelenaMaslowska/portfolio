import React from 'react'
import './Project.scss'

export default function Project(props) {
	return (
	<div className='projectContent'>
		<div className='projectTitle'>				{props.project.title}					</div>

		{ props.project.photo && (
			<img className='grid_8 prefix_2 suffix_9 projectPhoto' src={props.project.photo} alt=""/>
		)}
		
		{ props.project.description && (
			<div className='projectDescription'>	{props.project.description}			</div>
		)}

	</div>
	)
}
