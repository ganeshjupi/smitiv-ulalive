import React from "react";
import Header from "../common/topbar";
import Sidebar from "../common/sidebar";

import CardPic from "../../assets//images/cardpic.svg"
import Timer from "../../assets//images/timer.svg"
import Show from "../../assets//images/Show.svg"
import Chat from "../../assets//images/chat.svg"

class ProfileGuest extends React.Component {
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
                        <Sidebar history={this.props.history} />
                        {/* Mobile menu overlay Starts here */}
              
                        {/* Mobile menu overlay Ends here */}
                        {/* Left Wrap Ends here */}
                        <div className="col-lg-9 col-lg-9 col-md-9 col-12">
                            <div className="col-12  mt-4">
                                <div className="col-md-12 profile-blk">
                                    <div className="row">
                                        <div className="col-6 col-lg-6 col-md-6">
                                            <div className="title mt-4">
                                                <img src="../images/profilepic.svg" className="w-10 mb-2" alt="icon" data-toggle="modal" data-target="#delete-pop" />
                                                <span className="pro">Pro</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6 col-md-6 mt-4">
                                            <div className="text-right buttonwidth">
                                                <button className="btn btn-yellow btnpadding mb-2" data-toggle="modal" data-target="#follow">Follow</button>
                                                <button className="btn btn-yellow btnpadding mb-2 ml-2" data-toggle="modal" data-target="#subscribe">Subscribe</button>
                                                <button className="btn btn-outline-black btnpadding display mb-2 ml-2"><img src="../images/chat.svg" />chat</button>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="profileheading mt-4">Jane Doe</h3>
                                    <p className="text-grey">@Jane_Doe12</p>
                                    <p className="profiledetail">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official
                                        consequat duis enim velit mollit uuuuuu uuuuuuuuu uuuuuuuuuuu</p>
                                    <p className="text-grey mb-0 flex profilesetting" onClick={() => this.props.history.push('/profile_subscriber')}>
                                        <span className="text-bold flex">500 <p className="text-grey ml-2 ">Followers</p></span>
                                        <span className="text-bold flex">35 <p className="text-grey ml-2">Following</p></span>
                                        <span className="text-bold flex">35K<p className="text-grey ml-2"> Subscribers</p></span>
                                    </p>
                                    <hr />
                                    <div className="row ">
                                        <div className="col-lg-3 col-md-3 col-3">
                                            <a href="phone-sign-up.html" className="nav-link mainNavItemChild active">Public hall</a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-3  ">
                                            <a href="Email-sign-up.html" className="nav-link mainNavItemChild ">Private lounge</a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-3  ">
                                            <a href="Email-sign-up.html" className="nav-link mainNavItemChild ">Meeting room</a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-3  ">
                                            <a href="Email-sign-up.html" className="nav-link mainNavItemChild ">VIP circle</a>
                                        </div>
                                    </div>

                                    
                                    <div className="row mb-4">

                                        <div className="col-lg-4 col-md-12 col-12 mt-4">
                                            <div className="snippet-block">
                                                <div className="card">
                                                    {/* Top Section of Card */}
                                                    <div className="card-top smallcardtop">

                                                        <div className="playbutton">
                                                            <img src={CardPic} alt="icon" />
                                                            <p className="text-center text-bold">Jane Doe</p>
                                                        </div>
                                                    </div>
                                                    {/* Bottom Section of Card */}
                                                    <div className="bottom">
                                                        <div className="cardtopimage mt-4">
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold  text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                        </div>

                                                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, autem.
                                                        </p>
                                                        <div className="smallcardtopimage">
                                                            <div className="smallimagebutton">
                                                                <img src={Timer} alt="icon" />
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Show} alt="icon" />
                                                                <span className="text-center mt-1">1920</span>
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Chat} alt="icon" />
                                                                <span className="text-center mt-1">200</span>
                                                            </div>
                                                            <div className="smallcardtopimage ">
                                                                <label className="text-right text-gray">5 Min ago</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-12 mt-4">
                                            <div className="snippet-block">
                                                <div className="card">
                                                    {/* Top Section of Card */}
                                                    <div className="card-top smallcardtop">

                                                        <div className="playbutton">
                                                            <img src={CardPic} alt="icon" />
                                                            <p className="text-center text-bold">Jane Doe</p>
                                                        </div>
                                                    </div>
                                                    {/* Bottom Section of Card */}
                                                    <div className="bottom">
                                                        <div className="cardtopimage mt-4">
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold  text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                        </div>

                                                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, autem.
                                                        </p>
                                                        <div className="smallcardtopimage">
                                                            <div className="smallimagebutton">
                                                                <img src={Timer} alt="icon" />
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Show} alt="icon" />
                                                                <span className="text-center mt-1">1920</span>
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Chat} alt="icon" />
                                                                <span className="text-center mt-1">200</span>
                                                            </div>
                                                            <div className="smallcardtopimage ">
                                                                <label className="text-right text-gray">5 Min ago</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-12 mt-4">
                                            <div className="snippet-block">
                                                <div className="card">
                                                    {/* Top Section of Card */}
                                                    <div className="card-top smallcardtop">

                                                        <div className="playbutton">
                                                            <img src={CardPic} alt="icon" />
                                                            <p className="text-center text-bold">Jane Doe</p>
                                                        </div>
                                                    </div>
                                                    {/* Bottom Section of Card */}
                                                    <div className="bottom">
                                                        <div className="cardtopimage mt-4">
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold  text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                        </div>

                                                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, autem.
                                                        </p>
                                                        <div className="smallcardtopimage">
                                                            <div className="smallimagebutton">
                                                                <img src={Timer} alt="icon" />
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Show} alt="icon" />
                                                                <span className="text-center mt-1">1920</span>
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Chat} alt="icon" />
                                                                <span className="text-center mt-1">200</span>
                                                            </div>
                                                            <div className="smallcardtopimage ">
                                                                <label className="text-right text-gray">5 Min ago</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-12 mt-4">
                                            <div className="snippet-block">
                                                <div className="card">
                                                    {/* Top Section of Card */}
                                                    <div className="card-top smallcardtop">

                                                        <div className="playbutton">
                                                            <img src={CardPic} alt="icon" />
                                                            <p className="text-center text-bold">Jane Doe</p>
                                                        </div>
                                                    </div>
                                                    {/* Bottom Section of Card */}
                                                    <div className="bottom">
                                                        <div className="cardtopimage mt-4">
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold  text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                        </div>

                                                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, autem.
                                                        </p>
                                                        <div className="smallcardtopimage">
                                                            <div className="smallimagebutton">
                                                                <img src={Timer} alt="icon" />
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Show} alt="icon" />
                                                                <span className="text-center mt-1">1920</span>
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Chat} alt="icon" />
                                                                <span className="text-center mt-1">200</span>
                                                            </div>
                                                            <div className="smallcardtopimage ">
                                                                <label className="text-right text-gray">5 Min ago</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-12 mt-4">
                                            <div className="snippet-block">
                                                <div className="card">
                                                    {/* Top Section of Card */}
                                                    <div className="card-top smallcardtop">

                                                        <div className="playbutton">
                                                            <img src={CardPic} alt="icon" />
                                                            <p className="text-center text-bold">Jane Doe</p>
                                                        </div>
                                                    </div>
                                                    {/* Bottom Section of Card */}
                                                    <div className="bottom">
                                                        <div className="cardtopimage mt-4">
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold  text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                        </div>

                                                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, autem.
                                                        </p>
                                                        <div className="smallcardtopimage">
                                                            <div className="smallimagebutton">
                                                                <img src={Timer} alt="icon" />
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Show} alt="icon" />
                                                                <span className="text-center mt-1">1920</span>
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Chat} alt="icon" />
                                                                <span className="text-center mt-1">200</span>
                                                            </div>
                                                            <div className="smallcardtopimage ">
                                                                <label className="text-right text-gray">5 Min ago</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-12 mt-4">
                                            <div className="snippet-block">
                                                <div className="card">
                                                    {/* Top Section of Card */}
                                                    <div className="card-top smallcardtop">

                                                        <div className="playbutton">
                                                            <img src={CardPic} alt="icon" />
                                                            <p className="text-center text-bold">Jane Doe</p>
                                                        </div>
                                                    </div>
                                                    {/* Bottom Section of Card */}
                                                    <div className="bottom">
                                                        <div className="cardtopimage mt-4">
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold  text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                            <div className="smallimagebutton">
                                                                <img src={CardPic} alt="icon" />
                                                                <span className="text-bold text-center">Jane Doe</span>
                                                            </div>
                                                        </div>

                                                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, autem.
                                                        </p>
                                                        <div className="smallcardtopimage">
                                                            <div className="smallimagebutton">
                                                                <img src={Timer} alt="icon" />
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Show} alt="icon" />
                                                                <span className="text-center mt-1">1920</span>
                                                            </div>
                                                            <div className="smallcardtopimage">
                                                                <img src={Chat} alt="icon" />
                                                                <span className="text-center mt-1">200</span>
                                                            </div>
                                                            <div className="smallcardtopimage ">
                                                                <label className="text-right text-gray">5 Min ago</label>
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

                    <div className="modal fade" id="subscribe">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content modalbox">
                                <button type="button" className="close" data-dismiss="modal">
                                    <img src="../images/close-ico.svg" alt="icon" />
                                </button>
                                {/* Modal body Starts here */}
                                <div className="modal-body  text-center p-3 p-md-5">
                                    <h3 className="title-modal">Unable to subscribe. [User’s name] has not set up subscription fee yet</h3>
                                    {/* <p className="fs-14 mt-4">Are you sure you want to remove the document?</p> */}
                                    <div className="col-md-12 mt-4 text-center">
                                        <button className="btn btn-yellow w-50">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="delete-pop">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content profileimagepopup">
                                <button type="button" className="close" data-dismiss="modal">
                                    <img src="../images/close-ico.svg" alt="icon" />
                                </button>
                                {/* Modal body Starts here */}
                                <div className="modal-body text-center p-3 p-md-5">
                                    <img src="../images/recprofilepic.svg" className="w-50" alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="follow">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content modalbox">
                                <button type="button" className="close" data-dismiss="modal">
                                    <img src="../images/close-ico.svg" alt="icon" />
                                </button>
                                {/* Modal body Starts here */}
                                <div className="modal-body  text-center p-3 p-md-5">
                                    <h3 className="title-modal">This function is only supported in Malaysia and Singapore</h3>
                                    {/* <p className="fs-14 mt-4">Are you sure you want to remove the document?</p> */}
                                    <div className="col-md-12 mt-4 text-center">
                                        <button className="btn btn-yellow w-50">OK</button>
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
}

export default ProfileGuest;


