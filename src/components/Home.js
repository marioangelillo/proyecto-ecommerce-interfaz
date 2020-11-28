import React, {Fragment} from 'react';
import Slider from '../layout/Slider';
import Categorias from '../layout/Categorias';
import ProductosDestacados from '../layout/ProductosDestacados';
import Servicios from '../layout/Servicios';
import Newsletter from '../layout/Newsletter';

export default function Home({productos, listaCarrito, setListaCarrito}) {
    return (
        <Fragment>
            <Slider />
            <Categorias />
            <Servicios />
            <ProductosDestacados productos={productos} listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}/>  
            <Newsletter />  
        </Fragment>
    )
}
