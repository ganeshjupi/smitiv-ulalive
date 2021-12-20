import React, { useEffect, useState } from "react";
import Header from "../common/topbar";
import Sidebar from "../common/sidebar";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchOtherUserProfileRequest, followUserRequest, searchUserRequest, unfollowUserFailure, unfollowUserRequest } from "../../store/user/user.actions";
import { useSelector } from "react-redux";
import { getImage, getSearchedUsers, getUserProfile } from "../../store/user/user.selector";
import { Link } from "react-router-dom";
import { IsNullOrEmpty } from "../../helpers/utility";
import NoImage from "../../assets/images/no-image.png";

export default function ProfileFollower() {
	const dispatch = useDispatch();
	const [searchText, setSearchText] = useState("");
	const history = useHistory();
	const goTo = (e, path) => {
		e.preventDefault();
		history.push("/" + path);
	};

	const { users, userProfile } = useSelector((state) => {
		return {
			userProfile: getUserProfile(state),
			users: getSearchedUsers(state)
		}
	})

	useEffect(() => {
		dispatch(searchUserRequest());
	}, []);

	const handleFollow = (item, status) => {
		if (status) {
			dispatch(followUserRequest({ following: item._id }));
		}
		else {
			dispatch(unfollowUserRequest({ following: item._id }));
		}
	}

	let searchedUsers = users;
	if (!IsNullOrEmpty(searchText)) {
		searchedUsers = searchedUsers.filter((x) => {
			return x.fullName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
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
										<Link
											className="nav-link mainNavItemChild"
											to={"profile_subscriber"}
										>
											Subscriber
										</Link>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<a
											href="javascript:;"
											className="nav-link mainNavItemChild active"
											onClick={(e) => goTo(e, "profile_follower")}
										>
											Follower
										</a>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<a
											href="javascript:;"
											className="nav-link mainNavItemChild "
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
											searchedUsers.filter((item) => item._id !== userProfile._id).map((item) => {
												let clasName = item.isFollow ? 'btn btn-outline-black btnpadding ' : 'btn btn-yellow btnpadding ';
												return (
													<div key={item._id} className="list" onClick={() => {
														history.push("/private_profile");
														dispatch(fetchOtherUserProfileRequest(item._id));
													}}>
														<img className="img-fluid profile-image" src={getImage(item.avatar)} alt="icon" />
														<div className="info">
															<span className="user">{item.fullName}</span>
															<span className="text">{item.isLivestream ? "Online" : item.status}</span>
														</div>
														<span className="time">
															<button onClick={(e) => {
																e.stopPropagation();
																!item.isFollow ? handleFollow(item, true) : handleFollow(item, false)
															}} className={clasName}>{item.isFollow ? "Following " : "+ Follow"}</button>

														</span>
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

