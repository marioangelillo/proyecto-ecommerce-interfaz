import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddProduct({listarCategorias, categorias, setCategorias, producto, setProducto,
     productos, setProductos}) {
    //src="https://via.placeholder.com/300px300"
    /*onClick={async () => setCategorias(await listarCategorias())}*/
    
    const {nombre, precio, stock, categoria, descripcion, imagen} = producto;

    const handleChangeProducto = e =>{
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmitProduct = async e =>{
        e.preventDefault();        

        if(nombre.trim() === '' || precio.trim() === '' || stock.trim() === '' || descripcion.trim() === ''){
            alert('Debe completar todos los campos');            
        }
        
        //producto.imagen = "https://via.placeholder.com/300px300";
        console.log(producto);
        if(!producto.imagen){
            producto.imagen = null;
        }

        const solicitud = await fetch('http://localhost:4000/api/admin/agregarproductos',{
            method : 'POST',
            body : JSON.stringify(producto),
            headers : {
            'Content-Type' : 'application/json'
            }
        })

        const respuesta = await solicitud.json();

        if(solicitud.ok) {           
            
            // Restaurar formulario
            setProducto({
            nombre : '',
            precio: '',
            stock: '',            
            descripcion: '',
            categoria: ''
            });
            document.getElementById('FormNuevoProductoImagen').value = "";
            alert ('Producto creado correctamente');
            
            setProductos([...productos , producto])
            
        }else{
            alert(respuesta.msg);
        }
    }

    const onChangeImagen = e =>{
        if(e.target.files.length){
            if(e.target.files[0].size > 4194304){
                // 5242880 = 5MB
                // 4194304 = 4MB
                e.target.value=null;
                alert('La imagen es demasiado grande');
                setProducto({
                    ...producto,
                    imagen: null
                });                
                return;
            } 
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                setProducto({
                    ...producto,
                    imagen: reader.result
                });
            }
            console.log(producto);
        }else{
            setProducto({
                ...producto,
                imagen: null
            })            
        }
    }

    return (
        <Form onSubmit={handleSubmitProduct}>
            <Form.Group controlId="nombreProduct">
                <Form.Label>Nombre producto</Form.Label>
                <Form.Control
                 type="name"
                 name="nombre"
                 value={nombre}
                 onChange={handleChangeProducto}
                 required
                />
            </Form.Group>

            <Form.Group controlId="precioProduct">
                <Form.Label>Precio</Form.Label>
                <Form.Control   
                 type="number"
                 name="precio"
                 value={precio}
                 onChange={handleChangeProducto}
                 required
                />
            </Form.Group>

            <Form.Group controlId="stockProduct">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                 type="number"
                 name="stock"
                 value={stock}
                 onChange={handleChangeProducto}
                 required
                />
            </Form.Group>

            <Form.Group controlId="categoriaProduct">
                <Form.Label>Seleccione una categoría</Form.Label>
                <Form.Control as="select" name="categoria" value={categoria} onChange={handleChangeProducto}>
                <option value="" selected disabled>Categorias</option>
                {
                    categorias.map(cat => {
                        return(
                            <option                             
                             name="categoria"
                             value={cat._id}
                             key={cat._id}
                             onChange={handleChangeProducto}
                            >
                                {cat.nombre}
                            </option>
                        )
                    })
                }                
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="descripcionProduct">
                <Form.Label>Descripción</Form.Label>
                <Form.Control 
                 as="textarea"
                 rows={3}
                 name="descripcion"
                 value={descripcion}
                 onChange={handleChangeProducto}
                 required
                />
            </Form.Group>

            <Form.Group controlId="imagenProduct">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                 id="FormNuevoProductoImagen"
                 type="file"
                 name="imagen"
                 onChange={onChangeImagen}
                 accept="image/png, image/jpeg"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Agregar
            </Button>
        </Form>
    )
}
