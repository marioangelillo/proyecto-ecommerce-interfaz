import React from 'react';
import {Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Categories from './Categories';
import Sales from './Sales';

export default function AdminMenu({listarCategorias, categoria, setCategoria, categorias, setCategorias,
     producto, setProducto, productos, setProductos}) {

    return (
        <Container className="my-2" fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column h-100 pr-2 border-right">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Listado productos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Agregar producto</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="tres">Categorías</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="cuatro">Ventas</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <ProductList productos={productos} setProductos={setProductos}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <AddProduct
                             listarCategorias={listarCategorias}
                             categorias={categorias} setCategorias={setCategorias}
                             producto={producto} setProducto={setProducto}
                             productos={productos} setProductos={setProductos}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tres">
                            <Categories
                             categoria={categoria} setCategoria={setCategoria}
                             categorias={categorias} setCategorias={setCategorias}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="cuatro">
                            <Sales />
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
        
    )
}
