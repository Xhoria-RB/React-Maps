import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

export default class AppNavbar extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    
  }
  render() {
    return <div />;
  }
}
