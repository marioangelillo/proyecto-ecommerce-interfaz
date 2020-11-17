import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function ListadoProductos() {
    return (
        <>
           <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/1/300/300" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/1/300/300" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/1/300/300" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/1/300/300" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/1/300/300" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

           </Row> 
        </>
    )
}
