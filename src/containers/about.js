import React from 'react'
import {About} from "../components"

export function AboutContainer() {
    return (
        <>
            <About>
                <About.Info>
                    <About.Header>Hello, I'm Destyni!</About.Header>
                    <About.Body>I am a Front End UX Developer based in New York City. 
                        I graduated from San Diego State University with a Bachelor's Degree in Computer Science. 
                        Since graduation, I have refined my interests to specifically User Experiences and Front End Development 
                        - working primarily with React JS, HTML, & CSS. My passion for design and development are integral to ensuring
                        optimal user experiences.
                    </About.Body>
                    <About.Body>As the world around us continuously grows and evolves, I strive to be apart of the unifying progression 
                        that values inclusivity and accessibility for all.
                    </About.Body>
                </About.Info>

                <About.Image src="./destyniportrait.png" alt="self portrait" />
            </About>
        </>
    )
}
