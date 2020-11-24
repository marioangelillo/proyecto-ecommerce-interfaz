import React from 'react';
import {Card, Button} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function ProductosDestacados({productos}) {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,        
        //navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };
    return (
        <>
            <h1 className="mt-5 text-center">Productos Destacados</h1>
            <hr className="w-75" />
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                {...options}                
            >
                {/*<div className="item"><img className="img-fluid" src="https://picsum.photos/id/1/300/500" style={{maxHeight: '500px'}}></img></div>*/}
                {productos.map(prod =>{
                    return(
                        <div className="item">
                            <Card key={prod._id}>
                                {
                                    prod.imagen ?
                                    <Card.Img variant="top" className="img-fluid" src={prod.imagen} style={{height: '300px'}}/>
                                    : <Card.Img variant="top" className="img-fluid" src="https://via.placeholder.com/300px300" style={{height: '300px'}}/>

                                }
                                <Card.Body>
                                    <Card.Title className="text-center">{prod.nombre.toUpperCase()}</Card.Title>
                                    <Card.Text className="d-flex justify-content-between">
                                    <Button variant="outline-dark">-</Button>
                                    <input className="w-50 text-center" defaultValue="1" readOnly></input>
                                    <Button variant="outline-dark">+</Button>
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="outline-success border-1" href="/productos">{prod.precio}</Button>
                                        <Button variant="outline-success border-1">Comprar</Button>
                                    </div>                            
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
                <div className="item">
                    <Card>
                        <Card.Img variant="top" className="img-fluid" src="https://picsum.photos/id/1/300/300" style={{height: '300px'}}/>
                        <Card.Body>
                            <Card.Title className="text-center">Nombre Producto1</Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                            <Button variant="outline-dark">-</Button>
                            <input className="w-50 text-center" defaultValue="1" readOnly></input>
                            <Button variant="outline-dark">+</Button>
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button variant="outline-success border-1" href="/productos">Ver más</Button>
                                <Button variant="outline-success border-1">Comprar</Button>
                            </div>                            
                        </Card.Body>
                    </Card>
                </div>

                {/*<div className="item">
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/2/300/300" />
                        <Card.Body>
                            <Card.Title className="text-center">Nombre Producto2</Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                            <Button variant="outline-dark">-</Button>
                            <input className="w-50 text-center" defaultValue="1"  readOnly></input>
                            <Button variant="outline-dark">+</Button>
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button variant="outline-success border-1">Ver más</Button>
                                <Button variant="outline-success border-1">Comprar</Button>
                            </div> 
                        </Card.Body>
                    </Card>
                </div>

                <div className="item">
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/3/500/500" />
                        <Card.Body>
                            <Card.Title className="text-center">Nombre Producto3</Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                            <Button variant="outline-dark">-</Button>
                            <input className="w-50 text-center" defaultValue="1"  readOnly></input>
                            <Button variant="outline-dark">+</Button>
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button variant="outline-success border-1">Ver más</Button>
                                <Button variant="outline-success border-1">Comprar</Button>
                            </div> 
                        </Card.Body>
                    </Card>
                </div>

                <div className="item">
                    <Card>
                        <Card.Img variant="top" src="https://picsum.photos/id/4/500/500" fluid/>
                        <Card.Body>
                            <Card.Title className="text-center">Nombre Producto4</Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                            <Button variant="outline-dark">-</Button>
                            <input className="w-50 text-center" defaultValue="1"  readOnly></input>
                            <Button variant="outline-dark">+</Button>
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button variant="outline-success border-1">Ver más</Button>
                                <Button variant="outline-success border-1">Comprar</Button>
                            </div> 
                        </Card.Body>
                    </Card>
                </div>*/}

            </OwlCarousel>
        </>
    )
}
