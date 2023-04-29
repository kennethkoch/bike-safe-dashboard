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
    const worstCyclistYear = (props.yearlyData) ? props.yearlyData.worstCyclistYear : 'N/A';
    const worstPedestrianYear = (props.yearlyData) ? props.yearlyData.worstPedestrianYear : 'N/A';
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
    //TODO: add 2023
    const labels = ['2012*(Jul-Dec)', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.isLoading ? {} : props.yearlyData.yearlyCyclistTotals,
                borderColor: '#27AE60',
                borderWidth: 2,
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.isLoading ? {} : props.yearlyData.yearlyPedestrianTotals,
                borderColor: '#2980B9',
                borderWidth: 2,
                backgroundColor: '#3498DB',
            },
        ],
    };
    return (
        <Container>
            <h3 className='text-center'>Yearly Totals</h3>
            <h4 className='text-center'>The worst year on record
                for cyclists was <span className='cycle-text'>{worstCyclistYear}</span>,
                and the worst year for pedestrians was <span className='pedestrian-text'>{worstPedestrianYear}</span>. <br></br>
                2022 was <span className='cycle-text'>x percent safer</span> than 2021 for cyclists, and <span className='pedestrian-text'>y percent safer</span> for pedestrians. <br></br>
                Through {currentDateStr}, this year has been <span className='cycle-text'>x percent safer</span> than last year for cyclists, and <span className='pedestrian-text'>y percent safer</span> for pedestrians when compared
                with the same time period in 2022.
            </h4>
            <Bar options={options} data={data} />
            <br></br>
        </Container>
    )
}

export default YearlyChart