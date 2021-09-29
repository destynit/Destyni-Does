import React from 'react'
import { Container, Info, Header, Body, Image } from './styles/about'

export default function About({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

About.Info = function AboutInfo({children, ...restProps}) {
    return <Info {...restProps}>{children}</Info>
}

About.Header = function AboutHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}

About.Body = function AboutBody({children, ...restProps}) {
    return <Body {...restProps}>{children}</Body>
}

About.Image = function AboutImage({children, ...restProps}) {
    return <Image {...restProps} />
}