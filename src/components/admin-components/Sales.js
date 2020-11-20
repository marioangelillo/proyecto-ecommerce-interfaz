import React from 'react';
import { Form, Table } from 'react-bootstrap';


export default function Sales() {
    return (
        <>
            <Form inline>
                <Form.Group controlId="fecha">
                    <Form.Label className="mr-2">Ingrese una fecha: </Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
            </Form>

            <div className="table-responsive">
                <Table className="mt-2" striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>                
                        </tbody>
                    </Table>
            </div>
            
        </>
    )
}
