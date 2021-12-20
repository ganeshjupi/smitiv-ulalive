import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toastr from "toastr";
import Background from "../../assets/images/background.svg";
import Background2 from "../../assets/images/background2.svg";
import Profilepic from "../../assets/images/imagepro.svg";
import None from "../../assets/images/none.svg";
import ThumbLine from "../../assets/images/thumbline.svg";
import { IsNullOrEmpty } from "../../helpers/utility";
import { uploadLivesRequest } from "../../store/file/file.actions";
import { getUploadedLiveImage } from "../../store/file/file.selector";
import { getProductList, getProducts } from "../../store/shopping/shopping.selector";
import { createLiveStreamRequest } from "../../store/social/social.actions";
import { fetchFollowingUserRequest } from "../../store/user/user.actions";
import { getFollowingUsers, getUserProfile } from "../../store/user/user.selector";
import EditProduct from "../products/EditProduct";
import AddProduct from "../products/AddProduct";
import Header from "../common/topbar";
import { useHistory } from "react-router";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProductRequest, selectExistingProduct } from "../../store/shopping/shopping.actions";
require('dotenv').config();

export default function SetupLive(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [bannerImageSrc, setBannerImageSrc] = useState("");
  const [guests, setGuests] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashTags, setHashTags] = useState("");
  const [newProduct, setNewProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const { followingUsers, products, thumbnail, user, productList } = useSelector((state) => {
    return {
      followingUsers: getFollowingUsers(state),
      products: getProductList(state),
      thumbnail: getUploadedLiveImage(state),
      user: getUserProfile(state),
      productList: getProducts(state)
    }
  });

  useEffect(() => {
    setNewProduct(false);
    setEditProduct(false);
  }, [products])

  useEffect(() => {
    dispatch(fetchFollowingUserRequest());
    dispatch(getProductRequest());
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

  const handleCreateLiveStream = () => {
    let data = {
      type: "main",
      category: props.category._id,
      title: title,
      contents: description,
      products: products.map((x) => {
        return {
          id: x._id,
          name: x.name
        }
      }),
      currentProduct: products[0]._id,
      guests: guests,
      hashtags: hashTags.split(","),
      attachments: thumbnail._id
    }
    dispatch(createLiveStreamRequest({
      data: data,
      history: history
    }));
  }

  const changeBanner = async (e) => {
    const files = e.target.files[0];

    dispatch(uploadLivesRequest(files));

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

  const validate = () => {
    return !IsNullOrEmpty(title) &&
      !IsNullOrEmpty(title) &&
      !IsNullOrEmpty(description) &&
      !IsNullOrEmpty(hashTags) &&
      !IsNullOrEmpty(thumbnail._id) &&
      products.length > 0 &&
      guests.length > 0
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
                <input type="text" className="form-control bg-grey" onChange={(e) => setTitle(e.target.value)} name placeholder="Title" />
              </div>
              <div className="snippet-cont py-4 ">
                <textarea type="Date" className="form-control h-25 " onChange={(e) => setDescription(e.target.value)} rows={5} name placeholder="Describe the live" defaultValue={""} />
              </div>
              <div className="snippet-cont">
                <label className="logo text-bold">Add hashtags</label>
                <textarea type="Date" className="form-control h-25 " rows={5} onChange={(e) => setHashTags(e.target.value)} name placeholder="Add up to 5 hashtags" defaultValue={""} />
              </div>
              <div className="snippet-cont fm-dotborder py-4 mt-4">
                <div className="text-center">
                  <div className="py-4">
                    <div className="upload-btn-img">
                      <img src={bannerImageSrc ? bannerImageSrc : ThumbLine} className="img-thumbnail p-0 m-0" alt="user profile image" />
                      <input type="file" name="banner_image" onChange={changeBanner} />
                      <p className="mb-0 mt-2 line text-bold">Thumbnail</p>
                      <span className="text-gray mt-0 mb-4 expiry">Upload thumbnail image</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="snippet-hdr">
                <label className="logo text-bold  mt-4 mb-4">Add item</label>
              </div>
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
              </div>
              {
                productList && productList.length > 0 ?
                  <>
                    <div className="snippet-hdr">
                      <label className="logo text-bold  mt-4 mb-4">Existing Products</label>
                    </div>
                    {
                      productList.map((x) => {
                        let isExists = products.filter(y => x._id === y._id).length > 0;
                        return <div className="col-4 col-lg-4 col-md-4 " style={{ opacity: !isExists ? 1 : 0.5 }}>
                          <div className="snippet-cont fm-snippet">
                            <div className="text-center">
                              <div className="py-4">
                                <div className="upload-btn-img">
                                  <img src={`https://${x.attachments.bucket}.s3.ap-southeast-1.amazonaws.com/${x.attachments.key}`}
                                    className="img-thumbnail p-0 m-0"

                                    alt="icon" onClick={() => {
                                      if (!isExists) {
                                        let data = {
                                          "status": x.status,
                                          "shippingFee": x.shippingFee,
                                          "_id": x._id,
                                          "name": x.name,
                                          "descriptions": x.descriptions,
                                          "images": `https://${x.attachments.bucket}.s3.ap-southeast-1.amazonaws.com/${x.attachments.key}`,
                                          "attachments": x.attachments._id,
                                          "price": x.price,
                                          "user": x.user,
                                          "code": x.code,
                                          "currency": x.currency,
                                          "warehouse": x.warehouse._id,
                                          "dateCreated": x.dateCreated,
                                          "dateUpdated": x.dateUpdated,
                                          "quantity": x.warehouse.quantity,
                                          "purcharse": x.warehouse.purcharse,
                                          "remaining": x.warehouse.remaining
                                        }
                                        dispatch(selectExistingProduct(data));
                                      }
                                    }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      })

                    }
                  </> :
                  <span />
              }
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
                      <ul className="nav nav-tabs ">
                        <li className="active">
                          <a href="#tab_default_1" data-toggle="tab">
                            Invite guest</a>
                        </li>
                        <li>
                          <a href="#tab_default_2" data-toggle="tab">
                            Choose background </a>
                        </li>
                      </ul>
                      <div className="tab-content px-4">
                        <div className="tab-pane active" id="tab_default_1">
                          <div className="form-group col-lg-12 col-md-12 snippet-cont">
                            <div className="snippet-cont ">
                              <input type="text" className="form-control formbg searchiconspace" defaultValue="search" />
                              <a href="javascript:;" className="search-icon"><img src="../images/search-icon.svg" alt="icon" /></a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-lg-12 col-md-12">
                              <div className="row">
                                {
                                  followingUsers && followingUsers.map((item) => {
                                    return (
                                      <div key={item._id} className={guests.indexOf(item.follower._id) > -1 ? "col-1 col-lg-1 col-md-1 setupliveprofile active" : "col-1 col-lg-1 col-md-1 setupliveprofile"}>
                                        <div className="snippet-cont">
                                          <div className="text-center">
                                            {/* <div className="profile-dd w-75">
                                                <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                              </div> */}
                                            <a className="profile-dd" href="javascript:void()">
                                              <img onClick={() => {
                                                let index = guests.findIndex(x => x === item.follower._id);
                                                if (index > -1) {
                                                  let newGuests = guests;
                                                  newGuests.splice(index, 1);
                                                  setGuests(newGuests);
                                                }
                                                else {
                                                  setGuests([...guests, item.follower._id]);
                                                }
                                              }} className="img-fluid" src={Profilepic} alt="icon" />
                                            </a>
                                            <span className="profile-name">{item.follower.fullName}</span>
                                            {/* <span className="count">02</span> */}
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
                        <div className="tab-pane" id="tab_default_2">
                          <div className="row">
                            <div className="snippet-hdr">
                              <h3 className="logo mt-4 mb-4">Setup Live</h3>
                              <div className="hdr-right">
                                <span className="logo mt-4 mb-4 pl-2 text-grey"> + Add Image</span>
                                <span className="logo mt-4 mb-4 pl-2 text-grey">- Remove Image</span>
                              </div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4">
                              <div className="snippet-cont">
                                <div className="text-center">
                                  <div className="py-4">
                                    <div className="upload-btn-img">
                                      <img src={None} className="img-thumbnail p-0 m-0" alt="user profile image" />
                                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4 ">
                              <div className="snippet-cont">
                                <div className="text-center">
                                  <div className="py-4">
                                    <div className="upload-btn-img">
                                      <img src={Background} className="img-thumbnail p-0 m-0" alt="user profile image" />
                                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4">
                              <div className="snippet-cont">
                                <div className="text-center">
                                  <div className="py-4">
                                    <div className="upload-btn-img">
                                      <img src={Background2} className="img-thumbnail p-0 m-0" alt="user profile image" />
                                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4">
                              <div className="snippet-cont">
                                <div className="text-center">
                                  <div className="py-4">
                                    <div className="upload-btn-img">
                                      <img src={Background} className="img-thumbnail p-0 m-0" alt="user profile image" />
                                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-4 col-lg-2 col-md-4">
                              <div className="snippet-cont">
                                <div className="text-center">
                                  <div className="py-4">
                                    <div className="upload-btn-img">
                                      <img src={Background2} className="img-thumbnail p-0 m-0" alt="user profile image" />
                                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
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
              </div>
            </div>
            <div className="col-12 col-lg-12 col-md-12">
              <div className="snippet-cont py-4">
                <div className="text-center py-4 mb-4 ">
                  <button
                    onClick={(e) => {
                      if (validate()) {
                        handleCreateLiveStream()
                      }
                      else {
                        toastr.error("Fix all validation")
                      }
                    }}
                    className="btn btn-buynow btnpadding">
                    <img src="../images/live.svg" alt="icon" />
                    <span className="pl-2">Start Live !</span>
                  </button>
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
      </section>
    </div>
  );
}



