import React, {Fragment} from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import categorias from '../css/categorias.css'
export default function Categorias() {
    return (
       <Fragment>
            <Container className="mt-2" fluid>
                <Row className="no-gutters">

                    <Col sm={12} md={4} className="box p-1">
                        <a className="box" href="/productos"><img src="https://picsum.photos/600/800" className="img-fluid h-100 w-100"></img></a>
                    </Col>

                    <Col sm={12} md={8} className="p-0">
                        <Col sm={12}  className="box p-1">
                            <a href="/productos"><img src="https://picsum.photos/800/400" className="img-fluid w-100"></img></a>
                        </Col>
                        
                        <Row className="no-gutters">
                            <Col sm={12} md={6} className="box p-1">
                                <a href="/productos"><img src="https://picsum.photos/600/400" className="img-fluid w-100"></img></a>
                            </Col>

                            <Col sm={12} md={6} className="box p-1">
                                <a href="/productos"><img src="https://picsum.photos/600/400" className="img-fluid w-100"></img></a>
                            </Col>
                        </Row>                    
                    </Col>

                </Row>  
            </Container>                   
       </Fragment>
    )
}
