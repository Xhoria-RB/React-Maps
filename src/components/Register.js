import React, { Component } from 'react';
import { Container, Row, Col, Button, Fade } from 'reactstrap';
import Person from './Person';
import Entity from './Entity';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPerson : true,
      btnColor : 'primary'
    };
    this.toggle = this.toggle.bind(this);
    this.btnChangeColor = this.btnChangeColor.bind(this);
  }
  toggle() {
    this.setState({
      isPerson : !this.state.isPerson,
      btnColor : this.btnChangeColor(this.state.btnColor)
    });
  }
  btnChangeColor(color) {
    if (color === 'primary') {
      return 'success';
    } else {
      return 'primary';
    }
  }

  render() {
    return (
      <Container className='register-form'>
        <Fade in='true'>
          <Row>
            <Col sm='12' md={{ size: 6, offset: 3 }}>
              <Button className='btn btn-large btn-block' color={this.state.btnColor} onClick={this.toggle}>
                Change
              </Button>
            </Col>
          </Row>

          <Container className='my-2'>{this.state.isPerson ? <Person /> : <Entity />}</Container>
        </Fade>
      </Container>
    );
  }
}
