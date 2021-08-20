import React, {useState} from 'react'
import {Header, Navbar} from "../components"
import * as ROUTES from "../constants/routes"

export function HeaderContainer( {children} ) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open)
    }
    return (
        <Header>
            <Navbar.Nav>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src="/destynilogo.png" alt="logo"/>
                    <Header.ButtonLink to={ROUTES.GALLERY}/>
                </Header.Frame>
                <Navbar.Bars onClick={handleClick}/>
                {console.log(open)}
                <Navbar.Menu open={open}>  
                    {open && <Navbar.Times onClick={handleClick}/>}
                    <Navbar.NavLink to={ROUTES.ABOUT} >About Me</Navbar.NavLink>
                    <Navbar.NavLink to={ROUTES.GALLERY} >Gallery</Navbar.NavLink>
                    <Navbar.NavLink to={ROUTES.EVENTS} >Events</Navbar.NavLink>
                    <Navbar.NavLink to={ROUTES.FAQS} >FAQs</Navbar.NavLink>
                </Navbar.Menu>
            </Navbar.Nav>
            {children}
        </Header>
    )
}
