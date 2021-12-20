import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import toastr from "toastr";
import Copied from "../../assets//images/copied.svg";
import whiteCopied from "../../assets//images/whitecopied.svg";
import { IsNullOrEmpty } from "../../helpers/utility";
import { addReferralCodeRequest } from "../../store/user/user.actions";
import { getUserProfile } from "../../store/user/user.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
require("dotenv").config();

export default function Refer() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [referCode, setReferCode] = useState("");
    const { user } = useSelector((state) => {
        return {
            user: getUserProfile(state)
        }
    });

    useEffect(()=>{
      let qs =  new URLSearchParams(location.search);
      if(qs.get("ref")){
        setReferCode(qs.get("ref"));
      }
    },[])

    function copyToClipboard() {
        /* Get the text field */
        var copyText = document.getElementById("myInput");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        toastr.success("Copied the refferal code", "Copied to Clipboard");
    }
    return (
        <div>
            <section className="container-fluid">
                <Header />
                <div className="row">
                    <Sidebar />
                    <div className="col-lg-9 col-md-9 col-12 mt-4 heigthfixing">
                        <div className="snippet-block  my-4">
                            <h3 className="text-center text-bold mt-4">Invite your friends to Ulalive</h3>
                            <div className="text-center">
                                <img src="../images/surface1.svg" className="active code mt-2" />
                                <div className="text-center ">
                                    <span className="text-center">Get a FREE PRO account for 14 days when you invite a friend
                                        to sign up for Ulalive. <br />Your referred friend will enjoy it too! <br />*No referral limit.</span>
                                    <p className="mt-4">Your referral code</p>
                                    <button className="btn btn-yellow btnpadding ">
                                        {user.refCode}
                                    </button>
                                    <div className="snippet-cont form-group sharelink refercontent">
                                        <label className="logo mt-4 text-bold">Share invitation link</label>
                                        <img className="off mt-4" src={Copied} alt="icon" onClick={() => copyToClipboard("myInput")} />
                                        <input type="text" readOnly id="myInput" className="form-control mt-0 " value={process.env.REACT_APP_URL + "/refer?ref=" + user.refCode} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="snippet-block  my-4">
                            <h3 className="text-center text-bold mt-4">Key in referral code</h3>
                            <div className="text-center">
                                <img src="../images/coupen1.svg" className="mt-2" />
                                <div className="text-center refercontent">
                                    <span className="text-center">Enjoy FREE PRO account when you get <br />invited by your friends.</span>
                                    <p className="mt-4">*Referral code is limited to registration of one (1) PRO account only.</p>
                                </div>
                                <div className="snippet-cont form-group refercontent">
                                    <input type="text" value={referCode} onChange={(e) => setReferCode(e.target.value)} className="btn-outline-grey btninput mt-0  " name placeholder="Enter Code" />
                                </div>
                                <div className="mt-4 mb-4">
                                    <button className="btn btn-outline-grey btnpadding">Cancel</button>
                                    <button disabled={IsNullOrEmpty(referCode)} className="btn btn-yellow  btnpadding ml-4" onClick={() => dispatch(addReferralCodeRequest(referCode))}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


