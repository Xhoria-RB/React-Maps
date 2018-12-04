import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'js-datepicker/dist/datepicker.min.css';
import datePicker from 'js-datepicker/dist/datepicker.min.js';

/**Persona
 * nombre
 * apellido
 * Cedula
 * fecha nac
 * direccion
 * tel
 * email
 * constrase;a
 * 
 * Entidad
 * Nombre empresa
 * RNC
 * Direccion sede principal
 * responsable (redirect to Person)
 */
export default class Person extends Component {
  componentDidMount() {
    const picker = datePicker('#selectDay');
    this.picker = picker;
  }

  render() {
    return (
      <Container id='personContainer'>
        <Form>
          <FormGroup>
            <Row>
              <Col sx='6'>
                <Label for='personName'>Name</Label>
                <Input type='text' name='personName' id='personName' placeholder='Enter your name' />
              </Col>
              <Col xs='6'>
                <Label for='personLastName'>Last Name</Label>
                <Input type='text' name='personLastName' id='personLastName' placeholder='Enter your last name' />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs='3'>
                <Label for='personDNI'>DNI</Label>
                <Input type='text' name='personDNI' id='personDNI' placeholder='###-#######-#' />
              </Col>
              <Col xs='3'>
                <Label for='selectDay'>Select Day</Label>
                <Input type='text' name='selectDay' id='selectDay' placeholder='Click to select' />
              </Col>

              <Col xs='6'>
                <Label for='address'>Address</Label>
                <Input type='textarea' name='address' id='address' placeholder='Enter your address' />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup />

          <FormGroup>
            <Label for='phoneNumber'>Phone number</Label>
            <Input type='text' name='phoneNumber' id='phoneNumber' placeholder='000-000-0000' />
          </FormGroup>

          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' name='email' id='email' placeholder='Enter your email' />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='password' id='password' placeholder='Enter your password' />
          </FormGroup>
          <FormGroup>
            <Label for='confirmPassword'>Confirm password</Label>
            <Input type='password' name='confirmPassword' id='confirmPassword' placeholder='Re-enter your password' />
          </FormGroup>
          <Row>
            <Col sm='12' md={{ size: 6, offset: 3 }}>
              <Button color='primary'>Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
