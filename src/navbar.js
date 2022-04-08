import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
function Nav() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">NYC Cyclist and Pedestrian Safety Dashboard</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav