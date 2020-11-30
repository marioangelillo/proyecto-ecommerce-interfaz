import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Categorias from './productos-components/Categorias';
import ListadoProductos from './productos-components/ListadoProductos';

export default function Productos({categorias, productos, listaCarrito, setListaCarrito}) {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(JSON.parse(localStorage.getItem('catSeleccionada')) || 'todas');
    console.log(listaCarrito)
    return (
        <Container className="mt-2" fluid>
            
            <Categorias
             categorias={categorias}
             categoriaSeleccionada={categoriaSeleccionada} setCategoriaSeleccionada={setCategoriaSeleccionada}             
            />
            <hr className="mt-0" />
            <ListadoProductos
             productos={productos}
             listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}
             categoriaSeleccionada={categoriaSeleccionada} 
            />
               
        </Container>
    )
}
