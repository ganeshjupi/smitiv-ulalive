import $ from "jquery";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import toastr from "toastr";
import close from "../../assets/images/close.svg";
import dot from "../../assets/images/Group7390.svg";
import guest from "../../assets/images/image 2.svg";
import maginifier from "../../assets/images/maginifier.svg";
import mic from "../../assets/images/mic.svg";
import share from "../../assets/images/share.svg";
import video from "../../assets/images/video.svg";
import { socket, startSocketService } from "../../helpers/socketHelper";
import { IsNullOrEmpty } from "../../helpers/utility";
import { addCartRequest, getProductByIDSRequest, updateProductStatusRequest } from "../../store/shopping/shopping.actions";
import { getCartList, getCartProductList } from "../../store/shopping/shopping.selector";
import { createBookMarkRequest, createWowzaEventRequest, deleteBookMarkRequest, fetchEventRequest, fetchReactionRequest, updateEventInternal } from "../../store/social/social.actions";
import { getEvents, getLiveStream, getReactions } from "../../store/social/social.selector";
import { getImage, getUserProfile } from "../../store/user/user.selector";
import Header from "../common/topbar";

export default function Livestream() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [joinedGuests, setJoinedGuests] = useState([]);
  const [liveComments, setLiveComments] = useState([]);

  const { livestream, cartProducts, cart, userProfile, comments, reactions } = useSelector((state) => {
    return {
      livestream: getLiveStream(state),
      cartProducts: getCartProductList(state),
      cart: getCartList(state),
      userProfile: getUserProfile(state),
      comments: getEvents(state),
      reactions: getReactions(state)
    }
  });

  useEffect(() => {
    startSocketService();
    dispatch(fetchReactionRequest());
    dispatch(fetchEventRequest("?where=livestream:" + livestream._id));
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
    handleJoin();

    socket.on("endLiveWozaMessage", (data) => {
      let req = data;
      req.content = data.message;
      req.commentType = "end";
      req.dateCreated = moment().format();
      req.dateUpdated = moment().format();
      dispatch(updateEventInternal(req))
      console.log("left live Message");
    });

    socket.on("leftLiveMessage", (data) => {
      let req = data;
      req.content = data.message;
      req.commentType = "left";
      req.dateCreated = moment().format();
      req.dateUpdated = moment().format();
      dispatch(updateEventInternal(req))
      console.log("left live Message");
    });

    socket.on("joinLiveMessage", (data) => {
      let req = data;
      req.content = data.message;
      req.commentType = "joined";
      req.dateCreated = moment().format();
      req.dateUpdated = moment().format();
      dispatch(updateEventInternal(req))
      console.log("joined live Message");
    });

    socket.on("listAudienceMessage", (data) => {
      console.log("listAudienceMessage");
      setJoinedGuests(data.listAudience);
    });
    
    socket.on("sendCommentMessage", (data) => {
      let req = data.data;
      req.infoUser = data.infoUser;
      req.dateCreated = moment().format();
      req.dateUpdated = moment().format();
      dispatch(updateEventInternal(req))
    });

    socket.on("sendReactioMessage", (data) => {
      let req = data.data;
      req.infoUser = data.infoUser;
      req.dateCreated = moment().format();
      req.dateUpdated = moment().format();
      dispatch(updateEventInternal(req))
    });

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
        var $src = $(this).attr("src");
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
        type: livestream.guestInvited.indexOf(userProfile._id) > -1 ? "guests" : livestream.owner._id === userProfile._id ? "host" : "viewers",
        infoUser: userProfile
      })
    }
  }

  const handleEnd = () => {
    if (window.confirm("Are you sure want to left this meeting?")) {
      if (socket) {
        if (livestream.owner._id === userProfile._id) {
          socket.emit("endLive", {
            room: livestream._id,
            type: "host",
            infoUser: userProfile
          });
          toastr.success("You have end this meeting.", "Livestream");
          history.push("/home");
        }
        else {
          socket.emit("leftLive", {
            room: livestream._id,
            type: livestream.guestInvited.indexOf(userProfile._id) > -1 ? "guests" : livestream.owner._id === userProfile._id ? "host" : "viewers",
            infoUser: userProfile
          });
          toastr.success("You have left this meeting.", "Livestream");
          history.push("/home");
        }
      }
    }
  }

  const sendComment = () => {
    let comment = document.getElementById("sendComment").value;
    if (socket && !IsNullOrEmpty(comment)) {
      socket.emit("sendComment", {
        room: livestream._id,
        dataCreate: {
          user: userProfile.fullName,
          timesAppear: 1,
          livestream: livestream._id,
          type: "Main",
          content: comment
        },
        infoUser: userProfile
      });
      document.getElementById("sendComment").value = "";
    }
  }

  const sendReaction = (reaction) => {
    if (socket && !IsNullOrEmpty(reaction.name)) {
      socket.emit("sendReaction", {
        room: livestream._id,
        dataCreate: {
          user: userProfile.fullName,
          timesAppear: 1,
          livestream: livestream._id,
          type: "Main",
          content: reaction.name
        },
        infoUser: userProfile
      });
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
                          {
                            livestream.owner._id === userProfile._id ?
                              <div className="form-group col-lg-9 col-md-12 snippet-cont">
                                <label className="text-bold">Product Status</label>
                                <div className="snippet-cont">

                                  <div className="toggle-button-cover">
                                    <div className="button-cover">
                                      <div className="togglebuttons r" id="button-1">
                                        <input type="checkbox" checked={selectedProduct.status === "Active"}
                                          onChange={(e) => {
                                            dispatch(updateProductStatusRequest({
                                              id: selectedProduct._id,
                                              status: selectedProduct.status === "Active" ? "Inactive" : "Active"
                                            }))
                                          }}
                                          className="checkbox" />
                                        <div className="knobs" />
                                        <div className="layer" />
                                      </div>
                                    </div>

                                  </div>
                                </div>
                                <p>Show Product to users</p>
                              </div>
                              :
                              <>
                                <div className="quantity">
                                  <button onClick={() => qty > 1 ? setQty(qty - 1) : setQty(1)} className="quantity__minus">-</button>
                                  <input name="quantity" type="text" className="quantity__input" value={qty} />
                                  <button onClick={() => selectedProduct.warehouse.remaining > qty ? setQty(qty + 1) : setQty(qty)} className="quantity__plus">+</button>
                                </div>
                                <div className="col-12 col-lg-12 mt-4 mb-4  text-center">
                                  <button className="btn btn-buynow btnpadding"
                                    onClick={() => dispatch(addCartRequest({
                                      product: selectedProduct._id,
                                      quantity: qty,
                                      livestream: livestream._id
                                    }))}>Add to cart</button>
                                  <Link to={cart && cart.cartItems && cart.cartItems.length > 0 ? "/add_new_card" : "/livestream"}>
                                    <button className="btn btn-refer btnpadding ml-4">Buy now</button>
                                  </Link>
                                </div>
                              </>
                          }
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
              <div className="video-call-actions bg-grey mt-2 w-100">
                <a className="video-action-button btn" ><img className="videoicon" src={maginifier} /></a>
                <a className="video-action-button btn" ><img className="videoicon" src={mic} /></a>
                <a className="video-action-button btn"  ><img className="videoicon" src={video} /></a>

                <a className="dropdown-toggle btn" data-toggle="dropdown">
                  <img className="img-fluid datatoogleimage dots" src={share} alt="icon" />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item action-wrap" href="javascript:;">Share</a>
                  <a className="dropdown-item" href="javascript:;" onClick={() => livestream.isBookmark ?
                    "" :
                    dispatch(createBookMarkRequest({
                      livestream: livestream._id
                    }))}>{
                      !livestream.isBookmark ? "Add to Bookmark" : "Bookmarked"
                    }</a>
                  <a className="dropdown-item" href="javascript:;">Request to Joint</a>
                </div>

                <a className="video-action-button btn" ><img onClick={() => handleEnd()} className="videoicon" src={close} /></a>


                <a className="dropdown-toggle btn" data-toggle="dropdown">
                  <img className="img-fluid datatoogleimage dots" src={dot} alt="icon" />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item action-wrap" href="javascript:;">Share</a>
                  <a className="dropdown-item" href="javascript:;">Favorities</a>
                  <a className="dropdown-item" href="javascript:;">Request to Joint</a>
                </div>


              </div>
            </div>
            <div className="left-side">
              <div className="navigation">
                {
                  joinedGuests.map((x) => {
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
                      <p><i className="fa fa-users"></i><span className="pl-2">{joinedGuests.length}</span></p>
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
                    liveComments.map((x) => {
                      return <div className="message-wrapper">
                        <div className="profile-picture">
                          <img src={getImage(x.infoUser.avatar)} alt="pp" />
                        </div>
                        <div className="message-content">
                          <span className="time-ago">{moment(x.dateCreated).fromNow()}</span>
                          <div className="name info">
                            <p className="displaysingleline mb-2">{x.infoUser.fullName}</p>
                            <span className="text-grey text-left mb-2">{x.data.content}</span>
                          </div>
                        </div>
                      </div>
                    })
                  }
                  {
                    comments.map((x) => {
                      return <div className="message-wrapper">
                        {
                          x.commentType === "joined" ? <div className="alert alert-info" role="alert">
                            {x.content}
                          </div> :
                            x.commentType === "left" || x.commentType === "end" ? <div className="alert alert-danger" role="alert">
                              {x.content}
                            </div> : <>
                              <div className="profile-picture">
                                <img src={getImage(x.infoUser.avatar)} alt="pp" />
                              </div>
                              <div className="message-content">
                                <span className="time-ago">{moment(x.dateCreated).fromNow()}</span>
                                <div className="name info">
                                  <p className="displaysingleline mb-2">{x.infoUser.fullName}</p>
                                  <span className="text-grey text-left mb-2">{x.content}</span>
                                </div>
                              </div>
                            </>
                        }
                      </div>
                    })
                  }

                </div>

              </div>
              {
                comments && comments.filter((x) => x.commentType === "end").length === 0 ?
                  <div className="message-footer mt-2">
                    <div className="snippet-cont  mt-2">
                      <div className="input-group">
                        <span className="input-group-text"><i className="fa fa-smile-o"></i></span>
                        <textarea className="form-control" id="sendComment" aria-label="With textarea" placeholder="comment here"></textarea>
                        <span className="input-group-text"><i className="fa fa-share" onClick={() => sendComment()}></i></span>
                      </div>
                    </div>
                  </div> : <span />
              }
              <div className="box">
                <input type="checkbox" id="like" className="field-reactions" />
                <h3 className="text-desc">Press space and after tab key to navigation</h3>
                <label for="like" className="label-reactions">Like</label>
                <div className="toolbox"></div>
                <label className="overlay" for="like"></label>
                {
                  reactions && reactions.map((x) => {
                    return <button onClick={() => sendReaction(x)} className={x.name}><span className="legend-reaction">{x.descriptions}</span></button>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
