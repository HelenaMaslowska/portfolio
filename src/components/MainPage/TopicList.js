import React from 'react'
import { Link } from 'react-router-dom'
import './TopicList.scss'

import Topic from './Topic'
import { projects } from '../ProjectsList/Projects.js'
import { useNavigate } from 'react-router-dom'

export default function TopicList() {
    const navigate = useNavigate()

    const items = projects.map((project) => (
        <div onClick={() => navigate(`/portfolio/projects/#${project.title}`)}>
            <Topic key={project.id} project={project} />
        </div>
    ))

    return (
        <div className="topicListContainer">
            {/* { projects.map(project => <Link to={`/portfolio/projects/#${project.title}`} > <Topic key={project.id} project={project}/> </Link>) }	{items}
             */}

            <div className="topicList"> {items} </div>
        </div>
    )
}
