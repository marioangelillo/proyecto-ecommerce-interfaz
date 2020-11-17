import React, {useState} from 'react';
import {Navbar, Nav, Form, FormControl, Button, Dropdown, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalCarrito from './ModalCarrito';
import ModalUsuario from './ModalUsuario';

export default function Header({autenticado, setAutenticado, usuarioAuth, setUsuarioAuth, setToken}) {

  const [showCarrito, setShowCarrito] = useState(false);
  const handleCloseCarrito = () => setShowCarrito(false);
  const handleShowCarrito = () => setShowCarrito(true);

  const [showUsuario, setShowUsuario] = useState(false);
  const handleCloseUsuario = () => setShowUsuario(false);
  const handleShowUsuario = () => setShowUsuario(true);

  const cerrarSesion = () =>{
    if(window.confirm('Esta seguro que desea cerrar sesión?')){
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      setAutenticado(false);
    }
  }

    return (
      <>
        <Navbar className="pt-4 pb-4" bg="light" expand="lg">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/servicios">Servicios</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
              <Button variant="outline-success"><FontAwesomeIcon icon={["fa", "search"]} /></Button>  

              <ButtonGroup className="ml-2">    
                { !autenticado ? 
                  <Button variant="outline-success" onClick={handleShowUsuario}><FontAwesomeIcon icon={["fa", "user"]}/></Button>
                : 
                <Dropdown>
                  <Dropdown.Toggle className="border-right-0 rounded-0" variant="outline-success" id="dropdown-basic" drop="left">
                    {usuarioAuth.nombre.toUpperCase()}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/productos">Mi Cuenta</Dropdown.Item>
                    <Dropdown.Item onClick={cerrarSesion}>Cerrar sesión</Dropdown.Item>                    
                  </Dropdown.Menu>
                </Dropdown>
                }
                <Button variant="outline-success" onClick={handleShowCarrito}><FontAwesomeIcon icon={["fa", "shopping-cart"]}/></Button>
              </ButtonGroup>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <ModalCarrito
          showCarrito={showCarrito}
          handleCloseCarrito={handleCloseCarrito}
        />

        <ModalUsuario
          showUsuario={showUsuario}
          handleCloseUsuario={handleCloseUsuario}
          setAutenticado={setAutenticado}
          usuarioAuth={usuarioAuth} setUsuarioAuth={setUsuarioAuth}
          setToken={setToken}
        />

        
      </>
    )
}
