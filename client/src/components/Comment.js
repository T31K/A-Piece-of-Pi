import React, {Component} from 'react';
import ScriptTag from 'react-script-tag'

import {Row, Col, Container} from "react-bootstrap"
import '../App.css';


class Comment extends Component{
  constructor(){
    super()
  
  this.state = {
    comments: "hello"
}
  }
 

  
  
  render(){
return(<ScriptTag src="https://utteranc.es/client.js"
                  repo="T31K/A-Piece-of-Pi"
                  issue-term="pathname"
                  theme="github-light"
                  crossorigin="anonymous"
                  async={true} />
      )
    }
}

export default Comment;
