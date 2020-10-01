import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutSuccess } from '../actions/Auth';

class Navigation extends React.Component {

  handleLogout = () => {
    localStorage.removeItem('myAppToken')
    this.props.logoutSuccess()
  }

  render() {
    return (
      <div className={`ui borderless menu`}>
        <div className="ui inverted header item">
          <NavLink to='/dashboard'> Inkwell </NavLink>
        </div>
        <div className="right menu">
          {
            this.props.auth ? 
            // <p>Hello, {this.props.auth.}</p>
          <NavLink to='/login' className="item" onClick={this.handleLogout}>
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