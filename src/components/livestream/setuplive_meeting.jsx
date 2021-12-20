import React from "react";
import Background from "../../assets/images/background.svg";
import Background2 from "../../assets/images/background2.svg";
import Copied from "../../assets/images/copied.svg";
import Live from "../../assets/images/live.svg";
import None from "../../assets/images/none.svg";
import Profilepic from "../../assets/images/profilepic.svg";
import Header from "../common/topbar";
require("dotenv").config();

class SetupLiveMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
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

                <label className="logo text-bold mt-4">Setup Live</label>
                <div className="snippet-hdr">
                  <label className="logo mt-2 mb-2 text-bold">Meeting Room</label>
                </div>
                <div className="snippet-cont py-4">
                  <input type="text" className="form-control bg-grey" name placeholder="Title" />
                </div>
                <div className="snippet-cont py-4 ">
                  <textarea type="Date" className="form-control h-25 " rows={4} name placeholder="Describe the live" defaultValue={""} />
                </div>
                <div className="text-center py-4 mb-4">
                  <button className="btn btn-buynow w-100"> <img src="../images/live.svg" alt="icon" /><span className="pl-2">Start Live !</span></button>
                </div>
                <div className="snippet-hdr">
                  <label className="logo mt-2 mb-2 text-bold">Schedule live for later</label>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-6">

                      <label className="text-bold">When</label>
                      <div className="snippet-cont">
                        <select className="form-control selectpicker">
                          <option>7</option>
                          <option>15</option>
                          <option>20</option>
                          <option>25</option>
                        </select>
                      </div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-6 ">
                      <div className="form-group">

                        <label className="text-bold">Time</label>
                        <div className="snippet-cont">
                          <select className="form-control selectpicker w-100">
                            <option>7</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                          </select>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-outline-grey w-100 text-grey"> <img src={Live} alt="icon" />Create scheadule live</button>
                  </div>
                </div>
                <div className="snippet-cont form-group sharelink">
                  <label className="text-bold">Share invitation link</label>
                  <img className="off mt-3" src={Copied} alt="icon" />
                  <textarea type="Date" className="form-control  bg-grey h-25 linkpadding" rows={2} cols={40} name placeholder={process.env.REACT_APP_URL + "/vip/asdhjk/asdakj/12312"} defaultValue={""} />


                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9 col-md-9 mt-4 mb-4">
              <div className="snippet-block">
                <div className="snippet-cont fm-snippet livestream bg-grey">

                  <div className="text-center margintop">
                    <div className="upload-btn-img">
                      <img src="../images/cam.svg" className="img-thumbnail p-0 m-0 h-25" alt="user profile image" />
                      <p>Turn on your camera to let the viewers see you</p>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">

                    <div className="tabbable-panel">
                      <div className="tabbable-line">
                        <ul className="nav nav-tabs ">
                          <li className="active">
                            <a href="#tab_default_1" data-toggle="tab">
                              Invite guest </a>
                          </li>
                          <li>
                            <a href="#tab_default_2" data-toggle="tab">
                              Choose background</a>
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
                                  <div className="col-1 col-lg-1 col-md-1  setupliveprofile active">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                        <span className="count">02</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 col-lg-1 col-md-1 setupliveprofile">
                                    <div className="snippet-cont">
                                      <div className="text-center">
                                        {/* <div className="profile-dd w-75">
                                        <img className="img-fluid" src="../images/avatar-thumb.jpg" alt="icon">
                                      </div> */}
                                        <a href="javascript:;" className="profile-dd">
                                          <img className="img-fluid" src={Profilepic} alt="icon" />
                                        </a>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
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


              {/* MainSection Ends here */}
            </div></div></section>

      </div>
    );
  }
}

export default SetupLiveMeeting;


