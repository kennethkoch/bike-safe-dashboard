import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
function Nav() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav