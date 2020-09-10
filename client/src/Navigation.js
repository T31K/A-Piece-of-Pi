import React from 'react';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import './App.css';


function Navigation (){
    return (
    <div className="mx-auto" align="center">
    <Navbar className="bg " variant="dark" align="center" >
    <Navbar.Brand href="#home">APOP</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">/home</Nav.Link>
      <Nav.Link href="#features">/blog</Nav.Link>
      <Nav.Link href="#pricing">/about</Nav.Link>
    </Nav>
  </Navbar>
    </div>
    )
}
export default Navigation;
