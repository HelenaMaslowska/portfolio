import logo from './logo.svg';
import './App.scss';
import React from 'react';

/*
	To run this app on website, you need to:
	npm run deploy

	git add .
	git commit -m "Configure React app for deployment to GitHub Pages"
	git push origin master

	master - contain source code
	gh-pages - contain distributable version of the React app
*/
export default function App() {
	return (
	<div className="App">
		<header className="App-header">
			<button>My projects</button>
			<button>My skills</button>
			<button>Contact me</button>
		</header>
	</div>
	);
}
