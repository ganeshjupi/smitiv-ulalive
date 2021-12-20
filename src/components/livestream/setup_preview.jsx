import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profilepic from "../../assets/images/imagepro.svg";
import { getProductByIDSRequest } from "../../store/shopping/shopping.actions";
import { getCartProductList } from "../../store/shopping/shopping.selector";
import { getLiveStream } from "../../store/social/social.selector";
import { fetchFollowingUserRequest } from "../../store/user/user.actions";
import { getFollowingUsers, getUserProfile } from "../../store/user/user.selector";
import Header from "../common/topbar";
import { socket } from "../../helpers/socketHelper";
import { createWowzaEventRequest } from "../../store/social/social.actions";
import { useHistory } from "react-router";
require('dotenv').config();

export default function SetupLive(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { followingUsers, products, userProfile, livestream } = useSelector((state) => {
    return {
      followingUsers: getFollowingUsers(state),
      userProfile: getUserProfile(state),
      livestream: getLiveStream(state),
      products: getCartProductList(state),
    }
  });

  useEffect(() => {
    if (livestream._id && livestream.streamingStatus === "Waiting") {
      dispatch(getProductByIDSRequest({
        products: livestream.products.map((x) => x.id),
      }))
    }
    else {
      history.push("/livestream");
    }
  }, [livestream]);

  useEffect(() => {
    dispatch(fetchFollowingUserRequest());

    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }
  }, []);


  const handleStart = () => {
    if (socket) {
      socket.emit("startLive", {
        room: livestream._id,
        infoUser: userProfile
      });
    }
    if (livestream.streamingStatus === "Waiting") {
      dispatch(
        createWowzaEventRequest(
          { "streamKey": livestream.code, "eventType": "Start-Live", "data": {} }
        )
      );
    }
  }

  return (
    <div>
      <section className="container-fluid">
        {/* header Starts here */}
        <Header />
        <div className="row">
          {/* Mobile menu overlay Ends here */}
          {/* Left Wrap Ends here */}
          <div className="col-lg-3 col-md-3 rigthborder">
            <div className="left-wrap">
              <label className="logo mt-4 mb-4 text-bold">Setup Live</label>
              <div className="snippet-cont">
                <input type="text" className="form-control bg-grey" readOnly value={livestream.title} name placeholder="Title" />
              </div>
              <div className="snippet-cont py-4 ">
                <textarea type="Date" className="form-control h-25 " readOnly value={livestream.contents} rows={5} name placeholder="Describe the live" defaultValue={""} />
              </div>
              <div className="snippet-cont">
                <label className="logo text-bold">Add hashtags</label>
                <textarea type="Date" className="form-control h-25 " readOnly value={livestream.hashtags.map((x) => "#" + x)} rows={5} name placeholder="Add up to 5 hashtags" defaultValue={""} />
              </div>
              <div className="snippet-cont fm-dotborder py-4 mt-4">
                <div className="text-center">
                  <div className="py-4">
                    <div className="upload-btn-img">
                      <img src={`https://${livestream.attachments.bucket}.s3.ap-southeast-1.amazonaws.com/${livestream.attachments.key}`} className="img-thumbnail p-0 m-0" alt="user profile image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="snippet-hdr">
                <label className="logo text-bold  mt-4 mb-4">Products</label>
              </div>
              <div className="row">
                {
                  products.map((x) => {
                    return <div className="col-4 col-lg-4 col-md-4 ">
                      <div className="snippet-cont fm-snippet">
                        <div className="text-center">
                          <div className="py-4">
                            <div className="upload-btn-img">
                              <img src={`https://${x.attachments.bucket}.s3.ap-southeast-1.amazonaws.com/${x.attachments.key}`} className="img-thumbnail p-0 m-0" alt="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9 col-md-9 mt-4 mb-4 btnwidth ">
            <div className="snippet-block mt-4">

              <div className="snippet-cont bg-grey">

                <video autoplay="true" id="videoElement" className="setupcamera">

                </video>
                <p className="text-center">Turn on your camera to let the viewers see you</p>
              </div>

              <div className="container">
                <div className="row">

                  <div className="tabbable-panel">
                    <div className="tabbable-line">
                      <div className="tab-content px-4">
                        <div className="tab-pane active" id="tab_default_1">
                          <div className="row">
                            <div className="col-12 col-lg-12 col-md-12">
                              <div className="row">
                                {
                                  followingUsers && followingUsers.map((item) => {
                                    return (
                                      <div key={item._id} className={livestream.guestInvited.indexOf(item.follower._id) > -1 ? "col-1 col-lg-1 col-md-1 setupliveprofile active" : "col-1 col-lg-1 col-md-1 setupliveprofile"}>
                                        <div className="snippet-cont">
                                          <div className="text-center">
                                            <a className="profile-dd" href="javascript:void()">
                                              <img className="img-fluid" src={Profilepic} alt="icon" />
                                            </a>
                                            <span className="profile-name">{item.follower.fullName}</span>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })
                                }

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
            <div className="col-12 col-lg-12 col-md-12">
              <div className="snippet-cont py-4">
                <div className="text-center py-4 mb-4 ">
                  <button
                    onClick={(e) => handleStart()}
                    className="btn btn-buynow btnpadding">
                    <img src="../images/live.svg" alt="icon" />
                    <span className="pl-2">Start Live !</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



