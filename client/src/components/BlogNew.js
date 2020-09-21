import React, {Component} from 'react'

import axios from 'axios'
import {Row, Col, Container} from "react-bootstrap"

import "../App.css"


class BlogNew extends Component {
    constructor(){
        super()
   
    }
  
   
  
    render(){

        return(
    
        <Container className="pl-3 pr-3 mx-auto">
        <button>Add New</button>
        </Container>
          
        )
    }
}
        
export default BlogNew
