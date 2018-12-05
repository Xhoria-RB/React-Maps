import React, { Component } from 'react';
import municipies from './municipies.json';
import { capitalize } from 'lodash';
import { Container, Row, Col, Label, FormGroup, Input, Button } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

export default class Parcels extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    const DNI = document.getElementById('propietaryDNI').value;
    if (DNI === '1234567890') {
      alert('Thanks');
    } else {
      e.preventDefault();
      alert('Not a valid DNI');
      document.getElementById('latitude').value = '';
      document.getElementById('longitude').value = '';
      document.getElementById('propietaryName').value = '';
      document.getElementById('propietaryDNI').value = '';
      document.getElementById('parcelLenght').value = '';
      document.getElementById('zip').value = '';
    }
  }
  render() {
    const { id } = this.props;
    const municName = municipies.filter((mun) => mun.province_id === id);
    return (
      <div>
        <Container id='personContainer'>
          <h2 className='text-center'>Register your parcel</h2>
          <hr />
          <AvForm id='parcelsForm'>
            <h5>
              <strong style={{ textDecoration: 'underline' }}>Instrucctions:</strong>
            </h5>
            <ol>
              <li>First select a province from map</li>
              <li>Second select a municipie from select</li>
              <li>Third fill all other inputs</li>
            </ol>
            <FormGroup row>
              <Col xs='6'>
                <AvGroup>
                  <Label for='latitude'>Coords</Label>
                  <AvInput type='text' className='test' name='latitude' id='latitude' placeholder='Latitude' required />
                  <AvInput
                    type='text'
                    className='test'
                    name='longitude'
                    id='longitude'
                    placeholder='Longitude'
                    required
                  />
                  <AvFeedback>Must fill the coords</AvFeedback>
                </AvGroup>
              </Col>
              <Col xs='6'>
                <Label for='municipieSelect'>Select</Label>
                <Input type='select' name='select' id='municipieSelect'>
                  {municName.map((name, index) => <option key={index}>{capitalize(name.municipies)}</option>)}
                </Input>
              </Col>
            </FormGroup>
            <Row form>
              <Col md={6}>
                <AvGroup>
                  <Label for='propietaryName'>Propietary name</Label>
                  <AvInput
                    type='text'
                    name='propietaryName'
                    id='propietaryName'
                    placeholder='Something .inc'
                    required
                  />
                  <AvFeedback>Must enter a name</AvFeedback>
                </AvGroup>
              </Col>
              <Col md={6}>
                <AvGroup>
                  <Label for='propietaryDNI'>Propietary DNI or RNC </Label>
                  <AvInput type='text' name='propietaryDNI' id='propietaryDNI' placeholder='############' required />
                  <AvFeedback>Must fill with the DNI or RNC</AvFeedback>
                </AvGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <AvGroup>
                  <AvField
                    type='select'
                    name='select-multiple'
                    label='Soil type'
                    helpMessage='Select one or multiple (ctrl pressed)'
                    multiple
                    required>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                    <option>V</option>
                    <option>VI</option>
                    <option>VII</option>
                    <option>VIII</option>
                  </AvField>
                  <AvFeedback>Must select at least one</AvFeedback>
                </AvGroup>
              </Col>
              <Col md={4}>
                <AvGroup>
                  <Label for='parcelLenght'>Parcel lenght (in meters)</Label>
                  <AvInput type='text' name='parcelLenght' id='parcelLenght' required />
                  <AvFeedback>Must enter a quantity</AvFeedback>
                </AvGroup>
              </Col>
              <Col md={2}>
                <AvGroup>
                  <Label for='zip'>Zip code</Label>
                  <AvInput type='text' name='zip' id='zip' required />
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
      </div>
    );
  }
}
