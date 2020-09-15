import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Home from "./Home"
import About from "./About"
import Blog from "./Blog"
<<<<<<< HEAD
import Show from "./Show"
=======
>>>>>>> 6bb63c3a665e975dc81f54a59ea476800e25cf45
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
              
<<<<<<< HEAD
             
                <Route exact path='/' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route  path='/blog/:id' component={Show} />
                <Route exact path='/about' component={About} />
            
=======
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/about' component={About} />
              </Switch>  
>>>>>>> 6bb63c3a665e975dc81f54a59ea476800e25cf45
            </div>
        </Router>

      )
    }
}

export default App;
