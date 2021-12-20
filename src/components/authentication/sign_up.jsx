import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Email from "../../assets/images/email.svg";
import Password from "../../assets/images/eye-of.svg";
import Eyeicon from "../../assets/images/icons8-eye-36.png";
import TweeterIcon from "../../assets/images/image 31 (Traced).svg";
import Key from "../../assets/images/key.svg";
import Logo from "../../assets/images/logo.svg";
import UserSignIn from "../../assets/images/user signin.svg";
import { preSignUpEmailRequest, preSignUpPhoneRequest, resetUserState } from "../../store/user/user.actions";
import { getPreSignupEmail, getPreSignupPhone, getSignupEmailAccessToken, getSignupPhoneAccessToken } from "../../store/user/user.selector";
import LoginHooks from "../common/GoogleLogin/LoginHooks";
import { IsNullOrEmpty, uuidv4, validEmail, validPhone, validUsername, validPassword } from "../../helpers/utility";
import Authentication from "./authentication";
import toastr from "toastr";
import ReactFlagsSelect from 'react-flags-select';

function SignUp() {
	const [type, setType] = useState("phone");
	const [visible, setVisible] = useState(false);
	const [showOTP, setShowOTP] = useState(false);
	const [phone, setPhone] = useState("");
	const [countryCode, setCountry] = useState("+65");
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [referCode, setReferCode] = useState("");
	const [selected, setSelected] = useState('SG');
	const dispatch = useDispatch();
	const history = useHistory();

	const { preSignupPhone, accessToken, preSignupEmail } = useSelector((state) => {
		return {
			preSignupPhone: getPreSignupPhone(state),
			preSignupEmail: getPreSignupEmail(state),
			accessToken: getSignupPhoneAccessToken(state) || getSignupEmailAccessToken(state)
		}
	});

	const goTo = (e, path) => {
		e.preventDefault();
		history.push("/" + path);
	};


	useEffect(() => {
		if ((!preSignupPhone.isAllowSignup && !preSignupPhone.isSentOtp) ||
			(!preSignupEmail.isAllowSignup && !preSignupEmail.isSentOtp)) {
			dispatch(resetUserState());
		}
		setShowOTP(false);
	}, []);

	useEffect(() => {
		if (!IsNullOrEmpty(accessToken)) {
			history.push('home');
		}
	}, [accessToken])

	useEffect(() => {
		if (preSignupPhone.isAllowSignup && preSignupPhone.isSentOtp) {
			setShowOTP(true);
		}
	}, [preSignupPhone])


	useEffect(() => {
		if (preSignupEmail.isAllowSignup && preSignupEmail.isSentOtp) {
			setShowOTP(true);
		}
	}, [preSignupEmail])

	const handleSignUp = () => {
		if(isValid){
			let isValidPassword = validPassword(password);
			let isValidUsername = validUsername(userName);

			if(!isValidUsername)
				return toastr.error("Username must be between 6 - 30 characters");
			
			if(!isValidPassword)
				return toastr.error("Password must be at least 8 character long, contain at least one uppercase letter and one number");

			if(isValidUsername && isValidPassword){
				if (type === "phone") {
					dispatch(preSignUpPhoneRequest({
						"phone": countryCode + phone
					}));
				}
				else {
					dispatch(preSignUpEmailRequest({
						"email": email
					}));
				}
			}
		}		
	}

	const validate = () => {
		if (type === "phone") {
			return !IsNullOrEmpty(phone) &&
				validPhone(phone) &&
				!IsNullOrEmpty(userName) &&
				!IsNullOrEmpty(password) &&
				!IsNullOrEmpty(countryCode)
		}
		if (type === "email") {
			return !IsNullOrEmpty(email) &&
				validEmail(email) &&
				!IsNullOrEmpty(userName) &&
				!IsNullOrEmpty(password)
		}
	}

	let isValid = validate();

	const handleSelect = (code) =>{
		setSelected(code);
		if(code === "SG") setCountry("+65");
		if(code === "MY") setCountry("+60");
		if(code === "US") setCountry("+1");				
	}

	function getCountryName(str) {
		if (str === "+65") {
			return "SG";
		}
		else if (str === "+60") {
			return "MY";
		}
		else {
			return "US";
		}
	}

	if (showOTP &&
		!IsNullOrEmpty(userName) &&
		!IsNullOrEmpty(password) &&
		((type === "phone" && preSignupPhone.isAllowSignup && preSignupPhone.isSentOtp) ||
			(type === "email" && preSignupEmail.isAllowSignup && preSignupEmail.isSentOtp))
	) {
		return <Authentication type={type} data={
			type === "phone" ?
				{
					phone: countryCode + phone,
					userName: userName,
					password: password,
					countryCode: countryCode,
					originalCountry: getCountryName(countryCode),
					deviceId: uuidv4(),
					deviceType: "android",
				} :
				{
					account: email,
					userName: userName,
					password: password,
					countryCode: countryCode.replace("+", ""),
					originalCountry: getCountryName(countryCode),
					deviceId: uuidv4(),
					deviceType: "android",
				}
		} />
	}

	return (
		<div>
			<section className="container-fluid bg-grey">
				<header className="row px-md-5 px-4">
					<div className="col-md-12 ">
						<div className="nav-brand">
							<Link to="/">
								<img className="img-fluid" src={Logo} alt="Logo" />
							</Link>
						</div>
						<div className="hdr-right">
							<div className="sign-up text-bold">Already have an account?</div>
							<a href="javascript:;" className="forgot-pass ml-2" onClick={(e) => history.push('home')}>
								{" "}
								Sign-in{" "}
							</a>
						</div>
					</div>
				</header>
				{/* header Ends here */}
				<div className="row px-md-5 px-4 login-wrap">
					<form>
						<h2>Create account</h2>
						<p className="text-center">Create your own profile</p>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-6">
								<a
									className={`nav-link mainNavItemChild ${type === "phone" && "active"}`}
									onClick={(e) => setType("phone")}
								>
									Phone
								</a>
							</div>
							<div className="col-lg-6 col-md-6 col-6  ">
								<a
									className={`nav-link mainNavItemChild ${type === "email" && "active"}`}
									onClick={(e) => setType("email")}
								>
									Email
								</a>
							</div>
							<span className="lineseperater" />
						</div>
						{type === "phone" && (
							<div className="form-group mb-4 left-inner-addon">
								<label className="text-bold mb-4" >Phone</label>
								<div className="input-group mb-3">

								<ReactFlagsSelect
        					selected={selected}
        					onSelect={code => handleSelect(code)}
									countries={["SG", "MY", "US"]}
    							customLabels={{"SG": "+65","MY": "+60","US": "+1"}}
									selectedSize={37}
      					/>
								
									{/* <select defaultValue={countryCode} onChange={(e) => setCountry(e.target.value)}>
										<option value="+65">+ 65</option>
										<option value="+60">+ 60</option>
										<option value="+1">+ 1</option>										
									</select> */}

									<input
										type="text"
										className="form-control"
										aria-label="Text input with dropdown button"
										name='phone'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
									
								</div>
							</div>
						)}
						{type === "email" && (
							<div className="form-group mb-4 left-inner-addon">
								<label className="text-bold mb-4">Email</label>
								<img className="off mt-4 pl-2" src={Email} alt="icon" />
								<input
									className="form-control"
									type="text"
									placeholder="Email"
									name='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						)}
						<div className="form-group mb-4 left-inner-addon">
							<label className="text-bold mb-4">Username</label>
							<img className="off" src={UserSignIn} alt="icon" />
							<input
								className="form-control"
								type="text"
								placeholder="Username"
								name='userName'
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
							/>
						</div>
						<div className="form-group mb-4 pass-visible left-inner-addon">
							<label className="text-bold  mb-4">Password</label>
							<img src={Key} alt="icon" />
							<input
								className="form-control form-control-feedback"
								type={visible ? "text" : "password"}
								placeholder="Password"
								name='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<a href="javascript:;" onClick={() => setVisible(!visible)} className="visibility-icon eye">
								<img src={!visible ? Password : Eyeicon} alt="icon" />
							</a>
						</div>
						<div className="form-group  signupbutton">
							<button type='button' className="btn btn-yellow w-100 btnsignup" disabled={!isValid} onClick={() => handleSignUp()}>Sign Up</button>
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
									<button className="btn btn-white  btnpadding">
										<img
											className="twitter-ico"
											src={TweeterIcon}
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
		</div>
	);
}

export default SignUp;
