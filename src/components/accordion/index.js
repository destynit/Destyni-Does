import React, {useState, useContext, createContext} from 'react'
import {Container, Inner, Title, Header, Body, Item, AngleDown, AngleUp} from "./styles/accordion"

const ToggleContext = createContext();

export default function Accordion ({children, ...restProps}) {
    return (
        <div>
            <Container {...restProps}>
                <Inner>{children}</Inner>
            </Container>
        </div>
    )
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value = {{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>)
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return toggleShow ? <Header onClick={()=>setToggleShow(!toggleShow)} {...restProps}>{children}<AngleUp /></Header> : <Header onClick={()=>setToggleShow(!toggleShow)} {...restProps}>{children}<AngleDown /></Header> 
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
    const {toggleShow} = useContext(ToggleContext)
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}

Accordion.AngleDown = function AccordionAngleDown({children, ...restProps}) {
    return <AngleDown {...restProps}>{children}</AngleDown>
}

Accordion.AngleUp = function AccordionAngleUp({children, ...restProps}) {
    return <AngleUp {...restProps}>{children}</AngleUp>
}