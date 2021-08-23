import React from 'react'
import {Container, Title, Subtitle, Image, Button} from "./styles/jumbotron"

export default function Jumbotron({children, direction='row', ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronSubtitle({children, ...restProps}) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({children, ...restProps}) {
    return <Image {...restProps}/>
}

Jumbotron.Button = function JumbotronButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}