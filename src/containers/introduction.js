import {Introduction} from "../components"
import React from 'react'

export function IntroductionContainer() {
    return (
        <>
        <Introduction>
            <Introduction.Info>
                <Introduction.Header>Hi there, I am <Introduction.Name>Destyni</Introduction.Name></Introduction.Header>
                <Introduction.Subheader>Through comprehensive research, I design and code digital worlds that are inclusive, intuitive, and immersive.</Introduction.Subheader>
            </Introduction.Info>
            <Introduction.Image src="/destyni.png" alt="destyni"/>
        </Introduction>
        </>
    )
}
