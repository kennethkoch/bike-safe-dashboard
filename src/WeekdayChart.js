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
import { propTypes } from 'react-bootstrap/esm/Image';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const WeekdayChart = (props) => {

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Incidents Grouped by day of the Week',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.weeklyData.weeklyCyclistTotals,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Pedestrians',
                data: props.weeklyData.weeklyPedestrianTotals,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Weekly Totals</h3>
            <Bar options={options} data={data} />
            <br></br>
            <br></br>
        </Container>
    )
}
export default WeekdayChart