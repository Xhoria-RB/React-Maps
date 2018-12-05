import React, { Component } from 'react';
import { capitalize } from 'lodash';
import { Fade, Container, Row, Col, Jumbotron, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

export default class ProvinceData extends Component {
  render() {
    const { name, data, weather, soil } = this.props;

    return (
      <Container>
        <h1>
          <strong> {name} </strong>
        </h1>

        <Row>
          <Col xs='3' className='provinceData'>
            <ListGroup>
              <ListGroupItemHeading>Soil</ListGroupItemHeading>
              {Object.keys(soil).map((key) => (
                <ListGroupItem key={key}>
                  <strong>{capitalize(key).replace('_', ' ') + ': '}</strong>
                  {soil[key]}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col xs='3' className='provinceData'>
            <ListGroup>
              <ListGroupItemHeading>Production</ListGroupItemHeading>
              {/* Here I need to put the data */}
              {Object.keys(data).map((key) => (
                // key is the property in the data object and data[key] will be the content
                <ListGroupItem key={key}>
                  <strong>{capitalize(key).replace('_', ' ') + ': '}</strong>
                  {data[key]}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col xs='3' className='provinceData'>
            <ListGroup>
              <ListGroupItemHeading>Weather</ListGroupItemHeading>

              {Object.keys(weather).map((key) => (
                <ListGroupItem key={key}>
                  <strong>{capitalize(key).replace('_', ' ') + ': '}</strong>
                  {weather[key]}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
