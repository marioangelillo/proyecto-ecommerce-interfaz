import React, {useState} from 'react';
import {Modal, Button, Tabs, Tab} from 'react-bootstrap';
import PagoCarrito from '../components/carrito-components/PagoCarrito';
import FormularioCarrito from '../components/carrito-components/FormularioCarrito';
import ProductosCarrito from '../components/carrito-components/ProductosCarrito';

export default function ModalCarrito({showCarrito, handleCloseCarrito}) {

    const [key, setKey] = useState('home');

    return (
        <Modal
            size="xl"
            show={showCarrito}
            onHide={handleCloseCarrito}
        >
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                >
                <Tab eventKey="home" title="Productos">
                    <ProductosCarrito />
                </Tab>
                <Tab eventKey="profile" title="Datos Comprador">
                    <FormularioCarrito />
                </Tab>
                <Tab eventKey="contact" title="Forma de pago">
                  <PagoCarrito />
                </Tab>
            </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCarrito}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseCarrito}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
