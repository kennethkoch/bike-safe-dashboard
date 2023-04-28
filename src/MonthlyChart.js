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
    const worstCyclistMonth = (props.monthlyData && props.monthlyData.worstCyclistMonth) ? props.monthlyData.worstCyclistMonth : 'N/A';
    const worstPedestrianMonth = (props.monthlyData && props.monthlyData.worstPedestrianMonth) ? props.monthlyData.worstPedestrianMonth : 'N/A';
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
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.isLoading ? {} : props.monthlyData.monthlyCyclistAverages,
                borderColor: '#27AE60',
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.isLoading ? {} : props.monthlyData.monthlyPedestrianAverages,
                borderColor: '#2980B9',
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Average Monthly Accidents</h3>
            <h4 className='text-center'>The most dangerous month for cyclists has historically
                been <span style={{ fontWeight: 'bold', color: '#cef5ea' }}>{worstCyclistMonth}</span>, <br></br>while the most dangerous month for pedestrians has
                been <span style={{ fontWeight: 'bold', color: '#c0d2fc' }}>{worstPedestrianMonth}.</span></h4>
            <Line options={options} data={data} />
            <br></br>
            <br></br>
        </Container>
    )
}
export default MonthlyChart