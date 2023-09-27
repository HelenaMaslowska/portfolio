import React from 'react'
import './Project.scss'

export default function Project(props) {
	return (
	<div className='projectContent'>
		{ props.project.title && (
			<div className='projectTitle'>			{props.project.title}				</div>
		)}

		{props.project.photos && ( 

				props.project.photos.map((element) => (
					<img className='grid_4 projectPhoto' src={element.photo} alt="" />
				))
		)}
		{/* <img className='grid_8 prefix_2 suffix_9 projectPhoto' src={props.project.photo} alt=""/> */}
		{ props.project.description && (
			<div className='grid_10 push_1 projectDescription'>	{props.project.description}			</div>
		)}
	</div>
	)
}
