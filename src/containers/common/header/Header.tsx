import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header data-test="header-section">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" data-test="brand-name">
              TS
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav>
              <Link to="/" data-test="home-navigation">
                Home
              </Link>
            </Nav>
            <Nav>
              <Link to="/about" data-test="about-navigation">
                About
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
