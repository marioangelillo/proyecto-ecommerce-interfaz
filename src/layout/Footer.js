import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

export default function Footer() {
    return (
        <Container className="bg-light" fluid>
            <Row>
                <Col sm={6} md={3}>
                    <h3>Nombre</h3>
                    <h4>Logo</h4>
                </Col>

                <Col sm={6} md={3}>
                    <ul>
                        <li>Telefono</li>
                        <li>Direccion</li>
                        <li>Email</li>
                        <li>Iconos redes</li>
                    </ul>
                </Col>

                <Col sm={6} md={3}>
                    <ul>
                        <li>Preguntas frecuentes</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                        <li>Otro mas</li>
                    </ul>
                </Col>

                <Col sm={6} md={3}>
                    <h3>Codigo QR</h3>
                </Col>
            </Row>
        </Container>
    )
}
