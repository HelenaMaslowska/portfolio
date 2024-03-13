import './App.scss'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/MainPage/Home'
import Contact from './components/Contact/Contact'
import Gallery from './components/GalleryOfProjects/Gallery'
import Bird from './components/MainPage/Bird'
import { ParallaxProvider } from 'react-scroll-parallax'

/*
													https://github.com/gitname/react-gh-pages
	To run this app on website, you need to:
	
(on master)
	npm run deploy      -  RUN THIS to publish your website

(on master)
	git add .			- add changes to repo only, you don't need to do it to publish website
	git commit -m "Configure React app for deployment to GitHub Pages"
	git push origin master

	master - contain source code - here you send your changes and run deploy, you work on this file
	gh-pages - contain distributable version of the React app, which is deployed to GitHub Pages
		- this branch is created when you run npm run deploy
		- you don't need to do anything with this branch, it's created automatically
*/
export default function App() {
    return (
        // <Bird bird_id="bird1" />
        <ParallaxProvider>
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
        </ParallaxProvider>
    )
}
