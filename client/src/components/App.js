import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Home from "./Home"
import About from "./About"
import Blog from "./Blog"
import Show from "./Show"
import '../App.css';


class App extends Component{
  render(){
    
      return (

        <Router>
            <div className ="bg">
              <Navbar className="bg " variant="dark" align="center" >
              <Navbar.Brand href="/">APOP</Navbar.Brand>
                <Nav className="mr-auto">
                  <li><Link to={'/'} className="nav-link"> /home </Link></li>
                  <li><Link to={'/blog'} className="nav-link"> /blog </Link></li>
                  <li><Link to={'/about'} className="nav-link"> /about </Link></li>
                </Nav>
              </Navbar>
              
             
                <Route exact path='/' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route  path='/blog/:id' component={Show} />
                <Route exact path='/about' component={About} />
            
            </div>
        </Router>

      )
    }
}

export default App;
