import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddProduct({listarCategorias, categorias, setCategorias}) {

    return (
        <Form>
            <Form.Group controlId="nombreProduct">
                <Form.Label>Nombre producto</Form.Label>
                <Form.Control type="name"/>
            </Form.Group>

            <Form.Group controlId="precioProduct">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number"  />
            </Form.Group>

            <Form.Group controlId="stockProduct">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number"  />
            </Form.Group>

            <Form.Group controlId="categoriaProduct">
                <Form.Label>Seleccione una categoría</Form.Label>
                <Form.Control as="select" /*onClick={async () => setCategorias(await listarCategorias())}*/>
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

            <Form.Group controlId="descripcionProduct">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="imagenProduct">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Agregar
            </Button>
        </Form>
    )
}
