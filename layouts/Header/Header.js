import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { sideBarData } from './sidebar'

const Header = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
        console.log(sidebar)
    }

    return (
        <Navbar bg="light" expand="lg">
            {/* side bar is under progress */}
            <div>
                <Nav.Link className='menu-bars' href='#'><a onClick={showSidebar}><i class="bi bi-list"></i></a></Nav.Link>

                <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Nav.Link href="#home">X</Nav.Link>
                        </li>
                        {sideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Nav.Link href={item.path}>
                                        <span>{item.label}</span>
                                    </Nav.Link>
                                </li>
                            );
                        })}
                    </ul>
                </Nav>
            </div>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            {/* <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/add">Create User</Nav.Link>
                <Nav.Link href="/registration">Registration</Nav.Link>
            </Nav> */}

        </Navbar >
    )
}

export default Header
