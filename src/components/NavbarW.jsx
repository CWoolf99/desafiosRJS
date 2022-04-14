import React from "react"
import { Link } from "react-router-dom";
import { Container, Navbar, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";


export default function NavbarW () {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container className="justify-content-center">
      <Navbar.Brand href="/">
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
  <Nav fill variant="tabs" activeKey="/home">
    <Nav.Item>
      <Link to='/category/consolas'>Consolas</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/category/audifonos'>Audífonos</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/category/compusCelulares'>Computadoras y Celulares</Link>
    </Nav.Item>
    <CartWidget/>
  </Nav>
</>
  );
}