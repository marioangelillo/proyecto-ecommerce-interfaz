import React, {useState, useEffect} from 'react';
import Cards from 'react-credit-cards';
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import 'react-credit-cards/es/styles-compiled.css';

export default function PagoCarrito() {

    /*const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');*/
    const [focus, setFocus] = useState(''); 

    const [card, setCard] = useState({
      number: "",
      name: "",
      expiry: "",
      cvc: ""
    })

    const {number, name, expiry, cvc} = card;

    const handleChangeCard = (e) =>{
      setCard({
        ...card,
        [e.target.name] : e.target.value
      })
    }

    return (
      <>  
        <Row className="mt-2">
          <Cards
            className="col-12 col-lg-6"
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />

          <form className="col-12 col-lg-6 mt-2" id="form-pago">
            <input
              className="form-control mb-2 w-100"
              type="tel"
              name="number"
              value={number}
              onChange={handleChangeCard}
              onFocus={e => setFocus(e.target.name)}
              placeholder="Número de tarjeta"
            />

            <input
              className="form-control mb-2"
              type="text"
              name="name"
              value={name}
              onChange={handleChangeCard}
              onFocus={e => setFocus(e.target.name)}
              placeholder="Nombre y Apellido"
            />

            <input
              className="form-control mb-2"
              type="text"
              name="expiry"
              value={expiry}
              onChange={handleChangeCard}
              onFocus={e => setFocus(e.target.name)}
              placeholder="Fecha de expiración"
            />
            
            <input
              className="form-control mb-2"
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={handleChangeCard}
              onFocus={e => setFocus(e.target.name)}
            />           

          </form>
        </Row>

      
      </>
    );
}
