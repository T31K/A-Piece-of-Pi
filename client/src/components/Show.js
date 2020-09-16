import React, {Component} from 'react';
import axios from "axios"

import Home from "./Home"
import About from "./About"
import Blog from "./Blog"


import {Row, Col, Container} from "react-bootstrap"
import '../App.css';


class App extends Component{
  state = {
    post: {}
}

componentDidMount() {
    axios.get(`/blog/${this.props.match.params.id}`)
        .then(res => this.setState({post: res.data}))
}

handleDelete = (id) => {
    axios.delete(`/blog/${this.props.match.params.id}`)
        .then(res => {
            this.props.history.push('/')
        })

}
  render(){
    console.log('this.state.post', this.state.post);
    const {post} = this.state
      return (

        <div>
          <Container className="pl-3 pr-3 mx-auto">
        
          <div className="w-window-inner">
                <div className="icons"><span></span></div>
                    
                    <div className="title">
                      >_{post.title}  
        
                    </div>
                       
                     
                       
                           <div className="w-content">
                              <img className="picture rounded mx-auto" src={post.image} alt="image"/>
                              {post.description}  
                         
                        
                            </div>
                            </div>

                         
           
          </Container>
        </div>


      )
    }
}

export default App;
