import React, { useEffect, useState }  from "react";
import CloseIcon from "../../assets/images/close-ico.svg";
import Profile from "../../assets/images/Profile.svg";
import Header from "../common/topbar";
import { useHistory } from "react-router";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getLiveStream } from "../../store/social/social.selector";
import { getFollowingUsers, getUserProfile,getSearchedUsers,getImage } from "../../store/user/user.selector";
import { getCartProductList } from "../../store/shopping/shopping.selector";
import Modal from "react-bootstrap/Modal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Live from "../../assets//images/live.svg";
import Topmail from "../../assets//images/topmail.svg";

// class CreateVipCircle extends React.Component {
	export default function CreateVipMeeting() {

		const location = useLocation()
		const { selectedUsers } = location && location.state;
		const [showSelectMeetingTypePopup, setShowSelectMeetingTypePopup] = useState(false);

		const { followingUsers, products, userProfile, livestream,users } = useSelector((state) => {
			return {
			  followingUsers: getFollowingUsers(state),
			  userProfile: getUserProfile(state),
			  livestream: getLiveStream(state),
			  products: getCartProductList(state),
			  users: getSearchedUsers(state)
			}
		  });
	// constructor(props) {
	// 	super(props);
	// 	this.state = {

	// 	};
	// }

	// render() {
		return (
			<div>
				<div>
					{/* Main Wrapper Starts here */}
					<section className="container-fluid">
						{/* header Starts here */}
						<Header />
						<div className="row">
							<div className="col-lg-8 col-md-10 col-12 mt-4 mb-4 marginleft">
								<div className="snippet-block">
									<div className="col-12 col-lg-12 col-md-12 py-4">
										<div className="row">
											<div className="col-12 col-lg-12 col-md-12">
												<div className="text-center">
													<h3 className="logo">VIP Circle
													</h3>
												</div>
												<p className="text-bold" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/setup_meeting';
                      }}>+ Add circle</p>
											</div>
										</div>
										<div className="row paymenttype">
											{
												selectedUsers.filter((item) => item._id !== userProfile._id).map((item) => {
													return (
											<div className="col-3 col-lg-3 col-md-3">
												<div className="snippet-cont">
													<div className="text-center">
														<div className="py-4">
															<div className="profile-dd w-100 h-100">
																<img className="img-fluid" src={getImage(item.avatar)} alt="icon" />
															</div>
															<span className="text-bold">{item.fullName}</span>
														</div>
													</div>
												</div>
											</div>
													)
												})
											}
											{/* <div className="col-3 col-lg-3 col-md-3 opacity-50">
												<div className="snippet-cont">
													<div className="text-center">
														<div className="py-4">
															<div className="profile-dd w-100 h-100">
																<img className="img-fluid" src="../images/preloved.svg" alt="icon" />
															</div>
															<span className="text-bold">Cody Fisher</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-3 col-lg-3 col-md-3 opacity-50">
												<div className="snippet-cont">
													<div className="text-center">
														<div className="py-4">
															<div className="profile-dd w-100 h-100">
																<img className="img-fluid" src="../images/preloved.svg" alt="icon" />
															</div>
															<span className="text-bold">Cody Fisher</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-3 col-lg-3 col-md-3 opacity-50">
												<div className="snippet-cont">
													<div className="text-center">
														<div className="py-4">
															<div className="profile-dd w-100 h-100">
																<img className="img-fluid" src="../images/preloved.svg" alt="icon" />
															</div>
															<span className="text-bold">Cody Fisher</span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-3 col-lg-3 col-md-3 participantlist">
												<div className="snippet-cont">
													<div className="text-center">
														<div className="py-4">
															<div className="profile-dd w-100 h-100">
																<img className="img-fluid" src="../images/preloved.svg" alt="icon" />
															</div>
															<span className="text-bold"> Cody Fisher</span>
														</div>
													</div>
												</div>
											</div> */}
										</div>
									</div>
									<div className="text-center mb-4">
										<button className="btn btn-refer btnwidth" onClick={() => setShowSelectMeetingTypePopup(true)}> Next</button>
									</div>
								</div>
							</div>
						</div>


						{/* MainSection Ends here */}

					</section>
					<div className="modal fade" id="delete-pop">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<button type="button" className="close" data-dismiss="modal">
									<img src={CloseIcon} alt="icon" />
								</button>
								{/* Modal body Starts here */}
								<div className="modal-body text-center p-3 p-md-5">
									<img className="img-fluid" src={Profile} alt="icon" />
								</div>
							</div>
						</div>
					</div>
					{/* Main Wrapper Ends here */}
				</div>

				<Modal show={showSelectMeetingTypePopup}>
                <Modal.Header>Select Meeting Type
                    <i className="fa fa-close" onClick={() => setShowSelectMeetingTypePopup(false)}></i>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group mb-4 ">
                       
					   
					<div className="btn-padding mt-1">
							<Link to="/setup_meeting" className="btn-yellow newlive">
								{" "}
								<img src={Live} className="ml-2" alt="icon" />
								<span className="ml-2">New Live</span>
							</Link>

							<Link 
						//	to="/chat_box" 
						to={{
							pathname: '/chat_box',
							state: {
							  selectedUsers: selectedUsers
							}
						  }}
							className="btn-yellow newlive">
								<img
								className="img-fluid"
								src={Topmail}
								alt="icon"
								/><span className="ml-2">Chat Room</span>
							</Link>
						</div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowSelectMeetingTypePopup(false)}>Close</button>
                </Modal.Footer>
            </Modal>
			</div>
		);
	// }
}

// export default CreateVipCircle;


