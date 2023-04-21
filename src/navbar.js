// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
function Navigation() {
    return (
        <Navbar bg='dark' variant='dark' className='sticky-top' expand="lg"  >
            <Container>
                <Navbar.Brand className='me-auto' id='nav-title' href="#">NYC Cyclist and Pedestrian Safety Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Map</Nav.Link>
                        <NavDropdown bg='dark' menuVariant='dark' title="Statistics" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Item 1</NavDropdown.Item>
                            <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
                            <NavDropdown.Item href="#">Item 3</NavDropdown.Item>
                            <NavDropdown.Item href="#">Item 4</NavDropdown.Item>
                            <NavDropdown.Item href="#">Item 5</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation