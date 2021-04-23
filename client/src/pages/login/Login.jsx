import "./login.css";

export default function Login() {
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SHAREDEV</h3>
          <span className="loginDesc">
            With SHAREDEV, share and keep in touch with developers community.
          </span>
          <form className="loginBox" >
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Sign in</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Sign Up</button>
          </form>
        </div>
        <div className="loginRight">
          <img className="loginImage" src="/assets/image_share.png"/>
        </div>
      </div>
    </div>
  );
}
