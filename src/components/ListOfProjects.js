import React from 'react'
import { useState, useEffect } from 'react';
import './ListOfProjects.scss'

import Project from './Project';
import sample from '../images/cardboard.jpg';

const projects = [
	{
		id: 1,
		title: 'Furnitures',
		photo: sample, 	
		shortDescription: 'I design them from scratch, creating unique pieces that are both environmentally conscious and a testament to my design and crafting abilities.',
		longDescription: ''
	},
	{
		id: 2, 
		title: 'Paintings', 	
		photo: sample, 	
		shortDescription: 'I also paint pictures, mainly focusing on birds and landscapes. My artwork captures the beauty of nature, with a particular emphasis on avian subjects and scenic vistas. It\'s another way for me to express my artistic sensibilities and connect with the natural world.', 	
		longDescription: ''
	},
	{
		id: 3, 
		title: 'IT',
		photo: sample, 	
		shortDescription: 'My passion encompasses programming, web design, API development, and graphic editing software creation. I thoroughly enjoy crafting algorithms that solve complex problems. Additionally, I design games, conduct training sessions, and organize thrilling game jams. For me, it\'s a path to continuous growth in the ever-evolving worlds of technology and creativity.', 	
		longDescription: ''
	},
	{
		id: 4, 
		title: 'Models',
		photo: sample, 	
		shortDescription: 'Blender isn\'t just a tool for creating stunning 3D graphics and animations. For me, it\'s a vital part of my planning and design process, bridging the gap between the virtual world and reality.', 	
		longDescription: ''
	},
];

export default function ListOfProjects() {
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
			{width > 1000 && (
				<div className='container_12'>
					<h1>Projects</h1>
					<div className='clear'></div>
					<div className='projectsList'>{ projects.map((project, i) => <Project key={project.id} project={project}/>) }</div>
				</div>
			)}
			{width <= 1000 && (
				<div>
					<h1>Projects</h1>
					<div className='projectsList'>
						{ projects.map((project, i) => <Project key={project.id} project={project}/>) }
					</div>
				</div>
			)}
		</div>
	)
}
