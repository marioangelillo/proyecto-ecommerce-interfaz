import React from 'react';
import { Form, Button, Modal, Col, Row } from "react-bootstrap";


export default function FormularioCarrito() {
    return (
        <>
            <Form className="mt-2">
                <Form.Row>
                    <Form.Group as={Col} controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text"
                        name="nombre"
                    />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control 
                        type="text"
                        name="apellido"
                    />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formDni">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control 
                        type="text"
                        name="dni"                    
                    />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control 
                        type="email"
                        name="email"                    
                    />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control 
                        type="text"
                        name="telefono"
                    />
                    </Form.Group>       
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formProvincia">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control 
                        type="text"
                        name="provincia"
                    />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formCiudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control 
                        type="text"
                        name="ciudad"
                    />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDomicilio">
                    <Form.Label>Domicilio</Form.Label>
                    <Form.Control 
                        type="text"
                        name="domicilio"
                    />
                    </Form.Group>
                </Form.Row>            
            
            </Form>
        </>
    )
}
