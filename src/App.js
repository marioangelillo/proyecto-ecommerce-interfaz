import { Fragment, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from './layout/Header';
import VistaProducto from './layout/VistaProducto';
import Footer from './layout/Footer';
import Home from './components/Home';
import Productos from './components/Productos';
import Registro from './components/Registro';
import Admin from './components/Admin';
import ProductPage from './layout/ProductPage';


import { library } from "@fortawesome/fontawesome-svg-core";
import {	
  faHeadset,
  faTruck,
  faHome,
  faCreditCard,
  faUser,
  faShoppingCart,
  faSearch,
  faPlus,
  faMinus,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookF,
	faInstagramSquare,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";


library.add(faHeadset);
library.add(faTruck);
library.add(faHome);
library.add(faCreditCard)
library.add(faFacebookF);
library.add(faInstagramSquare);
library.add(faWhatsapp);
library.add(faUser);
library.add(faShoppingCart);
library.add(faSearch);
library.add(faPlus);
library.add(faMinus);
library.add(faInfoCircle);


function App() {

  const [ token , setToken ] = useState(localStorage.getItem('token') || null ) ;
  const [ usuarioAuth , setUsuarioAuth ] = useState(JSON.parse(localStorage.getItem('usuario')) || null ) ;
  const [ autenticado , setAutenticado ] = useState(localStorage.getItem('token') ? true : false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [categoria, setCategoria] = useState({
    nombre: ''
  });
  const [categorias, setCategorias] = useState([]);
  const [producto, setProducto] = useState({});
  const [productos, setProductos] = useState([]);
  const [ listaCarrito , setListaCarrito ] = useState(JSON.parse(localStorage.getItem('listaCarrito')) || [])

  //console.log(usuarioAuth);
  //console.log(listaCarrito);

  useEffect(() => {
    localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito));
  }, [listaCarrito])

  useEffect(() => {
    if(usuarioAuth) {
      localStorage.setItem('usuario',JSON.stringify(usuarioAuth));
    }else{
      localStorage.removeItem('usuario');
    }
  },[usuarioAuth]);

  useEffect(() => {
    if(token) {
      localStorage.setItem('token',token) ;
      
    }else{
      localStorage.removeItem('token');
    }
  }, [token]) ;

  useEffect(() => {
    listarCategorias();
  }, [])

  const listarCategorias = async () =>{
    const solicitud = await fetch('http://localhost:4000/api/admin/listarcategorias',{
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
      });
      //console.log(solicitud);
      const respuesta = await solicitud.json();  
      if(solicitud.ok){
        console.log(respuesta);
        setCategorias(respuesta);        
      }else{
        alert(respuesta.msg);
      } 
  }

  useEffect(() => {
    listarProductos();
  }, [])

  const listarProductos = async () =>{
    const solicitud = await fetch('http://localhost:4000/api/admin/listarproductos',{
      headers: {        
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
      });
      //console.log(solicitud);
      const respuesta = await solicitud.json(); 
      //console.log(respuesta); 
      if(solicitud.ok){
        console.log(respuesta);
        setProductos(respuesta);        
      }else{
        alert(respuesta.msg);
      }
  }
 


  return (
   <Fragment>
    <Header 
      autenticado={autenticado} setAutenticado={setAutenticado}
      usuarioAuth={usuarioAuth} setUsuarioAuth={setUsuarioAuth}
      token={token} setToken={setToken}
      setIsAdmin={setIsAdmin}
      listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}      
    />
    <BrowserRouter>
      <Switch>
        <Route 
          path="/"
          exact          
          component={() =>
            <Home 
              productos={productos}
              listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}
            />
          }
        />
        <Route 
          path="/productos"
          exact
          component={() =>
            <Productos
              categorias={categorias}
              productos={productos}
              listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}             
            />
          }
        />

        <Route 
          path="/productos/:id"
          exact
          component={(data) => <VistaProducto data={data} listaCarrito={listaCarrito} setListaCarrito={setListaCarrito}/>}
        />

        <Route exact path="/registro">
          {
            !autenticado ?
            <Registro
            setUsuarioAuth = { setUsuarioAuth }
            setToken = { setToken }
            setAutenticado = { setAutenticado }
            />
            : <Redirect to = "/" />
          }
        </Route>

        <Route exact path="/admin">
          {
            token ?
            <Admin
              categoria={categoria} setCategoria={setCategoria}
              categorias={categorias} setCategorias={setCategorias}
              listarCategorias={listarCategorias}
              producto={producto} setProducto={setProducto}
              productos={productos} setProductos={setProductos}
            />
            : <Redirect to = "/" />
          }
          
        </Route>

      </Switch>
    </BrowserRouter>

    <Footer />
   </Fragment>
  );
}

export default App;
