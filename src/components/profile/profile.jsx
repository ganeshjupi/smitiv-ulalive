import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCategoryRequest } from "../../store/shopping/shopping.actions";
import { getCategoryList } from "../../store/shopping/shopping.selector";
import { fetchLiveStreamRequest } from "../../store/social/social.actions";
import NoImage from "../../assets/images/no-image.png";
import { getLiveStreams } from "../../store/social/social.selector";
import { fetchUserProfileRequest } from "../../store/user/user.actions";
import { getProfileImage, getUserProfile } from "../../store/user/user.selector";
import LiveStreamCard from "../common/liveStreamCard";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";

function Profile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [selectedCategory, setSelectedCategory] = useState("");

    const { userProfile, categories, profileImage, liveStreams } = useSelector((state) => {
        return {
            userProfile: getUserProfile(state),
            categories: getCategoryList(state),
            profileImage: getProfileImage(state),
            liveStreams: getLiveStreams(state)
        }
    });

    useEffect(() => {
        if (categories.length > 0 && selectedCategory === "") {
            setSelectedCategory(categories[0]._id)
        }
    }, [categories])


    useEffect(() => {
        dispatch(fetchUserProfileRequest({}));
        dispatch(fetchLiveStreamRequest());
        dispatch(getCategoryRequest());
    }, []);

    return (
        <div>
            <section className="container-fluid">
                <Header history={history} />
                <div className="row">
                    <Sidebar history={history} />
                    <div className="col-lg-9 col-lg-9 col-md-9 col-12 heigthfixing">
                        <div className="profile-blk">
                            <div className="title mt-4" onClick={() => history.push('/edit_profile')} >
                                <img src={profileImage} className="w-10 imageborder" alt="user profile image" />
                                <span className="pro">{userProfile.role}</span>
                                <div className="hdr-right">
                                    <button className="btn btn-outline-black">Edit Profile</button>
                                </div>
                            </div>
                            <h3 className="profileheading mt-4">{userProfile.fullName}</h3>
                            <p className="text-grey">@{userProfile.account.userName}</p>
                            <p className="profiledetail">{userProfile.descriptions}</p>
                            <p className="text-grey mb-0 flex profilesetting" onClick={() => history.push('/profile_subscriber')}>
                                <span className="text-bold flex">{userProfile.countFollower} <p className="text-grey ml-2 ">Followers</p></span>
                                <span className="text-bold flex">{userProfile.countFollowing} <p className="text-grey ml-2">Following</p></span>
                                <span className="text-bold flex">{userProfile.countSubscriber}<p className="text-grey ml-2"> Subscribers</p></span>
                            </p>
                            <hr />
                            <div className="row ">
                                {
                                    categories.map((x) => {
                                        return <div key={x._id} className="col-lg-3 col-md-3 col-6">
                                            <a href="javascript:;" onClick={() => setSelectedCategory(x._id)} className={selectedCategory !== x._id ? "nav-link mainNavItemChild" : "nav-link mainNavItemChild active"}>{x.name}</a>
                                        </div>
                                    })
                                }

                            </div>
                            <div className="row mb-4">
                                {
                                    liveStreams && liveStreams.filter((y) => selectedCategory === y.category).map((item) => {
                                        return <LiveStreamCard key={item._id} livestream={item} />
                                    })
                                }
                                {
                                    liveStreams && liveStreams.filter((y) => selectedCategory === y.category).length === 0 ?
                                        <div className="no-records">
                                            <img src={NoImage} />
                                        </div> : <span />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;


