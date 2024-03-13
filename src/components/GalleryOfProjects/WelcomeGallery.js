import React from 'react'
import './WelcomeGallery.scss'

export default function WelcomeGallery() {
    return (
        <section className="welcomeGallery">
            {/* <div className='WIPContent'><img className='WIP' src={WIP} alt='WIP icon'/></div> */}
            <div className="container_12 content">
                <h1>Projects</h1>
                <p>
                    Welcome to my gallery! Everything you see here has been
                    created by me. These ideas first took shape on paper, and
                    were then brought to life using tools:
                    Blender/Gimp/React/Figma, ultimately transforming into real
                    models, furniture, artwork and website.
                </p>
            </div>
        </section>
    )
}
