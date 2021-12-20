import React, { useEffect, useState } from "react";
import Header from "../common/topbar";
import Profilepic from "../../assets/images/imagepro.svg"
import ThumbLine from "../../assets/images/thumbline.svg"
import Copied from "../../assets/images/copied.svg"
import Image from "../../assets/images/ss_1348637282_1658 17.svg"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { getLiveStream } from "../../store/social/social.selector";
import { getFollowingUsers, getUserProfile,getSearchedUsers,getImage } from "../../store/user/user.selector";
import { getCartProductList } from "../../store/shopping/shopping.selector";
import { fetchOtherUserProfileRequest, followUserRequest, searchUserRequest, unfollowUserFailure, unfollowUserRequest } from "../../store/user/user.actions";
import { IsNullOrEmpty } from "../../helpers/utility";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

require("dotenv").config();

// class CreateVipCircle extends React.Component {
  export default function CreateVipCircle() {
    const dispatch = useDispatch();
    const [bannerImage, setBannerImage] = useState("");
    const [bannerImageSrc, setBannerImageSrc] = useState("");
    const [searchText, setSearchText] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]);
	  const history = useHistory();

    const { followingUsers, products, userProfile, livestream,users } = useSelector((state) => {
      return {
        followingUsers: getFollowingUsers(state),
        userProfile: getUserProfile(state),
        livestream: getLiveStream(state),
        products: getCartProductList(state),
        users: getSearchedUsers(state)
      }
    });

    useEffect(() => {
      dispatch(searchUserRequest());
    }, []);

    const addSelectedUser = (item) => {
      if(!selectedUsers.some(existingUser => existingUser._id === item._id)){
        setSelectedUsers(prevArray => [...prevArray, item]);
      }
    }

    
	let searchedUsers = users;
	if (!IsNullOrEmpty(searchText)) {
		searchedUsers = searchedUsers.filter((x) => {
			return x.fullName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
		})
	}

    
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     banner_image: '',
  //     banner_image_src: ''
  //   };
  // }

 const changeBanner = (e) => {
    const propName = e.target.name;
    const propNamesrc = propName + '_src';
    const files = e.target.files[0];
    this.setState({ [propName]: files });
    const reader = new FileReader();
    let img = '';
    let THIS = this;
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      img = reader.result;
      THIS.setState({
        [propNamesrc]: reader.result
      });
    }, false);

    if (files) {
      reader.readAsDataURL(files);
      console.log('img1', img);
    } else {
      THIS.setState({
        [propNamesrc]: ''
      });
    }
  }

  // render() {
    return (
      <div>
        <div>
          {/* Main Wrapper Starts here */}
          <section className="container-fluid">
            {/* header Starts here */}
            <Header />
            <div className="row">

              <div className="col-lg-3 col-md-3 rigthborder">
                <div className="left-wrap">
                  <label className="logo mt-4 text-bold">VIP Circle</label>
                  <div className="snippet-cont">
                    <label className="logo mt-4 text-bold">Title</label>
                    <input type="text" className="form-control bg-grey" name placeholder="Title" />
                  </div>
                  <div className="snippet-cont">
                    <label className="logo mt-4 mb-4 text-bold">Private lounge description</label>
                    <textarea type="Date" className="form-control h-25 " rows={4} name placeholder="Describe your private lounge contents" defaultValue={""} />
                  </div>
                  <div className="snippet-cont ">
                    <label className="logo mt-4 text-bold"> Set monthly subscription fee for VIP circle</label>
                    <div className="flex">
                      <input type="text" className="form-control bg-grey col-lg-8" name placeholder="0.00" />
                      <p className="mt-3 ml-2">/ month</p>
                    </div>
                  </div>
                  <div className="snippet-cont">
                    <label className="logo mt-4 text-bold">Set yearly subscription fee for VIP Circle</label>
                    <div className="flex">
                      <input type="text" className="form-control bg-grey col-lg-8" name placeholder="0.00" />
                      <p className="mt-3 ml-2">/  year</p>
                    </div>
                  </div>
                  {/* <div className="snippet-cont fm-dotborder py-4 mt-4">
                    <div className="text-center">
                      <div className="py-4">
                        <div className="upload-btn-img">
                          <img src={`https://${livestream.attachments.bucket}.s3.ap-southeast-1.amazonaws.com/${livestream.attachments.key}`} className="img-thumbnail p-0 m-0" alt="user profile image" />
                          <input type="file" name="banner_image" onChange={this.changeBanner} />
                          <p className="mb-0 mt-2 line text-bold">Thumbnail</p>
                          <span className="text-gray mt-0 mb-4 expiry">Upload thumbnail image</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="snippet-cont form-group sharelink">

                    <div className="snippet-cont form-group sharelink">
                      <label className="logo mt-4 text-bold">Share invitation link</label>
                      <img className="off mt-3" src={Copied} alt="icon" />
                      <textarea type="Date" className="form-control  bg-grey h-25 linkpadding" rows={2} cols={40} name placeholder={process.env.REACT_APP_URL + "/vip/asdhjk/asdakj/12312"} defaultValue={""} />


                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-grey w-100 "> Save</button>
                    <div className="text-center py-4 mb-4">
                      <button className="btn btn-buynow w-100"> <img src="../images/live.svg" alt="icon" /><span className="pl-2">Start Live</span></button>
                    </div>
                  </div>
                  {/* <div className="text-center py-4">
                    <button className="btn btn-grey"> Create circle</button>
                  </div> */}
                </div>
              </div>
              <div className="col-12 col-lg-9 col-md-9 mt-4 mb-4">
                <div className="snippet-block">
                  <div className="snippet-hdr px-4">
                    <h3 className="logo mt-4 mb-4">VIP guest</h3>
                  </div>
                  <div className="row px-4">
                    {
                  selectedUsers.filter((item) => item._id !== userProfile._id).map((item) => {
                    return (
                    <div className="col-3 col-lg-1 col-md-3">
                      <div className="snippet-cont">
                        <div className="text-center">
                          <div className="py-4 participantname">
                            <div className="profile-dd w-75">
                              <img className="img-fluid" src={getImage(item.avatar)} alt="icon" />
                            </div>
                            <span>{item.fullName}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })
  }
                    {/* <div className="col-3 col-lg-1 col-md-3">
                      <div className="snippet-cont">
                        <div className="text-center">
                          <div className="py-4 participantname">
                            <div className="profile-dd w-75">
                              <img className="img-fluid" src={Image} alt="icon" />
                            </div>
                            <span>Cody Fisher</span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-3 col-lg-1 col-md-3">
                      <div className="snippet-cont">
                        <div className="text-center">
                          <div className="py-4 participantname">
                            <div className="profile-dd w-75">
                              <img className="img-fluid" src={Image} alt="icon" />
                            </div>
                            <span>Cody Fisher</span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-3 col-lg-1 col-md-3">
                      <div className="snippet-cont">
                        <div className="text-center">
                          <div className="py-4 participantname">
                            <div className="profile-dd w-75">
                              <img className="img-fluid" src={Image} alt="icon" />
                            </div>
                            <span>Cody Fisher</span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="snippet-hdr px-4">
                    <h3 className="logo mt-4 mb-4">Send exclusive invitation to your VIP guest</h3>
                  </div>
                  <div className="col-12 col-lg-12 col-md-12 mb-4">
                    <div className="form-group col-lg-12 col-md-12 snippet-cont">
                      <div className="snippet-cont ">
                        <input type="text" className="form-control formbg searchiconspace" defaultValue="search" value={searchText}
												onChange={(e) => setSearchText(e.target.value)} />
                        <a href="javascript:;" className="search-icon"><img src="../images/search-icon.svg" alt="icon" /></a>
                      </div>
                    </div>
                    <div className="row">
                      { 	searchedUsers.filter((item) => item._id !== userProfile._id).map((item) => {
                        return(
                      <div className="col-1 col-lg-1 col-md-1  setupliveprofile active" onClick={(e) => {
                        e.stopPropagation();
                       addSelectedUser(item)
                      }}>
                        <div className="snippet-cont">
                          <div className="text-center">
                            {/* <div className="profile-dd w-75">
                                            <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                          </div> */}
                            <a href="javascript:;" className="profile-dd">
                              <img className="img-fluid" src={getImage(item.avatar)} alt="icon" />
                            </a>
                            <span>{item.fullName}</span>
                            <span className="count">01</span>
                          </div>
                        </div>
                      </div>
                        )
                      })
  }
                      
                    </div>
                  </div>

                </div>
                <div className="col-12 col-lg-12 col-md-12">
                  <div className="snippet-cont py-4">
                    <div className="text-center py-4 mb-4 ">
                      {/* <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/create_vip_meeting';
                      }}
                        className="btn btn-grey btnwidth text-bold"> <span className="pl-2">Create circle </span></button>
                   */}

                      <Link className="btn btn-grey btnwidth text-bold" to={{
                        pathname: '/create_vip_meeting',
                        state: {
                          selectedUsers: selectedUsers
                        }
                      }}><span className="pl-2">Create circle</span></Link>

                      </div>

                  </div>
                </div>
              </div>

            </div>

            {/* MainSection Ends here */}

          </section>

          {/* Main Wrapper Ends here */}
        </div>

      </div>
    );
  // }
}

//export default CreateVipCircle;


