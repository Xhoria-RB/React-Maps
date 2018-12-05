import React, { Component } from 'react';
import { Container, Fade, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
        <Fade in='true'>
          <h2 className='text-center'>User registration form</h2>
          <hr />
          <Form>
            <FormGroup row>
              <Col xs='4'>
                <Label for='personName'>Name</Label>
                <Input type='text' name='personName' id='personName' placeholder='Enter your name' required />
              </Col>
              <Col xs='4'>
                <Label for='personLastName'>Last Name</Label>
                <Input
                  type='text'
                  name='personLastName'
                  id='personLastName'
                  placeholder='Enter your last name'
                  required
                />
              </Col>
              <Col xs='4'>
                <Label for='personDNI'>DNI</Label>
                <Input type='text' name='personDNI' id='personDNI' placeholder='###-#######-#' required />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col xs='3'>
                <Label for='selectDay'>Birthday date</Label>
                <Input type='text' name='selectDay' id='selectDay' placeholder='Click to select' required />
              </Col>
              <Col xs='9'>
                <Label for='address'>Address</Label>
                <Input type='text' name='address' id='address' placeholder='Enter your address' required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs='6'>
                <Label for='phoneNumber'>Phone number</Label>
                <Input type='text' name='phoneNumber' id='phoneNumber' placeholder='000-000-0000' required />
              </Col>
              <Col xs='6'>
                <Label for='phoneNumber2'>Second phone number</Label>
                <Input type='text' name='phoneNumber2' id='phoneNumber2' placeholder='000-000-0000' />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for='email' sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input type='email' name='email' id='email' placeholder='Enter your email' required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='password' sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input type='password' name='password' id='password' placeholder='Enter your password' required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='confirmPassword' sm={2}>
                Confirm password
              </Label>
              <Col sm={10}>
                <Input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Re-enter your password'
                  required
                />
              </Col>
            </FormGroup>
            <br />
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 1 }}>
                <Button className='btn btn-large btn-block my-2'>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Fade>
      </Container>
    );
  }
}
