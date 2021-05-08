import "./registrationForm.css";
import { useState} from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';


const RegistrationForm = ({ setAlert}) => {

    const [formData,setFormData]=useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        profession: ''
    });
    const {name, email, password, password2, profession}=formData;
    const onChange= e => setFormData({ ...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault();
        if(password!==password2){
            setAlert('Passwords do not matches', 'danger');
        }else{
            console.log('Success');
        }
    };
    return (
        <div className="register">
            <form className="registerBox" onSubmit={e => onSubmit(e)}>
                <input 
                type="text"
                placeholder="Full Name" 
                className="registerInput"
                name="name"
                value={name}
                onChange={e => onChange(e)}
                required
                />
                <input 
                type="text"
                placeholder="Profession" 
                className="registerInput"
                name="profession"
                value={profession}
                onChange={e => onChange(e)}
                required
                />
                <input 
                type="email"
                placeholder="Email" 
                className="registerInput"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
                />
                <input 
                type="password"
                placeholder="New Password" 
                className="registerInput"
                name="password"
                value={password}
                minLength='6'
                onChange={e => onChange(e)}
                required
                />
                <input 
                type="password"
                placeholder="Confirm Password" 
                className="registerInput"
                name="password2"
                value={password2}
                minLength='6'
                onChange={e => onChange(e)}
                required
                />
                <button className="registerButton">Sign Up</button>
                <span className="or">or</span>
                <button className="googleButton">
                    Sign Up With Google
                </button>
                <button className="facebookButton">
                    Sign Up With Facebook
                </button>
            </form>
        </div>
    )
}

RegistrationForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
  };


export default connect(null, { setAlert })(RegistrationForm);
