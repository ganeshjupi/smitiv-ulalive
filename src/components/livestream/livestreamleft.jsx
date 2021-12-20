import React from "react";
import seller from "../../assets/images/Live- seller view live.svg";
import Header from "./../common/topbar";
import guest from "../../assets/images/image 2.svg"

class LivestreamLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="container-fluid">
          {/* header Starts here */}
          <Header history={this.props.history} />
          {/* Mobile menu overlay Ends here */}
          {/* Left Wrap Ends here */}
          <div className="row">
            <div className="app-container">
              <div className="left-side">
                <div className="navigation">
                  <div className="shows">
                    <div className="img-show">
                      <span>X</span>
                      <img src className="imagebox" />
                      <hr />
                      <div className="text-left">
                        <h3 className="text-left"> Tree Decoration sale</h3>
                        <p className="text-danger">SGD 1.99</p>
                        <p>Condition: New Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                          officia consequat duis enim velit mollit</p>
                        <div className="quantity">
                          <a href="#" className="quantity__minus">-</a>
                          <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                          <a href="#" className="quantity__plus">+</a>
                        </div>
                        <div className="mt-4 mb-4 text-center">
                          <div className="row">
                            <div className="col-lg-4">
                              <button className="btn btn-green">
                                Google
                              </button>
                            </div>
                            <div className="col-lg-4">
                              <button className="btn btn-buynow">
                                Twitter
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End image popup*/}
                  <div className="popup">
                    <a href="#" className="nav-link icon  ">
                      <img className="img-fluid" src="../images/buy.svg" alt="icon" />
                    </a>
                  </div>
                  <div className="shows">
                    <div className="img-show">
                      <span>X</span>
                      <img src className="imagebox" />
                      <hr />
                      <div className="text-left">
                        <h3 className="text-left"> Tree Decoration sale</h3>
                        <p className="text-danger">SGD 1.99</p>
                        <p>Condition: New Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                          officia consequat duis enim velit mollit</p>
                        <div className="quantity">
                          <a href="#" className="quantity__minus">-</a>
                          <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                          <a href="#" className="quantity__plus">+</a>
                        </div>
                        <div className="mt-4 mb-4 text-center">
                          <div className="row">
                            <div className="col-lg-4">
                              <button className="btn btn-green">
                                Google
                              </button>
                            </div>
                            <div className="col-lg-4">
                              <button className="btn btn-buynow">
                                Twitter
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End image popup*/}
                  <div className="popup">
                    <a href="#" className="nav-link icon  ">
                      <img className="img-fluid" src="../images/buy.svg" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="app-main">
                <div className="video-call-wrapper">
                  <div className="video-participant1">
                    <img src={seller} className="video1" alt="participant" />
                  </div>
                  <div className="video-participant2">
                    <img src={seller} className="video2" alt="participant" />
                    <img src={seller} className="video3" alt="participant" />
                  </div>
                </div>
              </div>
              <div className="left-side">
                <div className="navigation">
                  <a href="#" className="nav-link icon text-center">
                    <img className="img-fluid " src={guest} alt="icon" />
                  </a>
                  <a href="#" className="nav-link icon text-center">
                    <img className="img-fluid " src={guest} alt="icon" />
                  </a>
                  <div className="list">
                    <div className="part-show">
                      <span>X</span>
                      <img src="../images/profile1.svg" />
                      <img src="../images/profile2.svg" />
                      <img src="../images/profile2.svg" />
                      <img src="../images/profile2.svg" />
                      <img src="../images/profile2.svg" />
                      <img src="../images/profile2.svg" />
                      <img src="../images/profile2.svg" />
                    </div>
                  </div>
                  {/*End image popup*/}
                  <div className="popups text-center">
                    <a href="#" className="nav-link icon  ">
                      <img className="img-fluid" src={guest} alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-side">
                <div className="chat-container">
                  <div className="chat-header">
                    <div className="row">
                      <div className="col-6 col-md-6 col-lg-6">
                        <div className="smallcardtopimage">
                          <img className="img-fluid imagesize " src={guest} alt="icon" data-toggle="modal" data-target="#delete-pop" />
                          <div className="name pl-2">
                            <h6 className="displaysingleline mb-2">Licoln Levin</h6>
                            <p className="text-left"> <img className="img-fluid text-left" src="../images/timer.svg" alt="icon" /></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-lg-6">
                        <div className="hdr-right">
                          <div className="name">
                            <button className="btn btn-buynow">
                              Live
                            </button>
                            <p className="mt-2"> <img className="img-fluid " src="../images/eye-icon.svg" alt="icon" /> 1920</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-bold mt-4" style={{ whiteSpace: 'nowrap' }}>Tree decoration Sale! Buy NOW $$$</p>
                  </div>
                  <div className="chat-area">
                    <div className="message-wrapper">
                      <div className="profile-picture">
                        <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp" />
                      </div>
                      <div className="message-content">
                        <div className="name info">
                          <p className="displaysingleline mb-2">Licoln Levin</p>
                          <span className="text-grey text-left mb-2">5 guest</span>
                        </div>
                      </div>
                    </div>
                    <p className="btnjoined">Robert Fox <span className="text-left pl-5"> Has left</span></p>
                    <div className="message-wrapper">
                      <div className="profile-picture">
                        <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp" />
                      </div>
                      <div className="message-content">
                        <div className="name info">
                          <p className="displaysingleline mb-2">Licoln Levin</p>
                          <span className="text-grey text-left mb-2">5 guest</span>
                        </div>
                      </div>
                    </div>
                    <div className="message-wrapper">
                      <div className="profile-picture">
                        <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp" />
                      </div>
                      <div className="message-content">
                        <div className="name info">
                          <p className="displaysingleline mb-2">Licoln Levin</p>
                          <span className="text-grey text-left mb-2">Lorem ipsum dolor sit amet, consectet</span>
                        </div>
                      </div>
                    </div>
                    <p className="btnleft">Robert Fox <span className="text-left pl-5"> Has left</span></p>
                    <div className="message-wrapper">
                      <div className="profile-picture">
                        <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp" />
                      </div>
                      <div className="message-content">
                        <div className="name info">
                          <p className="displaysingleline mb-2">Licoln Levin</p>
                          <span className="text-grey text-left mb-2">5 guest</span>
                        </div>
                      </div>
                    </div>
                    <div className="video-call-actions ">
                      <button className="btn btn-buynow">#save</button>
                      <button className="btn btn-green ml-2">#hype</button>
                      <button className="btn btn-yellow ml-2">#sale</button>
                      <button className="btn btn-buynow ml-2">Leave</button>
                    </div>
                  </div>
                </div>
                <div className="message-footer mt-2">
                  <div className="snippet-cont  mt-2">
                    <img className="off smiley" src="../images/smiley.svg" alt="icon" />
                    <input type="text" className="form-control bg-grey  pl-4" name defaultValue="comment here" />
                    <div className="dropdown action-dmenu verticallink">
                      <button className="btn-transparent dropdown-toggle" data-toggle="dropdown">
                        <img className="img-fluid datatoogleimage" src="../images/dots-vertical-rounded 1.svg" alt="icon" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item action-wrap" href="javascript:;" data-toggle="modal" data-target="#delete-pop"><img className="img-fluid mt-0" src="../images/delete 1.svg" alt="icon" />Delete</a>
                        <a className="dropdown-item" href="javascript:;"> <img className="img-fluid mt-0" src="../images/share 1.svg" alt="icon" />Share</a>
                      </div>
                    </div>
                  </div>
                  <img className="off pl-2 mt-2" src="../images/Group 7388.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div className="video-call-actions bg-grey mt-2 w-100">
              <button className="video-action-button magnifier" />
              <button className="video-action-button mic" />
              <button className="video-action-button camera" />
              <button className="video-action-button maximize" />
              <button className="video-action-button endcall" />
              {/* <button className="video-action-button magnifier">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-zoom-in" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
      </svg>
      <span>100%</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-zoom-out">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
      </button> */}
            </div>
          </div>
          <div className="modal fade show" id="delete-pop" aria-modal="true" role="dialog" style={{ display: 'block', paddingRight: '17px', background: 'black', opacity: '0.9' }}>
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content profileimagepopup">
                <button type="button" className="close" data-dismiss="modal">
                  <img src="../images/close-ico.svg" alt="icon" />
                </button>
                <div className="modal-body text-center p-3 p-md-5">
                  <img src="../images/recprofilepic.svg" className="w-50" alt="icon" />
                </div>
              </div>
              <div className="overlay" />
            </div>
          </div>
          {/* MainSection Ends here */}
          {/* <div className="modal fade" id="delete-pop">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content profileimagepopup">
    <button type="button" className="close" data-dismiss="modal">
      <img src="../images/close-ico.svg" alt="icon">
    </button>
   Modal body Starts here
    <div className="modal-body text-center p-3 p-md-5">
      <img src="../images/recprofilepic.svg" className="w-50" alt="icon">
    </div>
  </div>
</div>
    </div> */}
        </section>

      </div>
    );
  }
}

export default LivestreamLeft;
