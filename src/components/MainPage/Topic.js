import React from 'react'
import './Topic.scss'

export default function Topic(props) {
	return (
		
		// <div className='grid_6 topic'>
		// 	{props.project.photo ? <img className="topicPhoto" src={props.project.photo} alt=""/> : <></>}
		// 	<h1 className="topicTitleFront">{props.project.title}</h1>
		// 	<h1 className="topicTitleBack">{props.project.title}</h1>
		// 	{/* <p>{props.project.shortDescription}</p> */}
		// </div>
		// <div className = "grid_6 card">
		// 	<img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt="" />
		// 	<div className="card_content">
		// 		<h2>
		// 			{props.project.title}
		// 		</h2>
		// 		<p className="topicDescription">
		// 			{props.project.shortDescription}
		// 		</p>
		// 	</div>
		// </div>

		<div className='card'>
			
			{props.project.photo ? <img className="topicPhoto" src={props.project.photo} alt=""/> : <></>}
			<p>{props.project.title}</p>
		</div>
	)
}
