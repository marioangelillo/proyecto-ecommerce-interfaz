import React from 'react';
import AdminMenu from './admin-components/AdminMenu';

export default function Admin({listarCategorias, categoria, setCategoria, categorias, setCategorias}) {
    return (
        <AdminMenu
         listarCategorias={listarCategorias}
         categoria={categoria} setCategoria={setCategoria}
         categorias={categorias} setCategorias={setCategorias}
        />
    )
}
