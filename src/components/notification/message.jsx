import React from "react";
import Header from "../common/topbar";
import Sidebar from "../common/sidebar";

class Message extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div>
  <section className="container-fluid">
  <Header  history={this.props.history} />
     <div className="row">
     <Sidebar history={this.props.history} />
     
      <div className="col-lg-9 col-md-9 col-12 flex">
        <div className="sidebar row">
          <span className="logo">Messenger</span>
          <form className="form-inline paddingwidth">
            <div className="form-group position-relative">
              <input type="text" className="form-control search-input selectwidth" name placeholder="Search..." />
              <a href="javascript:;" className="search-icon">
                <img src="../images/search-icon.svg" alt="icon" />
              </a>
            </div>
          </form>
          <div className="list-wrap">
            <div className="list active">
              <div className="dropdown notification">
                <a href="javascript:;" className="hdr-icon dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="count">02</span>
                  <img className="img-fluid" src="../images/Profile1.svg" alt="icon" />
                </a>
              </div>
              <div className="info">
                <span className="user">Taylor Swift</span>
                <span className="text">Hi! :)</span>
              </div>
              <span className="time">now</span>
            </div>
            <div className="list">
              <div className="dropdown notification">
                <a href="javascript:;" className="hdr-icon dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="count">02</span>
                  <img className="img-fluid" src="../images/Profile2.svg" alt="icon" />
                </a>
              </div>
              <div className="info">
                <span className="user">Miley Cyrus</span>
                <span className="text">Good night.</span>
              </div>
              <span className="time">5 min. ago</span>
            </div>
            <div className="list">
              <img className="img-fluid" src="../images/Profile3.svg" alt="icon" />
              <div className="info">
                <span className="user">Rihanna</span>
                <span className="text">Çav bella</span>
              </div>
              <span className="time">1 hour ago</span>
            </div>
            <div className="list">
              <img className="img-fluid" src="../images/Profile1.svg" alt="icon" />
              <div className="info">
                <span className="user">Furry</span>
                <span className="text">Ok, lets go.</span>
              </div>
              <span className="time">1 day ago</span>
            </div>
            <div className="list">
              <img className="img-fluid" src="../images/Profile2.svg" alt="icon" />
              <div className="info">
                <span className="user">Serenay Sarıkaya</span>
                <span className="text">Hi! :)</span>
              </div>
              <span className="time">now</span>
            </div>
            <div className="list">
              <img className="img-fluid" src="../images/Profile3.svg" alt="icon" />
              <div className="info">
                <span className="user">Hazal Kaya</span>
                <span className="text">Good night.</span>
              </div>
              <span className="time">5 min. ago</span>
            </div>
            <div className="list">
              <img className="img-fluid" src="../images/Profile3.svg" alt="icon" />
              <div className="info">
                <span className="user">Tuba Büyüküstün</span>
                <span className="text">Çav bella</span>
              </div>
              <span className="time">1 hour ago</span>
            </div>
            <div className="list">
              <img className="img-fluid" src="../images/Profile1.svg" alt="icon" />
              <div className="info">
                <span className="user">Bergüzar Korel</span>
                <span className="text">Ok, lets go.</span>
              </div>
              <span className="time">1 day ago</span>
            </div>
            <div className="list">
              <img className="img-fluid" src="../images/Profile2.svg" alt="icon" />
              <div className="info">
                <span className="user">Beren Saat</span>
                <span className="text">Hi! :)</span>
              </div>
              <span className="time">now</span>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="header">
            <div className="dropdown notification">
              <a href="javascript:;" className="hdr-icon dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="online" />
                <img className="img-fluid profile" src="../images/Profile1.svg" alt="icon" data-toggle="modal" data-target="#delete-pop" />
              </a>
            </div>
            <div className="messageheader">
              <h3 className="mb-0 text-bold">Licoln Lincon</h3>
              <span className="text-grey">@Licoln Lincon</span>
            </div>
            <div className="info">
              <span className="user" />
              <span className="time" />
            </div>
            <div>
              <div className="col-12 text-left">
                <div className="dropdown action-dmenu">
                  <button className="btn-white dropdown-toggle" data-toggle="dropdown">
                    <img className="img-fluid datatoogleimage" src="../images/dot.svg" alt="icon" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item action-wrap" href="javascript:;">  <img className="img-fluid datatoogleimage" src="../images/trash-icon.svg" alt="icon" />Delete</a>
                    <a className="dropdown-item text-danger" href="javascript:;">  <img className="img-fluid datatoogleimage" src="../images/mailbox.svg" alt="icon" />Mark as unread</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="open">
              <a href="javascript:;">UP</a>
            </div>
          </div>
          <div className="message-wrap">
            <div className="message-list">
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit minus minima quo corporis.
                </p>
              </div>
              <div className="time">now</div>
            </div>
            <div className="message-list me">
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="time">now</div>
            </div>
            <div className="message-list">
              <div className="msg">
                <p>Odit minus minima quo corporis.
                </p>
              </div>
              <div className="time">now</div>
            </div>
            <div className="message-list me">
              <div className="msg">
                <p>
                  Lorem.
                </p>
              </div>
              <div className="receive">now</div>
            </div>
            <div className="message-list">
              <div className="msg">
                <p>
                  Lorem, ipsum dolor.
                </p>
              </div>
              <div className="time">now</div>
            </div>
            <div className="message-list me">
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam laudantium illum quidem?
                  Iste
                  hic doloribus quos non iure libero excepturi, praesentium in, blanditiis repellat labore illo,
                  voluptas sed fugit consequatur dolorum assumenda ea nesciunt. Pariatur.
                </p>
              </div>
              <div className="receive">now</div>
            </div>
            <div className="message-list">
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit minus minima quo corporis.
                </p>
              </div>
              <div className="receive">now</div>
            </div>
            <div className="message-list me">
              <div className="msg">
                <p>
                  Lorem, ipsum.
                </p>
              </div>
              <div className="receive">now</div>
            </div>
            <div className="message-list">
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, nulla doloribus dolore impedit
                  dolorem hic ex dolor quo illo tenetur ab exercitationem atque iusto, voluptatibus quos.
                </p>
              </div>
              <div className="time text-danger"><img src="../images/error.svg" />Resend or Cancel</div>
            </div>
            <div className="message-list me">
              <div className="msg">
                <p>
                  Lorem dolor sit.
                </p>
              </div>
              <div className="receive">now</div>
            </div>
          </div>
          <div className="message-footer">
            <div className="snippet-cont sharelink">
              <img className="off mt-2" src="../images/img.svg" alt="icon" />
              <input type="text" className="form-control bg-grey" name defaultValue="message here" />
            </div>
            <img className="off pl-3" src="../images/send.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
    {/* MainSection Ends here */}
  </section>
  <div className="modal fade" id="delete-pop">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content profileimagepopup">
        <button type="button" className="close" data-dismiss="modal">
          <img src="../images/close-ico.svg" alt="icon" />
        </button>
        {/* Modal body Starts here */}
        <div className="modal-body text-center p-3 p-md-5">
          <img src="../images/recprofilepic.svg" className="w-50" alt="icon" />
        </div>
      </div>
    </div>
  </div>
</div>

			</div>
		);
	}
}

export default Message;
