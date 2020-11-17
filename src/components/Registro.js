import React, {useState} from 'react';
import {Container, Form, Col, Button, Row, Alert} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export default function Registro({setToken, setUsuarioAuth, setAutenticado}) {

    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        passwordconfirm: ''
    });

    const {nombre, apellido, email, password, passwordconfirm} = usuario;

    const onChangeRegistro = e =>{
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmitRegistro = async e =>{
        e.preventDefault();
        
        if(nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || password.trim() === '' || passwordconfirm.trim() === ''){
            alert('Todos los campos son requeridos');
        }

        if(password.trim() !== passwordconfirm.trim()){
            alert('Las contraseñas no coinciden');
            return;
        }

        // Enviar Registro de Usuario
        const solicitud = await fetch ('http://localhost:4000/api/usuarios/',{
            method : 'POST',
            body : JSON.stringify(usuario),
            headers : {
            'Content-Type' : 'application/json'
            }
        });

        //console.log(solicitud);
        const respuesta = await solicitud.json();
        console.log(respuesta)
        //console.log(respuesta);

        if (solicitud.ok) {
            // Restaurar formulario
            setUsuario ({
            nombre : '',
            apellido: '',
            email : '',
            password : '',
            passwordconfirm : ''
            });
            alert ( ' Usuario registrado correctamente ' ) ;

            // Setear usuario autenticado
            setUsuarioAuth(respuesta.usuario);

            // Setear autenticado
            setAutenticado(true);

            // Setear token
            setToken(respuesta.token)

            // Redirigir al home
            //history.push("/");

        }else{
            alert(respuesta.msg);
        }
    }

    return (
        <>
            <Container className="mt-2 mb-2">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Crear usuario</h2>
                        <hr />
                        <Form onSubmit={onSubmitRegistro}>
                            <Form.Control
                                className="mb-2"
                                placeholder="Nombre"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeRegistro}
                                required
                            />
                            <Alert variant="danger">
                                This is a danger
                            </Alert>
                            <Form.Control
                                className="mb-2"
                                placeholder="Apellido"
                                name="apellido"
                                value={apellido}
                                onChange={onChangeRegistro}
                                required
                            />

                            <Form.Control
                                className="mb-2"
                                type="email"
                                placeholder="Ingrese su email"
                                name="email"
                                value={email}
                                onChange={onChangeRegistro} 
                                required
                            />

                            <Form.Control
                                className="mb-2"
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={onChangeRegistro}  
                                required
                            />  

                            <Form.Control
                                className="mb-2"
                                type="password"
                                placeholder="Confirmar contraseña"
                                name="passwordconfirm"
                                value={passwordconfirm}
                                onChange={onChangeRegistro} 
                                required 
                            />

                            <Button variant="primary" type="submit">Crear cuenta</Button>
                        </Form>
                        
                    </Col>
                </Row>              
                    
            </Container>
            
        </>
    )
}
