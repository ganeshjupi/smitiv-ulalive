import React,{ useEffect, useState }  from "react";
import Header from "../common/topbar";

import Timer from "../../assets/images/timer.svg";
import Show from "../../assets/images/Show.svg";
import Chat from "../../assets/images/chat.svg";
import Profilepic from "../../assets/images/imagepro.svg";
import { socket } from "../../helpers/socketHelper";
import EditProduct from "../products/EditProduct";
import AddProduct from "../products/AddProduct";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { uploadLivesRequest } from "../../store/file/file.actions";
import { getUploadedLiveImage } from "../../store/file/file.selector";
import { getProductList } from "../../store/shopping/shopping.selector";
import { createLiveStreamRequest } from "../../store/social/social.actions";
import { fetchFollowingUserRequest } from "../../store/user/user.actions";
import { getFollowingUsers, getUserProfile } from "../../store/user/user.selector";
import Modal from "react-bootstrap/Modal";
import { useLocation } from 'react-router-dom';


	export default function ChatBox() {

		const [messageTextToSend, setMessageTextToSend] = useState("");
		const [chatRoomMessageList, setChatRoomMessageList] = useState([]);
		const [newProduct, setNewProduct] = useState(false);
  		const [editProduct, setEditProduct] = useState(false);
  		const [selectedProduct, setSelectedProduct] = useState({});

		const history = useHistory();

		const location = useLocation()
		const { selectedUsers } = location && location.state;

		const { followingUsers, products, thumbnail, user } = useSelector((state) => {
			return {
			  followingUsers: getFollowingUsers(state),
			  products: getProductList(state),
			  thumbnail: getUploadedLiveImage(state),
			  user: getUserProfile(state)
			}
		  });

		if (socket) {
		socket.on("chatRoomMessage", (data) => {
			setChatRoomMessageList(prevArray => [...prevArray, 
					{
						name:"Raju",
						text:data,
						time:"yesterday",
						type:1
					}
					]);
			console.log("joined live Message",data);
		  });
		}

		const sendChatRoomMessage = () => {
			if (socket) {
				let msg = messageTextToSend;
			  socket.emit('chatRoomMessage', msg);
			}
		  } 

		return (
			<div>
				<div>
					<section className="container-fluid">
						{/* header Starts here */}
						<Header  history={history} />
						<div className="row">
							<div className="col-lg-12 col-md-12 col-12">
								<div className="row">
									<div className="col-lg-3 col-md-4 rigthborder">
										<div className="left-wrap">
											<div className="row mt-4 px-4">
												<img src="../images/back-arrow.svg" className="arrowimage"/>
												<label className="chatboxheading  text-bold ">Chat Room</label>
											</div>
											<div className="row mt-4 ">
												<div className="col-6 col-md-6 col-lg-6">
													<div className="smallcardtopimage">
														<img
															className="img-fluid imagesize "
															src="../images/image 2.svg"
															alt="icon"
														/>
														<div className="name pl-2">
															<h6 className="displaysingleline mb-2">
																Licoln Levin
															</h6>
															<p className="text-gray text-left mb-2">5 guest</p>
															<p className="text-left">
																{" "}
																<img
																	className="img-fluid text-left"
																	src="../images/timer.svg"
																	alt="icon"
																/>
															</p>
														</div>
													</div>
												</div>
												<div className="col-6 col-md-6 col-lg-6">
													<div className="hdr-right">
														<div className="name">
															<button className="btn btn-buynow">Live</button>
															<p className="mt-2">
																{" "}
																<img
																	className="img-fluid "
																	src="../images/eye-icon.svg"
																	alt="icon"
																/>{" "}
																1920
															</p>
														</div>
													</div>
												</div>
											</div>
											<p
												className="text-bold mb-0"
												
											>
												Tree decoration Sale! Buy NOW $$$
											</p>
											<div className="row">
												<div className="tabbable-panel">
													<div className="tabbable-line">
														<ul className="nav nav-tabs">
															<li className="active">
																<a href="#tab_default_1" data-toggle="tab">
																	Info
																</a>
															</li>
															<li>
																<a href="#tab_default_2" data-toggle="tab">
																	Participants{" "}
																</a>
															</li>
														</ul>
														<div className="tab-content">
															<div className="tab-pane active" id="tab_default_1">
																<div className="smallcardtopimage px-2">
																	<div className="smallimagebutton pr-25">
																		<img src={Timer} alt="icon" className="mt-0" />
																	</div>
																	<div className="smallimagebutton displaysingleline pr-25">
																		<img src={Show} alt="icon" className="mt-0" />
																		<span className="text-center  ml-1 ">1920</span>
																	</div>
																	<div className="smallimagebutton displaysingleline pr-25">
																		<img src={Chat} alt="icon" className="mt-0" />
																		<span className="text-center ml-1 ">200</span>
																	</div>
																	<div className="smallimagebutton displaysingleline">
																		<span className="text-right text-gray">5 Min ago</span>
																	</div>
																</div>
																<div className="snippet-hdr">
																	<label className="logo text-bold mb-4">Item</label>
																</div>
																<div className="row">
																	<div className="col-12 col-lg-12 col-md-12">
																		<div className="row">

																		{
                  user.role === "Basic" ? products.length === 0 ? <div className="col-4 col-lg-4 col-md-4 ">
                    <div className="snippet-cont fm-snippet">
                      <div className="text-center">
                        <div className="py-4">
                          <div className="upload-btn-img">
                            <i className="fa fa-plus" onClick={() => setNewProduct(true)}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : <div className="col-4 col-lg-4 col-md-4 ">
                    <div className="snippet-cont fm-snippet">
                      <div className="text-center">
                        <div className="py-4">
                          <div className="upload-btn-img">
                            <img src={products[0].images} className="img-thumbnail p-0 m-0" alt="icon" onClick={() => {
                              setEditProduct(true);
                              setSelectedProduct(products[0]);
                            }
                            } />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : <>
                    <div className="col-4 col-lg-4 col-md-4 ">
                      <div className="snippet-cont fm-snippet">
                        <div className="text-center">
                          <div className="py-4">
                            <div className="upload-btn-img">
                              {
                                products && products.length > 0 ?
                                  <img src={products[0].images} className="img-thumbnail p-0 m-0" alt="icon" onClick={() => {
                                    setEditProduct(true);
                                    setSelectedProduct(products[0]);
                                  }
                                  } /> :
                                  <i className="fa fa-plus" onClick={() => setNewProduct(true)}></i>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 col-lg-4 col-md-4 ">
                      <div className="snippet-cont fm-snippet">
                        <div className="text-center">
                          <div className="py-4">
                            <div className="upload-btn-img">
                            {
                                products && products.length > 1 ?
                                  <img src={products[1].images} className="img-thumbnail p-0 m-0" alt="icon" onClick={() => {
                                    setEditProduct(true);
                                    setSelectedProduct(products[1]);
                                  }
                                  } /> :
                                  <i className="fa fa-plus" onClick={() => setNewProduct(true)}></i>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }

																			{/* <div className="col-4 col-lg-4 col-md-4 ">
																				<div className="snippet-cont fm-snippet">
																					<div className="text-center">
																						<div className="py-4">
																							<div className="upload-btn-img">
																								<img
																									src="../images/add.svg"
																									className="img-thumbnail p-0 m-0"
																									alt="user profile image"
																								/>
																								<input
																									type="file"
																									name="myfile[]"
																									onchange="showThumbnail(this)"
																								/>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className="col-4 col-lg-4 col-md-4 ">
																				<div className="snippet-cont fm-snippet py-4">
																					<div className="text-center">
																						<div className="py-4">
																							<div className="upload-btn-img">
																								<img
																									src="../images/add.svg"
																									className="img-thumbnail p-0 m-0"
																									alt="user profile image"
																								/>
																								<input
																									type="file"
																									name="myfile[]"
																									onchange="showThumbnail(this)"
																								/>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div> */}
																			{/* <div className="col-4 col-lg-4 col-md-4 ">
																				<div className="snippet-cont fm-snippet py-4">
																					<div className="text-center">
																						<div className="py-4">
																							<div className="upload-btn-img">
																								<img
																									src="../images/add.svg"
																									className="img-thumbnail p-0 m-0"
																									alt="user profile image"
																								/>
																								<input
																									type="file"
																									name="myfile[]"
																									onchange="showThumbnail(this)"
																								/>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className="col-4 col-lg-4 col-md-4 ">
																				<div className="snippet-cont fm-snippet py-4">
																					<div className="text-center">
																						<div className="py-4">
																							<div className="upload-btn-img">
																								<img
																									src="../images/add.svg"
																									className="img-thumbnail p-0 m-0"
																									alt="user profile image"
																								/>
																								<input
																									type="file"
																									name="myfile[]"
																									onchange="showThumbnail(this)"
																								/>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className="col-4 col-lg-4 col-md-4 ">
																				<div className="snippet-cont fm-snippet py-4">
																					<div className="text-center">
																						<div className="py-4">
																							<div className="upload-btn-img">
																								<img
																									src="../images/add.svg"
																									className="img-thumbnail p-0 m-0"
																									alt="user profile image"
																								/>
																								<input
																									type="file"
																									name="myfile[]"
																									onchange="showThumbnail(this)"
																								/>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div> */}
																			{/* <div className="col-4 col-lg-4 col-md-4 ">
																				<div className="snippet-cont fm-snippet py-4">
																					<div className="text-center">
																						<div className="py-4">
																							<div className="upload-btn-img">
																								<img
																									src="../images/add.svg"
																									className="img-thumbnail p-0 m-0"
																									alt="user profile image"
																								/>
																								<input
																									type="file"
																									name="myfile[]"
																									onchange="showThumbnail(this)"
																								/>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div> */}
																		</div>
																	</div>
																</div>
															</div>
															<div className="tab-pane" id="tab_default_2">

																<label className="logo text-bold">Guest</label>

																<div className="row">
																	<div className="col-12 col-lg-12 col-md-12">
																		<div className="row">
																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src="../images/Profile1.svg" alt="icon" />
																							<span className="profile-name text-black">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>


																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src="../images/Profile3.svg" alt="icon" />
																							<span className="profile-name text-black">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>
																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src="../images/Profile2.svg" alt="icon" />
																							<span className="profile-name text-black">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>
																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src="../images/Profile3.svg" alt="icon" />
																							<span className="profile-name text-black">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>







																		</div>
																	</div>
																</div>





																<label className="logo text-bold">Participants</label>


																<div className="row">
																	<div className="col-12 col-lg-12 col-md-12">
																		<div className="row">


																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src="../images/Profile3.svg" alt="icon" />
																							<span className="profile-name text-black">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>
																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src="../images/Profile3.svg" alt="icon" />
																							<span className="profile-name">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>
																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src="../images/Profile2.svg" alt="icon" />

																							<span className="profile-name">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>
																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src="../images/Profile1.svg" alt="icon" />
																							<span className="profile-name">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>
																			<div className="col-1 col-lg-1 col-md-1  setupliveprofile paddingrigth active">
																				<div className="snippet-cont">
																					<div className="text-center">

																						<a href="javascript:;" className="profile-dd">
																							<img className="img-fluid" src={Profilepic} alt="icon" />
																							<span className="profile-name">Kathryn Murphy</span>
																						</a>


																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="text-center">
												<button className="btn btn-yellow btnpadding text-center">
													{" "}
													Joint Live
												</button>
											</div>
										</div>
									</div>
								
									{/* Mobile menu overlay Ends here */}
									{/* Left Wrap Ends here */}
									<div className="col-lg-6 col-md-8 col-12 content pl-0">
										<div className="header">
											<div className="alert-message" id=" delete-pop">
												<button
													type="button"
													className="close"
													data-dismiss="modal"
												>
													X
												</button>
												<div className="popupcontent">
													<img src="../images/live.svg" className="ml-2" />
													<p className="w-50 ml-3 mb-0">
														Lincoln Levin starts a live Tree decoration Sale!
														Click to join live{" "}
													</p>
													<button className="btn-joint btn btnpadding">
														<p className="text-black text-blue mb-0 ">
															{" "}
															Joint now
														</p>
													</button>
												</div>
											</div>
											<div className="info">
												<span className="user" />
												<span className="time" />
											</div>
											<div className="dropdown action-dmenu">
												<button
													className="btn-white dropdown-toggle"
													data-toggle="dropdown"
												>
													<img
														className="img-fluid datatoogleimage"
														src="../images/dot.svg"
														alt="icon"
													/>
												</button>
												<div className="dropdown-menu">
													<a className="dropdown-item" href="javascript:;">
														{" "}
														<img
															className="img-fluid datatoogleimage"
															src="../images/trash-icon.svg"
															alt="icon"
														/>
														Delete
													</a>
													<a
														className="dropdown-item text-danger"
														href="javascript:;"
													>
														{" "}
														<img
															className="img-fluid datatoogleimage"
															src="../images/message.svg"
															alt="icon"
														/>
														Mark as unread
													</a>
												</div>
											</div>
											<img
												className="img-fluid datatoogleimage"
												src="../images/user-profile1.svg"
												alt="icon"
											/>
											<div className="open">
												<a href="javascript:;">UP</a>
											</div>
										</div>
										<div className="message-wrap">
										{ chatRoomMessageList.map((item,index)=>{
													return (
														<div className={item.type == 1?"message-list":"message-list me"}>
														<div className="smallcardtopimage">
															<img
																src="../images/profilepic.svg"
																className="chatboxmessage"
															/>
															<p className="text-bold">{item.name}</p>
														</div>
														<div className="msg send paddingleft">
															<p>
															{item.text}
															</p>
														</div>
														<div className="time paddingleft mt-2">{item.time}</div>
													</div>
													)
												})}
											<div className="message-list me">
												<div className="message-list">
													<div className="smallcardtopimage">
														<div className="msg chat ">
															<p>Lorem ipsum dolor sit amet.</p>
														</div>
														<div className="smallcardtopimage paddingsend">
															<p className="text-bold">Licoln Lincon</p>
															<img
																src="../images/profilepic.svg"
																className="chatboxmessage"
															/>
														</div>
													</div>
												</div>
												<div className="sendtime ">now</div>
											</div>
											<div className="message-list">
												<div className="smallcardtopimage">
													<img
														src="../images/profilepic.svg"
														className="chatboxmessage"
													/>
													<p className="text-bold">Licoln Lincon</p>
												</div>
												<div className="msg send paddingleft">
													<p>
														Lorem ipsum dolor sit amet consectetur, adipisicing
														elit. Odit minus minima quo corporis.
													</p>
												</div>
												<div className="time paddingleft mt-2">now</div>
											</div>
											<div className="message-list">
												<div className="smallcardtopimage">
													<img
														src="../images/profilepic.svg"
														className="chatboxmessage"
													/>
													<p className="text-bold">Licoln Lincon</p>
												</div>
												<div className="msg send paddingleft">
													<p>
														Lorem ipsum dolor sit amet consectetur, adipisicing
														elit. Odit minus minima quo corporis.
													</p>
												</div>
												<div className="time paddingleft mt-2">now</div>
											</div>
											<div className="message-list me">
												<div className="message-list">
													<div className="smallcardtopimage">
														<div className="msg chat ">
															<p>
																Lorem ipsum dolor sit amet consectetur,
																adipisicing elit. Odit minus minima quo
																corporis.
															</p>
														</div>
														<div className="smallcardtopimage paddingsend">
															<p className="text-bold display">Licoln Lincon</p>
															<img
																src="../images/profilepic.svg"
																className="chatboxmessage"
															/>
														</div>
													</div>
												</div>
												<div className="sendtime ">now</div>
											</div>

											

											<div className="message-list me">
												<div className="message-list">
													<div className="smallcardtopimage">
														<div className="msg chat ">
															<p>Lorem ipsum dolor sit amet.</p>
														</div>
														<div className="smallcardtopimage paddingsend">
															<p className="text-bold">Licoln Lincon</p>
															<img
																src="../images/profilepic.svg"
																className="chatboxmessage"
															/>
														</div>
													</div>
												</div>
												<div className="sendtime ">now</div>
											</div>
											<div className="message-list me">
												<div className="message-list">
													<div className="smallcardtopimage">
														<div className="msg chat ">
															<p>
																Lorem ipsum dolor sit amet consectetur,
																adipisicing elit. Odit minus minima quo
																corporis.
															</p>
														</div>
														<div className="smallcardtopimage paddingsend">
															<p className="text-bold display">Licoln Lincon</p>
															<img
																src="../images/profilepic.svg"
																className="chatboxmessage"
															/>
														</div>
													</div>
												</div>
												<div className="sendtime ">now</div>
											</div>
											<div className="message-list me">
												<div className="message-list">
													<div className="smallcardtopimage">
														<div className="msg chat ">
															<p>
																Lorem ipsum dolor sit amet consectetur,
																adipisicing elit. Odit minus minima quo
																corporis.
															</p>
														</div>
														<div className="smallcardtopimage paddingsend">
															<p className="text-bold display">Licoln Lincon</p>
															<img
																src="../images/profilepic.svg"
																className="chatboxmessage"
															/>
														</div>
													</div>
												</div>
												<div className="sendtime ">now</div>
											</div>
											<div className="message-list me">
												<div className="message-list">
													<div className="smallcardtopimage">
														<div className="msg chat ">
															<p>
																Lorem ipsum dolor sit amet consectetur,
																adipisicing elit. Odit minus minima quo
																corporis.
															</p>
														</div>
														<div className="smallcardtopimage paddingsend">
															<p className="text-bold display">Licoln Lincon</p>
															<img
																src="../images/profilepic.svg"
																className="chatboxmessage"
															/>
														</div>
													</div>
												</div>
												<div className="sendtime ">now</div>
											</div>
										</div>

										<div className="message-list">
												<div className="message-list">
													<div className="smallcardtopimage">
														<p className="text-danger">
															<img src="../images/redvideo.svg" />
															Lincoln Levin ended a live Tree decoration Sale!
															<a className="text-danger text-bold">Click to watch again</a>
														</p>

													</div>
												</div>
											</div>
										<div className="message-footer mt-4">
											<div className="snippet-cont sharelink">
												<img
													className="off mt-4"
													src="../images/img.svg"
													alt="icon"
												/>
												<input
													type="text"
													className="form-control bg-grey"
													name
													placeholder="message here"
													value={messageTextToSend}
													onChange={(e) => setMessageTextToSend(e.target.value)}
												/>
											</div>
											<img
												className="off pl-3 mt-3"
												src="../images/send.svg"
												alt="icon"
												onClick={() => sendChatRoomMessage()}
											/>
										</div>
									</div>
									<div className="col-3 col-lg-3 col-md-3 sidebar bg-grey participantslist">
										<div className="form-group position-relative mt-4">
											<input
												type="text"
												className="form-control search-input selectwidth"
												name
												placeholder="Search..."
											/>
											<a href="javascript:;" className="search-icon">
												<img src="../images/search-icon.svg" alt="icon" />
											</a>
										</div>
										<span className="logo mt-0">Participants</span>
										<div className="list-wrap">
											<div className="list">
												<div className="dropdown notification">
													<img
														className="img-fluid"
														src="../images/Profile2.svg"
														alt="icon"
													/>
												</div>
												<div className="info">
													<span className="user">Taylor Swift</span>
												</div>
											</div>
											<div className="list">
												<img
													className="img-fluid"
													src="../images/Profile1.svg"
													alt="icon"
												/>
												<div className="info">
													<span className="user">Miley Cyrus</span>
												</div>
											</div>
											<div className="list">
												<img
													src="../images/Profile1.svg"
													alt=""
												/>
												<div className="info">
													<span className="user">Rihanna</span>
												</div>
											</div>
											<div className="list">
												<img
													className="img-fluid"
													src="../images/Profile1.svg"
													alt="icon"
												/>
												<div className="info">
													<span className="user">Furry</span>
												</div>
											</div>
											<div className="list">
												<img
													src="../images/Profile2.svg"
													alt=""
												/>
												<div className="info">
													<span className="user">Serenay Sarıkaya</span>
												</div>
											</div>
											<div className="list">
												<img
													src="../images/Profile3.svg"
													alt=""
												/>
												<div className="info">
													<span className="user">Hazal Kaya</span>
												</div>
											</div>
											<div className="list">
												<img
													src="../images/Profile2.svg"
													alt=""
												/>
												<div className="info">
													<span className="user">Tuba Büyüküstün</span>
												</div>
											</div>
											<div className="list">
												<img
													src="../images/Profile1.svg"
													alt=""
												/>
												<div className="info">
													<span className="user">Bergüzar Korel</span>
												</div>
											</div>
											<div className="list">
												<img
													src="../images/Profile2.svg"
													alt=""
												/>
												<div className="info">
													<span className="user">Burçin Terzioğlu</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* MainSection Ends here */}
						</div>
					</section>
					<div className="modal fade" id="delete-pop">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<button type="button" className="closed" data-dismiss="modal">
									<img src="../images/close-ico.svg" alt="icon" />
								</button>
								{/* Modal body Starts here */}
								<div className="modal-body text-center p-3 p-md-5">
									<img
										className="img-fluid"
										src="../images/Profile.svg"
										alt="icon"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{
            newProduct ?
              <Modal show={true}>
                <Modal.Header>Add Product
                  <i className="fa fa-close" onClick={() => setNewProduct(false)}></i>
                </Modal.Header>
                <Modal.Body>
                  <AddProduct />
                </Modal.Body>
              </Modal>
              :
              <></>
          }

          {
            editProduct ?
              <Modal show={true}>
                <Modal.Header>Edit Product
                  <i className="fa fa-close" onClick={() => setEditProduct(false)}></i>
                </Modal.Header>
                <Modal.Body>
                  <EditProduct product={selectedProduct} />
                </Modal.Body>
              </Modal>
              :
              <></>
          }
			</div>
		);
}

