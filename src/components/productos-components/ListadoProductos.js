import React from 'react';
import ProductCard from '../../layout/ProductCard';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default function ListadoProductos({productos, listaCarrito, setListaCarrito, categoriaSeleccionada}) {
    return (
        <>
           <Row>
            {categoriaSeleccionada === 'todas' ?
                productos.map(prod =>{
                    return(
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard prod={prod} listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}/>
                        </Col>
                    )
                })
                :
                productos.filter(producto => producto.categoria === categoriaSeleccionada).map(prod =>{
                    return(
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard prod={prod} listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}/>
                        </Col>
                    )
                }
                )
                /*
               prodCategoria.map(prod =>{
                    return(
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard prod={prod} listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}/>
                        </Col>
                    )
                })*/
                }

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
