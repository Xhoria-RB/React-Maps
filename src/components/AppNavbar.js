import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, NavbarToggler } from 'reactstrap';

export default class AppNavbar extends Component {
  constructor (props) {
    super();
    this.state = {
      isOpen : false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    this.setState({
      isOpen : !this.state.isOpen
    });
  }
  render () {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='https://github.com/Xhoria-RB'>Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
