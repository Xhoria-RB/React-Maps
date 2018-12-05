import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, NavbarToggler, Input } from 'reactstrap';

export default class AppNavbar extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen : false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen : !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>React Maps</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='/login'>Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/register'>Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <Input type='search' name='search' id='searchInput' placeholder='Search' />
                </NavItem>
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
