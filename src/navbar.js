import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll'

const ScrollLink = ({ to, children }) => (
    <Link
        to={to}
        smooth={true}
        duration={500}
        offset={-50}
        spy={true}
        exact="true"
        onClick={() => console.log("Link clicked")}
    >
        {children}
    </Link>
);

function Navigation() {
    return (
        <Navbar bg='dark' variant='dark' className='sticky-top' expand="lg"  >
            <Container>
                <Navbar.Brand className='me-auto' id='nav-title' href="#">NYC Cyclist and Pedestrian Safety Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <NavDropdown bg='dark' menuVariant='dark' title="Statistics" id="basic-nav-dropdown">
                            <ScrollLink to="yearlyChart">
                                <NavDropdown.Item>Yearly</NavDropdown.Item>
                            </ScrollLink>

                            <ScrollLink to="monthlyChart">
                                <NavDropdown.Item>Monthly</NavDropdown.Item>
                            </ScrollLink>


                            <ScrollLink to="dailyChart">
                                <NavDropdown.Item>Daily</NavDropdown.Item>
                            </ScrollLink>


                            <ScrollLink to="hourChart">
                                <NavDropdown.Item>Hourly</NavDropdown.Item>
                            </ScrollLink>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation