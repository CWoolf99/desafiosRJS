import React from "react"
import { Container, Navbar, Nav} from "react-bootstrap";

export default function NavbarW () {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container className="justify-content-center">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      CoderTech
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Inicio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3" disabled>
        Link
      </Nav.Link>
    </Nav.Item>
  </Nav>
</>
  );
}