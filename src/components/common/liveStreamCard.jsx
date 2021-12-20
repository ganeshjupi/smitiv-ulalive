import React from "react";
import moment from "moment";
import CardPic from "../../assets/images/cardpic.svg";
import { useDispatch } from "react-redux";
import { fetchLiveStreamByIdRequest } from "../../store/social/social.actions";
import { useHistory } from "react-router";
import ProfilePic from "../../assets/images/profilepic.jpg";
import GuestPic from "../../assets/images/guest.png";
require('dotenv').config();
const IMAGE_PATH = process.env.REACT_APP_IMAGE_PATH;

export default function LiveStreamCard(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const item = props.livestream;

    const handleSave = (id) => {
        dispatch(fetchLiveStreamByIdRequest({
            id: id,
            history: history
        }))
    }


    let duration = "00:00:00";
    if (item.timeStart) {
        let ms = moment().diff(moment(item.timeStart));
        var d = moment.duration(ms);
        duration = moment(d.as('milliseconds')).format("HH:mm:ss");
    }
    let profilrImg = ProfilePic;
    if (item.owner && item.owner.attachments && item.owner.attachments.key) {
        profilrImg = `${IMAGE_PATH}${item.owner && item.owner.attachments && item.owner.attachments.key}`
    }

    // className={props.className ? props.className : "col-lg-4 col-md-12 col-12 mt-4"}

    return (
        <div key={item._id} onClick={() => props.selectable ? "" : handleSave(item._id)} >
            <div className="snippet-block">
                <div className="card">
                    {/* Top Section of Card */}
                    <div className="card-top" style={{ backgroundImage: `url(${IMAGE_PATH}${item.attachments.key})` }}>
                        <div className="playbutton">
                            <img src={profilrImg} alt="icon" />
                            <p className="text-center text-bold width">{item.owner.fullName}</p>
                        </div>
                    </div>
                    {/* Bottom Section of Card */}
                    <div className="bottom">
                        <div className="cardtopimage">
                            {
                                item.guestInvited.map((x) => {
                                    return <div key={x} className="smallimagebutton">
                                        <img src={GuestPic} alt="icon" width="60" />
                                        <span className="text-bold  text-center">{"Guest"}</span>
                                    </div>
                                })
                            }
                        </div>
                        <p className="text" style={{ height: 40, overflow: "hidden" }}>{item.contents}
                        </p>
                        <div className={props.last ? "smallcardtopimage col-6" : "smallcardtopimage"}>
                            <div className="smallimagebutton">
                                {duration}
                            </div>
                            <div className="smallcardtopimage">
                                <i className="fa fa-eye iconcolor"></i>
                                <span className="text-center pl-1">{item.totalView}</span>
                            </div>
                            <div className="smallcardtopimage">
                                <i className="fa fa-comments iconcolor"></i>
                                <span className="text-center pl-1 icon">{item.reactions.length}</span>
                            </div>
                            <div className="smallcardtopimage ">
                                <label className="text-right text-gray">{moment(item.dateCreated).fromNow()}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}