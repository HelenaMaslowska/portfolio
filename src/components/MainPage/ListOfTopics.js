import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListOfTopics.scss'

import Topic from './Topic';
import sample from '../../images/cardboard.jpg';
import { projects } from '../ProjectsList/Projects.js';

export default function ListOfTopics() {

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
		  setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	  }, [width]);

	return ( // how to grid: https://codepen.io/luclemo/pen/VGrOjv
		<div>
			{width > 1000 && (
				<div className='container_12'>
					<h1>Projects</h1>
					<div className='clear'></div>
					<div className='topicsList'>
						{ projects.map(project => <Link to="/portfolio/projects/#IT" > <Topic key={project.id} project={project}/> </Link>) }
					</div>
				</div>
			)}
			{width <= 1000 && (
				<div>
					<h1>Projects</h1>
					<div className='topicsList'>
						{ projects.map(project => <Topic key={project.id} project={project}/>) }
					</div>
				</div>
			)}
		</div>
	)
}
