import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getPlayerId, getUpdatedPlayerId } from "../../helpers/notificationHelper";
import { signUpPhoneRequest, signUpEmailRequest, forgotPasswordRequest } from "../../store/user/user.actions";
import OTPView from "../common/OTPView";
import toastr from "toastr";

function Authentication(props) {
	const [otp, setOTP] = useState("");
	const history = useHistory();
	const dispatch = useDispatch();

	const [timeLeft, setTimeLeft] = useState(180);

	useEffect(() => {
		// exit early when we reach 0
		if (!timeLeft) {
			toastr.error("Timed Out");
			history.push("/log_in");
			return;
		};

		// save intervalId to clear the interval when the
		// component re-renders
		const intervalId = setInterval(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		// clear interval on re-render to avoid memory leaks
		return () => clearInterval(intervalId);
		// add timeLeft as a dependency to re-rerun the effect
		// when we update it
	}, [timeLeft]);

	const handleChange = (otp) => {
		setOTP(otp);
	}

	const handleClick = (async () => {
		if (otp.length === 4) {
			let data = props.data;
			data.otp = otp;
			const playerId = await getPlayerId();
			data.deviceToken = getUpdatedPlayerId(playerId);
			if (props.type === "phone") {
				dispatch(signUpPhoneRequest(data));
			}
			else if (props.type === "email") {
				dispatch(signUpEmailRequest(data));
			}
			else if (props.type === "Forgot") {
				dispatch(forgotPasswordRequest({
					account: data.userName,
					otp: otp,
					newPassword: data.newPassword,
					confirmPassword: data.confirmPassword,
				}));
			}
		}
	});

	return (
		<div>
			<section className="container-fluid bg-grey">
				<header className="row px-md-5 px-4">
					<div className="col-md-12 ">
						<div className="nav-brand">
							<img
								className="img-fluid"
								src="../images/logo.svg"
								alt="Logo"
							/>
						</div>
					</div>
				</header>
				{/* header Ends here */}
				<div className="row px-md-5 px-4 login-wrap">
					<div id="wrapper">
						<div className="dialog">
							<p className="code">
								You verification code is sent by {props.type === "phone" ? "SMS" : "email"} to
								<span className="text-bold">&nbsp;{props.type === "phone" ? props.data.phone : props.data.account}</span>
							</p>
							<div className="form authinput">
								<OTPView onChange={(otp) => handleChange(otp)} />
							</div>
							<p className="second">
								Please wait <span className="text-danger">{timeLeft}</span> seconds to
								resend
							</p>
							<p className="second">
								{" "}
								Did not receive the code?
								<br />
								<a className="forgot-pass">Resend</a> or try a{" "}
								<a className="forgot-pass">different verification method</a>
							</p>
							<div className="form-group register">
								<button
									type="button"
									className="btn btn-yellow w-100"
									onClick={() => handleClick()}
									disabled={otp.length !== 4}
								>
									Register
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Authentication;
