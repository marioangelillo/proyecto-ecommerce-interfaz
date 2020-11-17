import React, {useState} from 'react';
import {Modal, Button, Form, Row} from 'react-bootstrap';

export default function ModalUsuario({showUsuario, handleCloseUsuario, usuarioAuth, setUsuarioAuth, setAutenticado, setToken}) {

  const [usuario, setUsuario ] = useState({
    email : '',
    password : ''
  });

  // Extraemos del usuario
  const {email, password} = usuario

  // Cuando cambian los campos
  const onChangeUsuario = e => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })      
  };

  const onSubmitLogin = async e => {
    e.preventDefault();
    //alert('login')
    // Compruebo que los campos no estén vacios
    if(email === '' || password === ''){
      alert('Debe completar todos los campos');
    }

    // Enviar Login de Usuario
    const solicitud = await fetch ('http://localhost:4000/api/auth/',{
      method : 'POST',
      body : JSON.stringify(usuario),
      headers : {
      'Content-Type' : 'application/json'
      }
  });

    //console.log(solicitud);
    const respuesta = await solicitud.json();
    //console.log(respuesta);
    

    if (solicitud.ok) {
        // Restaurar formulario
        setUsuario ({            
        email : '',
        password : '',
        });
        alert ('Se inicio sesión con exitos') ;

        // Setear usuario autenticado
        setUsuarioAuth(respuesta.usuario);

        // Setear autenticado
        setAutenticado(true);

        // Setear token
        setToken(respuesta.token)
        
        //Ocultar modal
        handleCloseUsuario();
    }else{
        alert(respuesta.msg);
    }
  }
  

    return (
        <Modal show={showUsuario} onHide={handleCloseUsuario}>
        <Modal.Header closeButton>
          <Modal.Title>Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit={onSubmitLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Ingrese email"
                      onChange={onChangeUsuario}
                      value={email}
                      required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Contraseña"
                      onChange={onChangeUsuario}
                      required
                    />
                </Form.Group>
                <hr/>
                <Row className="float-right mr-4">
                  <a className="mt-2 mr-3" href="/registro">Crear cuenta</a>
                  <Button variant="primary" type="submit">
                    Ingresar
                  </Button>
                </Row>
                
            </Form>
        </Modal.Body>

      </Modal>
    )
}
