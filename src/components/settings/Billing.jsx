import React, { useEffect } from "react";
import Header from "../common/topbar";
import DownArrow from "../../assets/images/downarrow.svg";
import Sidebar from "../common/sidebar";
import { fetchUserProfileRequest } from "../../store/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { getProfileImage, getUserProfile } from "../../store/user/user.selector";
import moment from "moment";

export default function Billing() {
    const dispatch = useDispatch();

    const { userProfile, profileImage } = useSelector((state) => {
        return {
            userProfile: getUserProfile(state),
            profileImage: getProfileImage(state),
        }
    });

    useEffect(() => {
        dispatch(fetchUserProfileRequest({}));
    }, []);


    return (
        <div>
            <div>
                <section className="container-fluid">
                    <Header />
                    <div className="row">
                        <Sidebar />


                        <div className="col-lg-9 col-md-9 col-12 settingborder mb-4 heigthfixing">
                            <h3 className="text-bold mt-4">My billing</h3>


                            <div className="row">
                                <div className="col-6 col-lg-6 col-md-6">
                                    <div className="form-group ">
                                        <label className="text-bold mt-4">plan</label>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-6 col-md-6 mt-4">
                                    <div className="hdr-right">
                                        <img src={DownArrow} alt="icon" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="btn-padding mt-1 mb-4">
                                    <a href="#" className="prowidth">

                                        <span className="ml-2">{userProfile.role}</span>
                                    </a>

                                </div>

                                <p>$29/month<br />
                                    Renew on {moment(userProfile.roleTimeExpired).format("LL")}<br />
                                    Subscriber since {moment(userProfile.dateCreated).format("LL")}</p>
                            </div>

                            <span className="lineseperater mt-4"></span>
                            <div className="row">
                                <div className="col-6 col-lg-6 col-md-6">
                                    <div className="form-group ">
                                        <label className="text-bold">Primary payment method</label>
                                    </div>
                                </div>

                            </div>
                            <form >

                                <div className="row">
                                    <div className="col-md-4 form-group search-input">
                                        <label className="text-bold">xxxxxxxxxx</label>
                                    </div>
                                </div>

                                <a href="javascript:;" className="forgot-pass">update</a>
                            </form>


                            <span className="lineseperater mt-4"></span>

                            <form >


                                <div className="row mt-2">
                                    <div className="col-md-3 form-group search-input">
                                        <label className="text-bold">Backup payment method</label>
                                        <span>None</span>

                                    </div>
                                    <div className="col-md-3 form-group search-input">
                                        <label className="text-bold">Expiry date</label>
                                        <div className="input-group">

                                            <span>None</span>
                                        </div>

                                    </div>
                                    <div className="col-md-3 form-group">
                                        <label className="text-bold">CCV</label>
                                        <div className="input-group">

                                            <span>None</span>
                                        </div>
                                    </div>




                                </div>

                                <a href="javascript:;" className="forgot-pass">Setup</a>
                            </form>
                            <span className="lineseperater mt-4"></span>

                            <a href="javascript:;" className="text-danger" data-toggle="modal" data-target="#forgot-password">Cancel subscription</a>
                        </div>
                    </div>
                </section>
                <div className="modal" tabindex="-1" role="dialog" id="forgot-password">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cancel subscription?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb-4 ">
                                    <label className="text-bold mt-4">
                                        Your subscription will be cancel at the end of your billing period on 21 December 2021, 3:14 PM.

                                        You can change your mind anytime before this date.
                                    </label>


                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn text-danger">Cancel subscription</button>
                                <button type="button" className="btn forgot-pass" data-dismiss="modal">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
