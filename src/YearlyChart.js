import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const YearlyChart = (props) => {
    const currentDate = new Date()
    const currentDateStr = new Date().toLocaleDateString()
    const currentYear = currentDate.getFullYear();
    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                grid: {
                    color: '#78909C'
                },
                title: {
                    display: true,
                    text: 'Year',
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
    const labels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    console.log(props.yearlyData ? props.yearlyData.yearlyCyclistTotals : 'hi')
    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.yearlyData ? props.yearlyData.yearlyCyclistTotals : {},

                borderColor: '#27AE60',
                borderWidth: 2,
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.yearlyData ? props.yearlyData.yearlyPedestrianTotals : {},
                borderColor: '#2980B9',
                borderWidth: 2,
                backgroundColor: '#3498DB',
            },
        ],
    };
    return (
        <Container>
            <div id='yearlyChart'>
                <h3 className='text-center'>Yearly Totals</h3>
            </div>
            <p className='text-center'>(Note: 2012 data from Jul-Dec only)
            </p>
            <Bar options={options} data={data} />
            <br></br>

        </Container>
    )
}

export default YearlyChart