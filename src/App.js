import React from 'react';
import './App.css';
import TruckContainer from './TruckContainer'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import UpdateForm from './UpdateForm'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <NavBar />
            <Route exact path="/" component={TruckContainer} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/update" component={UpdateForm} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
