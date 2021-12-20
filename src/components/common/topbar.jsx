import React, { useEffect, useState } from "react";
import { useGoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets//images/logo.svg";
import BurgerIcon from "../../assets//images/navtoggle.png";
import SearchIcon from "../../assets//images/search-icon.svg";
import Topmail from "../../assets//images/topmail.svg";
import { clearToken } from "../../helpers/utility";
import { getNotificationList } from "../../store/notification/notification.selector";
import { getProfileImage, getUserProfile } from "../../store/user/user.selector";
import $ from "jquery";

require('dotenv').config();
const clientId = process.env.REACT_APP_GOOGLE_ID;
function Header() {
  const dispatch = useDispatch();
  const [menuNo, setMenuNo] = useState(0);

  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  const { userProfile, notifications, profileImage } = useSelector((state) => {
    return {
      userProfile: getUserProfile(state),
      notifications: getNotificationList(state),
      profileImage: getProfileImage(state)
    }
  });

  const handleLogout = () => {
    clearToken();
    signOut();
    document.location.href = "/";
  }

  useEffect(() =>
  {
    $(document).ready(function () {
      $(".left-menu .has-sub").click(function () {
        $(".left-menu li a").removeClass("active");
        $(this).addClass("active");
        $(".left-menu li a:not(.active)").siblings(".sub-menu").slideUp();
        $(this).siblings(".sub-menu").slideToggle();
      });
      $(".left-menu .sub-menu li a").click(function () {
        $(".left-menu .sub-menu li a").removeClass("active");
        $(this).addClass("active");
      });
      $(".menu-btn").click(function () {
        $("body").addClass("overflow-hidden");
        $(".left-wrap").addClass("show");
      })
      $(".mob-menu-overlay").click(function () {
        $(".left-wrap").removeClass("show");
        $("body").removeClass("overflow-hidden");
      });
    });
  })

  return (
    <header className="row left-hdr commonpage">
      <div className="col-md-12 lft-wrap">
        <div className="mob-hdr-lft d-flex d-md-none">
          <div className="menu-btn">
            <img className="img-fluid" src={BurgerIcon} alt="icon" />
          </div>
        </div>
        <div className="nav-brand">
          <Link to="/home">
            <img className="img-fluid" src={Logo} alt="Logo" />
          </Link>
        </div>
        <form className="form-inline">
          <div className="form-group position-relative">
            <input
              type="text"
              className="form-control search-input"
              name
              placeholder="Search..."
            />
            <a href="javascript:;" className="search-icon">
              <img src={SearchIcon} alt="icon" />
            </a>
          </div>
        </form>
        <div className="hdr-right">
          <Link to="/notification" className="hdr-icon ">
            <i className="fa fa-bell iconcolor"></i>
            <span className="count">{notifications.countUnread}</span>
          </Link>
          <Link to="/chat_box" className="hdr-icon">
            <img
              className="img-fluid"
              src={Topmail}
              alt="icon"
            />
          </Link>
          <Link to="/message" className="hdr-icon">
            <i className="fa fa-envelope iconcolor"></i>
          </Link>


          <div className="dropdown notification">
            <a href="javascript:;" className="hdr-icon dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              <i className="fa fa-cog iconcolor"></i>

            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">

              <ul className="left-menu list-unstyled">
                <li>
                  <Link to="/delivery-address" className="action-wrap settingicon" >
                    My Address
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </Link>
                </li>
                <li >
                  <Link to="/private-lounge-setting" className="action-wrap settingicon">
                    Subscription
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </Link>
                </li>
                <li >
                  <Link to="/change-password" className="action-wrap settingicon" >
                    Change password
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </Link>
                </li>
                <li >
                  <Link to="/privacy-setting" className="action-wrap settingicon" >
                    Privacy setting
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </Link>
                </li>
                <li >
                  <Link to="/payment-details" className="action-wrap settingicon">
                    Accounts
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </Link>
                </li>
                <li >
                  <Link to="/billing" className="action-wrap settingicon">
                    Billing
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </Link>
                </li>
                <li>
                  <Link to="javascript:;" onClick={() => handleLogout()} className="action-wrap settingicon" data-toggle="modal" data-target="#delete-pop">
                    Logout
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-dd">
            <img src={profileImage} className="img-fluid" alt="user profile image" />
          </div>
          <div className="ml-2">
            <span>{userProfile.fullName}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
