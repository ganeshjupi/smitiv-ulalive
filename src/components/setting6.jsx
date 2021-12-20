import React from "react";
import Header from "./topbar";
import DownArrow from "../assets/images/downarrow.svg";
import CardPic from "../assets/images/cardpic.svg";
import Timer from "../assets/images/timer.svg";
import Show from "../assets/images/Show.svg";
import Chat from "../assets/images/chat.svg";
import Sidebar from "./sidebar";

class Setting5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <section className="container-fluid">
            <Header history={this.props.history} />
            <div className="row">
              <Sidebar history={this.props.history} />


              <div className="col-lg-9 col-md-9 col-12 settingborder mb-4 heigthfixing">
                <h3 className="text-bold mt-4">My billing</h3>


                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6">
                    <div className="form-group ">
                      <label className="text-bold mt-4">plan</label>
                    </div>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 mt-4">
                    <div className="hdr-right">
                      <img src={DownArrow} alt="icon" />
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="btn-padding mt-1 mb-4">
                    <a href="#" className="prowidth">
                     
                      <span className="ml-2">PRO</span>
                    </a>

                  </div>

                  <p>$29/month<br />
                    Renew on 21 December 2021<br />
                    Subscriber since 21 October 2021</p>
                </div>

                <span className="lineseperater mt-4"></span>
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6">
                    <div className="form-group ">
                      <label className="text-bold">Primary payment method</label>
                    </div>
                  </div>

                </div>
                <form >

                  <div className="row">
                    <div className="col-md-4 form-group search-input">
                      <label className="text-bold">xxxxxxxxxx</label>
                    </div>
                  </div>

                  <a href="javascript:;" className="forgot-pass">update</a>
                </form>


                <span className="lineseperater mt-4"></span>

                <form >


                  <div className="row mt-2">
                    <div className="col-md-3 form-group search-input">
                      <label className="text-bold">Backup payment method</label>
                      <span>None</span>

                    </div>
                    <div className="col-md-3 form-group search-input">
                      <label className="text-bold">Expiry date</label>
                      <div className="input-group">

                        <span>None</span>
                      </div>

                    </div>
                    <div className="col-md-3 form-group">
                      <label className="text-bold">CCV</label>
                      <div className="input-group">

                        <span>None</span>
                      </div>
                    </div>




                  </div>

                  <a href="javascript:;" className="forgot-pass">Setup</a>
                </form>
                <span className="lineseperater mt-4"></span>

                <a href="javascript:;" className="text-danger" data-toggle="modal" data-target="#forgot-password">Cancel subscription</a>
              </div>
            </div>
          </section>
          <div className="modal" tabindex="-1" role="dialog" id="forgot-password">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Cancel subscription?</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group mb-4 ">
                    <label className="text-bold mt-4">
                      Your subscription will be cancel at the end of your billing period on 21 December 2021, 3:14 PM.

                      You can change your mind anytime before this date.
                    </label>


                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn text-danger">Cancel subscription</button>
                  <button type="button" className="btn forgot-pass" data-dismiss="modal">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Setting5;
