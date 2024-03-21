import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardBody, Container, Row, Col, Table } from "reactstrap";
import Header from "components/Headers/Header.js";
import Demo from './Demo';

function DeliveryReports() {

    const [salesDataLine, setSalesDataLine] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [10000, 12000, 15000, 13000, 16000, 14000, 18000],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    });

    const [salesDataBar, setSalesDataBar] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [10000, 12000, 15000, 13000, 16000, 14000, 18000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
            },
        ],
    });

    // Sample delivery boys data
    const deliveryBoys = [
        {
            id: 1,
            name: 'John Doe',
            imageUrl: 'https://via.placeholder.com/150',
            orders: 10,
            totalAmount: 500,
        },
        {
            id: 2,
            name: 'Jane Smith',
            imageUrl: 'https://via.placeholder.com/150',
            orders: 15,
            totalAmount: 700,
        },
        // Add more delivery boys as needed
    ];

    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <Col lg="6" xl="6">
                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <h3 className="mb-0">Monthly Sales</h3>
                            </CardHeader>
                            <CardBody>
                                <div className="chart">
                                    <Line data={salesDataLine} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="6">
                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <h3 className="mb-0">Total Delivery</h3>
                            </CardHeader>
                            <CardBody>
                                <div className="chart">
                                    <Bar data={salesDataBar} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Card className="bg-default shadow">
                            <CardHeader className="bg-transparent border-0">
                                <h3 className="text-white mb-0">Delivery Boys Data</h3>
                            </CardHeader>
                            <Table
                                className="align-items-center table-dark table-flush"
                                responsive
                            >
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Number of Orders</th>
                                        <th scope="col">Total Amount</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Iterate through delivery boys data and render each row */}
                                    {deliveryBoys.map((deliveryBoy) => (
                                        <tr key={deliveryBoy.id}>
                                            <td>
                                                <img
                                                    src={deliveryBoy.imageUrl}
                                                    alt={deliveryBoy.name}
                                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                                />
                                            </td>
                                            <td>{deliveryBoy.name}</td>
                                            <td>{deliveryBoy.orders}</td>
                                            <td>{deliveryBoy.totalAmount}</td>
                                            <td className="text-right">
                                               
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DeliveryReports;
