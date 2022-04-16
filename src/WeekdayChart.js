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
                text: 'Incidents Grouped by Day of the Week',
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
                borderColor: '#27AE60',
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.weeklyData.weeklyPedestrianTotals,
                borderColor: '#2980B9',
                backgroundColor: '#3498DB',
            },
        ],
    };

    return (
        <Container>
            <h3 className='text-center'>Accidents by Day of the Week</h3>
            <Bar options={options} data={data} />
            <br></br>
            <br></br>
        </Container>
    )
}
export default WeekdayChart