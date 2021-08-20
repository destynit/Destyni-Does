import React from 'react'
import {Container, Nav, NavLink, Bars, Menu, Times} from "./styles/navbar"

export default function Navbar({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Navbar.Nav = function NavbarNav({children, ...restProps}) {
    return <Nav {...restProps}>{children}</Nav>
}

Navbar.NavLink = function NavbarNavLink({children, ...restProps}) {
    return <NavLink {...restProps}>{children}</NavLink>
}

Navbar.Bars = function NavbarBars({children, ...restProps}) {
    return <Bars {...restProps}>{children}</Bars>
}

Navbar.Times = function NavbarTimes({children, ...restProps}) {
    return <Times {...restProps}>{children}</Times>
}

Navbar.Menu = function NavbarMenu({children, ...restProps}) {
    return <Menu {...restProps}>{children}</Menu>
} 
