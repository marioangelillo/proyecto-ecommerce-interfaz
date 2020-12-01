import React, {Component, useState, useEffect} from 'react';
import ProductPage from './ProductPage';

class VistaProducto extends Component {
    
    render() {
        console.log(this.props);
        const {data, listaCarrito, setListaCarrito} = this.props
        const id = data.match.params.id; 

        return (
            <>
                <ProductPage id={id} listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}/>                
            </>
        )
    }
}

export default VistaProducto;