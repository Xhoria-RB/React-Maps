import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Footer() {
  return (
    <Container className='footer'>
      <h5>
        Made by{' '}
        <span>
          <strong>Ricardo Bibieca</strong>
        </span>
      </h5>
    </Container>
  );
}
