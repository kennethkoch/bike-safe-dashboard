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

const MonthlyChart = (props) => {

    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month',
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
                display: true,
                position: 'right',
                title: 'test',
                labels: {
                    color: '#ECF0F1',
                }
            },
            title: {
                display: true,
                text: 'Average Accidents Involving Injuries per Month',
                color: '#BDBDBD'
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.monthlyData.monthlyCyclistAverages,
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.monthlyData.monthlyPedestrianAverages,
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Monthly Averages</h3>
            <Bar options={options} data={data} />
            <br></br>
            <br></br>
        </Container>
    )
}
export default MonthlyChart