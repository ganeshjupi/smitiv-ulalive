import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createSubscriptionRequest, fetchPaymentConfigRequest, getCategoryRequest } from "../../store/shopping/shopping.actions";
import { getCategoryList, getPaymentConfig } from "../../store/shopping/shopping.selector";
import { fetchLiveStreamRequest } from "../../store/social/social.actions";
import { getJustLiveStreams } from "../../store/social/social.selector";
import { getOtherUserProfile, getProfileImage } from "../../store/user/user.selector";
import LiveStreamCard from "../common/liveStreamCard";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import NoImage from "../../assets/images/no-image.png";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import Modal from "react-bootstrap/Modal";
import { getPrivateLoungeUserRequest } from "../../store/user/privatelounge/privatelounge.actions";
import { getUserPrivateLounge } from "../../store/user/privatelounge/privatelounge.selector";
import CreateSubscriptionForm from "../refer/createSubscription";
import { fetchOtherUserProfileRequest } from "../../store/user/user.actions";
var stripePromise = null;

const ELEMENTS_OPTIONS = {
	fonts: [
		{
			cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
		},
	],
}

function PrivateProfile() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [selectedCategory, setSelectedCategory] = useState("");
	const [period, setPeriod] = useState("");
	const [message, setMessage] = useState("");

	const { userProfile, categories, profileImage, liveStreams, paymentConfig, userPrivateLounge } = useSelector((state) => {
		return {
			userProfile: getOtherUserProfile(state),
			categories: getCategoryList(state),
			profileImage: getProfileImage(state),
			liveStreams: getJustLiveStreams(state),
			userPrivateLounge: getUserPrivateLounge(state),
			paymentConfig: getPaymentConfig(state)
		}
	});

	useEffect(() => {
		if (paymentConfig && paymentConfig.publicKey) {
			stripePromise = loadStripe(paymentConfig.publicKey);
		}
	}, [paymentConfig]);

	useEffect(() => {
		if (categories.length > 0 && selectedCategory === "") {
			setSelectedCategory(categories[0]._id)
		}
	}, [categories]);

	useEffect(() => {
		if (userProfile && userProfile.id) {
			dispatch(getPrivateLoungeUserRequest({
				userId: userProfile.id
			}));
		}
	}, [userProfile])

	useEffect(() => {
		dispatch(fetchLiveStreamRequest());
		dispatch(getCategoryRequest());
		dispatch(fetchPaymentConfigRequest());
	}, []);

	if (!userProfile.userName) {
		return <p></p>
	}

	return (
		<div>
			<section className="container-fluid">
				<Header history={history} />
				<div className="row">
					<Sidebar history={history} />
					<div className="col-lg-9 col-lg-9 col-md-9 col-12">
						<div className="profile-blk">
							<div className="title mt-4" onClick={() => history.push('/edit_profile')} >
								<img src={profileImage} className="w-10 imageborder" alt="user profile image" />
								<span className="pro">{userProfile.role}</span>
							</div>
							<h3 className="profileheading mt-4">{userProfile.fullName}</h3>
							<p className="text-grey">@{userProfile.userName}</p>
							<p className="profiledetail">{userProfile.descriptions}</p>
							<p className="text-grey mb-0 flex profilesetting" onClick={() => history.push('/profile_subscriber')}>
								<span className="text-bold flex">{userProfile.countFollower} <p className="text-grey ml-2 ">Followers</p></span>
								<span className="text-bold flex">{userProfile.countFollowing} <p className="text-grey ml-2">Following</p></span>
								<span className="text-bold flex">{userProfile.countSubscriber}<p className="text-grey ml-2"> Subscribers</p></span>
							</p>
							{
								userProfile.isSubscribe ? "Subscribed" :
									<>
										{
											userPrivateLounge._id ?
												<>
													<button onClick={() => {
														setPeriod("monthly");
													}} className="btn btn-yellow ml-4">Subscribe ${userPrivateLounge.monthlySubscription} {userPrivateLounge.currencySubscription} / Month</button>
													<button onClick={() => {
														setPeriod("yearly");
													}} className="btn btn-yellow ml-4">Subscribe ${userPrivateLounge.annuallySubscription} {userPrivateLounge.currencySubscription} / Annum</button>
												</> :
												<span />
										}

									</>
							}
							<hr />
							<div className="row ">
								{
									categories.map((x) => {
										return <div key={x._id} className="col-lg-3 col-md-3 col-6">
											<a href="javascript:;" onClick={() => setSelectedCategory(x._id)} className={selectedCategory !== x._id ? "nav-link mainNavItemChild" : "nav-link mainNavItemChild active"}>{x.name}</a>
										</div>
									})
								}
							</div>
							<div className="row mb-4">
								{
									liveStreams && liveStreams.filter((y) => selectedCategory === y.category && y.owner.userName === userProfile.userName).map((item) => {
										return <LiveStreamCard key={item._id} livestream={item} />
									})
								}

								{
									liveStreams && liveStreams.filter((y) => selectedCategory === y.category && y.owner.userName === userProfile.userName).length === 0 ?
										<div className="no-records">
											<img src={NoImage} />
										</div> : <span />
								}
							</div>
						</div>
					</div>
				</div>
			</section>
			{
				period ?
					<Modal show={true}>
						<Modal.Header>Pay Now
							<i className="fa fa-close" onClick={() => setPeriod("")}></i>
						</Modal.Header>
						<Modal.Body>
							{
								stripePromise ?
									<Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
										<CreateSubscriptionForm OnSuccess={() => {
											setPeriod(false);
											setMessage("Success");
											dispatch(fetchOtherUserProfileRequest(userProfile.id));
										}} type="user-subscription" userId={userProfile.id} billingPeriod={period} />
									</Elements> : <span />
							}
						</Modal.Body>
					</Modal>
					:
					<></>
			}
		</div>
	);
}

export default PrivateProfile;


