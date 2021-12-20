import React, { useEffect, useState } from "react";
import { fetchFollowingUserRequest, fetchOtherUserProfileRequest } from "../../store/user/user.actions";
import { getFollowingUsers, getImage } from "../../store/user/user.selector";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import NoImage from "../../assets/images/no-image.png";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import { IsNullOrEmpty } from "../../helpers/utility";

export default function ProfileSubscriber() {
	const dispatch = useDispatch();
	const [searchText, setSearchText] = useState("");
	const history = useHistory();
	const goTo = (e, path) => {
		e.preventDefault();
		history.push("/" + path);
	};
	const { followingUsers } = useSelector((state) => {
		return {
			followingUsers: getFollowingUsers(state)
		}
	})

	useEffect(() => {
		dispatch(fetchFollowingUserRequest());
	}, []);

	let searchedUsers = followingUsers;
	if (!IsNullOrEmpty(searchText)) {
		searchedUsers = searchedUsers.filter((x) => {
			return x.follower.fullName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
		})
	}

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
											className="nav-link mainNavItemChild "
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
											className="nav-link mainNavItemChild active "
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
												value={searchText}
												onChange={(e) => setSearchText(e.target.value)}
												placeholder="Search"
											/>
											<a href="javascript:;" className="search-icon">
												<img src="../images/search-icon.svg" alt="icon" />
											</a>
										</div>
									</div>
									<div className="list-wrap">
										{
											searchedUsers.map((item) => {
												return (
													<div key={item._id} className="list" onClick={() => {
														history.push("/private_profile");
														dispatch(fetchOtherUserProfileRequest(item.follower._id));
													}}>
														<img className="img-fluid profile-image" src={getImage(item.follower.avatar)} alt="icon" />
														<div className="info">
															<span className="user">{item.follower.fullName}</span>
															<span className="text">{item.follower.isLivestream ? "Online" : item.follower.status}</span>
														</div>
														<span className="time">
															<button className="btn btn-yellow btnpadding ">Following</button></span>
													</div>
												)
											})
										}
										{
											searchedUsers.length === 0 ?
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


