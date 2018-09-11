import React from 'react';
import './App.css';
import TruckContainer from './TruckContainer'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import UpdateForm from './UpdateForm'
import { BrowserRouter, Route } from 'react-router-dom'

const requestHelper = url =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(res => {
    if (res.status === 401) {
      alert("login failed");
    } else {
      return res.json();
    }
  });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  clearUser =()=>{
    this.setState({user: null})
  }

  fetchUser = () => {
    requestHelper("http://localhost:3001/account").then(this.updateUser);
  };

  updateUser = user => {
    this.setState({ user });
  };

  render() {

    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route path='/' render={(props)=><NavBar {...props} clearUser= {this.clearUser} user={this.state.user} />} />
            <Route exact path="/" component={TruckContainer} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" render={(props)=> <Login {...props} updateUser= {this.updateUser} />} />
          {this.state.user ?
            <Route exact path="/update" render={(props)=> <UpdateForm {...props} requestHelper={requestHelper} />} />
            : null}
          </React.Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
