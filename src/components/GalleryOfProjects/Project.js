import React from 'react'
import './Project.scss'
import '../../styles/_container_12.scss'

import ImageGallery from 'react-image-gallery'

export default function Project(props) {
    return (
        <div className="projectContent">
            {props.project.title && (
                <div className="projectTitle"> {props.project.title} </div>
            )}
            <div className="push_1 grid_10">
                {props.project.photos && (
                    <ImageGallery items={props.project.photos} />

                    // props.project.photos.map((element) => ( <img className='grid_4 projectPhoto' src={element.photo} alt="" />  ))
                )}
            </div>
            {/* <img className='grid_8 prefix_2 suffix_9 projectPhoto' src={props.project.photo} alt=""/> */}

            {props.project.link && (
                <a
                    className="push_1 grid_10 projectUrl"
                    href={props.project.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={props.project.icon} alt="icon" />
                    {props.project.title}
                </a>
            )}

            {props.project.description && (
                <div className="push_1 grid_10 projectDescription">
                    {' '}
                    {props.project.description}{' '}
                </div>
            )}
            {props.project.description2 && (
                <div className="push_1 grid_10 projectDescription">
                    {' '}
                    {props.project.description2}{' '}
                </div>
            )}
        </div>
    )
}
