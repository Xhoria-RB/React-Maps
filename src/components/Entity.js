import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { AvInput, AvFeedback, AvForm, AvGroup } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

export default class Entity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a : null
    };
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Container id='personContainer'>
        <h2 className='text-center'>Entity registration form</h2>
        <hr />
        <AvForm>
          <Row form>
            <Col md={6}>
              <AvGroup>
                <Label for='entityName'>Company name</Label>
                <AvInput type='text' name='entityName' id='entityName' placeholder='Something .inc' required />
                <AvFeedback>Must enter a name</AvFeedback>
              </AvGroup>
            </Col>
            <Col md={6}>
              <AvGroup>
                <Label for='companyRNC'>Company RNC</Label>
                <AvInput type='text' name='companyRNC' id='companyRNC' placeholder='############' required />
                <AvFeedback>Must fill the RNC</AvFeedback>
              </AvGroup>
            </Col>
          </Row>
          <AvGroup>
            <Label for='mainAddress'>Main headquarters address</Label>
            <AvInput type='text' name='mainAddress' id='mainAddress' placeholder='1234 Main St' required />
            <AvFeedback>Must enter an address</AvFeedback>
          </AvGroup>
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
              <AvGroup>
                <Label for='city'>City</Label>
                <AvInput type='text' name='city' id='city' required />
                <AvFeedback>Must enter a city</AvFeedback>
              </AvGroup>
            </Col>
            <Col md={4}>
              <AvGroup>
                <Label for='state'>State</Label>
                <AvInput type='text' name='state' id='state' required />
                <AvFeedback>Must enter a state</AvFeedback>
              </AvGroup>
            </Col>
            <Col md={2}>
              <AvGroup>
                <Label for='zip'>Zip</Label>
                <AvInput type='text' name='zip' id='exampleZip' required />
                <AvFeedback>Must enter a zip code</AvFeedback>
              </AvGroup>
            </Col>
          </Row>
          <AvGroup check row>
            <Col sm={{ size: 10, offset: 1 }}>
              <Link href='/person' to='/person'>
                <Button className='btn btn-large btn-block my-2' onClick={this.submit}>
                  Submit
                </Button>
              </Link>
            </Col>
          </AvGroup>
        </AvForm>
      </Container>
    );
  }
}
