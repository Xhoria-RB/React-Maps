import React, { Component } from 'react';
import municipies from './municipies.json';
import { capitalize } from 'lodash';
import { Container, Row, Col, Label, FormGroup, Input, Button } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

export default class Parcels extends Component {
  render() {
    const { id } = this.props;
    const municName = municipies.filter((mun) => mun.province_id === id);
    return (
      <div>
        <select>{municName.map((name, index) => <option key={index}>{capitalize(name.municipies)}</option>)}</select>
        <Container id='personContainer'>
          <h2 className='text-center'>Register your parcel</h2>
          <hr />
          <AvForm>
            <Row form>
              <FormGroup row>
                <Label for='selectMunicipie' sm={2}>
                  Select a province from map and a municipie from select
                </Label>
                <Col sm={10}>
                  <Input type='select' name='selectMunicipie' id='selectMunicipie' required>
                    {municName.map((name, index) => <option key={index}>{capitalize(name.municipies)}</option>)}
                  </Input>
                </Col>
              </FormGroup>
              <Col md={6}>
                <AvGroup>
                  <Label for='propietaryName'>Propietary Name name</Label>
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
      </div>
    );
  }
}
