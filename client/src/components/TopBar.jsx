import React from 'react'
import { NavDropdown, Container, Nav, Navbar } from 'react-bootstrap';

const TopBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar-bg'>
            <Container>
                <Navbar.Brand href="#home" className='text-dark'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-lg-end' id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link href="#deets" className='text-dark'>More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className='text-dark'>
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopBar;
