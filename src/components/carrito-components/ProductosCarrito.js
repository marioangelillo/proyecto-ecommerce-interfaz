import React, {useState, useEffect} from 'react'
import { Col, Container, Row, Card, Button, Table, Image, Form } from 'react-bootstrap'

export default function ProductosCarrito({listaCarrito, setListaCarrito}) {

    const [subtotal, setSubtotal] = useState();
    const [total, setTotal] = useState()

    useEffect(() => {
        let suma = 0;
        for (let i = 0; i < listaCarrito.length; i++) {
            suma = suma + listaCarrito[i].subtotal;            
        }
        setSubtotal(suma);
        setTotal(suma);
        // decscuento setTotal(suma * 0.75);
    }, [listaCarrito])

    const handleChangeCantidad = (producto) =>{         
       setListaCarrito([
           ...listaCarrito.map(prod => prod._id === producto._id ? 
            {...prod,                
                cantidad : document.getElementById(producto._id).value,
                subtotal : document.getElementById(producto._id).value * producto.precio
            } 
            : prod
            )
       ])
       if(document.getElementById(producto._id).value > producto.stock){
           alert('Actualmente contamos con '+producto.stock+' unidades del producto '+producto.nombre+' unicamente');           
       }
        console.log(listaCarrito);
        
        //setProductoCarrito(producto);       
       //let cantidad = document.getElementById(producto._id).value;
      /* console.log(cantidad);
       setProductoCarrito({
           ...producto,
           cantidad : cantidad
       });
       console.log(productoCarrito)*/
       //let index = listaCarrito.findIndex(prod => prod._id === producto._id);
       //listaCarrito[index] = productoCarrito;
       //console.log(listaCarrito[index])
       /*setListaCarrito([
           ...listaCarrito.filter(prod => prod._id !== producto._id),
        {
           ...listaCarrito[index],
           cantidad : document.getElementById(producto._id).value,
           subtotal : document.getElementById(producto._id).value * producto.precio
       }]); */
    }
    
    const eliminarProdCarrito = (id) =>{        
        setListaCarrito(listaCarrito.filter(prod => prod._id !== id));
    }

    return (
        <Container className="mt-2" fluid>
            <Row>
                <Col md={12} lg={8}>
                <div className="table-responsive text-center">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Subtotal</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            listaCarrito.map(producto => {   
                                                                                          
                                return(
                                    <tr key={producto._id}>
                                    <td><Image src={producto.imagen} style={{width: '50px', height:'50px'}}/></td>
                                    <td>{producto.nombre}</td>
                                    <td>                                        
                                       <Form.Control
                                        id={producto._id}
                                        className="text-center"
                                        type="number"
                                        name="cantidad"
                                        value={producto.cantidad}                                        
                                        max={producto.stock}                                                                                                                   
                                        min="1"                                      
                                        onChange={() => handleChangeCantidad(producto)}                                                                                                                                                           
                                        />                                        
                                    </td>
                                    <td>${producto.precio}</td>
                                    <td>${producto.subtotal}</td>
                                    <td>
                                        <Button variant="outline-danger btn-sm" onClick={() => eliminarProdCarrito(producto._id)}>X</Button>
                                    </td>
                                    </tr> 
                                )
                                
                            })                            
                        }
                                                       
                        </tbody>
                    </Table>
                </div>
                    
                </Col>

                <Col md={12} lg={4}>
                    <Card>
                        <Card.Header as="h5">RESUMEN COMPRA</Card.Header>
                        <Card.Body>
                        <div className="d-flex mb-1 text-muted justify-content-between">
                            <h5>Subtotal</h5>
                            <h5>${subtotal}</h5>
                        </div>
                        <Button variant="primary btn-sm w-100 mb-3">Cupón de descuento</Button>
                        <div className="d-flex justify-content-between">   
                            <h4>Total</h4>
                            <h4>${total}</h4>
                        </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
