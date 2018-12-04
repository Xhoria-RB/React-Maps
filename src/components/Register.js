import React, { Component } from 'react';
import { Container, Jumbotron, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Person from './Person';
import Entity from './Entity';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEntity : false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isEntity : !this.state.isEntity
    });
  }

  render() {
    return (
      <Container className='register-form'>
        <Button onClick={this.toggle}>Person</Button>
        <Button onClick={this.toggle}>Entity</Button>
        <Container>{this.state.isEntity ? <Person /> : <Entity />}</Container>
      </Container>
    );
  }
}
