import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';




ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const WeekdayChart = (props) => {
    const worstCyclistDay = (props.weekDayData) ? props.weekDayData.worstCyclistDay : 'N/A';
    const worstPedestrianDay = (props.weekDayData) ? props.weekDayData.worstPedestrianDay : 'N/A';
    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#ECF0F1',
                    font: {
                        size: 17,
                        weight: 500,

                    }
                },
                title: {
                    display: true,
                    text: 'Click Category to Show/Hide Data',
                    color: '#BDBDBD',
                },
            },
        },
        responsive: true,
        scales: {
            x: {
                display: true,
                grid: {
                    color: '#78909C'
                },
                title: {
                    display: true,
                    text: 'Day of the Week',
                    color: '#ECF0F1',
                    font: {
                        size: 22
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
                    text: 'Accidents',
                    color: '#ECF0F1',
                    font: {
                        size: 22
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
    };

    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.weekDayData ? props.weekDayData.cyclistDayCounts : {},
                borderColor: '#27AE60',
                borderWidth: 2,
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.weekDayData ? props.weekDayData.pedestrianDayCounts : {},
                borderColor: '#2980B9',
                borderWidth: 2,
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Accidents by Day of the Week</h3>
            <h4 className='text-center'>
                The most dangerous day of the week for cyclists is <span className='cycle-text'>{worstCyclistDay}</span>, <br></br>
                and the most dangerous day for pedestrians is <span className='pedestrian-text'>{worstPedestrianDay}</span>.
            </h4>
            <Bar options={options} data={data} />
            <br></br>
        </Container>
    )
}
export default WeekdayChart