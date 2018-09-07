import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <NavBar />
            <Route exact path="/" component={Container} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </React.Fragment>
        </BrowserRouter>
          <Container />
      </div>
    )
  }
}

export default App;
