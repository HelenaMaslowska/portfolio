import React, { useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'
import './Hero.scss'

import Bird from './Bird'

import stars_blurred from '../../images/Website_features/Hero/Stars/Stars_hero_blurred.png'
import stars_left from '../../images/Website_features/Hero/Stars/Stars_hero_left_up.png'
import stars_right from '../../images/Website_features/Hero/Stars/Stars_hero_right_up.png'
import glow from '../../images/Website_features/Hero/Glow.png'
import glow_phone from '../../images/Website_features/Hero/Glow_phone.png'
import sun from '../../images/Website_features/Hero/Sun.png'
import sun_phone from '../../images/Website_features/Hero/Sun_phone.png'

import mountain1 from '../../images/Website_features/Hero/Mountains/mountain1.png'
import mountain2 from '../../images/Website_features/Hero/Mountains/mountain2.png'
import mountain3 from '../../images/Website_features/Hero/Mountains/mountain3.png'
import mountain1phone from '../../images/Website_features/Hero/Mountains/mountain1_phone.png'
import mountain2phone from '../../images/Website_features/Hero/Mountains/mountain2_phone.png'
import mountain3phone from '../../images/Website_features/Hero/Mountains/mountain3_phone.png'

export default function WelcomeLayout() {
    const number_of_birds =
        window.innerWidth > 1000 ? [20, 5, 4, 3] : [20, 8, 3, 2]
    const min_bird_size = [1, 2, 3, 4]
    const max_bird_size = [3, 3, 3, 6]

    var skyParallaxStart = [20, 30, 50, 40]
    var skyParallaxEnd = [-20, -30, -90, -40]

    var mountainParallaxStart = [60, 20, 0, 70]
    var mountainParallaxEnd = [-70, -25, 0, -80]

    useEffect(() => {
        if (window.innerWidth < 768) {
            mountain1 = mountain1phone
            mountain2 = mountain2phone
            mountain3 = mountain3phone
            sun = sun_phone
            glow = glow_phone
            skyParallaxStart = [10, 20, 0, 40]
            skyParallaxEnd = [-10, -20, 0, -40]
            mountainParallaxStart = [0, 0, 0, 0]
        }
    }, [window.innerWidth])

    const starsLeftP = useParallax({
        translateX: [skyParallaxStart[0], skyParallaxEnd[0]],
        translateY: [skyParallaxStart[0], skyParallaxEnd[0]],
    })
    const starsRightP = useParallax({
        translateX: [skyParallaxStart[1], skyParallaxEnd[1]],
        translateY: [skyParallaxStart[1], skyParallaxEnd[1]],
    })
    const glowP = useParallax({
        translateY: [skyParallaxStart[2], skyParallaxEnd[2]],
    })

    // const mountain1P = useParallax({
    //     translateY: [mountainParallaxStart[0], mountainParallaxEnd[0]],
    // })
    // const mountain2P = useParallax({
    //     translateY: [mountainParallaxStart[1], mountainParallaxEnd[1]],
    // })
    // const mountain3P = useParallax({
    //     translateY: [mountainParallaxStart[2], mountainParallaxEnd[2]],
    // })

    return (
        <div className="backgroundOnly">
            <div className="home">
                <div className="hero">
                    <img
                        ref={starsLeftP.ref}
                        src={stars_left}
                        alt="stars"
                        className="stars left"
                    />
                    <img
                        ref={starsRightP.ref}
                        src={stars_right}
                        alt="stars"
                        className="stars right"
                    />
                    <img
                        ref={glowP.ref}
                        src={glow}
                        alt="glow"
                        className="glow"
                    />

                    <img src={sun} alt="sun" className="sun" />
                    {[...Array(number_of_birds[0])].map((x, i) => (
                        <Bird
                            key={i}
                            id={'bird' + i}
                            resizeFactor={
                                (Math.floor(Math.random() * max_bird_size[0]) +
                                    min_bird_size[0]) /
                                10
                            }
                        />
                    ))}
                    <img
                        // ref={mountain1P.ref}
                        src={mountain1}
                        alt="mountain"
                        className="mountain1"
                    />
                    {[...Array(number_of_birds[1])].map((x, i) => (
                        <Bird
                            key={i}
                            id={'bird' + i}
                            resizeFactor={
                                (Math.floor(Math.random() * max_bird_size[1]) +
                                    min_bird_size[1]) /
                                10
                            }
                        />
                    ))}
                    <img
                        // ref={mountain2P.ref}
                        src={mountain2}
                        alt="mountain"
                        className="mountain2"
                    />
                    {[...Array(number_of_birds[2])].map((x, i) => (
                        <Bird
                            key={i}
                            id={'bird' + i}
                            resizeFactor={
                                (Math.floor(Math.random() * max_bird_size[2]) +
                                    min_bird_size[2]) /
                                10
                            }
                        />
                    ))}
                    <div>
                        <img
                            // ref={mountain3P.ref}
                            src={mountain3}
                            alt="mountain"
                            className="mountain3"
                        />
                        {/* <div className="welcomeText">
                            <p>
                                Welcome to my portfolio! Looking for my
                                projects? Scroll below to see more :)
                            </p>
                        </div> */}
                    </div>
                    {[...Array(number_of_birds[3])].map((x, i) => (
                        <Bird
                            key={i}
                            id={'bird' + i}
                            resizeFactor={
                                (Math.floor(Math.random() * max_bird_size[3]) +
                                    min_bird_size[3]) /
                                10
                            }
                        />
                    ))}

                    <div className="nameRoleText">
                        Helena Masłowska
                        <p>Frontend Developer & UI Designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
