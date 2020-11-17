import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Categorias from './productos-components/Categorias';
import ListadoProductos from './productos-components/ListadoProductos';

export default function Productos() {
    return (
        <Container className="mt-2" fluid>
            
            <Categorias />
            <hr className="mt-0" />
            <ListadoProductos />
               
        </Container>
    )
}
