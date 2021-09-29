import React, {useState} from 'react'
import {Navbar} from "../components"
import * as ROUTES from "../constants/routes"

export function NavbarContainer( {children} ) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open)
    }
    return (
        <Navbar>
            <Navbar.Nav>
                <Navbar.LogoLink to={ROUTES.HOME}>
                    <Navbar.Logo src="/destynilogo.png" alt="logo"/>
                </Navbar.LogoLink>

                <Navbar.Bars onClick={handleClick}/>
                {console.log(open)}
                <Navbar.Menu open={open}>  
                    {open && <Navbar.Times onClick={handleClick}/>}
                    <Navbar.NavLink to={ROUTES.WORK} >WORK</Navbar.NavLink>
                    <Navbar.NavLink to={ROUTES.ABOUT} >ABOUT</Navbar.NavLink>
                    <Navbar.NavLink to={ROUTES.CONTACT} >CONTACT</Navbar.NavLink>
                </Navbar.Menu>
            </Navbar.Nav>
        </Navbar>
    )
}
