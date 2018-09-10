import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = props => {

  function clickHandler(){
    localStorage.clear()
    props.clearUser()
    props.history.push('/')
  }

  return (
    <div className={`ui inverted green menu navbar`}>
      <NavLink activeClassName="ui active item" className="ui item" exact to="/">

        <h2 className="ui header">
          <i className={`truck icon`} />
          <div className="content">Foodtruck Finder</div>
        </h2>

      </NavLink>

      {props.user ? (
        <React.Fragment>
          <span className="ui item">{`Logged in as: ${props.user.name}`}</span>
          <NavLink activeClassName="ui active item" className="ui item" exact to="/update">Update your menu</NavLink>
          <button className="ui item" onClick={clickHandler}>Logout</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NavLink exact to="/signup" className="ui item" activeClassName="ui active item">SignUp</NavLink>
          <NavLink exact to="/login" className="ui item" activeClassName="ui active item">Login</NavLink>
        </React.Fragment>
      )}
    </div>
  )
}

export default NavBar;
