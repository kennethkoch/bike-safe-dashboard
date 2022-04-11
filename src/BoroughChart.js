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
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
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
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
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