import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './App.css';


class MainContent extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [],
      show: true
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/")
    .then(res => res.json())
    .then(res => this.setState({posts: res}))
    // .then(res => this.setState({data: res}))
  }


    render(){

  
    return (
      <div className="bg">
     <Container>
     <Row>
          <Col lg={12}>
            
              {this.state.posts.map( (post,index) => (

                <div className="window mb-4" key={index}>
                  <div className="icons"><span></span></div>
                  <div className="title mb-1">> {post.title.toLowerCase()}</div>
                    <pre className="lang-python"><code>
                        <img className="picture rounded mx-auto" src={post.image} alt="image"/>
                        
                        </code></pre>
                     
                </div>
                  ))}
  
        
          
            
           </Col>
           </Row>
           </Container>
        
       
       
      
        
   
      </div>
    )

  }
}
export default MainContent;
