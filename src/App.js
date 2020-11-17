import { Fragment, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';
import Productos from './components/Productos';
import Registro from './components/Registro';


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
  faMinus
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


function App() {

  const [ token , setToken ] = useState(localStorage.getItem('token') || null ) ;
  const [ usuarioAuth , setUsuarioAuth ] = useState(JSON.parse(localStorage.getItem('usuario')) || null ) ;
  const [ autenticado , setAutenticado ] = useState(localStorage.getItem('token') ? true : false);

  console.log(autenticado);
  console.log(usuarioAuth);

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

  return (
   <Fragment>
    <Header 
      autenticado={autenticado} setAutenticado={setAutenticado}
      usuarioAuth={usuarioAuth} setUsuarioAuth={setUsuarioAuth}
      setToken={setToken}
    />
    <BrowserRouter>
      <Switch>
        <Route 
          path="/"
          exact
          component={Home}
          /*component={() =>
          <Home 
            setUsuarioAuth={setUsuarioAuth}
            setAutenticado={setAutenticado}
          />
          }*/
        />
        <Route 
          path="/productos"
          exact
          component={Productos}
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
      </Switch>
    </BrowserRouter>

    <Footer />
   </Fragment>
  );
}

export default App;
