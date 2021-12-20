import $ from "jquery";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import guest from "../../assets/images/image 2.svg";
import { socket } from "../../helpers/socketHelper";
import { getProductByIDSRequest } from "../../store/shopping/shopping.actions";
import { getCartList, getCartProductList } from "../../store/shopping/shopping.selector";
import { createWowzaEventRequest, fetchEventRequest } from "../../store/social/social.actions";
import { getEvents, getLiveStream } from "../../store/social/social.selector";
import { getImage, getUserProfile } from "../../store/user/user.selector";
import Header from "../common/topbar";

export default function LivestreamEnded() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);

  const { livestream, cartProducts, cart, userProfile, comments } = useSelector((state) => {
    return {
      livestream: getLiveStream(state),
      cartProducts: getCartProductList(state),
      cart: getCartList(state),
      userProfile: getUserProfile(state),
      comments: getEvents(state)
    }
  });

  useEffect(() => {
    dispatch(fetchEventRequest("?where=livestream:" + livestream._id));
    var video = document.querySelector("#videoElement");
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function () {
          console.log("Something went wrong!");
        });
    }
  }, []);

  useEffect(() => {
    setShowCart(false);
  }, [cart]);

  useEffect(() => {
    if (livestream._id) {
      dispatch(getProductByIDSRequest({
        products: livestream.products.map((x) => x.id),
      }))
    }
  }, [livestream]);

  let duration = "00:00:00";
  if (livestream.timeStart) {
    let ms = moment().diff(moment(livestream.timeStart));
    var d = moment.duration(ms);
    duration = moment(d.as('milliseconds')).format("HH:mm:ss");
  }

  useEffect(() => {




    $(function () {
      "use strict";

      $(".popups img").click(function () {
        $(".list").fadeIn();

      });

      $("span, .overlay").click(function () {
        $(".list").fadeOut();
      });

    });

  });
  const handleStart = () => {
    if (socket) {
      socket.emit("startLive", {
        room: livestream._id,
        infoUser: userProfile
      });
      handleJoin();
    }
    if (livestream.streamingStatus === "Waiting") {
      dispatch(
        createWowzaEventRequest(
          { "streamKey": livestream.code, "eventType": "Start-Live", "data": {} }
        )
      );
    }
  }

  const handleJoin = () => {
    if (socket) {
      socket.emit("joinLive", {
        room: livestream._id,
        type: "viewers",
        infoUser: userProfile
      })
    }
  }

  return (
    <div>
      <section className="container-fluid ">
        {/* header Starts here */}
        <Header />

        {/* Mobile menu overlay Ends here */}
        {/* Left Wrap Ends here */}
        <div className="row">
          <div className="app-container">
            <div className="left-side">
              {
                selectedProduct._id ?
                  <Modal show={showCart}>
                    <Modal.Header>Product Details
                      <i className="fa fa-close" onClick={() => setShowCart(false)}></i>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="img-show">
                        <img src={`https://${selectedProduct.attachments.bucket}.s3.ap-southeast-1.amazonaws.com/${selectedProduct.attachments.key}`} className="imagebox" />
                        <hr />
                        <div className="text-left">
                          <h3 className="text-left">{selectedProduct.name}</h3>
                          <p className="text-danger">{selectedProduct.price} {selectedProduct.currency}</p>
                          <p>{selectedProduct.descriptions}</p>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal> :
                  <></>
              }
              <div className="navigation">
                {
                  cartProducts.map((item) => {
                    return <>
                      <div className="popup">
                        <a href="javascript:;" onClick={() => {
                          setShowCart(true);
                          setSelectedProduct(item)
                        }} className="nav-link icon  ">
                          <img className="img-fluid" src={`https://${item.attachments.bucket}.s3.ap-southeast-1.amazonaws.com/${item.attachments.key}`} alt="icon" />
                        </a>
                      </div>
                    </>
                  })
                }
              </div>
            </div>
            <div className="app-main">
              <div className="video-call-wrapper">
                <video autoplay="true" id="videoElement" className="setupcameraLivestream" />
              </div>
            </div>
            <div className="left-side">
              <div className="navigation">
                {
                  livestream.guestInvited.map(() => {
                    return <a href="#" className="nav-link icon text-center">
                      <img className="img-fluid " src={guest} alt="icon" />
                    </a>
                  })
                }
              </div>
            </div>
            <div className="right-side">
              <div className="chat-container">
                <div className="chat-header">
                  <div className="row">
                    <div className="col-8 col-md-8 col-lg-8">
                      <div className="smallcardtopimage">
                        <img className="img-fluid imagesize " src={`https://${livestream.attachments.bucket}.s3.ap-southeast-1.amazonaws.com/${livestream.attachments.key}`} />
                        <div className="name pl-2">
                          <h6 className="displaytitle  mb-2">{livestream.title}</h6>
                          <p className="text-left">{duration}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4">
                      <div className="hdr-right">
                        <div className="name">
                          <button className="btn btn-buynow" onClick={() => handleStart()}>
                            {livestream.streamingStatus === "Waiting" && livestream.owner._id === userProfile._id ? "Start Live" : livestream.streamingStatus}
                          </button>
                        </div>
                      </div>
                      <div>

                      </div>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4">
                      <p><i className="fa fa-eye"></i><span className="pl-2">{livestream.totalView}</span></p>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4">
                      <p><i className="fa fa-comments"></i><span className="pl-2">{comments.length}</span></p>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4">
                      <p><i className="fa fa-users"></i><span className="pl-2">{livestream.guestInvited.length}</span></p>
                    </div>
                  </div>
                  <p className="text-bold mt-4">{livestream.contents}</p>
                  {
                    livestream.hashtags.map((x) => {
                      return <label>#{x}</label>
                    })
                  }
                </div>
                <div className="chat-area">
                  {
                    comments.map((x) => {
                      return <div className="message-wrapper">
                        <div className="profile-picture">
                          <img src={getImage(x.infoUser.avatar)} alt="pp" />
                        </div>
                        <div className="message-content">
                          <span className="time-ago">{moment(x.dateCreated).fromNow()}</span>
                          <div className="name info">
                            <p className="displaysingleline mb-2">{x.infoUser.fullName}</p>
                            {
                              x.type === "comment" ? <span className="text-grey text-left mb-2">{x.content}</span> :
                                <div>
                                  <button className={x.content}><span className="legend-reaction">{x.content}</span></button>
                                </div>
                            }

                          </div>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
