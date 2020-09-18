import React, {Component} from 'react';
import axios from "axios"

import {Row, Col, Container} from "react-bootstrap"
import '../App.css';


class App extends Component{
  constructor(){
    super()
  
  this.state = {
    post: {}
}
}

componentDidMount() {
    axios.get(`/blog/${this.props.match.params.id}`)
        .then(res => this.setState({post: res.data}))
        // .then(res => console.log(this.state.post))
  
       
}

// handleDelete = (id) => {
//     axios.delete(`/blog/${this.props.match.params.id}`)
//         .then(res => {
//             this.props.history.push('/')
//         })

// }
  render(){
    console.log('this.state.post', this.state.post);
    const {post} = this.state
    
      return (

        <div>
          <Container className="pl-5 pr-5 mx-auto">
              <Row>
                <Col>
                  <div className="w-window-inner">
                        <div className="icons"><span></span></div>
                            <div className="title">>_{post.title} </div>
                            <div className="w-content">
                              <img className="picture rounded mx-auto" src={post.image} alt="image"/> 
                              {post.description}  
  
                            </div>
                            </div>
                  </Col>         
              </Row>

              <ul>
              {post.comments}
              </ul>
                                               
                            
                  
          </Container>
        </div>
  
        )
    }
}

export default App;
