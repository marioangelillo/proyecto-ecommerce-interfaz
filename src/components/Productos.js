import React from 'react';
import { Container } from 'react-bootstrap';
import Categorias from './productos-components/Categorias';
import ListadoProductos from './productos-components/ListadoProductos';

export default function Productos({categorias, productos, listaCarrito, setListaCarrito}) {
    return (
        <Container className="mt-2" fluid>
            
            <Categorias categorias={categorias} />
            <hr className="mt-0" />
            <ListadoProductos productos={productos} listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}/>
               
        </Container>
    )
}
