import React, {useState} from 'react';
import { Form, Button, Table, Row } from 'react-bootstrap';

export default function AddCategories({categoria, setCategoria, categorias, setCategorias}) {


    const {nombre} = categoria;

    const handleChangeCategoria = e => {
        setCategoria({
            ...categoria,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmitCategoria = async e => {
        e.preventDefault();
        
        if(nombre.trim() === ''){
            alert('Debe completar todos los campos');
        }

        const solicitud = await fetch('http://localhost:4000/api/admin/agregarcategorias',{
            method : 'POST',
            body : JSON.stringify(categoria),
            headers : {
            'Content-Type' : 'application/json'
            }
        })

        const respuesta = await solicitud.json();

        if(solicitud.ok) {           
            
            // Restaurar formulario
            setCategoria({
            nombre : ''
            });
            alert ('Categoria creada correctamente');

            setCategorias([...categorias, respuesta.categoria]);

        }else{
            alert(respuesta.msg);
        }
    }

    return (
        <>   
            <Row>
                <Form className="w-75" onSubmit={handleSubmitCategoria}>
                    <Form.Group controlId="nombreProduct">
                        <Form.Label>Agregar categoria</Form.Label>
                        <Form.Control
                        type="name"
                        name="nombre"
                        value={nombre}
                        onChange={handleChangeCategoria}
                        placeholder="Nombre de la categoria"
                        required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">Agregar</Button>

                </Form>
            </Row>
            

            <div className="table-responsive my-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Acciones</th>                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>                    
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>                    
                    </tr>
                    
                </tbody>
            </Table>
        </div>
        </>
    )
}
