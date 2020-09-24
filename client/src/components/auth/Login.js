import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import Input from "../form/Input";
import "./loginsignup.scss"
import {
   Card,
   Button,
   Form,
   Container,
   Row,
   Col,
   Alert
} from "react-bootstrap";

const Login = ({ message, loading, user, onChange, onBlur, onSubmit }) => {
   const { email, password, errors } = user;
   return (
      <Container>
      <div className='fakeMenu'>
            <div className="fakeButtons fakeClose"></div>
            <div className="fakeButtons fakeMinimize"></div>
            <div className="fakeButtons fakeZoom"></div>
            
      </div>

      <div className='fakeScreen'>
         <Row>
            <Col className="mx-auto" sm={11} md={7} lg={5}>
               <Card className="form-custom">
                  <Form
                     noValidate
                     onSubmit={onSubmit}
                     className='input-custom'
                  >
                     
                        <Input
                           className="input-custom"
                           name="email"
                           type="email"
                           placeholder="Enter Email"
                           value={email}
                           onChange={onChange}
                           onBlur={onBlur}
                           text={{
                              module: "login",
                              label: "Email",
                              error: errors.email
                           }}
                        />
                        <Input
                           name="password"
                           type="password"
                           placeholder="Enter Password"
                           value={password}
                           onBlur={onBlur}
                           onChange={onChange}
                           text={{
                              module: "login",
                              label: "Password",
                              error: errors.password
                           }}
                        />

                        <Button type="submit" className='edit-btn' >
                           <FontAwesomeIcon
                              icon={faSignInAlt} 
                              disabled={loading}
                            />
                        </Button>

                        

                       
                  </Form>
               </Card>
            </Col>
         </Row>
         </div>
      </Container>
      
   );
};

Login.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   message: PropTypes.string.isRequired,
   loading: PropTypes.bool.isRequired
};

export default Login;