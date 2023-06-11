import React, { useContext } from 'react'
import { NavDropdown, Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthUser } from '../context/authContext';

const TopBar = () => {
    const { authstate, dispatch } = useContext(AuthUser);

    const handleLogoutFun = () => {
        dispatch({
            type: 'LOGOUT'
        })
        localStorage.removeItem('user');
        localStorage.removeItem('auth_token');
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar-bg'>
            <Container>
                <Navbar.Brand href="#home" className='text-dark'>MERN Auth</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-lg-end' id="responsive-navbar-nav">
                    <Nav className='mr-auto align-items-center'>
                        {
                            authstate?.user ? (
                                <Nav.Link eventKey={2} href="#memes" className='text-dark d-flex align-items-center'>
                                    <div className='d-flex flex-column'>
                                        <h6 className='mb-1'>{authstate?.user?.modifiedUser?.name ?? ''}</h6>
                                        <a className='me-3 text-decoration-none'>{authstate?.user?.modifiedUser?.email ?? ''}</a>
                                    </div>
                                    <Button variant="outline-danger" onClick={handleLogoutFun}>Logout</Button>
                                </Nav.Link>
                            ) :
                                (
                                    <>
                                        <Nav.Link eventKey={2} href="#memes" className='text-dark'>
                                            <Link to="auth/login" className='text-decoration-none text-style'>Login</Link>
                                        </Nav.Link>
                                        <Nav.Link eventKey={2} href="#memes" className='text-dark'>
                                            <Link to="auth/signup" className='text-decoration-none text-style'>Signup</Link>
                                        </Nav.Link>
                                    </>
                                )
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default TopBar;
