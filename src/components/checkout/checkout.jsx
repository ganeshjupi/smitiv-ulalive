import React from "react";
import Header from "../common/topbar";
import Help from "../../assets//images/helppayment.svg"
import Visa from "../../assets//images/visacard.svg"
import Visa1 from "../../assets//images/visacard2.svg"
import Addbutton from "../../assets//images/addbutton.svg"
import CloseIcon from "../../assets//images/close-ico.svg"
import IconCard from "../../assets//images/icon_card transfer done_3645611 (1) 1.svg"
import IconCard1 from "../../assets//images/icon_card transfer done_3645611 (1) 2.svg"

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

        <section className="container-fluid">
          {/* header Starts here */}
          <Header  history={this.props.history} />

          <div className="row ">
            <div className="col-lg-9 col-md-12 col-12 mt-4 mb-4">
              <div className="snippet-block px-4">
                <div className="snippet-hdr py-4">
                  <h3>Checkout/ Subscribe</h3>
                </div>
                <div className="paymentbox">
                  <div className="col-lg-4 col-md-4 col-12" id="pad">
                    <div className="snippet-block px-4 mt-4 mb-4">
                      <div className="round">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" />
                      </div>
                      <div className="text-center">
                        <div className="payment py-4">
                          <h3 className="text-bold">SGD 60.00</h3>
                          <h3 className="text-bold">Yearly</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12" id="pad">
                    <div className="snippet-block px-4 mt-4 mb-4">
                      <div className="round">
                        <input type="checkbox" id="checkboxs" />
                        <label htmlFor="checkboxs" />
                      </div>
                      <div className="text-center">
                        <div className="payment py-4">
                          <h3 className="text-bold">SGD 5.00</h3>
                          <h3 className="text-bold">Monthly</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="snippet-hdr py-4">
                  <h3>Payment Option <img src={Help} /></h3>
                </div>
                <div className="cardtopimage pl-3">
                  <div className="inputbutton">
                    <input type="radio" className="radio" name="fav_language" defaultValue="CSS" />
                    <span className="pl-2 text-center ">Credit / Debit Card</span>
                  </div>
                  <div className="inputbutton">
                    <input type="radio" className="radio radionext" name="fav_language" defaultValue="CSS" />
                    <span className="text-center pl-2 ">other</span>
                  </div>
                </div>
                <div className="paymentbox ">
                  <div className="col-lg-4 col-md-4 col-12" id="pad">
                    <div className="snippet-block px-4 mt-4 mb-4">
                      <div className="text-center">
                        <div className="payment py-4">
                          <img src={Visa} alt="icon" />
                          <p className="mb-0 mt-2  line">TRANXUAN AN *4434 </p>
                          <span className="text-gray mt-0 mb-4 expiry">Expires in 10/08</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12" id="pad">
                    <div className="snippet-block px-4 mt-4 mb-4">
                      <div className="text-center">
                        <div className="payment py-4">
                          <img src={Visa1} alt="icon" />
                          <p className="mb-0 mt-2 line">TRANXUAN AN *4434 </p>
                          <span className="text-gray mt-0 mb-4 expiry">Expires in 10/08</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12" id="pad">
                    <div className="snippet-block px-4 mt-4 mb-4">
                      <div className="text-center">
                        <div className="payment py-4">
                          <img src={Addbutton} alt="icon" />
                          <div className="mt-4">
                            <span className="text-gray"> Add New</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="linesepeater" />
              </div>
            </div>
            {/* Card */}
            {/* Card */}
            <div className="col-lg-3 col-md-12 col-12 mt-4 mb-4">
              <div className="snippet-block px-4">
                <div className="snippet-hdr py-4">
                  <h3>Detail</h3>
                </div>
                <table className="custom-table">
                  <tbody>
                    <tr>
                      <td className="py-3">
                        <div>
                          <span className="vertical text-bold text-gray">price</span>
                        </div>
                      </td>
                      <td className="py-3 text-right">
                        <p className="text-bold mb-0">SGD 1.99</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div>
                          <span className="vertical text-bold text-gray">Subscribe to</span>
                        </div>
                      </td>
                      <td className="py-3 text-right">
                        <p className="text-bold">Antran</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div>
                          <span className="vertical text-bold text-gray">Subscribe package</span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <p className="text-bold mb-0">Monthly</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div>
                          <span className="vertical text-bold text-gray">Promo Code</span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <p className="text-bold text-gray mb-0">None</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <div>
                          <h6 className="vertical text-bold text-gray">Total amount</h6>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <p className="text-bold mb-0">SGD 1.99</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="col-12 col-lg-12 mt-4 mb-4  text-center">
                  <button className="btn btn-yellow w-100" data-toggle="modal" data-target="#delete-pop">Continue
                    Shopping</button>
                  <button className="btn btn-outline-black mt-4 mb-4 w-100 " data-toggle="modal" data-target="#failed-pop">Cancel</button>
                </div>
              </div>
            </div>


            {/* MainSection Ends here */}
          </div></section>
        <div className="modal fade" id="delete-pop">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal">
                <img src={CloseIcon} alt="icon" />
              </button>
              {/* Modal body Starts here */}
              <div className="modal-body text-center p-3 p-md-5">
                <img src={IconCard} alt="icon" />
                <h3 className="title-modal text-pelorous">Sucess</h3>
                <p>You have successfully
                  subscribed to [username]
                </p>
                <div className="col-md-12 mt-4 text-center">
                  <button className="btn btn-refer">Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="failed-pop">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal">
                <img src={CloseIcon} alt="icon" />
              </button>
              {/* Modal body Starts here */}
              <div className="modal-body text-center p-3 p-md-5">
                <img src={IconCard1} alt="icon" />
                <h3 className="title-modal text-failed">Failed</h3>
                <p>Something wrong happened.
                  Please try again later!
                </p>
                <div className="col-md-12 mt-4 text-center">
                  <button className="btn btn-buynow">Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;


