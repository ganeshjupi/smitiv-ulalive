import React from "react";
import Logo from "../assets/images/logo.svg"
import UserSignIn from "../assets/images/user signin.svg"
import Key from "../assets/images/key.svg"
import VectorOff from "../assets/images/Vector.svg"
import VectorOn from "../assets/images/visible-ico.svg"
import GoogleIcon from "../assets/images/google-ico.svg"
import TweeterIcon from "../assets/images/image 31 (Traced).svg"
import LoginHooks from "../common/GoogleLogin/LoginHooks";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    goToSignIn = (e) => {
        e.preventDefault()
        this.props.history.push('/sign_up')
    }

    render() {
        return (
            <div>
                {/* Main Wrapper Starts here */}
                <section className="container-fluid bg-grey">
                    <header className="row px-md-5 px-4">
                        <div className="col-md-12 ">
                            <div className="nav-brand">
                                <img className="img-fluid" src="../images/logo.svg" alt="Logo" />
                            </div>
                            <div className="hdr-right ">
                                <div className="sign-up">Don’t have an account?</div>
                                <a href="Email-sign-up.html" className="text-bold ml-2 signup" onClick={(e) => this.goToSignIn(e)}>Sign Up</a>
                            </div>
                        </div>
                    </header>
                    {/* header Ends here */}

                    <div className="row px-md-5 px-4 login-wrap">
                        <form>
                            <h2>Welcome Back</h2>
                            <p className="text-center">Sign in to your account</p>
                            <span className="signerror">
                                *Unable to login into this account. Please try again
                            </span>
                            <div className="form-group mb-4 left-inner-addon mt-4">
                                <label className="text-bold">Username, email or phone number</label>
                                <img className="off" src="../images/user signin.svg" alt="icon" />
                                <input
                                    className="form-control signerrorborder"
                                    type="text"
                                    name
                                    placeholder="Antman@gmail.com"
                                />
                            </div>
                            <div className="form-group mb-0 pass-visible left-inner-addon">
                                <label className="text-bold">Password</label>
                                <img src="../images/key.svg" alt="icon" />
                                <input
                                    className="form-control signerrorborder"
                                    type="password"
                                    name
                                    placeholder="************************"
                                />
                                <a href="javascript:;" className="visibility-icon">
                                    <img className="off" src="../images/Vector.svg" alt="icon" />
                                    <img className="on" src="../images/Vector-ico.svg" alt="icon" />
                                </a>
                            </div>
                            <div className="form-group text-right mb-5">
                                <a href="javascript:;" className="forgot-pass">
                                    Forgot Password
                                </a>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-yellow w-100">Sign-in</button>
                            </div>
                            <div className="form-group">
                                <span className="seperater">
                                    <span>Or connect with</span>
                                </span>
                            </div>
                            <div className="mt-4 mb-4 text-center">
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                        <LoginHooks />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <button className="btn btn-white  w-75">
                                            <img
                                                className="twitter-ico"
                                                src="../images/image 31 (Traced).svg"
                                                alt="icon"
                                            />
                                            <span className="twitter">Twitter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </section>
                {/* Main Wrapper Ends here */}

            </div>
        );
    }
}

export default SignIn;


