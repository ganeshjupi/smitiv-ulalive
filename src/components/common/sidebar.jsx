import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Live from "../../assets//images/live.svg";
import { getProfileImage, getUserProfile } from "../../store/user/user.selector";

function Sidebar() {
	const [currentPage, setCurrentPage] = useState("");
	const history = useHistory();
	const { userProfile, profileImage } = useSelector((state) => {
		return {
			userProfile: getUserProfile(state),
			profileImage: getProfileImage(state),
		}
	});

	const goTo = (e, path) => {
		e.preventDefault();
		history.push("/" + path);
	};

	useEffect(() => {
		var currentPage = window.location.pathname
		setCurrentPage(currentPage);
	}, [])

	return (
		<div className="col-lg-3 col-md-3 rigthborder">
			<div className="left-wrap ">

				<ul className="left-menu list-unstyled">
					<div className="notify-left">
						<img src={profileImage} className="img-thumbnail p-0 mb-0 profilepic" alt="user profile image" />
						<h3 className="mt-2">{userProfile.fullName}</h3>
						<p className="text-grey mb-1">{userProfile.account.userName}</p>
						<p className="text-grey mb-0 flex follower" >
							<span className="text-bold flex" onClick={() => history.push('/profile_follower')}>{userProfile.countFollower} <p className="text-grey ml-2 mb-1">Followers</p></span>
							<span className="text-bold flex" onClick={() => history.push('/profile_following')}>{userProfile.countFollowing} <p className="text-grey ml-2 mb-1">Following</p></span>
							<span className="text-bold flex" onClick={() => history.push('/profile_subscriber')}>{userProfile.countSubscriber}<p className="text-grey ml-2"> Subscribers</p></span>
						</p>
						<div className="btn-padding mt-1">
							<Link to="/setup_meeting" className="btn-yellow newlive">
								{" "}
								<img src={Live} className="ml-2" alt="icon" />
								<span className="ml-2">New Live</span>
							</Link>

						</div>
					</div>

					<li className={currentPage === "/home" ? "active" : "action-wrap"}>
						<a href="javascript:;" onClick={(e) => goTo(e, "home")}>
							<i className="fa fa-home" ></i>
							Home
						</a>
					</li>
					<li
						className={currentPage === "/profile" ? "active" : "action-wrap"}
					>
						<a
							href="javascript:;"
							onClick={(e) => goTo(e, "profile")}
							className="action-wrap"
						>
							<i className="fa fa-users" ></i>
							Profile
						</a>
					</li>
					<li
						className={currentPage === "/dashboard" ? "active" : "action-wrap"}
					>
						<a
							href="javascript:;"
							className="action-wrap"
							onClick={(e) => goTo(e, "dashboard")}
						>
							<i className="fa fa-signal"></i>
							Dashboard
						</a>
					</li>
					<li
						className={currentPage === "/favorties" ? "active" : "action-wrap"}
					>
						<a href="javascript:;" className="action-wrap" onClick={(e) => goTo(e, "favorties")}>
							<i className="fa fa-hashtag" ></i>
							Favourites
						</a>
					</li>
					<li className={currentPage === "/Cart" ? "active" : "action-wrap"}>
						<a
							href="javascript:;"
							className="action-wrap"
							onClick={(e) => goTo(e, "Cart")}
						>
							<i className="fa fa-shopping-cart" ></i>
							Cart
						</a>
					</li>
					<li className={currentPage === "/order" ? "active" : "action-wrap"}>
						<a
							href="javascript:;"
							className="action-wrap"
							onClick={(e) => goTo(e, "order")}
						>
							<i className="fa fa-cube" ></i>
							Order
						</a>
					</li>
					<li
						className={
							currentPage === "/Help_and_support" ? "active" : "action-wrap"
						}
					>
						<a
							href="javascript:;"
							className="action-wrap"
							onClick={(e) => goTo(e, "Help_and_support")}
						>
							<i className="fa fa-question" ></i>
							Help and support
						</a>
					</li>
					<li
						className={
							currentPage === "/refer" ? "active" : "action-wrap"
						}
					>
						<a href="javascript:;" className="action-wrap" onClick={(e) => goTo(e, "refer")}>
							<i className="fa fa-ticket" ></i>
							Refer to a Friend
						</a>
					</li>
					{
						userProfile.role === "Pro" ? <span /> :
							<li className="btnpadding">
								<Link to="/refer_submit" className="btnswitch text-center">
									{" "}

									Switch To PRO
								</Link>
							</li>
					}
				</ul>


			</div>
			{/* Mobile menu overlay Starts here */}
			<div className="mob-menu-overlay" />
			{/* Mobile menu overlay Ends here */}
			{/* Left Wrap Ends here */}
		</div >
	);
}

export default Sidebar;
