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
                    <CardGroup>
                        <Card className='text-center' border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Cyclists</Card.Header>
                            <Card.Body>
                                <Card.Title>Injuries: {props.counterData.ytdCyclistInjuries}</Card.Title>
                                <Card.Text>
                                    Deaths: {props.counterData.ytdCyclistDeaths}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* <br /> */}


                        {/* <Card className='text-center' border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Cyclists Killed</Card.Header>
                            <Card.Body>
                                <Card.Title>10</Card.Title>
                                <Card.Text>
                                    +0
                                </Card.Text>
                            </Card.Body>
                        </Card> */}
                        {/* <br /> */}

                        <Card className='text-center' border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Pedestrians</Card.Header>
                            <Card.Body>
                                <Card.Title>Injuries: {props.counterData.ytdPedestrianInjuries}</Card.Title>
                                <Card.Text>
                                    Deaths: {props.counterData.ytdPedestrianDeaths}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* <br /> */}

                        {/* <Card className='text-center' border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Pedestrians Killed</Card.Header>
                            <Card.Body>
                                <Card.Title>10</Card.Title>
                                <Card.Text>
                                    +0
                                </Card.Text>
                            </Card.Body>
                        </Card> */}
                        {/* <br /> */}
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Counters