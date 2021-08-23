import React from 'react'
import * as ROUTES from "../constants/routes"
import {Jumbotron} from "../components"

export function JumbotronContainer() {
    return(
        <Jumbotron>
            <Jumbotron.Title>destyni does</Jumbotron.Title>
            <Jumbotron.Subtitle>an open letter</Jumbotron.Subtitle>
            <Jumbotron>
                <Jumbotron.Image src="/destynidoesjumbo.png" alt="jumbotron" />
                <Jumbotron.Button to={ROUTES.ABOUT}>open</Jumbotron.Button>
            </Jumbotron>
        </Jumbotron>
    )  

}