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
    const worstCyclistBorough = (props.boroughData) ? props.boroughData.worstCyclistBorough : 'N/A';
    const worstPedestrianBorough = (props.boroughData) ? props.boroughData.worstPedestrianBorough : 'N/A';
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
                    color: '#BDBDBD',
                },
                labels: {
                    color: '#ECF0F1',
                    font: {
                        size: 17,
                        weight: 500,

                    }
                }
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
                borderWidth: 2,
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.isLoading ? {} : props.boroughData.pedestrianBoroughTotals,
                borderColor: '#2980B9',
                borderWidth: 2,
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Accidents by Borough</h3>
            <h4 className='text-center'><span className='cycle-text'>{worstCyclistBorough}</span> has had the most cyclist accidents of any borough,<br></br>
                while <span className='pedestrian-text'>{worstPedestrianBorough}</span> has had the most pedestrian accidents.</h4>
            <Bar options={options} data={data} />
            <br></br>
            <br></br>
        </Container>
    )
}

export default BoroughChart