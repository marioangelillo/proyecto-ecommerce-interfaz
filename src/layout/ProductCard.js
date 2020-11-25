import React from 'react';
import {Card, Button, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProductCard({prod}) {
    return (
        <div className="item">
            <Card key={prod._id}>
                {
                    prod.imagen ?
                    <Card.Img variant="top" className="img-fluid" src={prod.imagen} style={{height: '350px'}}/>
                    : <Card.Img variant="top" className="img-fluid" src="https://via.placeholder.com/300px350" style={{height: '350px'}}/>

                }
                <Card.Body>
                    <Card.Title className="text-center">{prod.nombre.toUpperCase()}</Card.Title>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <h5 className="mt-1">${prod.precio}</h5>

                        <ButtonGroup aria-label="Basic example">
                            <Button variant="outline-success border-1">
                                <FontAwesomeIcon icon={["fa", "info-circle"]}/>
                            </Button>
                            <Button variant="outline-success border-1">
                            <FontAwesomeIcon icon={["fa", "shopping-cart"]}/>
                            </Button>                                            
                        </ButtonGroup>
                        
                    </div>                            
                </Card.Body>
            </Card>
        </div>
    )
}
