import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Header from './components/Header.js';
import MainPage from './components/MainPage';

/*
													https://github.com/gitname/react-gh-pages
	To run this app on website, you need to:
	
(on master)
	npm run deploy   

(on master)
	git add .        
	git commit -m "Configure React app for deployment to GitHub Pages"
	git push origin master

	master - contain source code - here you send your changes and run deploy
	gh-pages - contain distributable version of the React app
*/
export default function App() {
	return (
	<div>
		<Header />
		<MainPage />
	</div>
	);
}
