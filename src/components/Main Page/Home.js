import React from 'react'
import './Home.scss';

import WelcomeLayout from '../WelcomeLayout';
import ListOfTopics from './ListOfTopics';

export default function Home() {
	return (
	<div>
		<WelcomeLayout />
		<ListOfTopics />
	</div>
	)
}
