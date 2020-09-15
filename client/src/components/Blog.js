import React, {Component} from 'react'



import axios from 'axios'
import {Row, Col, Container} from "react-bootstrap"

import "../App.css"

const link = '/blog/'
class Blog extends Component {
    state = {
        posts: [],
      }
    
  
  
    componentDidMount(){
        axios.get("/blog")
             .then(res => this.setState({posts: res.data}))
    }
  
  
    render(){

        return(
    
        <Container className="pl-3 pr-3 mx-auto">
            <Row>
            <Col>
                {this.state.posts.map( (post,index) => (

                
                <div className="window-inner mb-4 mx-auto" key={index}>
                <div className="icons"><span></span></div>
                    
                    <div className="title">
                       >_ <a href={`/blog/${post._id}`}>{post.title.toLowerCase()}</a>  
                    </div>
                    
                    <div className="content">
                    <img className="picture rounded mx-auto" src={post.image} alt="image"/>
                        <p>{post.description}</p>
                        
                    </div>
            
                            

                                
                           
                      
                </div>
                    ))}
    
          
            
              
            </Col>
            </Row>
            </Container>
          
        )
    }
}
        
export default Blog 
