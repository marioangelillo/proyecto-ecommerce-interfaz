import React from 'react';
import { Jumbotron, Button, Form } from 'react-bootstrap';

export default function Newsletter() {
    return (
        <Jumbotron className="bg-white mt-5 text-center">
            <h3>Recibí todas las novedades</h3>
            <p>
                Puedes recibir todas las novedades de nuestros productos, solo dejandonos tu email y nosotros te mantenemos al tanto.
            </p>
            <Form.Row className="justify-content-center">
                <Form.Control className="mb-2 w-50" type="email"/>
            </Form.Row>
            
            <p>
                <Button variant="primary">Enviar</Button>
            </p>
        </Jumbotron>
    )
}
