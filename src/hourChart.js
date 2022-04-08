import React from 'react';
import { Container, Row, Col, FormCheck } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const HourChart = (props) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Incidents By Hour',
            },
        },
    };



    const labels = ['12:00 a.m.', '1:00 a.m.', '2:00 a.m.', '3:00 a.m.', '4:00 a.m.', '5:00 a.m.', '6:00 a.m.',
        '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.',
        '3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.', '8:00 p.m.', '9:00 p.m.', '10:00 p.m.', '11:00 p.m.'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.hourlyData.hourlyCyclistTotals,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Pedestrians',
                data: props.hourlyData.hourlyPedestrianTotals,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Container>
            <Line options={options} data={data} />;
        </Container>
    )
}

export default HourChart;
