import React from 'react'
import './Home.scss';

import WelcomeLayout from './WelcomeLayout';
import ListOfProjects from './ListOfProjects';

export default function Home() {
	return (
	<div>
		<WelcomeLayout />
		<ListOfProjects />
	</div>
	)
}
