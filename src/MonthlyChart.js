import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    // BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';



ChartJS.register(
    CategoryScale,
    LinearScale,
    // BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const MonthlyChart = (props) => {
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
                    color: '#607D8B'
                },
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
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.monthlyData ? props.monthlyData.monthlyCyclistAverages : [],
                borderColor: '#27AE60',
                borderWidth: 2,
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.monthlyData ? props.monthlyData.monthlyPedestrianAverages : [],
                borderColor: '#2980B9',
                borderWidth: 2,
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <div id="monthlyChart">
                <h3 className='text-center'>Average Monthly Accidents</h3>
                <Line options={options} data={data} />
                <br></br>
            </div>
        </Container>
    )
}
export default MonthlyChart