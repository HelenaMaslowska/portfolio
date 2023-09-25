import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Main Page/Home';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

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
	<BrowserRouter>
		<Routes>
			<Route path="/portfolio" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="projects" element={<Gallery />} />
				<Route path="contact" element={<Contact />} />
			{/*	<Route path="*" element={<NoPage />} /> */}
			</Route>
		</Routes>
	</BrowserRouter>
	);
}
