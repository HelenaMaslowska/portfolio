import React from 'react'
import './Home.scss'

import Hero from './Hero'

import separator from '../../images/Website_features/Hero/Separator.png'
import TopicList from './TopicList'

export default function Home() {
    return (
        <div className="homeComponent">
            <Hero />
            <img src={separator} className="separator" />
            <TopicList />
        </div>
    )
}
