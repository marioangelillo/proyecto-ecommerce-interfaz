import React from 'react';
import {Form, Row} from 'react-bootstrap';

export default function Categorias({categorias}) {

    return (
        <Row className="d-flex justify-content-between">
            <h3>Productos</h3>
            <Form style={{width: '200px'}}>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control as="select">
                    <option value="" selected disabled>Categorias</option>
                    {
                        categorias.map(cat => {
                            return(
                                <option>{cat.nombre}</option>
                            )
                        })
                    } 
                    </Form.Control>
                </Form.Group>
            </Form>
        </Row>
    )
}
