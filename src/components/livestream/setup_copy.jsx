import React from "react";
import ThumbLine from "../../assets/images/thumbline.svg"
import Add from "../../assets/images/add.svg"
import Profilepic from "../../assets/images/profilepic.svg"
import Cam from "../../assets/images/cam.svg"
import AvatarThumb from "../../assets/images/avatar-thumb.jpg"
import None from "../../assets/images/none.svg"
import Background from "../../assets/images/background.svg"

class SetupCopy extends React.Component {
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
  history={this.props.history}
  <div className="row">
    {/* Mobile menu overlay Ends here */}
    {/* Left Wrap Ends here */}
    <div className="col-lg-12 col-md-12 col-12">
      <div className="row">
        <div className="col-3 col-lg-3 col-md-3 left-wrap">
          <h3 className="logo mt-4 mb-4">Setup Live</h3>
          <div className="snippet-cont">
            <input type="text" className="form-control bg-grey" name defaultValue="Antran" />
          </div>
          <div className="snippet-cont py-4 ">
            <textarea type="Date" className="form-control h-25 " rows={4} name value="20-Nov-21" defaultValue={""} />
          </div>
          <div className="snippet-cont fm-dotborder py-4">
            <div className="text-center">
              <div className="py-4">
                <div className="upload-btn-img">
                  <img src={ThumbLine} className="img-thumbnail p-0 m-0" alt="user profile image" />
                  <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
                </div>
              </div>
            </div>
          </div>
          <div className="snippet-hdr">
            <h3 className="logo mt-4 mb-4">Setup Live</h3>
            <div className="hdr-right">
              <a className="logo mt-4 mb-4 text-grey">Edit Item</a>
            </div>
          </div>
          <div className="snippet-hdr">
            <h3 className="logo mt-4 mb-4">Setup Live</h3>
            <div className="hdr-right">
              <a className="logo mt-4 mb-4 text-grey">Edit Item</a>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-lg-4 col-md-4 ">
              <div className="snippet-cont fm-snippet">
                <div className="text-center">
                  <div className="py-4">
                    <div className="upload-btn-img">
                      <img src={Add} className="img-thumbnail p-0 m-0" alt="user profile image" />
                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
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
                      <img src={Add} className="img-thumbnail p-0 m-0" alt="user profile image" />
                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
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
                      <img src={Add} className="img-thumbnail p-0 m-0" alt="user profile image" />
                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
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
                      <img src={Add} className="img-thumbnail p-0 m-0" alt="user profile image" />
                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
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
                      <img src={Add} className="img-thumbnail p-0 m-0" alt="user profile image" />
                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
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
                      <img src={Add} className="img-thumbnail p-0 m-0" alt="user profile image" />
                      <input type="file" name="myfile[]" onchange="showThumbnail(this)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-9 col-md-9 mt-4 mb-4">
          <div className="snippet-block">
            <div className="snippet-cont fm-snippet livestream bg-grey">
              <div className="title mt-4">
                <img src={Profilepic} className="w-10" alt="icon" />
                <span className="pro">Pro</span>
              </div>
              <div className="text-center">
                <div className="upload-btn-img">
                  <img src={Cam} className="img-thumbnail p-0 m-0 h-25" alt="user profile image" />
                  <p>Turn on your camera to let the viewers see you</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="tabbable-panel">
                    <div className="tabbable-line">
                      <ul className="nav nav-tabs ">
                        <li className="active">
                          <a href="#tab_default_1" data-toggle="tab">
                            Company or Individual </a>
                        </li>
                        <li>
                          <a href="#tab_default_2" data-toggle="tab">
                            Report title &amp; Category </a>
                        </li>
                      </ul>
                      <div className="tab-content px-4">
                        <div className="tab-pane active" id="tab_default_1">
                          <form>
                            <div className="form-group position-relative">
                              <input type="text" className="form-control " name placeholder="Search..." />
                            </div>
                          </form>
                          <div className="row">
                            <div className="col-12 col-lg-12 col-md-12">
                              <div className="row">
                                <div className="col-2 col-lg-2 col-md-2 ">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Kathryn Murphy</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2 opacity-50">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2 opacity-50">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2 opacity-50">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2 opacity-50">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-2 col-lg-2 col-md-2">
                                  <div className="snippet-cont">
                                    <div className="text-center">
                                      <div className="py-4">
                                        <div className="profile-dd w-75">
                                          <img className="img-fluid" src={AvatarThumb} alt="icon" />
                                        </div>
                                        <span>Cody Fisher</span>
                                      </div>
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
                            <div className="col-2 col-lg-2 col-md-2">
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
                            <div className="col-2 col-lg-2 col-md-2 ">
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
                            <div className="col-2 col-lg-2 col-md-2">
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
                            <div className="col-2 col-lg-2 col-md-2">
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
                            <div className="col-2 col-lg-2 col-md-2">
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

export default SetupCopy;


