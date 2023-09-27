import React from 'react'
import { useState, useEffect } from 'react';
import './Gallery.scss'
import ListOfProjects from './ListOfProjects'
import WelcomeGallery from './WelcomeGallery'

import sample from '../../images/cardboard.jpg';

export default function Gallery() {

	const topics = [
		{
			id: 1, 
			title: 'IT',
			photo: sample, 	
			shortDescription: 'My passion encompasses programming, web design and graphic editing software API. I enjoy crafting algorithms that solve complex problems. Additionally, I design games, conduct training sessions, and organize game jams. For me, it\'s a path to continuous growth in the ever-evolving worlds of technology and creativity.', 	
			longDescription: ''
		},
		{
			id: 2,
			title: 'Furnitures',
			photo: sample, 	
			shortDescription: 'I create furniture from cardboard and wood, including personalized coasters, shoe cabinets, and drawers. My eco-conscious approach repurposes found materials, blending sustainability with functional design for enhanced living spaces.',
			longDescription: ''
		},
		{
			id: 3, 
			title: 'Models',
			photo: sample, 	
			shortDescription: 'I model my designs in Blender, leveraging its versatility and precision. Some of these projects are brought to life through 3D printing, adding another dimension to my creative process. From digital concepts to tangible objects, Blender is my bridge to turning imagination into reality.', 	
			longDescription: ''
		},
		{
			id: 4, 
			title: 'Paintings', 	
			photo: sample, 	
			shortDescription: 'I also paint pictures, mainly focusing on birds and landscapes. My artwork captures the beauty of nature, with a particular emphasis on avian subjects and scenic vistas. It\'s another way for me to express my artistic sensibilities and connect with the natural world.', 	
			longDescription: ''
		},
		
	];

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

			{width > 1000 && (
				<div className="container_12 listOfProjectsContainer">
					{topics.map((topic) => ( 
						<ListOfProjects id={topic.id} key={topic.id} topic={topic} />
					))}
				</div>
			)}

			{width <= 1000 && (
				<div className="listOfProjectsContainer">
				{topics.map((topic) => ( 
					<ListOfProjects key={topic.id} topic={topic} />
				))}
			</div>
			)}
			
		</div>
	)
}
