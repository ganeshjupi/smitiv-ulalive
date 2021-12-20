import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Analytic from "../../assets//images/ICON-ANALYTIC-H 1.png";
import B2C from "../../assets//images/ICON-B2C-H 1.png";
import Camera from "../../assets//images/ICON-CAMERA-H 1.png";
import Live from "../../assets//images/ICON-LIVE.png";
import Message from "../../assets//images/ICON-MESSAGE-H 1.png";
import Chat from "../../assets//images/ICON-message.png";
import Quantity from "../../assets//images/ICON-QUALITY.png";
import Upload from "../../assets//images/ICON-UPLOAD.png";
import { fetchPaymentConfigRequest, fetchPlansRequest } from "../../store/shopping/shopping.actions";
import { getPaymentConfig, getUpgradePlan } from "../../store/shopping/shopping.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateSubscriptionForm from "./createSubscription";
import { getUserProfile } from "../../store/user/user.selector";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { IsNullOrEmpty } from "../../helpers/utility";
import { getDeliveryAddressRequest } from "../../store/user/deliveryaddress/deliveryaddress.actions";
import { Redirect } from "react-router";
var stripePromise = null;

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
}

export default function CreateNewSubscription() {
    const dispatch = useDispatch();
    const [period, setPeriod] = useState("");
    const [message, setMessage] = useState("");
    const { plans, userProfile, paymentConfig } = useSelector((state) => {
        return {
            plans: getUpgradePlan(state),
            userProfile: getUserProfile(state),
            paymentConfig: getPaymentConfig(state)
        }
    })
    useEffect(() => {
        dispatch(fetchPlansRequest());
        dispatch(fetchPaymentConfigRequest());
        dispatch(getDeliveryAddressRequest());
    }, []);

    useEffect(() => {
        if (paymentConfig && paymentConfig.publicKey) {
            stripePromise = loadStripe(paymentConfig.publicKey);
        }
    }, [paymentConfig]);

    if (userProfile.role === "Pro") {
        return <Redirect to="/home" />
    }

    if (plans && plans.length === 0) {
        return <p />
    }

    return (
        <div>
            <section className="container-fluid">
                <Header />
                <div className="row">
                    <Sidebar />
                    <div className="col-lg-9 col-lg-9 col-md-9 col-12">
                        <div className="mt-4">
                            <div className="procenter">
                                <label className="switchpro">Pro</label>
                            </div>
                            <h3 className="text-bold text-center">Ulalive <span className="prolabel">PRO</span></h3>
                            <h3 className="text-bold  text-center">Enhance your all-in-one.</h3>
                            <p className="text-bold  text-center">An extension to your FREE account. PRO delivers you an advanced feature
                                <br /> that makes you stand out and create astonishing content</p>
                            <div className="text-center">
                                <button className="btn probutton btn-yellow  btnpadding" onClick={() => setPeriod("monthly")} >SGD {plans[0].monthlyAmount}/month</button>&nbsp;&nbsp;&nbsp;
                                <button className="btn probutton btn-yellow  btnpadding" onClick={() => setPeriod("yearly")}  >SGD {plans[0].yearlyAmount}/annum</button>
                                <p className="text-bold  text-center mt-4">Recurring billing. Cancel anytime.
                                </p>
                            </div>
                            {
                                IsNullOrEmpty(message) ? <span /> :
                                    <div className="alert alert-info" role="alert">
                                        Account Upgraded to PRO. Please login again.
                                    </div>
                            }
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="snippet-block ProBadge text-center my-4">
                                    <h3 className="mt-4">Official Pro Badge</h3>
                                    <p>Just like a verified badge so customer have full trust on you.</p>
                                    <img src={Quantity} alt="icon" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="snippet-block prolivestream text-center my-4">
                                    <h3 className="mt-4">Up to 4 hours live stream</h3>
                                    <p>Extension of your video streaming.</p>
                                    <img src={Live} alt="icon" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="snippet-block proupload text-center my-4">
                                    <h3 className="mt-4">Up to 3 product upload</h3>
                                    <p>Extra slots to showcase and sell products</p>
                                    <img src={Upload} alt="icon" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="snippet-block prochat text-center my-4">
                                    <h3 className="mt-4">Community chat room</h3>
                                    <p>Keep the engagement flowing with one-to-many public chatting</p>
                                    <img src={Chat} alt="icon" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="snippet-block probusiness text-center my-4">
                                    <h3 className="mt-4">Perfect for business owner</h3>
                                    <p>Suitable for all type of businesses, B2B and B2C</p>
                                    <img src={B2C} alt="icon" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="snippet-block prolivevideo text-center my-4">
                                    <h3 className="mt-4">Full HD 1080p live video</h3>
                                    <p>Hi-res video, adaptive bitrate, screen grab disable</p>
                                    <img src={Camera} alt="icon" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="snippet-block promessage text-center my-4">
                                    <h3 className="mt-4">Private direct message</h3>
                                    <p>Control who have the access to private message you</p>
                                    <img src={Message} alt="icon" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="snippet-block proanalytics text-center my-4">
                                    <h3 className="mt-4">Intuitive analytic report</h3>
                                    <p>Views, engagement and sales report in a beautiful chart</p>
                                    <img src={Analytic} alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                period ?
                    <Modal show={true}>
                        <Modal.Header>Pay Now
                            <i className="fa fa-close" onClick={() => setPeriod("")}></i>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                stripePromise ?
                                    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                                        <CreateSubscriptionForm OnSuccess={() => {
                                            setPeriod(false);
                                            setMessage("Success")
                                        }} userId={userProfile._id} billingPeriod={period} />
                                    </Elements> : <span />
                            }
                        </Modal.Body>
                    </Modal>
                    :
                    <></>
            }
        </div >
    );
}
