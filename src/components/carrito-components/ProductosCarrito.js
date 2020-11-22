import React from 'react'
import { Col, Container, Row, Card, Button, Table } from 'react-bootstrap'

export default function ProductosCarrito() {
    return (
        <Container className="mt-2" fluid>
            <Row>
                <Col md={12} lg={8}>
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>333.33</td>
                            <td>@mdo</td>
                            </tr>                            
                        </tbody>
                    </Table>
                </div>
                    
                </Col>

                <Col md={12} lg={4}>
                    <Card>
                        <Card.Header as="h5">Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
