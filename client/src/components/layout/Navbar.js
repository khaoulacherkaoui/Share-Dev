import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Search, Settings, Chat, Notifications ,Home } from "@material-ui/icons";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className="item">
      <li >
        <Link to="/profiles" >Profiles</Link>
      </li>
      <li >
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="item">
      <li >
        <Link to="/profiles">Developers</Link>
      </li>
      <li >
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar ">
      <h1>
        <Link to="/">
          <img className="logo" src="/assets/logo.png"/>
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);