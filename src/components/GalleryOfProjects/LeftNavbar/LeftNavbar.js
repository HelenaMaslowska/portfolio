import React from 'react'
import './LeftNavbar.scss'

import { projects } from '../../ProjectsList/Projects.js'
// https://stackblitz.com/edit/react-ls1dwp?file=index.js
// https://stackoverflow.com/questions/41887532/how-to-scroll-to-an-id-from-a-navbar
export default function LeftNavbar() {
    return (
        <div className="LeftNavbar">
            {projects.map((topic) => (
                <a href={'#' + topic.title}>
                    <button className="navbarTopic"> {topic.title}</button>
                </a>
            ))}
        </div>
    )
}
