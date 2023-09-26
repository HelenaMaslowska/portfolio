import React from 'react'
import './ListOfProjects.scss'

export default function ListOfProjects(props) {
  return (
	<div>
		<div className='photoAndTilte'>
			<img className='photo' src={props.topic.photo} alt=""/>
			<div className='title'>{props.topic.title}</div>
		</div>

		<div className='description'>
			DESCRIPTION lorem ipsum et cetera et cetera et cetera et cetera et cetera et cetera et cetera et cetera
		</div>
	</div>
  )
}
