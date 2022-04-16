import React from 'react';
import { Container, Row, Col, FormCheck } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const HourChart = (props) => {

    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Hour of Accident',
                    color: '#ECF0F1',
                    font: {
                        size: 20
                    }

                },
                ticks: {
                    color: "#ECF0F1",
                    font: {
                        size: 14
                    }
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Accidents',
                    color: '#ECF0F1',
                    font: {
                        size: 20
                    }
                },
                ticks: {
                    color: "#ECF0F1",
                    font: {
                        size: 16
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#ECF0F1',
                }
            },
            title: {
                display: true,
                text: 'Accidents Involving Injury Grouped by Hour',
                color: '#BDBDBD'
            },
        },
    };



    const labels = ['12:00 a.m.', '1:00 a.m.', '2:00 a.m.', '3:00 a.m.', '4:00 a.m.', '5:00 a.m.', '6:00 a.m.',
        '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.',
        '3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.', '8:00 p.m.', '9:00 p.m.', '10:00 p.m.', '11:00 p.m.'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.hourlyData.hourlyCyclistTotals,
                borderColor: '#27AE60',
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.hourlyData.hourlyPedestrianTotals,
                borderColor: '#2980B9',
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Accidents by Hour</h3>
            <Line options={options} data={data} />;
        </Container>
    )
}

export default HourChart;
