import React from 'react'
import { useState, useEffect } from 'react';
import './Gallery.scss'

import ListOfProjects from './ListOfProjects'
import WelcomeGallery from './WelcomeGallery'

import { projects } from '../ProjectsList/Projects.js';


export default function Gallery() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	return (
		<div>
			<WelcomeGallery />

			{width > 1000 ? 
				(
					<div className="container_12 listOfProjectsContainer">
						{/* Send topics and projects in the same list */}
						{projects.map((topic) => ( 
							<ListOfProjects id={topic.id} key={topic.id} topic={topic} />
						))}
					</div>
				) 
			: 
				(
					<div className="listOfProjectsContainer">
						{projects.map((topic) => ( 
							<ListOfProjects key={topic.id} topic={topic} />
						))}
					</div>
				)
			}
		</div>
	)
}
