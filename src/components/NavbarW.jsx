import React from "react"
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
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
  <Nav fill variant="tabs" activeKey="/home" style={{backgroundColor:"lightgray"}}>
    <Nav.Item>
      <Link to='/'style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>Home</Link>
    </Nav.Item>
  <NavDropdown title="Categorias" id="basic-nav-dropdown" style={{fontFamily:"'Bebas Neue', cursive"}}>
          <NavDropdown.Item><Link to='/category/consolas'style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>Consolas</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to='/category/audifonos'style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>Audífonos</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to='/category/compusCelulares'style={{fontFamily:"'Bebas Neue', cursive", color:"black"}}>Computadoras y Celulares</Link></NavDropdown.Item>
        </NavDropdown>
    <CartWidget/>
  </Nav>
</>
  );
}