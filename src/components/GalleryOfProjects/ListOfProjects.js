import React from 'react'
import './ListOfProjects.scss'
import Project from './Project.js'

export default function ListOfProjects(props) {
  return (
	<div id={props.topic.id}>
		<div className='photoAndTilte'>
			<img className='photo' src={props.topic.photo} alt=""/>
			<div className='title'>{props.topic.title}</div>
		</div>

		<div className='listOfProjects'>
			{props.topic.list.map((project) => ( 
				<Project key={project.id} project={project} />
			))}
		</div>
	</div>
  )
}
