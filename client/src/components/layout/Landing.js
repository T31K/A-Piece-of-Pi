import React from "react";
import { Container, Row } from "react-bootstrap";
import './landing.scss'

const Landing = () => (
<div>
<Container>
   <div className='fakeMenu'>
   <div className="fakeButtons fakeClose"></div>
   <div className="fakeButtons fakeMinimize"></div>
   <div className="fakeButtons fakeZoom"></div>
   </div>
   <div className="fakeScreen">
   <p className="line1">hello<span className="cursor1">_</span></p>
   <p className="line2">welcome to a piece of pi<span className="cursor2">_</span></p>
   <p className="line3">let's talk tech!<span className="cursor3">_</span></p>
   <p className="line4">><span className="cursor4">_</span></p>
   </div>
   </Container>
</div>
);

export default Landing;