import React from 'react'
import { NavbarContainer } from '../containers/navbar'
import {FooterContainer} from '../containers/footer'
import { IntroductionContainer } from '../containers/introduction'

export default function Home() {
    return (
        <>
            <NavbarContainer />
            <IntroductionContainer />   
            <FooterContainer />
        </>
    )
}
