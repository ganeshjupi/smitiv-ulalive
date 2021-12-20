import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { IsNullOrEmpty } from "../../helpers/utility";
import { loginPasswordRequest } from "../../store/user/user.actions";
import { getAccessToken } from "../../store/user/user.selector";
import LoginHooks from "../common/GoogleLogin/LoginHooks";
import Users from "../../assets/images/user signin.svg";
import Twitter from "../../assets/images/image 31 (Traced).svg";
import { getPlayerId, getUpdatedPlayerId } from "../../helpers/notificationHelper";
import Eyeicon from "../../assets/images/icons8-eye-36.png";
import Password from "../../assets/images/eye-of.svg";
import UserAPI from "../../store/user/user.api";
import toastr from "toastr";
import Authentication from "./authentication";
import Modal from "react-bootstrap/Modal";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
require('dotenv').config();

function SignIn() {
    const [userName, setUserName] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [visible, setVisible] = useState(false);
    const [showAuthenticate, setAuthenticate] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [cpassword, setCpassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const { accessToken } = useSelector((state) => {
        return {
            accessToken: getAccessToken(state)
        }
    });

    useEffect(() => {
        let token = sessionStorage.getItem(process.env.REACT_APP_AUTH_TOKEN);
        if (!IsNullOrEmpty(token)) {
            history.push('home')
        }
    }, [accessToken])

    const goToSignIn = (e) => {
        e.preventDefault()
        history.push('sign_up')
    }

    const handleForgetPassword = () => {
        UserAPI.SendOTP({
            account: userName,
            newPassword: password,
            confirmPassword: cpassword
        }).then((x) => {
            toastr.success("OTP Sent Successfully", "OTP");
            setShowCart(false);
            setAuthenticate(true);
        }).catch((err) => {
            toastr.error("Error in Sending OTP", "OTP");
        })
    }

    const triggerLogin = (async () => {
        if (validate()) {
            const playerId = await getPlayerId()
            dispatch(loginPasswordRequest({
                "account": userName,
                "password": password,
                "deviceId": "A6FFFEBE-8282-484D-BE5B-2439013F44B1",
                "deviceType": "android",
                "deviceToken": getUpdatedPlayerId(playerId)
            }));
        }
    });

    const validate = () => {
        return !IsNullOrEmpty(userName) && !IsNullOrEmpty(password);
    }

    if (showAuthenticate) {
        return <Authentication type={"Forgot"} data={{
            userName: userName,
            newPassword: password,
            confirmPassword: cpassword
        }}
        />
    }

    const isValid = validate();
    return (
        <div>
            {/* Main Wrapper Starts here */}
            <section className="container-fluid bg-grey">
                <header className="row px-md-5 px-4">
                    <div className="col-md-12 ">
                        <div className="nav-brand">
                            <Link to="/">
                                <img className="img-fluid" src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="hdr-right ">
                            <div className="sign-up">Don’t have an account?</div>
                            <a href="Email-sign-up.html" className="text-bold ml-2 signup" onClick={(e) => goToSignIn(e)}>Sign Up</a>
                        </div>
                    </div>
                </header>
                {/* header Ends here */}

                <div className="row px-md-5 px-4 login-wrap">
                    <form>
                        <h2>Welcome Back</h2>
                        <p className="text-center">Sign in to your account</p>
                        <div className="form-group mb-4 left-inner-addon">
                            <label className="text-bold mt-4 mb-4">
                                Username, email or phone number
                            </label>
                            <img className="off" src={Users} alt="icon" />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username, email or phone number"
                                name='userName'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-4 pass-visible left-inner-addon">
                            <label className="text-bold mb-4">Password</label>
                            <img src="../images/key.svg" alt="icon" />
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                            <a href="javascript:;" onClick={() => setVisible(!visible)} className="visibility-icon">
                                <img src={!visible ? Password : Eyeicon} alt="icon" />
                            </a>
                        </div>
                        <div className="form-group text-right mb-2">
                            <a href="javascript:;" className="forgot-pass" onClick={() => setShowCart(true)}>
                                Forgot Password ?
                            </a>
                        </div>
                        <div className="form-group mt-4 signupbutton">
                            <button type='button' className="btn btn-yellow w-100 btnsignup" disabled={!isValid} onClick={() => triggerLogin()}>Sign-in</button>
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
                                    <button className="btn btn-white btnpadding">
                                        <img
                                            className="twitter-ico"
                                            src={Twitter}
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

            <Modal show={showCart}>
                <Modal.Header>Forgot Password
                    <i className="fa fa-close" onClick={() => setShowCart(false)}></i>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group mb-4 ">
                        <label className="text-bold mt-4">
                            Enter Username, email or phone number
                        </label>

                        <input
                            className="form-control  mb-4"
                            type="text"
                            placeholder="Username, email or phone number"
                            name='userName'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                            className="form-control  mb-4"
                            type={visible ? "text" : "password"}
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            className="form-control"
                            type={visible ? "text" : "password"}
                            placeholder="Confirm Password"
                            name='password'
                            value={cpassword}
                            onChange={(e) => setCpassword(e.target.value)}
                        />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" disabled={IsNullOrEmpty(userName) || IsNullOrEmpty(password) || IsNullOrEmpty(cpassword) || password !== cpassword} onClick={() => handleForgetPassword()} className="btn btn-primary">Send</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default SignIn;


