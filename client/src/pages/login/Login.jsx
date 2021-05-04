import "./login.css";
import React from 'react';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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

export default function Login({children}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="login">
      <div id="flex" className="loginWrapper">
        <div id="a" className="loginLeft">
          <h3 className="loginLogo">SHAREDEV</h3>
          <span className="loginDesc">
            With SHAREDEV, share and keep in touch with developers community.
          </span>
          <form className="loginBox" >
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Sign in</button>
            <span className="loginForgot">Forgot Password?</span>
            <Button variant="contained" className="loginRegisterButton" onClick={handleClickOpen}>Sign Up</Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Sign Up
              </DialogTitle>
              <DialogContent dividers>
                {children}
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
