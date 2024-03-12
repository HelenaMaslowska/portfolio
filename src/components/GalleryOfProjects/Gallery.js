import React from 'react'
import { useState, useEffect } from 'react'
import './Gallery.scss'

import ListOfProjects from './ListOfProjects'
import WelcomeGallery from './WelcomeGallery'

import { projects } from '../ProjectsList/Projects.js'
import LeftNavbar from './LeftNavbar/LeftNavbar.js'
import { useParams } from 'react-router-dom'

export default function Gallery() {
    const [width, setWidth] = useState(window.innerWidth)

    //const {id} = useParams()

    const to = window.location.href.split('#')[1]

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [width])

    useEffect(() => {
        if (to !== undefined) {
            document.querySelector(`#${to}`).scrollIntoView()
        }
    }, [])

    const classItem =
        width > 768
            ? 'listOfProjectsContainer container_12'
            : 'listOfProjectsContainer'

    return (
        <div className="gallery">
            <LeftNavbar />
            <WelcomeGallery />

            <div className={classItem}>
                {projects.map((topic) => (
                    <ListOfProjects
                        id={topic.title}
                        key={topic.id}
                        topic={topic}
                    />
                ))}
            </div>
        </div>
    )
}
