import React, {Component} from 'react'
import Container from "react-bootstrap/Container"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../App.css"

const link = '/blog/'
class Blog extends Component {
    constructor(props){
      super(props)
  
      this.state = {
        posts: [],
      }
    

    }
  
    componentDidMount(){
      fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(res => this.setState({posts: res}))
    }
  
  
    render(){

        return(
        <Router>
        <Container className="pl-5 pr-5 mx-auto">
            <Row>
            <Col>
                {this.state.posts.map( (post,index) => (

                
                <div className="window-inner mb-4 mx-auto" key={index}>
                <div className="icons"><span></span></div>
                    
                    
                    <a href={link+post._id} className="title">
                        <div>
                            {post.title.toLowerCase()}
                        </div>
                    </a>
                    
                        <pre className="lang-python">   
                        
                    
                            <code>

                                <img className="picture rounded mx-auto" src={post.image} alt="image"/>
                            </code>
                        </pre>
                      
                </div>
                    ))}
    
          
            
              
            </Col>
            </Row>
            </Container>
             </Router>
        )
    }
}
        
export default Blog 
