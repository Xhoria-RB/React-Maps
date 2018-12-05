import React, { Component } from 'react';
import Navbar from './AppNavbar';
import { Container } from 'reactstrap';

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Main;
