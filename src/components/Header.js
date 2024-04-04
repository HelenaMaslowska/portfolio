import React from 'react'
import './Header.scss'

import { Link } from 'react-router-dom'
import stick from '../images/Website_features/Hero/Stick_navbar.png'
import stick_phone from '../images/Website_features/Hero/Stick_navbar_phone.png'
export default function Header() {
    if (window.innerWidth < 768) {
        stick = stick_phone
    }
    return (
        <header>
            {/* <img className="headerImage" src={stick} alt="" /> */}

            <div className="headerButtons">
                <Link to="">
                    <button>Home</button>
                </Link>
                <Link to="projects">
                    <button>Projects</button>
                </Link>
                <Link to="contact">
                    <button>Contact</button>
                </Link>
            </div>
        </header>
    )
}
