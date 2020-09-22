import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutSuccess } from '../actions/Auth';

class Navigation extends React.Component {
  render() {
    return (
      <div className={`ui borderless inverted menu`}>
        <div className="ui inverted header item">
          <NavLink to='/'> Inkwell </NavLink>
        </div>
        <div className="right menu">
          {/* <NavLink to='/notes' className="item">
            My GM Notebooks
          </NavLink>
          <NavLink to='/notes' className="item">
            My Character Notebooks
          </NavLink> */}
          {
            this.props.auth ? 
          <NavLink to='/login' className="item">
            Logout
          </NavLink>
          :
          <NavLink to='/login' className="item">
            Login
          </NavLink>

          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  logoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);