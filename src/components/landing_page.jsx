import React, { useEffect } from "react";
import $ from 'jquery';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getHomeTopLiveStreams, getTopLiveStreams } from "../store/social/social.selector";
import { getTopHomeLiveStreamRequest } from "../store/social/social.actions";
import LiveStreamCard from "./common/liveStreamCard";
import noImage from "../assets/images/no-image.png"
require("dotenv").config();

export default function LandingPage() {
	const history = useHistory();
	const dispatch = useDispatch();

	// const { topRecommends } = useSelector((state) => {
	// 	return {
	// 		topRecommends: getHomeTopLiveStreams(state),
	// 	}
	// });
	const topRecommends = useSelector(state => state.SocialReducer);
	const {isLoading, homeTopLiveStreams} = useSelector(state => state.SocialReducer);


	useEffect(() => {
		dispatch(getTopHomeLiveStreamRequest())
	}, [])

	const goTo = (e, path) => {
		e.preventDefault();
		history.push("/" + path);
	};

	return (
		<div>
			<section className="container-fluid home center">
				{/* header Starts here */}
				<header className="row left-hdr pt-0">
					<div className="col-md-12 lft-wrap  ">

						<div className="mob-hdr-lft  d-md-none">
							<div className="menu-btn logobutton">

								<img className="img-fluid col-12" src="../images/logo.svg" alt="Logo" />

								<div className="col-12">
									<ul className="list-unstyled homenav">
										<li className="active">
											<a href="javascript:;" onClick={(e) => goTo(e, "log_in")}>
												Login
											</a>
										</li>

										<li className="active">
											<a
												className="btn btn-yellow" onClick={(e) => goTo(e, "sign_up")}>
												Sign Up
											</a>
										</li>
									</ul>
								</div>
							</div>

						</div>


						<div className="nav-brand">
							<img className="img-fluid" src="../images/logo.svg" alt="Logo" />
						</div>
						<div className="hdr-right">
							<ul className="list-unstyled homenav navbarhide">
								<li className="active">
									<a href="javascript:;">
										Creator
									</a>
								</li>
								<li>
									<a href="javascript:;">
										Company
									</a>
								</li>
								<li>
									<a href="javascript:;">
										Pricing
									</a>
								</li>
								<li>
									<a href="javascript:;" onClick={(e) => goTo(e, "log_in")}>
										Login
									</a>
								</li>

								<button type='button' className="btn btn-yellow btnpadding" onClick={(e) => goTo(e, "sign_up")}>Sign Up</button>

							</ul>
						</div>
					</div>
				</header>
				<div className="row ">
					<div className="col-12 col-lg-12 col-md-12 ">
						<h1 className="text-bold">Live streaming</h1>
						<h1 className="text-bold ">social network</h1>
						{/* <div className="center"> */}
						<div className="text-center">
							<span className="fontcolor">Subscription-based content creation platform with <br />
								real-time live streaming and integrated e-commerce</span>
							<form className="text-center">
								<div className="search-wrap searchpadding">
									<div className="form-group position-relative ">
										<span className="startliveurl" onClick={(e) => goTo(e, "sign_up")}>ulalive.com/</span>
										<input type="text" className="form-control searchinput" name placeholder="your name" />
										<button className="btn btn-yellow startlive" onClick={(e) => goTo(e, "sign_up")}>Start Live</button>
										<img src="../images/check-cr.svg" className="check" alt="icon" />
									</div>
								</div>
							</form>
						</div>
						{/* </div> */}
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="row  searchpadding">
							<div className="center homewidth">
								<div className="snippet-hdr">
									<h3 className="mt-2 mb-4 text-bold">Top Recommended</h3>
								</div>
								<div className="row">
									{isLoading ? <p className="text-center">loading...</p> :
										(homeTopLiveStreams && homeTopLiveStreams.length > 0) ? homeTopLiveStreams.map((item) => {
											return <LiveStreamCard className="col-lg-4 col-md-4 col-12 mt-8" selectable={true} key={item._id} livestream={item} />
										}) : <div className="col-12 " className="align-center">
											<img src={noImage} />
										</div>
									}
									
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div >
	);
}
