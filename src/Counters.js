import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { CardGroup, Col, Row } from 'react-bootstrap'
import React from 'react'


const Counters = (props) => {
    const currentDate = new Date()
    const currentDateStr = new Date().toLocaleDateString()
    const currentYear = currentDate.getFullYear();
    return (
        <Container>
            <Row>
                <Col>
                    <br></br>
                    <h3 className='text-center'>{currentYear} Year to Date Injury Tracker</h3>
                    <h4 className='text-center'>As of {currentDateStr}</h4>
                    <CardGroup>
                        <Card id='cyclist-card' className='text-center' style={{ width: '18rem' }}>
                            <Card.Header>Cyclists</Card.Header>
                            <Card.Body>
                                <Card.Title>Injuries: {props.isLoading ? 0 : props.counterData.ytdCyclistInjuries}</Card.Title>
                                <Card.Text>
                                    Deaths: {props.isLoading ? 0 : props.counterData.ytdCyclistDeaths}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card id='pedestrian-card' className='text-center' style={{ width: '18rem' }}>
                            <Card.Header>Pedestrians</Card.Header>
                            <Card.Body>
                                <Card.Title>Injuries: {props.isLoading ? 0 : props.counterData.ytdPedestrianInjuries}</Card.Title>
                                <Card.Text>
                                    Deaths: {props.isLoading ? 0 : props.counterData.ytdPedestrianDeaths}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <br></br>
            <br></br>
        </Container>
    )
}

export default Counters