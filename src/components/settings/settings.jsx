import React from "react";
import Header from "../common/topbar";

import Sidebar from "../common/sidebar";

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      menuNo : 0
    };
	}

  open = (e, menuNo) => {
    e.preventDefault();
    this.setState({menuNo})
};

	render() {
    const {menuNo} = this.state
		return (
			<div>
        <div>
  <section className="container-fluid">
    {/* header Starts here */}
    <Header  history={this.props.history} />
    <div className="row">
      <div className="col-lg-12 col-md-12 col-12">
        <div className="row">
        <Sidebar history={this.props.history} />
          {/* Mobile menu overlay Starts here */}
          <div className="mob-menu-overlay" />
          {/* Mobile menu overlay Ends here */}
          {/* Left Wrap Ends here */}
          <div className="col-lg-3 col-md-3 col-12">
            <div className="snippet-hdr">
              <h3 className="mt-4 ml-2 mb-4">Setting</h3>
            </div>
            <div className="row">
              <ul className="left-menu list-unstyled">
                <li className={menuNo === 1 ?"active" : "" }>
                  <a href="setting-myaddress.html" className="action-wrap settingicon" onClick={(e) => this.open(e, 1)}>
                    My Address
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </a>
                </li>
                <li className={menuNo === 2 ? "active" : "" }>
                  <a href="setting-privateloudge.html" className="action-wrap settingicon" onClick={(e) => this.open(e, 2)}>
                    Private lounge
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </a>
                </li>
                <li className={menuNo === 3 ?"active" : "" }>
                  <a href="setting-changepassword.html" className="action-wrap settingicon" onClick={(e) => this.open(e, 3)}>
                    Change password 
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </a>
                </li>
                <li className={menuNo === 4 ?"active" : "" }>
                  <a href="setting-privacysetting.html" className="action-wrap settingicon" onClick={(e) => this.open(e, 4)}>
                    Privacy setting
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </a>
                </li>
                <li className={menuNo === 5 ?"active" : "" }>
                  <a href="setting-withdraw.html" className="action-wrap settingicon" onClick={(e) => this.open(e, 5)}>
                    Withdrawal
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="action-wrap settingicon" data-toggle="modal" data-target="#delete-pop">
                    Logout 
                    <img src="../images/sidedropdown.svg" alt="icon" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Mobile menu overlay Starts here */}
          </div>
          {menuNo === 1 &&
          <div className="col-lg-6 col-md-6 col-9 settingborder">
            <div className="snippet-hdr">
              <h3 className="mt-4 mb-4">My address</h3>
            </div>
            <div className="row">
              <div className="col-md-12 profile-blk">
                <div className="row">
                  <div className="col-lg-9 col-md-12">
                    <div className="form-group snippet-cont">
                      <label className="text-bold">Address</label>
                      <textarea type="Date" className="form-control h-25" rows={4} name value="20-Nov-21" defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-9 col-md-12 snippet-cont">
                    <label className="text-bold">City/ Town</label>
                    <div className="snippet-cont">
                      <input type="text" className="form-control" name defaultValue="Antran" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-9 col-md-12 snippet-cont">
                    <label className="text-bold">Poscode</label>
                    <div className="snippet-cont">
                      <input type="text" className="form-control" name defaultValue="Antran" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-9 col-md-12 snippet-cont">
                    <label className="text-bold">State</label>
                    <input className="form-control" type="text" name placeholder="Document Sign Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-9 col-md-12 snippet-cont">
                    <label className="text-bold">Country</label>
                    <input className="form-control" type="text" name placeholder="Document Sign Name" />
                  </div>
                </div>
                <button className="btn btn-outline-grey">Cancel</button>
                <button className="btn btn-yellow">Save </button>
              </div>
            </div>
          </div>
        }
                  {menuNo === 2 &&
          <div className="col-lg-6 col-md-6 col-9 settingborder">
          <div className="snippet-hdr">
            <h3 className="mt-4 mb-4">Private lounge</h3>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  <div className="snippet-cont py-4 ">
                    <label className="text-bold">Set monthly subscription fee for VIP circle</label>
                    <div className="flex">
                      <input type="text" className="form-control col-lg-8" name defaultValue="Antran" />
                      <p className="mt-2 ml-2">/ month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  <div className="snippet-cont py-4 ">
                    <label className="text-bold">Set monthly subscription fee for VIP circle</label>
                    <div className="flex">
                      <input type="text" className="form-control col-lg-8" name defaultValue="Antran" />
                      <p className="mt-2 ml-2">/ month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="form-group snippet-cont">
                    <label className="text-bold">Bio</label>
                    <textarea type="Date" className="form-control h-25" rows={4} name value="20-Nov-21" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="col-9 col-lg-7 text-center">
                <p>User can set monthly subscription fee for his private lounge</p>
              </div>
              <button className="btn btn-yellow w-25">Save </button>
              <button className="btn btn-outline-grey w-25">Cancel</button>
            </div>
          </div>
        </div>
          }
                  {menuNo === 3 &&
          <div className="col-lg-6 col-md-6 col-9 settingborder">
          <div className="snippet-hdr">
            <h3 className="mt-4 mb-4">Change password</h3>
          </div>
          <div className="row">
            <div className="form-group col-lg-9 col-md-12 snippet-cont">
              <label className="text-bold">New password</label>
              <div className="snippet-cont">
                <input type="text" className="form-control" name defaultValue="Antran" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-9 col-md-12 snippet-cont">
              <label className="text-bold">Retype new password</label>
              <div className="snippet-cont">
                <input type="text" className="form-control" name defaultValue="Antran" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-9 col-md-12 snippet-cont">
              <label className="text-bold">Old password</label>
              <input className="form-control" type="text" name placeholder="Document Sign Name" />
            </div>
          </div>
          <button className="btn btn-yellow w-25">Save </button>
          <button className="btn btn-outline-grey w-25">Cancel</button>
        </div>
      
          }
                  {menuNo === 4 &&
          <div className="col-lg-6 col-md-6 col-9 settingborder">
          <div className="row">
            <div className="col-12">
              <div className="snippet-hdr">
                <h3 className="mt-4">Privacy setting</h3>
              </div>
              <div className="snippet-hdr">
                <h3 className="mt-4 mb-4">Direct message</h3>
              </div>
              <div className="row">
                <div className="form-group col-lg-9 col-md-12 snippet-cont">
                  <label className="text-bold">Follower</label>
                  <div className="snippet-cont">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round" />
                    </label>
                  </div>
                  <p>People that follow me may message me </p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-9 col-md-12 snippet-cont">
                  <label className="text-bold">Following</label>
                  <div className="snippet-cont">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round" />
                    </label>
                  </div>
                  <p>People that follow me may message me </p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-9 col-md-12 snippet-cont">
                  <label className="text-bold">Subscriber</label>
                  <div className="snippet-cont">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round" />
                    </label>
                  </div>
                  <p>People that follow me may message me </p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-9 col-md-12 snippet-cont">
                  <label className="text-bold">Buyer</label>
                  <div className="snippet-cont">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round" />
                    </label>
                  </div>
                  <p>People that follow me may message me </p>
                </div>
              </div>
              <div className="row">
                <div className="snippet-hdr">
                  <h3 className="ml-2 mb-4">Guest invitation</h3>
                </div>
                <div className="form-group col-lg-9 col-md-12 snippet-cont">
                  <label className="text-bold">Following</label>
                  <div className="snippet-cont">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round" />
                    </label>
                  </div>
                  <p>People that follow me may message me </p>
                </div>
              </div>
              <button className="btn btn-yellow w-25">Save </button>
              <button className="btn btn-outline-grey w-25">Cancel</button>
            </div>
          </div>
        </div>
      
          }
                  {menuNo === 5 &&
           <div className="col-lg-6 col-md-6 col-9 settingborder">
           <div className="snippet-hdr">
             <h3 className="mt-4 ml-2">Withdrawal</h3>
           </div>
           <div className="faq col-8 active">
             <h3 className="faq-title">
               Setup account
             </h3>
             <div className="faq-text">
               <div className="row">
                 <div className="col-xl-10 col-lg-10 col-md-10 col-10 mb-3">
                   <img src="../images/withdraw.svg" />
                 </div>
               </div>
               <div className="mt-4 mb-4">
                 <button className="btn btn-yellow w-100">Setup Stripe account</button>
               </div>
             </div>
             <button className="faq-toggle">
               <img src="../images/downarrow.svg" alt="icon" />
             </button>
           </div>
           <div className="faq col-8 active ">
             <h3 className="faq-title">
               Accumulated sales
             </h3>
             <div className="faq-text">
               <div className="row">
                 <div className="col-xl-10 col-lg-10 col-md-10 col-10 mb-3">
                   <img src="../images/withdraw.svg" />
                 </div>
               </div>
               <p>Your Stripe withdrawal account has been set up.</p>
               <div className="mt-4 mb-4">
                 <button className="btn btn-yellow w-100">Setup Stripe account</button>
               </div>
             </div>
             <button className="faq-toggle">
               <img src="../images/downarrow.svg" alt="icon" />
             </button>
           </div>
         </div>
       
           }
        </div>
      </div>
      {/* MainSection Ends here */}
    </div></section>
  <div className="modal fade " id="delete-pop">
    <div className="modal-dialog modal-dialog-centered ">
      <div className="modal-content modalbox">
        <button type="button" className="close" data-dismiss="modal">
          <img src="../images/close-ico.svg" alt="icon" />
        </button>
        {/* Modal body Starts here */}
        <div className="modal-body text-center p-3 p-md-5">
          Do you confirm to logout?
          <div className="mt-4">
            <button className="btn btn-yellow w-25">ok </button>
            <button className="btn btn-outline-grey w-25">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
		);
	}
}

export default Settings;
