import React from 'react';
import { NavLink } from 'react-router-dom'


  const NavBar = props => {
    return (

      <div className={`ui inverted green menu navbar`}>
        <a className="item">
          <h2 className="ui header">
            <i className={`truck icon`} />
            <div className="content">Foodtruck Finder</div>
          </h2>
        </a>
        <NavLink activeClassName="ui active item" className="ui item" exact to="/">
          Home
        </NavLink>
        <NavLink
          exact
          to="/signup"
          className="ui item"
          activeClassName="ui active item">
          SignUp
        </NavLink>
        {props.user ? (
          <div>
            <span className="ui item">Logged in as: {props.user.name}</span>
            <NavLink>activeClassName="ui active item" className="ui item" exact to="/update"</NavLink>
          <div/>
        ) : (
          <NavLink
            exact
            to="/login"
            className="ui item"
            activeClassName="ui active item"
          >
            Login
          </NavLink>
        )}
      </div>
    );
  };

export default NavBar;
