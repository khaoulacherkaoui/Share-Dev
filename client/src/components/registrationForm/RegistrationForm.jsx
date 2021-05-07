import "./registrationForm.css"

export default function RegistrationForm() {
    return (
        <div className="register">
            <form className="registerBox" >
                <input placeholder="First Name" className="registerInput"/>
                <input placeholder="Last Name" className="registerInput"/>
                <input placeholder="Email" className="registerInput" />
                <input placeholder="New Password" className="registerInput" />
                <input placeholder="Profession" className="registerInput"/>
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

