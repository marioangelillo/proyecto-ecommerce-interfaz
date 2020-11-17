import React from 'react';
import {Form, Row} from 'react-bootstrap';

export default function Categorias() {

    return (
        <Row className="d-flex justify-content-between">
            <h3>Productos</h3>
            <Form style={{width: '200px'}}>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control as="select">
                    <option value="" selected disabled>Categorias</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </Row>
    )
}
