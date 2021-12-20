import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getJustStreamRequest, getRecentStreamRequest, getTopLiveStreamRequest } from "../store/social/social.actions";
import { getJustLiveStreams, getRecentLiveStreams, getTopLiveStreams } from "../store/social/social.selector";
import Sidebar from "./common/sidebar";
import Header from "./common/topbar";
import LiveStreamCard from "./common/liveStreamCard";
import { fetchNotificationRequest } from "../store/notification/notification.actions";
import { getUserProfile } from "../store/user/user.selector";
import noImage from "../assets/images/no-image.png"
import { startSocketService } from "../helpers/socketHelper";
import {responsive} from "../helpers/carousel"
require('dotenv').config();

export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { topRecommends, justLiveStreams, recentLiveStreams, user } = useSelector((state) => {
    return {
      topRecommends: getTopLiveStreams(state),
      justLiveStreams: getJustLiveStreams(state),
      recentLiveStreams: getRecentLiveStreams(state),
      user: getUserProfile(state)
    }
  });

  useEffect(() => {
  
    startSocketService();
    dispatch(getTopLiveStreamRequest());
    dispatch(getRecentStreamRequest());
    dispatch(getJustStreamRequest());
    dispatch(fetchNotificationRequest());
  }, []);

  return (
    <section className="container-fluid">
      {/* header Starts here */}
      <Header history={history} />
      {/* header Starts here */}
      <div className="row">
        <Sidebar history={history} />
        {/* Mobile menu overlay Starts here */}

        <div className="col-lg-9 col-md-9 mb-4 col-12 heigthfixing">
          <div className="row">
            <div className="col-12 ">
              <div className="snippet-hdr">
                <h3 className="mt-2">Top Recommended</h3>
              </div>
              <hr />
              <div className="row">
                {/* {
                  topRecommends && topRecommends.length > 0 ? topRecommends.map((item) => {
                    return <LiveStreamCard key={item._id} livestream={item} />
                  }) : <div className="col-12 " className="align-center">
                    <img src={noImage} />
                  </div>
                } */}

                {
                  topRecommends && topRecommends.length > 0 ? topRecommends.map((item,i) => {
                    if(i == 0)
                    return <div className="col-lg-9 col-md-9"><LiveStreamCard key={item._id} livestream={item} last={true}/> </div>
                    if(i == 1)
                    return <div className="col-lg-3 col-md-3" ><LiveStreamCard key={item._id} livestream={item} last={false} /> </div> 
                  }) : <div className="col-12 " className="align-center">
                    <img src={noImage} />
                  </div>
                }

              </div>
            </div>
            <div className="col-12 ">
              <div className="snippet-hdr">
                <h3 className="mt-2">Just for you</h3>
              </div>
              <hr />
              <div className="row">
              {(justLiveStreams && justLiveStreams.length > 0 )?(
              <Carousel 
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={7000}
                >
                {
                  justLiveStreams && justLiveStreams.map((item) => {
                    return <div className="m-2"><LiveStreamCard key={item._id} livestream={item} last={false} /></div>
                  })
                }
                </Carousel>) :(
                  <div className="col-12 " className="align-center">
                  <img src={noImage} />
                </div>
                )
                }
              </div>
            </div>
            <div className="col-12 ">
              <div className="snippet-hdr">
                <h3 className="mt-2">Recent</h3>
              </div>
              <hr />
              <div className="row">
              { (recentLiveStreams && recentLiveStreams.length > 0) ? (
                <Carousel 
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={7000}
                >
                {
                  recentLiveStreams && recentLiveStreams.map((item) => {
                    return <div className="m-2"><LiveStreamCard key={item._id} livestream={item} last={false}/></div>
                  })
                }
                </Carousel>):(
                  <div className="col-12 " className="align-center">
                  <img src={noImage} />
                  </div>  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MainSection Ends here */}
    </section>
  );
}


