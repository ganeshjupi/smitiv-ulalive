
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import NoImage from "../../assets/images/no-image.png";
import { fetchSubscriberListRequest } from "../../store/user/user.actions";
import { getSubscriberList } from "../../store/user/user.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";

export default function ProfileSubscriber() {
	const dispatch = useDispatch();
	const history = useHistory();

	const goTo = (e, path) => {
		e.preventDefault();
		history.push("/" + path);
	};

	const { subscriberList, isLoading } = useSelector((state) => {
		return {
			subscriberList: getSubscriberList(state),
			isLoading: state.UserReducer.isLoading
		}
	})

	useEffect(() => {
		dispatch(fetchSubscriberListRequest());
	}, []);

	return (
		<div>
			<section className="container-fluid">
				{/* header Starts here */}
				<Header history={history} />
				<div className="row">
					<Sidebar history={history} />
					{/* Mobile menu overlay Starts here */}

					{/* Mobile menu overlay Ends here */}
					{/* Left Wrap Ends here */}
					<div className="col-lg-9 col-md-9 col-12">

						<div className="row">
							<div className="col-12 mt-4">
								<div className="row paddingwidth">
									<div className="col-lg-4 col-md-4 col-4">
										<a
											href="javascript:;"
											className="nav-link mainNavItemChild active"
											onClick={(e) => goTo(e, "profile_subscriber")}
										>
											Subscriber
										</a>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<a
											href="javascript:;"
											className="nav-link mainNavItemChild "
											onClick={(e) => goTo(e, "profile_follower")}
										>
											Follower
										</a>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<a
											href="javascript:;"
											className="nav-link mainNavItemChild"
											onClick={(e) => goTo(e, "profile_following")}
										>
											Following
										</a>
									</div>
									<span className="lineseperater" />
								</div>
								<div className="profilebar paddingwidth">

									<div className="form-group col-lg-12 col-md-12 snippet-cont">

										<div className="snippet-cont ">
											<input
												type="text"
												className="form-control formbg searchiconspace"
												name
												placeholder="Search"
											/>
											<a href="javascript:;" className="search-icon">
												<img src="../images/search-icon.svg" alt="icon" />
											</a>
										</div>
									</div>

									<div className="list-wrap">
										{
											subscriberList && subscriberList.map((item) => {
												return (
													<div key={item._id} className="list">
														<img className="img-fluid" src="../images/Profile3.svg" alt="icon" />
														<div className="info">
															<span className="user">{item.subscriber.fullName}</span>
															<span className="text">{item.subscriber.isLivestream ? "Online" : item.subscriber.status}</span>
														</div>
														<span className="time"><button className="btn-outline"><i className="fa fa-envelope"></i>{" "}</button></span>
													</div>
												)
											})
										}
										{
											subscriberList && subscriberList.length === 0 ?
												<div className="no-records">
													<img src={NoImage} />
												</div> : <span />
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* MainSection Ends here */}
			</section>
		</div>
	);
}


