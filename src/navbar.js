import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
function Nav() {
    return (
        <Navbar expand="lg"  >
            <Container>
                <Navbar.Brand className='mx-auto' id='nav-title' href="#">NYC Cyclist and Pedestrian Safety Dashboard</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav