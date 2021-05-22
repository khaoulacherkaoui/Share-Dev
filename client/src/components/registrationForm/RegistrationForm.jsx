import "./registrationForm.css";
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    profession: ''
  });

  const { name, email, password, password2, profession } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password, profession});
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="register" >
            <form className="registerBox" onSubmit={e => onSubmit(e)}>
                <input 
                type="text"
                placeholder="Full Name" 
                className="registerInput"
                name="name"
                value={name}
                onChange={onChange}
                required
                />
                <input 
                type="text"
                placeholder="Profession" 
                className="registerInput"
                name="profession"
                value={profession}
                onChange={onChange}
                required
                />
                <input 
                type="email"
                placeholder="Email" 
                className="registerInput"
                name="email"
                value={email}
                onChange={onChange}
                required
                />
                <input 
                type="password"
                placeholder="New Password" 
                className="registerInput"
                name="password"
                value={password}
                minLength='6'
                onChange={onChange}
                required
                />
                <input 
                type="password"
                placeholder="Confirm Password" 
                className="registerInput"
                name="password2"
                value={password2}
                minLength='6'
                onChange={onChange}
                required
                />
                <button className="registerButton" type="submit" value="Register">Sign Up</button>
                <span className="or">or</span>
                <button className="googleButton">
                    Sign Up With Google
                </button>
                <button className="facebookButton">
                    Sign Up With Facebook
                </button>
            </form>
        </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);