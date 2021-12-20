import React, { useEffect, useState } from "react";
import Header from "../common/topbar";
import Sidebar from "../common/sidebar";
import { uploadAvatarRequest } from "../../store/file/file.actions";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../store/user/user.selector";
import { getProfileImage } from "../../store/user/user.selector";
import { updateUserProfileRequest } from "../../store/user/user.actions";
import { getUploadedAvatarImage } from "../../store/file/file.selector";
import { IsNullOrEmpty } from "../../helpers/utility";

function EditProfile() {
	const history = useHistory();
	const [name, setName] = useState("");
	const [userName, setUserName] = useState("");
	const [bio, setBio] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [link, setLink] = useState("");

	const dispatch = useDispatch();
	const [bannerImageSrc, setBannerImageSrc] = useState("");

	const { userProfile, profileImage, updateImage } = useSelector((state) => {
		return {
			userProfile: getUserProfile(state),
			profileImage: getUploadedAvatarImage(state),
			updateImage: getProfileImage(state)

		}
	});
	const changeBanner = async (e) => {
		const files = e.target.files[0];

		dispatch(uploadAvatarRequest(files));

		const reader = new FileReader();
		reader.addEventListener("load", function () {
			setBannerImageSrc(reader.result);
		}, false);

		if (files) {
			reader.readAsDataURL(files);
		} else {
			setBannerImageSrc("");
		}
	}

	useEffect(() => {
		setName(userProfile.fullName);
		setUserName(userProfile.userName);
		setBio(userProfile.descriptions);
		setPhone(userProfile.phone);
		setEmail(userProfile.email);
		setLink(userProfile.website);
	}, [userProfile]);

	const handleSave = () => {
		let data = {
			"fullName": name,
			"userName": userName,
			"phone": phone,
			"email": email,
			"website": link,
			"descriptions": bio,

		}
		if (!IsNullOrEmpty(profileImage._id)) {
			data.avatar = profileImage._id;
		}
		dispatch(updateUserProfileRequest(data, history));
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
					<div className="col-lg-9 col-md-9 col-12 ">
						<div className="row">
							<div className="col-12 mt-4 mb-4">
								<div className="col-md-12 profile-blk">



									
									<div className="title mt-4 mb-4">

										<div className="upload-btn-img">
											<img src={bannerImageSrc ? bannerImageSrc : updateImage} className="w-10 imageborder" alt="user profile image" />
											<input type="file" name="banner_image" onChange={changeBanner} />

										</div>
										<span className="pro">{userProfile.role}</span>
									</div>
									<div className="row ">
										<div className="col-lg-9 col-md-12">
											<div className="form-group">
												<div className="row">
													<div className="col-lg-6 col-md-12 col-6 mb-4">
														<label className="text-bold">Name</label>
														<div className="snippet-cont">
															<input
																type="text"
																className="form-control"
																value={name}
																onChange={(e) => setName(e.target.value)}
																placeholder="Name"
															/>
														</div>
													</div>
													<div className="col-lg-6 col-md-12 col-6 ">
														<div className="form-group">
															<label className="text-bold">Username</label>
															<div className="snippet-cont">
																<input
																	type="text"
																	className="form-control"
																	value={userName}
																	onChange={(e) => setUserName(e.target.value)}
																	placeholder="Username"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-9 col-md-12">
											<div className="form-group snippet-cont">
												<label className="text-bold">Bio</label>
												<textarea
													type="Date"
													className="form-control h-25"
													rows={4}
													value={bio}
													onChange={(e) => setBio(e.target.value)}
													placeholder="Bio"
													defaultValue=""
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group col-lg-9 col-md-12 snippet-cont">
											<label className="text-bold">Phone Number</label>
											<div className="snippet-cont">
												<input
													type="text"
													className="form-control formbg"
													value={phone}
													onChange={(e) => setPhone(e.target.value)}
													placeholder="(+64) 123 4567"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group col-lg-9 col-md-12 snippet-cont">
											<label className="text-bold">Email</label>
											<div className="snippet-cont">
												<input
													type="text"
													className="form-control formbg"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group col-lg-9 col-md-12 snippet-cont">
											<label className="text-bold">Link</label>
											<input
												className="form-control"
												type="text"
												value={link}
												onChange={(e) => setLink(e.target.value)}
												placeholder="http://antman.me"
											/>
										</div>
									</div>
									<div className="col-12 col-lg-9 mt-4 mb-4  text-right">
										<button className="btn btn-outline-grey">
											Cancel
										</button>
										<button className="btn btn-yellow btnpadding ml-4" onClick={() => handleSave()}>Save </button>
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

export default EditProfile;
