import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Fade } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Entity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid : false
    };
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    const comName = document.getElementById('entityName').value;
    const comRNC = document.getElementById('companyRNC').value;
    const mainAdd = document.getElementById('mainAddress').value;
    const postalCode = document.getElementById('postalcode').value;
    if (comName !== '' && comRNC !== '') {
      if (mainAdd !== '' && postalCode !== '') {
        if (comRNC === '1234567890') {
          this.setState({ valid: true });
        }
      }
    } else {
      e.preventDefault();
      this.clearForm();
    }
  }

  clearForm() {
    document.getElementById('entityName').value = '';
    document.getElementById('companyRNC').value = '';
    document.getElementById('mainAddress').value = '';
    document.getElementById('mainAddress').value = '';
    document.getElementById('additionalAddress').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('postalcode').value = '';
  }

  render() {
    return (
      <Container id='personContainer'>
        <Fade in='true'>
          <h2 className='text-center'>Entity registration form</h2>
          <hr />
          <Form onSubmit={this.submit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='entityName'>Company name</Label>
                  <Input type='text' name='entityName' id='entityName' placeholder='Something .inc' required />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='companyRNC'>Company RNC</Label>
                  <Input type='text' name='companyRNC' id='companyRNC' placeholder='############' required />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for='mainAddress'>Main headquarters address</Label>
              <Input type='text' name='mainAddress' id='mainAddress' placeholder='1234 Main St' required />
            </FormGroup>
            <FormGroup>
              <Label for='additionalAddress'>Additional address</Label>
              <Input
                type='text'
                name='additionalAddress'
                id='additionalAddress'
                placeholder='Apartment, studio, or floor'
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='city'>City</Label>
                  <Input type='text' name='city' id='city' required />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for='state'>State</Label>
                  <Input type='text' name='state' id='state' required />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for='postalcode'>Postal code</Label>
                  <Input type='text' name='postalcode' id='postalcode' required />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 1 }}>
                <Link href='/person' to='/person'>
                  <Button className='btn btn-large btn-block my-2' onClick={this.submit}>
                    Register responsible
                  </Button>
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </Fade>
      </Container>
    );
  }
}
