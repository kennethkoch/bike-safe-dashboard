import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { CardGroup, Col, Row } from 'react-bootstrap'
import { useState } from 'react'

const Counters = (props) => {
    console.log(props)

    return (
        <Container>
            <Row>
                <Col>
                    <br></br>
                    <h3 className='text-center'>Year to Date Injury Tracker</h3>
                    <CardGroup>
                        <Card id='cyclist-card' className='text-center' style={{ width: '18rem' }}>
                            <Card.Header>Cyclists</Card.Header>
                            <Card.Body>
                                <Card.Title>Injuries: {props.counterData.ytdCyclistInjuries}</Card.Title>
                                <Card.Text>
                                    Deaths: {props.counterData.ytdCyclistDeaths}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card id='pedestrian-card' className='text-center' style={{ width: '18rem' }}>
                            <Card.Header>Pedestrians</Card.Header>
                            <Card.Body>
                                <Card.Title>Injuries: {props.counterData.ytdPedestrianInjuries}</Card.Title>
                                <Card.Text>
                                    Deaths: {props.counterData.ytdPedestrianDeaths}
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