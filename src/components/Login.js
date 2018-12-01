import React, { Component } from 'react';
import { Container, Jumbotron, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Login extends Component {
	render() {
		return (
			<Jumbotron>
				<Container>
					<h2 className='center-text'>Sign In</h2>
					<hr />
					<Form className='form'>
						<Col>
							<FormGroup>
								<Label>Email</Label>
								<Input type='email' name='email' id='emailInput' placeholder='example@example.com' />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<label htmlFor='passwordInput'>Password</label>
								<Input type='password' name='password' id='passwordInput' placeholder='******' />
							</FormGroup>
						</Col>
						<Button color='primary' id='submit'>
							Submit
						</Button>
					</Form>
				</Container>
			</Jumbotron>
		);
	}
}
