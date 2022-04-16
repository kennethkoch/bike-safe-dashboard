import React from 'react';
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);

const BoroughChart = (props) => {

    const options = {
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                display: true,
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
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Borough',
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
                    color: '#ECF0F1',
                },
                labels: {
                    color: '#ECF0F1',
                    font: {
                        size: 17,
                        weight: 500,

                    }
                }
            },
            title: {
                display: true,
                padding: 18,
                text: 'Accidents Involving Injuries Grouped by Borough',
                color: '#BDBDBD'
            },
        },
    };

    const labels = ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Unknown/Other'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Cyclists',
                data: props.boroughData.cyclistBoroughTotals,
                borderColor: '#27AE60',
                backgroundColor: '#2ECC71',
            },
            {
                label: 'Pedestrians',
                data: props.boroughData.pedestrianBoroughTotals,
                borderColor: '#2980B9',
                backgroundColor: '#3498DB',
            },
        ],
    };
    // const cyclistData = {
    //     plugins: {
    //         legend: {
    //             display: true,
    //             position: 'top',
    //             color: '#ECF0F1',
    //             title: {
    //                 display: true,
    //                 text: 'Click Category to Show/Hide Data',
    //                 color: '#ECF0F1',
    //             },
    //             labels: {
    //                 color: '#ECF0F1',
    //                 font: {
    //                     size: 17,
    //                     weight: 500,

    //                 }
    //             }
    //         },
    //     },
    //     labels: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Unknown/Other'],
    //     datasets: [
    //         {
    //             label: '# of Incidents',
    //             data: props.boroughData.cyclistBoroughTotals,
    //             backgroundColor: [
    //                 '#C62828',
    //                 '#0050EF',
    //                 '#4CAF50',
    //                 '#FFAB00',
    //                 '#AA00FF',
    //                 '#9E9E9E',
    //             ],
    //             borderColor: '#16A085',
    //             borderWidth: 3,
    //         },
    //     ],
    // };
    // const pedestrianData = {
    //     labels: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Unknown/Other'],
    //     datasets: [
    //         {
    //             label: '# of Incidents',
    //             data: props.boroughData.pedestrianBoroughTotals,
    //             backgroundColor: [
    //                 '#C62828',
    //                 '#0050EF',
    //                 '#4CAF50',
    //                 '#FFAB00',
    //                 '#AA00FF',
    //                 '#9E9E9E',
    //             ],
    //             borderColor: '#2980B9',
    //             borderWidth: 3,
    //         },
    //     ],
    // };

    return (
        <Container>
            <h3 className='text-center'>Accidents by Borough</h3>
            <Bar options={options} data={data} />
            {/* <Row>
                <Col>
                    <h3 className='text-center'>Cyclists</h3>
                    <Pie data={cyclistData} />

                </Col>
                <Col>
                    <h3 className='text-center'>Pedestrians</h3>
                    <Pie data={pedestrianData} />
                </Col>

            </Row> */}
            <br></br>
            <br></br>
        </Container>
    )
}

export default BoroughChart