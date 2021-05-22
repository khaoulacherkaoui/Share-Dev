import "./login.css";
import React, { useState} from 'react';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import Register from '../../components/registrationForm/RegistrationForm';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


const styles = (theme) => ({
  root: {
    margin: 1,
    padding: theme.spacing(2),
    color: theme.palette.grey[700]
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Login = ({ login, isAuthenticated }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [formData,setFormData]=useState({
    email: '',
    password: ''
});
const {email, password}=formData;
const onChange= e => setFormData({ ...formData, [e.target.name]: e.target.value})
const onSubmit= e => {
    e.preventDefault();
    login(email, password);
    console.log('Success');
};
if (isAuthenticated) {
  return <Redirect to="/dashboard" />;
}

  return (
    <div className="login">
      <div id="flex" className="loginWrapper">
        <div id="a" className="loginLeft">
          <h3 className="loginLogo">SHAREDEV</h3>
          <span className="loginDesc">
            With SHAREDEV, share and keep in touch with developers community.
          </span>
          <form className="loginBox" onSubmit={e => onSubmit(e)}>
            <input 
            type="email"
            name="email"
            placeholder="Email" 
            className="loginInput"
            value={email}
            onChange={onChange}
            required />
            <input 
            type="password"
            name="password"
            placeholder="Password" 
            className="loginInput"
            value={password}
            onChange={onChange}
            minLength='6'
            required
            />
            <button className="loginButton" type="submit" value="Login">Sign in</button>
            <span className="loginForgot">Forgot Password?</span>
            <Button variant="contained" className="loginRegisterButton" onClick={handleClickOpen}>Sign Up</Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              <Link to="/register">Sign Up</Link>
              </DialogTitle>
              <DialogContent dividers>
                <Register/>
              </DialogContent>
            </Dialog>
          </form>
        </div>
        <div id="b" className="loginRight">
          <img className="loginImage" src="/assets/image_share.png"/>
        </div>
      </div>
    </div>
    
  );
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);