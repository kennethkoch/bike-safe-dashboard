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
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Monthly Average Incidents',
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
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Pedestrians',
                data: props.monthlyData.monthlyPedestrianAverages,
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
export default MonthlyChart