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

    const options = {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Year',
                    color: '#ECF0F1',
                    font: {
                        size: 16
                    }

                },
                ticks: {
                    color: "#ECF0F1",
                    font: {
                        size: 12
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
                        size: 16
                    }
                },
                ticks: {
                    color: "#ECF0F1",
                    font: {
                        size: 12
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',
                color: '#ECF0F1',
                labels: {
                    color: '#ECF0F1',
                }
            },
            title: {
                display: true,
                text: 'Accidents Involving Injuries per Year',
                color: '#ECF0F1'
            },
        },
    };

    const labels = ['2012*(Jul-Dec)', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022 (YTD)'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.yearlyData.yearlyCyclistTotals,
                borderColor: '#27AE60',
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.yearlyData.yearlyPedestrianTotals,
                borderColor: '#2980B9',
                backgroundColor: '#3498DB',
            },
        ],
    };
    return (
        <Container>
            <h3 className='text-center'>Yearly Totals</h3>
            <Bar options={options} data={data} />
            <br></br>
            <br></br>
        </Container>
    )
}

export default YearlyChart