import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchNotificationRequest, readAllNotificationRequest, readNotificationRequest } from "../../store/notification/notification.actions";
import { getNotificationList } from "../../store/notification/notification.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import noImage from "../../assets/images/no-image.png";

export default function Notification() {
  const dispatch = useDispatch();

  const { allNotifications } = useSelector((state) => {
    return {
      allNotifications: getNotificationList(state)
    }
  });

  useEffect(() => {
    dispatch(fetchNotificationRequest());
  }, []);
  let notifications = allNotifications.data && allNotifications.data.filter((x) => x.isRead !== true)

  return (
    <div>
      <div>
        <section className="container-fluid">
          <Header />
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-9 col-12">
              <div className="row">
                <div className="col-12 mt-4">
                  <div className="profilebar btnpadding">
                    <div className="snippet-hdr">
                      <h3 className="mt-2 mb-4">Notification</h3>
                      <button onClick={() => dispatch(readAllNotificationRequest())}>
                        Read All
                      </button>
                    </div>
                    <div className="list-wrap">
                      {
                        notifications && notifications.map((item) => {
                          return <div className="list bg-light notificationpadding" onClick={() => dispatch(readNotificationRequest({
                            id: item._id
                          }))} >
                            <div className="info">
                              <p className="user">{item.content.content}</p>
                              <span className="text">{moment(item.dateCreated).format("lll")}</span>
                            </div>
                          </div>
                        })
                      }
                      {
                        notifications && notifications.length === 0 ?
                          <img src={noImage} /> : <span />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
