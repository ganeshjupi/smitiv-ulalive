import React, { useEffect } from "react";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getFollowingStreams } from "../../store/social/social.selector";
import { getFollowingStreamRequest } from "../../store/social/social.actions";
import LiveStreamCard from "../common/liveStreamCard";
import { Link } from "react-router-dom";
import noImage from "../../assets/images/no-image.png";

export default function Favorties() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { justLiveStreams } = useSelector((state) => {
    return {
      justLiveStreams: getFollowingStreams(state),
    }
  });

  useEffect(() => {
    dispatch(getFollowingStreamRequest());
  }, []);

  return (
    <div>
      <section className="container-fluid">
        {/* header Starts here */}
        <Header history={history} />
        <div className="row">
          <Sidebar history={history} />


          <div className="col-lg-9 col-md-9 col-12 heigthfixing">
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-6">
                <Link to="/favorties" className="nav-link mainNavItemChild active">Following</Link>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <Link to="/bookmark" className="nav-link mainNavItemChild ">Bookmark</Link>
              </div>
              <span className="lineseperater" />
            </div>
            <div className="col-12 col-lg-12 col-md-12">
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="form-group position-relative center">
                    <input type="text" className="form-control search-input" name placeholder="Search..." />
                    <a href="javascript:;" className="search">
                      <img src="../images/search-icon.svg" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {
                justLiveStreams && justLiveStreams.length > 0 ? justLiveStreams.map((item) => {
                  return <LiveStreamCard key={item._id} livestream={item} />
                }) : <div className="col-12 " className="align-center">
                  <img src={noImage} />
                </div>
              }
            </div>
            {/* MainSection Ends here */}
          </div>
        </div>
      </section>
    </div>
  );
}


