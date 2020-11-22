import React from 'react';
import {Table} from 'react-bootstrap';

export default function ProductList({productos, setProductos}) {

    console.log(productos);
    return (
        <div className="table-responsive">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(prod =>{
                            return(
                                <tr key={prod._id}>
                                    <td>1</td>
                                    <td>{prod.nombre}</td>
                                    <td>{prod.precio}</td>
                                    <td>{prod.stock}</td>
                                </tr>                    
                            )
                        })
                    }                    
                </tbody>
            </Table>
        </div>
        
    )
}
