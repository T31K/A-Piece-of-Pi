import React, {Component} from 'react'

import axios from 'axios'
import {Row, Col, Container} from "react-bootstrap"
import BlogNew from "./BlogNew"
import "../App.css"

const link = '/blog/'
class Blog extends Component {
    constructor(){
        super()
   this.toggleDarkMode = this.toggleDarkMode.bind(this)
    this.state = {
        posts: [],
        darkmode: false
      }
    
    }
  
    componentDidMount(){
        axios.get("/blog")
             .then(res => this.setState({posts: res.data.reverse()}))
          
    }
    
    toggleDarkMode(){
        this.setState(prevState => ({
            darkmode: !prevState.darkmode
    }))
}
  
    render(){

        return(
    
        <Container className="pl-3 pr-3 mx-auto">
        <Row>
        <Col>
            {this.state.posts.map( (post,index) => (

            <div className ={this.state.darkmode ? "b-window-inner mb-4 mx-auto" : "w-window-inner mb-4 mx-auto"} key={index}>
            
            <div className="icons"><span></span></div>
                
                <div className="title">
                   >_ <a href={`/blog/${post._id}`}>{post.title.toLowerCase()}</a>  
                </div>
                
                <div className={this.state.darkmode ? "b-content" : "w-content"}>
                    <img className="picture rounded mx-auto mb-3" src={post.image} alt="image"/>
                        <p>{post.description}</p>
                </div>
                
                {/*<button onClick={this.toggleDarkMode}>hello</button>
            */}
            </div>
                ))}

<BlogNew />
        </Col>
        </Row>

        </Container>
          
        )
    }
}
        
export default Blog 
