import React from 'react';
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);

const BoroughChart = (props) => {
    const worstCyclistBorough = 'N/A';
    const worstPedestrianBorough = 'N/A';
    const options = {
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                display: true,
                grid: {
                    color: '#78909C'
                },
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
            },
            y: {
                display: true,
                grid: {
                    color: '#78909C'
                },
                title: {
                    display: true,
                    text: 'Borough',
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
                display: true,
                position: 'top',
                color: '#ECF0F1',
                title: {
                    display: true,
                    text: 'Click Category to Show/Hide Data',
                    color: '#ECF0F1',
                },
                labels: {
                    color: '#ECF0F1',
                    font: {
                        size: 17,
                        weight: 500,

                    }
                }
            },
            title: {
                display: true,
                padding: 18,
                text: 'Accidents Involving Injuries Grouped by Borough',
                color: '#BDBDBD'
            },
        },
    };

    const labels = ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Unknown/Other'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.isLoading ? {} : props.boroughData.cyclistBoroughTotals,
                borderColor: '#27AE60',
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.isLoading ? {} : props.boroughData.pedestrianBoroughTotals,
                borderColor: '#2980B9',
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Accidents by Borough</h3>
            <h4 className='text-center'><span style={{ fontWeight: 'bold', color: '#BDBDBD' }}>{worstCyclistBorough}</span> has had the most cyclist accidents of any borough,<br></br>
                while <span style={{ fontWeight: 'bold', color: '#BDBDBD' }}>{worstPedestrianBorough}</span> has had the most pedestrian accidents.</h4>
            <Bar options={options} data={data} />
            <br></br>
            <br></br>
        </Container>
    )
}

export default BoroughChart