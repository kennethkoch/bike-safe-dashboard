import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

const BoroughChart = (props) => {

    const cyclistData = {
        labels: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Unknown/Other'],
        datasets: [
            {
                label: '# of Incidents',
                data: props.boroughData.cyclistBoroughTotals,
                backgroundColor: [
                    '#C62828',
                    '#0050EF',
                    '#4CAF50',
                    '#FFAB00',
                    '#AA00FF',
                    '#9E9E9E',
                ],
                borderColor: '#16A085',
                borderWidth: 3,
            },
        ],
    };
    const pedestrianData = {
        labels: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Unknown/Other'],
        datasets: [
            {
                label: '# of Incidents',
                data: props.boroughData.pedestrianBoroughTotals,
                backgroundColor: [
                    '#C62828',
                    '#0050EF',
                    '#4CAF50',
                    '#FFAB00',
                    '#AA00FF',
                    '#9E9E9E',
                ],
                borderColor: '#2980B9',
                borderWidth: 3,
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Serious Accidents per Borough</h3>
            <Row>
                <Col>
                    <h3 className='text-center'>Cyclists</h3>
                    <Pie data={cyclistData} />

                </Col>
                <Col>
                    <h3 className='text-center'>Pedestrians</h3>
                    <Pie data={pedestrianData} />
                </Col>

            </Row>
            <br></br>
            <br></br>
        </Container>
    )
}

export default BoroughChart