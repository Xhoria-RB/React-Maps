import React, { Component } from 'react';
import Navbar from './AppNavbar';
import Footer from './Footer';
import { Container } from 'reactstrap';

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Main;
