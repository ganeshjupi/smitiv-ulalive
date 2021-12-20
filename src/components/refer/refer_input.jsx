import React from "react";
import Header from "../common/topbar";
import Sidebar from "../common/sidebar";

class ReferInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    goTo = (e, path) => {
        e.preventDefault();
        this.props.history.push("/" + path);
    };

    render() {
        return (
            <div>
                <section className="container-fluid">
                    {/* header Starts here */}
                    <Header  history={this.props.history} />
                    <div className="row">
                        <Sidebar history={this.props.history} />
                        {/* Mobile menu overlay Starts here */}
                        <div className="mob-menu-overlay" />
                        {/* Mobile menu overlay Ends here */}
                        {/* Left Wrap Ends here */}
                        <div className="col-lg-9 col-md-9 col-12">
                            <div className="row">
                                <div className="col-12 mt-4">
                                    <h3 className="text-center mb-4">Refer to a friend</h3>
                                    <div className="text-center">
                                        <div className="row px-4 referbox">
                                            <div className="col-lg-6 col-md-6 col-6 ">
                                                <a href="refer.html" className="nav-link  action-wrap referborder">
                                                    <img src="../images/surface1.svg" className="pl-4 w-50" />
                                                    <p className="mt-2 text-bold">Bring ULALIVE to your friends</p>
                                                </a>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-6  referborder">
                                                <a href="refer -input.html" className="nav-link  action-wrap">
                                                    <img src="../images/coupen.svg" className="text-center active mt-4 w-50" />
                                                    <p className="text-center mt-2 text-bold">Key in referral code</p>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="text-center refercontent mt-4">
                                        <p>Enjoy FREE PRO account when you key in the referral code.
                                        </p>
                                        <div className="snippet-cont mb-4">
                                            <input
                                                type="text"
                                                className="form-control pl-4"
                                                name
                                                defaultValue="Input code"
                                            />
                                          
                                        </div>
                                        <p>*Referral code is limited to registration of one (1) PRO account only.
                                        </p>
                                        <div className="col-12 col-lg-12 mt-4 mb-4 ">
                                            <button className="btn btn-outline-grey">Cancel</button>
                                            <button className="btn btn-yellow btnpadding ml-4" data-toggle="modal" data-target="#delete-pop">Sumbit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* MainSection Ends here */}
                </section>

            </div>
        );
    }
}

export default ReferInput;


