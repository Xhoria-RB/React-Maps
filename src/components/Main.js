import React from 'react';
import Navbar from './AppNavbar';
import { Container } from 'reactstrap';
import Footer from './Footer';

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
