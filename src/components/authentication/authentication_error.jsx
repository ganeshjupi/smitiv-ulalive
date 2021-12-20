import React from "react";
import Logo from "../assets/images/logo.svg"

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <section className="container-fluid bg-grey">
                    <header className="row px-md-5 px-4">
                        <div className="col-md-12 ">
                            <div className="nav-brand">
                                <img className="img-fluid" src="../images/logo.svg" alt="Logo" />
                            </div>
                        </div>
                    </header>
                    {/* header Ends here */}
                    <div className="row px-md-5 px-4 login-wrap">
                        <div id="wrapper">
                            <div className="dialog">
                                <p className="code">
                                    You verification code is sent by SMS to
                                    <span className="text-bold">(+64 ) 123 4567</span>
                                </p>
                                <div className="form">
                                    <input
                                        className="formborder"
                                        type="text"
                                        maxLength={1}
                                        size={1}
                                        min={0}
                                        max={9}
                                        pattern="[0-9]{1}"
                                    />
                                    <input
                                        className="formborder"
                                        type="text"
                                        maxLength={1}
                                        size={1}
                                        min={0}
                                        max={9}
                                        pattern="[0-9]{1}"
                                    />
                                    <input
                                        className="formborder"
                                        type="text"
                                        maxLength={1}
                                        size={1}
                                        min={0}
                                        max={9}
                                        pattern="[0-9]{1}"
                                    />
                                    <input
                                        className="formborder"
                                        type="text"
                                        maxLength={1}
                                        size={1}
                                        min={0}
                                        max={9}
                                        pattern="[0-9]{1}"
                                    />
                                </div>
                                <div className="form-group mb-4 left-inner-addon mt-4">
                                    <label className="text-danger errormessage">
                                        Verification code is expired or not correct. Please try again!
                                    </label>
                                </div>
                                <p className="second">
                                    {" "}
                                    Did not receive the code?
                                    <br />
                                    <a className="forgot-pass">Resend</a> or try a{" "}
                                    <a className="forgot-pass">different verification method</a>
                                </p>
                                <div className="form-group register">
                                    <button className="btn btn-yellow w-100">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Authentication;


