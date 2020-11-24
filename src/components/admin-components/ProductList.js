import React, {useState} from 'react';
import {Table, Button, Form, Col, Row, Image} from 'react-bootstrap';

export default function ProductList({productos, setProductos, categorias}) {

    const [modificar, setModificar] = useState(false);
    const [prodModificado, setProdModificado] = useState();

    /*const modificarProductos = (producto) =>{
        setModificar(true);
        setProdModificado(producto);
        console.log(prodModificado._id);
    }*/

    const modificarProducto = async (producto) =>{
        
        const solicitud = await fetch('http://localhost:4000/api/admin/modificarproductos/'+producto._id,{
            method : 'PUT', 
            body: JSON.stringify(producto),          
            headers : {
            'Content-Type' : 'application/json',
            }
        })

        const respuesta = await solicitud.json();

        if(solicitud.ok) { 
            // Restaurar formulario
            setProdModificado({
            nombre : '',
            precio: '',
            stock: '',            
            descripcion: '',
            categoria: ''
            });
            document.getElementById('FormModificarProductoImagen').value = "";
            alert ('Producto modificado correctamente');
            
            setProductos([
                ...productos.filter(prods => prods._id !== producto._id),
                producto
            ]);

            setModificar(false);
            
        }else{
            alert(respuesta.msg);
        }

    }

    const handleChangeProdMod = e =>{
        setProdModificado({
            ...prodModificado,
            [e.target.name] : e.target.value
        })
    }

    const eliminarProductos = async (id) =>{
        
        if(window.confirm('¿Esta seguro que desea eliminar el producto?')){
            const solicitud = await fetch('http://localhost:4000/api/admin/eliminarproductos/'+id,{
            method : 'DELETE',           
            headers : {
            'Content-Type' : 'application/json',
            }
        })        
        const respuesta = await solicitud.json();
        if(solicitud.ok){            
            // Setear al estado (ES PARA QUE NO TENGAMOS QUE RECARGAR LA PAG PARA VER LOS CAMBIOS)
            setProductos([
                ...productos.filter(prod => prod._id !== id)
            ]);
        }else{
            alert(respuesta.msg);
        }
        
    }
    }

    const onChangeImagen = e =>{
        if(e.target.files.length){
            if(e.target.files[0].size > 4194304){
                // 5242880 = 5MB
                // 4194304 = 4MB
                e.target.value=null;
                alert('La imagen es demasiado grande');
                setProdModificado({
                    ...prodModificado,
                    imagen: null
                });                
                return;
            } 
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                setProdModificado({
                    ...prodModificado,
                    imagen: reader.result
                });
            }
            console.log(prodModificado);
        }else{
            setProdModificado({
                ...prodModificado,
                imagen: null
            })            
        }
    }
    
    return (
        <>
            {
                modificar ?
                <Form>
                    <Form.Row className="mb-2">
                        <Col>
                        <Form.Control
                         placeholder="Nombre producto"
                         name="nombre"
                         value={prodModificado.nombre}
                         onChange={handleChangeProdMod}                             
                        />
                        </Col>
                        <Col>
                        <Form.Control
                         type="number"
                         placeholder="Precio"
                         name="precio"
                         value={prodModificado.precio}
                         onChange={handleChangeProdMod}
                        />
                        </Col>
                    </Form.Row>

                    <Form.Row className="mb-2">
                        <Col>
                        <Form.Control
                         type="number"
                         name="stock"
                         placeholder="Stock"
                         value={prodModificado.stock}
                         onChange={handleChangeProdMod}                             
                        />
                        </Col>
                        <Col>
                        <Form.Control as="select" name="categoria" value={prodModificado.categoria} onChange={handleChangeProdMod}>
                        {
                            categorias.map(cat => {
                                return(
                                    <option                             
                                    name="categoria"
                                    value={cat._id}
                                    key={cat._id}
                                    onChange={handleChangeProdMod}
                                    >
                                        {cat.nombre}
                                    </option>
                                )
                            })
                        }
                        </Form.Control>
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="descripcionProduct">                    
                        <Form.Control 
                        as="textarea"
                        rows={3}
                        name="descripcion"
                        value={prodModificado.descripcion}
                        onChange={handleChangeProdMod}
                        //onChange={handleChangeProducto}
                        placeholder="Descripción"
                        required
                        />
                    </Form.Group>

                    <Form.Row className="mb-2">
                        <Col>
                            <Row className="d-flex">
                                <Col sm={2}>
                                <Form.Label>Imagen</Form.Label>
                                </Col>
                                <Col sm={10}>
                                <Form.Control
                                id="FormModificarProductoImagen"
                                type="file"
                                name="imagen"
                                onChange={onChangeImagen}
                                accept="image/png, image/jpeg"
                                placeholder="Imagen"
                                />
                                </Col>
                            </Row>
                            {
                                prodModificado.imagen ? 
                                <Image src ={prodModificado.imagen} thumbnail /> :
                                <p>El producto no contiene imagen</p>
                            }
                        </Col>
                        <Col>
                            <Button variant="primary float-right w-25" onClick={() => modificarProducto(prodModificado)}>Modificar</Button>
                            <Button variant="secondary float-right w-25 mr-1" onClick={() =>setModificar(false)}>Cancelar</Button>
                        </Col>
                    </Form.Row>

                    <hr/>
                </Form>
                
                : null
            }
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>                    
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map(prod =>{
                                return(
                                    <tr key={prod._id}>                                    
                                        <td>{prod.nombre}</td>
                                        <td>{prod.precio}</td>
                                        <td>{prod.stock}</td>
                                        <td>
                                            <Button variant="danger btn-sm mr-1" onClick={() => eliminarProductos(prod._id)}>Eliminar</Button>
                                            <Button variant="warning btn-sm" onClick={() => {
                                                setModificar(true)
                                                setProdModificado(prod)
                                            }}>Modificar</Button>
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
