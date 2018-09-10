import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = props => {
  return (
    <div className={`ui inverted green menu navbar`}>
      <NavLink activeClassName="ui active item" className="ui item" exact to="/">

        <h2 className="ui header">
          <i className={`truck icon`} />
          <div className="content">Foodtruck Finder</div>
        </h2>
    
      </NavLink>

      {props.user ? (
        <a>
          <span className="ui item">{`Logged in as: ${props.user.name}`}</span>
          <NavLink activeClassName="ui active item" className="ui item" exact to="/update">Update your menu</NavLink>
        </a>
      ) : (
        <a>
        <NavLink exact to="/signup" className="ui item" activeClassName="ui active item">SignUp</NavLink>
        <NavLink exact to="/login" className="ui item" activeClassName="ui active item">
          Login
        </NavLink>
      </a>
      )}
    </div>
  )
}

export default NavBar;
