import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="/startsida">
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ms-auto">
            <Nav.Link href="/">Startsida</Nav.Link>
            {/* <Nav.Link href="/om-oss">Om oss</Nav.Link> */}
            <Nav.Link href="/kontakt">Kontakt</Nav.Link>
            <Nav.Link href="https://www.instagram.com/stylelivinghbg">
              Instagram
            </Nav.Link>
            <Nav.Link href="/vara-marken">Våra märken</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
