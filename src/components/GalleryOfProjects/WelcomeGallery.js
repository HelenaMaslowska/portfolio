import React from 'react'
import './WelcomeGallery.scss'

//import img from '../../images/Bg.png';
import WIP from '../../images/Icons/WIP.png';

export default function WelcomeGallery() {
  return (
	<section className='welcomeGallery'>
		<div className='WIPContent'><img className='WIP' src={WIP} alt='WIP icon'/></div>
		<div className='container_12 content'>
			<h1>Projects</h1>
			<p>Welcome to my gallery! Everything you see here has been created by me, with the vast majority being original projects. These ideas first took shape on paper, and were then brought to life using Blender/Gimp, ultimately transforming into real models, furniture, and artwork. On the programming side, some of these projects began in Paint.</p>
		</div>
	</section>
  )
}
