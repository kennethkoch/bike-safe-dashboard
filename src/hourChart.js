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
    const worstCyclistTime = (props.hourlyData) ? props.hourlyData.worstCyclistTime : 'N/A';
    const worstPedestrianTime = (props.hourlyData) ? props.hourlyData.worstPedestrianTime : 'N/A';
    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                grid: {
                    color: '#607D8B'
                },
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
                grid: {
                    color: '#607D8B'
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
            }
        },
        plugins: {
            legend: {
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
    };



    const labels = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
        '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
        '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.hourlyData ? props.hourlyData.hourlyCyclistTotals : {},
                borderColor: '#27AE60',
                borderWidth: 2,
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.hourlyData ? props.hourlyData.hourlyPedestrianTotals : {},
                borderColor: '#2980B9',
                borderWidth: 2,
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Accidents by Hour</h3>
            <h4 className='text-center'>
                The most dangerous time of day for cyclists is <span className='cycle-text'>{worstCyclistTime}</span>, <br></br>
                and the most dangerous time of day for pedestrians is <span className='pedestrian-text'>{worstPedestrianTime}</span>.
            </h4>
            <Line options={options} data={data} />;
        </Container>
    )
}

export default HourChart;
