import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home(){
    return(
        <Container>
            <Row>
                <Col lg={12}>
                    <h1>Home</h1>
                 </Col>
            </Row>  
        </Container>
    )
}
export default Home;