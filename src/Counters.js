import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { CardGroup, Col, Row } from 'react-bootstrap'
import React from 'react'


const Counters = (props) => {
    const currentDate = new Date()
    const currentDateStr = new Date().toLocaleDateString()
    const currentYear = currentDate.getFullYear();
    const percentDifference = (str1, str2) => {
        let num1 = parseInt(str1)
        let num2 = parseInt(str2)
        let change = ((num1) - (num2)) / (num2) * 100
        if (change >= 0) {
            return '+' + change.toFixed(2) + '%'
        }
        else {
            return change.toFixed(2) + '%'
        }
    }
    if (props.counterData) {
        console.log(percentDifference(props.counterData.ytdCyclistInjuries, props.counterData.lastYtdCyclistInjuries))
    }

    const cylcistInjuryChange = props.counterData ? percentDifference(props.counterData.ytdCyclistInjuries, props.counterData.lastYtdCyclistInjuries) : 0
    const cyclistDeathChange = props.counterData ? percentDifference(props.counterData.ytdCyclistDeaths, props.counterData.lastYtdCyclistDeaths) : 0
    const pedestrianInjuryChange = props.counterData ? percentDifference(props.counterData.ytdPedestrianInjuries, props.counterData.lastYtdPedestrianInjuries) : 0
    const pedestrianDeathChange = props.counterData ? percentDifference(props.counterData.ytdPedestrianDeaths, props.counterData.lastYtdPedestrianDeaths) : 0
    return (
        <Container>
            <Row>
                <Col>
                    <br></br>
                    <h3 className='text-center'>{currentYear} vs. {currentYear - 1} Year to Date</h3>
                    <h6 className='text-center'>As of {currentDateStr}, (vs. this time last year)</h6>
                    <CardGroup>
                        <Card id='cyclist-card' className='text-center' style={{ width: '18rem' }}>
                            <Card.Header>Cyclists</Card.Header>
                            <Card.Body>
                                <Card.Text><strong>Injuries:</strong> {props.counterData ? `${props.counterData.ytdCyclistInjuries} vs. 
                                ${props.counterData.lastYtdCyclistInjuries} ` : 0}
                                    <span className='percent-text'>({cylcistInjuryChange})</span>

                                </Card.Text>

                                <Card.Text>
                                    <strong>Deaths:</strong> {props.counterData ? `${props.counterData.ytdCyclistDeaths} vs. 
                                    ${props.counterData.lastYtdCyclistDeaths} ` : 0}
                                    <span className='percent-text'>({cyclistDeathChange})</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card id='pedestrian-card' className='text-center' style={{ width: '18rem' }}>
                            <Card.Header>Pedestrians</Card.Header>
                            <Card.Body>
                                <Card.Text><strong>Injuries:</strong> {props.counterData ? `${props.counterData.ytdPedestrianInjuries} vs. 
                                ${props.counterData.lastYtdPedestrianInjuries} ` : 0}
                                    <span className='percent-text'>({pedestrianInjuryChange})</span>
                                </Card.Text>
                                <Card.Text>
                                    <strong>Deaths:</strong> {props.counterData ? `${props.counterData.ytdPedestrianDeaths} vs. 
                                    ${props.counterData.lastYtdPedestrianDeaths} ` : 0}
                                    <span className='percent-text'>({pedestrianDeathChange})</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <br></br>
        </Container>
    )
}

export default Counters