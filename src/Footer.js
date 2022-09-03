import { Container, Row, Col } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";

function Footer() {
    return (
        <Container id='footer'
            className='text-center align-content-center'
            fluid fixed='bottom'>
            <Row>
                <Col id='left-footer-item'>
                    Data sourced from <a href='https://opendata.cityofnewyork.us/'>NYC Open Data</a></Col>
                <Col id='right-footer-item'> <a href='https://github.com/kennethkoch/bike-safe-dashboard'>View on GitHub <BsGithub /></a></Col>
            </Row>
        </Container>

    )
}

export default Footer