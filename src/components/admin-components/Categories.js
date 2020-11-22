import React, {useState} from 'react';
import { Form, Button, Table, Row, Col } from 'react-bootstrap';

export default function Categories({categoria, setCategoria, categorias, setCategorias}) {


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

    const eliminarCategoria = async (id) =>{
        //alert(id);        
         if(window.confirm('¿Esta seguro que desea eliminar la categoria?')){
            const solicitud = await fetch('http://localhost:4000/api/admin/eliminarcategorias/'+id,{
            method : 'DELETE',           
            headers : {
            'Content-Type' : 'application/json',
            }
        })        
        const respuesta = await solicitud.json();
        if(solicitud.ok){            
            // Setear al estado (ES PARA QUE NO TENGAMOS QUE RECARGAR LA PAG PARA VER LOS CAMBIOS)
            setCategorias([
                ...categorias.filter(cat => cat._id !== id)
            ]);
        }else{
            alert(respuesta.msg);
        }
        
    }
        
    
    }

    return (
        <>   
                <h5>Agregar categoría</h5>
                <Form onSubmit={handleSubmitCategoria}>    
                    <Row>  
                        <Col xs={12} md={9}>              
                        <Form.Group controlId="nombreProduct">                            
                            <Form.Control
                            type="name"
                            name="nombre"
                            value={nombre}
                            onChange={handleChangeCategoria}
                            placeholder="Nombre de la categoria"
                            required
                            />
                        </Form.Group>
                        </Col>

                        <Col xs={12} md={3}>              
                            <Button variant="primary w-100" type="submit">Agregar</Button>
                        </Col>
                    </Row>
                </Form>
            
            

            <div className="table-responsive my-2">
            <Table striped bordered hover>
                <thead>
                    <tr>                    
                    <th>Nombre</th>
                    <th>Acciones</th>                    
                    </tr>
                </thead>
                <tbody>
                    {
                        categorias.map(cat =>{
                            return(
                                <tr key={cat._id}>
                                    <td>{cat.nombre}</td>
                                    <td>
                                        <Button variant="danger btn-sm mr-1" onClick={() => eliminarCategoria(cat._id)}>Borrar</Button>
                                        <Button variant="warning btn-sm">Modificar</Button>
                                    </td>                    
                                </tr>
                            )
                        })
                    }
                                       
                </tbody>
            </Table>
        </div>
        </>
    )
}
