import React, {useEffect} from 'react';
import {Form, Row, Container} from 'react-bootstrap';

export default function Categorias({categorias, setCategoriaSeleccionada, categoriaSeleccionada}) {

    useEffect(() => {
        localStorage.setItem('catSeleccionada', JSON.stringify(categoriaSeleccionada));
      }, [categoriaSeleccionada])

    return (
        <Container fluid>
            <Row className="d-flex justify-content-between">
                <h3>Productos</h3>
                <Form style={{width: '200px'}}>
                    <Form.Group controlId="exampleForm.SelectCustom">                        
                        <Form.Control as="select" value={categoriaSeleccionada} onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
                        <option className="font-weight-bold" disabled>Categorias</option>
                        <option value='todas' selected>Todas</option>
                        {
                            categorias.map(cat => {
                                return(
                                    <option value={cat._id}>{cat.nombre}</option>
                                )
                            })
                        } 
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}
