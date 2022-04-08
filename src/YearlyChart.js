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
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Yearly Incidents',
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
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Pedestrians',
                data: props.yearlyData.yearlyPedestrianTotals,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <Container>
            <Bar options={options} data={data} />
        </Container>
    )
}

export default YearlyChart