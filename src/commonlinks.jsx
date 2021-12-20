import React from "react";
import { Route, Switch } from "react-router-dom";
import AddNewCard from "./components/checkout/add_new_card";

import BuyerOrderToShip from "./components/order/buyer_order_to_ship";
import Cart from "./components/cart/cart";
import Seller from "./components/order/seller";

import Checkout from "./components/checkout/checkout";

import Help from "./components/help_and_support";
import Home from "./components/home";
import LandingPage from "./components/landing_page";

import Notification from "./components/notification/notification";
import ChatBox from "./components/notification/chat_box";
import Dashboard from "./components/dashboard";
import Message from "./components/notification/message";

import Profile from "./components/profile/profile";
import ProfileFollower from "./components/profile/profile_follower";
import ProfileFollowing from "./components/profile/profile_following";
import ProfileGuest from "./components/profile/profile_guest";
import ProfilePrivate from "./components/profile/profile_private";
import profileSubscriber from "./components/profile/profile_subscriber";
import EditProfile from "./components/profile/edit_profile";

import Refer from "./components/refer/refer";
import ReferInput from "./components/refer/refer_input";
import ReferSubmit from "./components/refer/refer_submit";

import DeliveryAddress from "./components/settings/DeliveryAddress";
import PrivateLounge from "./components/settings/PrivateLounge";
import ChangePassword from "./components/settings/ChangePassword";
import PrivacySetting from "./components/settings/PrivacySetting";
import AddBank from "./components/settings/AddBank";

import Livestream from "./components/livestream/livestream";
import LivestreamLeft from "./components/livestream/livestreamleft";
import SetupLiveMeeting from "./components/livestream/setuplive_meeting";
import SetupCopy from "./components/livestream/setup_copy";
import SetupLive from "./components/livestream/setup_live";
import SetupMeeting from "./components/livestream/setup_meeting";
import SetupPreview from "./components/livestream/setup_preview";
import CreateVipMeeting from "./components/livestream/create_vipmeeting";
import CreateVipCircle from "./components/livestream/create_vip_circle";
import VipMeeting from "./components/livestream/vipmeeting";

import SignIn from "./components/authentication/sign_in";
import SignUp from "./components/authentication/sign_up";
import Authentication from "./components/authentication/authentication";

import Favorties from "./components/favorites/favorites";
import Bookmark from "./components/favorites/bookmark";

import ProtectedRoute from "./helpers/PrivateRoute";
import Billing from "./components/settings/Billing";
import LivestreamEnded from "./components/livestream/livestream_ended";

class commonlinks extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/log_in" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/authentication" component={Authentication} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false} path="/home" component={Home} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/profile" component={Profile} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/edit_profile" component={EditProfile} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/profile_subscriber" component={profileSubscriber} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/profile_following" component={ProfileFollowing} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/profile_follower" component={ProfileFollower} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/favorties" component={Favorties} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/cart" component={Cart} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/order" component={BuyerOrderToShip} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/help_and_support" component={Help} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/refer_submit" component={ReferSubmit} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/refer_input" component={ReferInput} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/refer" component={Refer} />


        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/setuplive_copy" component={SetupCopy} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/setuplive_preview" component={SetupPreview} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/setuplive_meeting" component={SetupLiveMeeting} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/setuplive" component={SetupLive} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/setup_meeting" component={SetupMeeting} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/checkout" component={Checkout} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/create_vip_circle" component={CreateVipCircle} />


        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/profile_guest" component={ProfileGuest} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/livestream" component={Livestream} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/livestream-ended" component={LivestreamEnded} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/chat_box" component={ChatBox} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/add_new_card" component={AddNewCard} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/message" component={Message} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/private_profile" component={ProfilePrivate} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/vip_meeting" component={VipMeeting} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/create_vip_meeting" component={CreateVipMeeting} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/seller" component={Seller} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/delivery-address" component={DeliveryAddress} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/private-lounge-setting" component={PrivateLounge} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/change-password" component={ChangePassword} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/privacy-setting" component={PrivacySetting} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/payment-details" component={AddBank} />

        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/bookmark" component={Bookmark} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/billing" component={Billing} />
        <ProtectedRoute exact isAuthenticated={true} isVerifying={false}   path="/notification" component={Notification} />
      </Switch>
    );
  }
}

export default commonlinks;


