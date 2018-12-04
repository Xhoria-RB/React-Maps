import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Entity extends Component {
  render() {
    return (
      <Container id='personContainer'>
        <Form>
          <FormGroup>
            <Row>
              <Col sx='6'>
                <Label for='entityName'>Entity Name</Label>
                <Input type='text' name='entityName' id='entityName' placeholder='Enter your name' />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col xs='3'>
                <Label for='entityRNC'>RNC</Label>
                <Input type='text' name='entityRNC' id='entityRNC' placeholder='############' />
              </Col>

              <Col xs='6'>
                <Label for='address'>Address</Label>
                <Input type='textarea' name='address' id='address' placeholder='Enter your address' />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Label for='phoneNumber'>Phone number</Label>
            <Input type='text' name='phoneNumber' id='phoneNumber' placeholder='000-000-0000' />
          </FormGroup>
          <Row>
            <Col sm='12' md={{ size: 6, offset: 3 }}>
              <Link href='/person' to='/person'>
                <Button color='primary'>Submit</Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
