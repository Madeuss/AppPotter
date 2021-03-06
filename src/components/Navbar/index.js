import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './styles.css';

export default function NavBar() {
    return (
        <Navbar scrolling dark expand="md" fixed="top" className="nav-bar">
            <Navbar.Brand id="navbar-title" href="/">Menuzera top</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> 
                    <Nav.Link id="nav-link" href="/">Home</Nav.Link>
                    <Nav.Link id="nav-link" href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" className="nav-dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
