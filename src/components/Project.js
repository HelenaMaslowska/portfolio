import React from 'react'
import './Project.scss'

export default function Project(props) {
	return (
		<div className='grid_6 project'>
			{props.project.photo ? <img src={props.project.photo} alt=""/> : <></>}
			<h2>{props.project.title}</h2>
			<p>{props.project.shortDescription}</p>
		</div>
	)
}
