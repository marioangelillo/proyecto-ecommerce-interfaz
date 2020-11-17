import React, {useState, useEffect} from 'react';
import Cards from 'react-credit-cards';
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import 'react-credit-cards/es/styles-compiled.css';

export default function PagoCarrito() {

    const [focus, setFocus] = useState(''); 

    const [card, setCard] = useState({
      number: "",
      name: "",
      expiry: "",
      cvc: ""
    })

    const {number, name, expiry, cvc} = card;

    return (
      <>  
        <Row className="mt-2">
          <Cards
            className="col-12 col-md-6"
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />

          <form className="col-12 col-md-6 mt-2" id="form-pago">
            <input
              className="form-control mb-2"
              type="tel"
              name="number"
              value={number}
              placeholder="Número de tarjeta"
            />

            <input
              className="form-control mb-2"
              type="text"
              name="name"
              value={name}
              placeholder="Nombre y Apellido"
            />

            <input
              className="form-control mb-2"
              type="text"
              name="expiry"
              value={expiry}
              placeholder="Fecha de expiración"
            />
            
            <input
              className="form-control mb-2"
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
            />

            {/*<div className="float-right">
              <Button type="button" variant="secondary">
                Volver
              </Button>
              <Button type="submit" variant="primary ml-2">
                Comprar
              </Button>
            </div>*/}

          </form>
        </Row>

      
      </>
    );
}
