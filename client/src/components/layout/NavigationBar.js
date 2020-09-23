import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button, Form, FormControl, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import './nav.scss'

const Navigationbar = ({ auth, onClick }) => (
   <Container>
   <Navbar bg="none" variant="dark" >
  
   <Nav className="m-auto">
     <Nav.Link href="/">>home</Nav.Link>
     <Nav.Link href="/blog">>blog</Nav.Link>
     <Nav.Link href="/about">>about</Nav.Link>

     <Link to="/blog"></Link>
      <Nav className="ml-auto">
         {auth ? (
            <Nav.Link to="/logout" onClick={onClick}> {'< ' + 'logout'} </Nav.Link>
         ) : (
            <Nav.Link to="/login"> > login </Nav.Link> 
            )}
   </Nav>
   </Nav>
   
 </Navbar>
 </Container>
);

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;