import React from "react";
import Sidebar from "./common/sidebar";
import Header from "./common/topbar";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
                <section className="container-fluid">
  {/* header Starts here */}
  <Header history={this.props.history}/>
  <div className="row">
  <Sidebar history={this.props.history}/>
    <div className="col-lg-9 col-md-9 col-12 heigthfixing">
      <div className="snippet-hdr mt-4">
        <h3>Analytic</h3>
        <a href="javascript:;" className="go-to forgot forgot-pass">
          View more </a>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="green-blk">
            <div className="flex">
              <img className="img-fluid" src="../images/active.svg" alt="icon" />
              <span>All Spendings</span>
            </div>
            <span className="text-center total">$574.34</span>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="green-blk">
            <div className="flex">
              <img className="img-fluid" src="../images/earning.svg" alt="icon" />
              <span>Earnings</span>
            </div>
            <span className="text-center total">$350.40</span>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="green-blk">
            <div className="flex">
              <img className="img-fluid" src="../images/subsricbe.svg" alt="icon" />
              <span>New subscribers</span>
            </div>
            <span className="text-center total">321</span>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="green-blk">
            <div className="flex spendchart">
              <img className="img-fluid hdr-right spendchartimage" src="../images/barchart.png" alt="icon" />
              <span>Spent this month</span>
            </div>
            <span className="text-left total">$682.5</span>
          </div>
        </div>
      </div>
      <div className="snippet-hdr mt-4">
        <h3>Revenue</h3>
        <a href="javascript:;" className="go-to forgot forgot-pass">
          View more </a>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12 mt-4">
          <div className="snippet-block">
            {/* Card */}
            <div className="card bganalytics">
              <div className="snippet-hdr px-4">
                <h3 className="heading">Revenue</h3>
                <div className="flex track ">
                  <img src="../images/rigth.svg" />
                  <p>On Track</p>
                </div>
                <div className="hdr-rigth">
                  <select className="form-control selectformcontrol selectpicker">
                    <option>Monthly</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                  </select>
                </div>
              </div>
              <div className="paymentbox">
                <div className="col-lg-6 col-md-5 col-12">
                  <div className="snippet-block px-4 mt-4 mb-4">
                    <div className="py-2">
                      <span className="saves">Saves</span>
                      <div className="flex">
                        <span className="text-center rupees">43.50%</span>
                        <div className="trade-blk">
                          <p>+2.45%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-12">
                  <div className="snippet-block px-4 mt-4 mb-4">
                    <div className="py-2">
                      <span className="saves">Balance</span>
                      <div className="flex">
                        <span className="text-center rupees">$52,422</span>
                        <div className="danger-blk">
                          <p>+2.45%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src="../images/chart.svg" />
            </div>
          </div>
          {/* Card */}
          {/* Card */}
        </div>
        <div className="col-lg-4 col-md-12 col-12 mt-4">
          <div className="snippet-block">
            <div className="card bganalytics xaxis">
              <div className="snippet-hdr px-2">
                <span className="text-center heading mt-3 mb-4">Subscribers</span>
              </div>
              <div className="py-3 px-2">
                <div className="tablewidth">
                  <img src="../images/profilepic.svg" className="profile " alt="icon" />
                  <span className="vertical text-bold displaysingleline ">From Alex Manda</span>
                  <div className="hdr-right">
                    <div className="danger-blk">
                      <p>+2.45%</p>
                    </div>
                  </div>
                </div>
                <span className="text-gray ml-5 position">Today, 16:36</span>
              </div>
              <div className="py-3 px-2">
                <div className="tablewidth">
                  <img src="../images/profilepic.svg" className="profile " alt="icon" />
                  <span className="vertical text-bold displaysingleline ">From Alex Manda</span>
                  <div className="hdr-right">
                    <div className="danger-blk">
                      <p>+2.45%</p>
                    </div>
                  </div>
                </div>
                <span className="text-gray ml-5 position">Today, 16:36</span>
              </div>
              <div className="py-3 px-2">
                <div className="tablewidth">
                  <img src="../images/profilepic.svg" className="profile " alt="icon" />
                  <span className="vertical text-bold displaysingleline ">From Alex Manda</span>
                  <div className="hdr-right">
                    <div className="danger-blk">
                      <p>+2.45%</p>
                    </div>
                  </div>
                </div>
                <span className="text-gray ml-5 position">Today, 16:36</span>
              </div>
              <div className="px-2">
                <a href="javascript:;" className="forgot forgot-pass hdr-right">
                  View all
                  <img src="../images/keyboard_backspace.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12 mt-4 mb-4">
          <div className="snippet-block bganalytics">
            <div className="snippet-hdr mt-4 px-2">
              <h3 className="headinganalytics">Subscription revenue </h3>
              <a href="javascript:;" className="go-to forgot forgot-pass">
                View more </a>
            </div>
            <div className="row px-4">
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4 mb-4 rigthborder">
                  <p className="mb-0 displaysingleline mb-4">Total</p>
                  <span className="text-center rupees mt-4 mb-4">12,123</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4">
                  <p className="mb-0 displaysingleline mb-4">Last month</p>
                  <span className="text-center text-clay mt-4 mb-4 ">2,100</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4">
                  <p className="mb-0 displaysingleline mb-4">This month </p>
                  <span className="text-center text-clay mt-4 mb-4">10,023</span>
                </div>
              </div>
              <span className="lineseperater" />
            </div>
            <div className="snippet-hdr px-2">
              <h3 className="headinganalytics">Orders </h3>
              <a href="javascript:;" className="go-to forgot forgot-pass">
                View more </a>
            </div>
            <div className="row px-4">
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4 mb-4 rigthborder">
                  <p className="mb-0 displaysingleline mb-4">Total</p>
                  <span className="text-center rupees mt-4 mb-4 ">12,123</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4">
                  <p className="mb-0 displaysingleline  mb-4">Last month</p>
                  <span className="text-center text-clay mt-4 mb-4">2,100</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4">
                  <p className="mb-0 displaysingleline  mb-4">This month </p>
                  <span className="text-center text-clay mt-4 mb-4">10,023</span>
                </div>
                
              </div>
              <span className="lineseperater" />
            </div>
            <div className="snippet-hdr px-2">
              <h3 className="headinganalytics">Subscribers </h3>
              <a href="javascript:;" className="go-to forgot forgot-pass">
                View more </a>
            </div>
            <div className="row px-4">
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4 mb-4 rigthborder">
                  <p className="mb-0 displaysingleline mb-4">Total</p>
                  <span className="text-center rupees mt-4 mb-4 ">12,123</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4">
                  <p className="mb-0 displaysingleline mb-4">Last month</p>
                  <span className="text-center text-clay mt-4 mb-4 ">2,100</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4">
                  <p className="mb-0 displaysingleline mb-4">This month </p>
                  <span className="text-center text-clay mt-4 mb-4">10,023</span>
                </div>
              </div>
              <span className="lineseperater" />
            </div>
            <div className="snippet-hdr px-2">
              <h3 className="headinganalytics">View</h3>
              <a href="javascript:;" className="go-to forgot forgot-pass">
                View more </a>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4 mb-4 rigthborder">
                  <p className="mb-0 displaysingleline mb-4">Total</p>
                  <span className="text-center rupees ">12,123</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4">
                  <p className="mb-0 displaysingleline mb-4">Last month</p>
                  <span className="text-center text-clay ">2,100</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-4">
                <div className="text-center mt-4">
                  <p className="mb-0 displaysingleline mb-4">This month </p>
                  <span className="text-center text-clay">10,023</span>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
        </div>
        <div className="col-lg-4 col-md-12 col-12 mt-4 mb-4">
          <div className="snippet-block bganalytics px-4">
            <div className="snippet-hdr mt-4">
              <h3 className="headinganalytics">Total revenue</h3>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <div className="snippet-block py-2 px-2 mt-4 mb-4">
                <div className="text-center px-2">
                  <p className="mb-0 text-bold"><img src="../images/back.svg" className="hdr-left" />2021<img className="hdr-right mt-2" src="../images/front.svg" /></p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <div className="snippet-block py-4 mt-4 mb-4">
                <div className="text-center">
                  <p className="mb-0">Total</p>
                  <span className="rupees text-blue">12,000.00 <small className="price">SGD</small></span>
                </div>
              </div>
            </div>
            <div className="snippet-hdr mt-4">
              <h3 className="headinganalytics">August 2021</h3>
            </div>
            <div className="snippet-hdr">
              <span>Revenue month</span>
              <span className="go-to">
                Last month </span>
            </div>
            <div className="smallcardtopimage flexbutton">
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">5,470</span>
              </div>

              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/greenup.svg" alt="icon" />
                <span className="text-center text-greenup">+35.5%</span>
              </div>
              
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">2,420</span>
              </div>
              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/reddown.svg" alt="icon" />
                <span className="text-center text-danger">-10.5%</span>
              </div>
            </div>
            <span className="lineseperater" />
            <div className="snippet-hdr">
              <h3 className="headinganalytics">July 2021</h3>
            </div>
            <div className="snippet-hdr">
              <span>Revenue month</span>
              <span className="go-to">
                Last month </span>
            </div>
            <div className="smallcardtopimage flexbutton">
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">5,470</span>
              </div>

              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/greenup.svg" alt="icon" />
                <span className="text-center text-greenup">+35.5%</span>
              </div>
              
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">2,420</span>
              </div>
              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/reddown.svg" alt="icon" />
                <span className="text-center text-danger">-10.5%</span>
              </div>
            </div>
            <span className="lineseperater" />
            <div className="snippet-hdr">
              <h3 className="headinganalytics">June 2021</h3>
            </div>
            <div className="snippet-hdr">
              <span>Revenue month</span>
              <span className="go-to">
                Last month </span>
            </div>
            <div className="smallcardtopimage flexbutton">
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">5,470</span>
              </div>

              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/greenup.svg" alt="icon" />
                <span className="text-center text-greenup">+35.5%</span>
              </div>
              
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">2,420</span>
              </div>
              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/reddown.svg" alt="icon" />
                <span className="text-center text-danger">-10.5%</span>
              </div>
            </div>
            <span className="lineseperater" />
            <div className="snippet-hdr">
              <h3 className="headinganalytics">May 2021</h3>
            </div>
            <div className="snippet-hdr">
              <span>Revenue month</span>
              <span className="go-to">
                Last month </span>
            </div>
            <div className="smallcardtopimage flexbutton">
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">5,470</span>
              </div>

              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/greenup.svg" alt="icon" />
                <span className="text-center text-greenup">+35.5%</span>
              </div>
              
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">2,420</span>
              </div>
              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/reddown.svg" alt="icon" />
                <span className="text-center text-danger">-10.5%</span>
              </div>
            </div>
            <span className="lineseperater" />
            <div className="snippet-hdr">
              <h3 className="headinganalytics">April 2021</h3>
            </div>
            <div className="snippet-hdr">
              <span>Revenue month</span>
              <span className="go-to">
                Last month </span>
            </div>
            <div className="smallcardtopimage flexbutton">
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">5,470</span>
              </div>

              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/greenup.svg" alt="icon" />
                <span className="text-center text-greenup">+35.5%</span>
              </div>
              
              <div className="smallcardtopimage marginrigthbutton">
                <span className="text-center rupees">2,420</span>
              </div>
              <div className="smallcardtopimage marginrigthbutton">
                <img src="../images/reddown.svg" alt="icon" />
                <span className="text-center text-danger">-10.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* MainSection Ends here */}
  </div></section>

            </div>
		);
	}
}

export default Dashboard;
