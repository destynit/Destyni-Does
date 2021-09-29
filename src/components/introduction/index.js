import React from 'react'
import { Container, Info, Header, Name, Subheader, Image } from './styles/introduction'

export default function Introduction({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Introduction.Info = function IntroductionInfo({children, ...restProps}) {
    return <Info {...restProps}>{children}</Info>
}
Introduction.Header = function IntroductionHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}
Introduction.Name = function IntroductionName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}

Introduction.Subheader = function IntroductionSubheader({children, ...restProps}) {
    return <Subheader {...restProps}>{children}</Subheader>
}

Introduction.Image = function IntroductionImage({...restProps}) {
    return <Image {...restProps} />
}
