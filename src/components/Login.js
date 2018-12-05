import React, { Component } from 'react';
import { Container, Jumbotron, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden : false,
      redirect : false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState((prevState) => ({
      ...prevState,
      isHidden : !this.state.isHidden
    }));
  }

  onSubmit(e) {
    const user = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    if (user === 'juan@example.com' && password === 'abc123') {
      this.setState((prevState) => ({
        ...prevState,
        redirect : true
      }));
    } else {
      e.preventDefault();
      this.toggle();
      document.getElementById('emailInput').value = '';
      document.getElementById('passwordInput').value = '';
    }
  }
  render() {
    return (
      <Jumbotron>
        <Container>
          <h2 className='center-text'>Sign In</h2>
          <hr />
          <div id='errorMsg' hidden={this.state.isHidden}>
            <Alert color='danger'>User email or password are wrong</Alert>
          </div>
          <Form className='form' onSubmit='return false'>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='emailInput'
                  placeholder='example@example.com'
                  onFocus={this.toggle}
                  autoFocus
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <label htmlFor='passwordInput'>Password</label>
                <Input type='password' name='password' id='passwordInput' placeholder='******' />
              </FormGroup>
            </Col>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 3 }}>
                <FormGroup check>
                  <Label check>
                    <Input type='checkbox' id='rememberMe' className='checkbox mb-3' /> Remember me
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col md='auto'>
                <Link href='/' to='/'>
                  <Button className='btn btn-large btn-block' color='primary' onClick={this.onSubmit}>
                    Submit
                  </Button>
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </Container>
      </Jumbotron>
    );
  }
}
