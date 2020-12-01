import React, {useState, useEffect} from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

export default function ProductPage({id, listaCarrito, setListaCarrito}) {

    const [prodSeleccionado, setProdSeleccionado] = useState();

    useEffect(() => {
        buscarProducto();
    }, []);
        const buscarProducto = async () =>{            
            const solicitud = await fetch('http://localhost:4000/api/productos/'+id,{                           
                headers : {
                'Content-Type' : 'application/json',
                }
            })    

            const respuesta = await solicitud.json();
            if(solicitud.ok){            
                setProdSeleccionado(respuesta);
            }else{
                setProdSeleccionado(null);                
            }
            
        }

        const agregarCarrito = (producto) =>{
            
            if(listaCarrito.find(prod => prod._id === producto._id)){
                alert('El producto ya se encuentra en el carrito');
                return;
            }
            producto.cantidad = 1;
            producto.subtotal = producto.cantidad * producto.precio      
            setListaCarrito([
                ...listaCarrito,
                producto
            ])
        }

    return (

        prodSeleccionado ? 
        <Row>
            <Col md={12} lg={6}>
                <Image src={prodSeleccionado.imagen} fluid />
            </Col>

            <Col md={12} lg={6}>
                <h1>{prodSeleccionado.nombre}</h1>
                <h1>Precio: ${prodSeleccionado.precio}</h1>
                <h1>Stock: {prodSeleccionado.stock}</h1>
                <h6>Descripcion: {prodSeleccionado.descripcion}</h6>
                <Button variant="primary" onClick={() => agregarCarrito(prodSeleccionado)}>Comprar</Button>
            </Col>
        </Row>
        
        : 
        <h1 className="text-center my-4">El producto no existe</h1>
        
    )
}
