import React from 'react';
import AdminMenu from './admin-components/AdminMenu';

export default function Admin({listarCategorias, categoria, setCategoria, categorias, setCategorias,
     producto, setProducto, productos, setProductos}) {
    return (
        <AdminMenu
         listarCategorias={listarCategorias}
         categoria={categoria} setCategoria={setCategoria}
         categorias={categorias} setCategorias={setCategorias}
         producto={producto} setProducto={setProducto}
         productos={productos} setProductos={setProductos}
        />
    )
}
