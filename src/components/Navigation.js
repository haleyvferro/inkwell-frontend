import React from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <div className={`ui borderless inverted menu`}>
        <div className="ui inverted header item">
          <NavLink to='/'> The Paper Dragon </NavLink>
        </div>
        <div className="right menu">
          {/* <NavLink to='/notes' className="item">
            My GM Notebooks
          </NavLink>
          <NavLink to='/notes' className="item">
            My Character Notebooks
          </NavLink> */}
          <NavLink to='/login' className="item">
            Login
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;