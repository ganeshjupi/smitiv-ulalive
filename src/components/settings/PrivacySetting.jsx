import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPrivacySettingRequest, updatePrivacySettingRequest } from "../../store/user/privacysetting/privacysetting.actions";
import { getCurrentPrivacySetting } from "../../store/user/privacysetting/privacysetting.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";

export default function PrivacySetting() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({
    "allowFollowerInbox": false,
    "allowFollowingInbox": false,
    "allowSubscriberInbox": false,
    "allowPurchasedInbox": false,
    "allowFollowingInvite": false,
  })
  const { privacysetting } = useSelector((state) => {
    return {
      privacysetting: getCurrentPrivacySetting(state)
    }
  });

  useEffect(() => {
    setValues({
      "allowFollowerInbox": privacysetting.allowFollowerInbox,
      "allowFollowingInbox": privacysetting.allowFollowingInbox,
      "allowSubscriberInbox": privacysetting.allowSubscriberInbox,
      "allowPurchasedInbox": privacysetting.allowPurchasedInbox,
      "allowFollowingInvite": privacysetting.allowFollowingInvite
    })
  }, [privacysetting])

  useEffect(() => {
    dispatch(getPrivacySettingRequest());
  }, []);

  const handleSave = () => {
    let updated = privacysetting;
    updated.allowFollowerInbox = values.allowFollowerInbox;
    updated.allowFollowingInbox = values.allowFollowingInbox;
    updated.allowSubscriberInbox = values.allowSubscriberInbox;
    updated.allowPurchasedInbox = values.allowPurchasedInbox;
    updated.allowFollowingInvite = values.allowFollowingInvite;

    dispatch(updatePrivacySettingRequest(updated));
  }

  return (
    <div>
      <div>
        <section className="container-fluid">
          {/* header Starts here */}
          <Header history={history} />
          <div className="row">
            <Sidebar history={history} />


            <div className="col-lg-9 col-md-9 col-12 mb-4 settingborder">
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

                        <div className="toggle-button-cover">
                          <div className="button-cover">
                            <div className="togglebuttons r" id="button-1">
                              <input type="checkbox" checked={values.allowFollowerInbox}
                                onChange={(e) => {
                                  setValues({ ...values, allowFollowerInbox: e.target.checked })
                                }}
                                className="checkbox" />
                              <div className="knobs" />
                              <div className="layer" />
                            </div>
                          </div>

                        </div>
                      </div>
                      <p>People that follow me may message me </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-9 col-md-12 snippet-cont">
                      <label className="text-bold">Following</label>
                      <div className="snippet-cont">
                        <div className="toggle-button-cover">
                          <div className="button-cover">
                            <div className="togglebuttons r" id="button-1">
                              <input type="checkbox" checked={values.allowFollowingInbox}
                                onChange={(e) => {
                                  setValues({ ...values, allowFollowingInbox: e.target.checked })
                                }}
                                className="checkbox" />
                              <div className="knobs" />
                              <div className="layer" />
                            </div>
                          </div>

                        </div>
                      </div>
                      <p>People that follow me may message me </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-9 col-md-12 snippet-cont">
                      <label className="text-bold">Subscriber</label>
                      <div className="snippet-cont">
                        <div className="toggle-button-cover">
                          <div className="button-cover">
                            <div className="togglebuttons r" id="button-1">
                              <input type="checkbox" checked={values.allowSubscriberInbox}
                                onChange={(e) => {
                                  setValues({ ...values, allowSubscriberInbox: e.target.checked })
                                }}
                                className="checkbox" />
                              <div className="knobs" />
                              <div className="layer" />
                            </div>
                          </div>

                        </div>
                      </div>
                      <p>People that follow me may message me </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-9 col-md-12 snippet-cont">
                      <label className="text-bold">Buyer</label>
                      <div className="snippet-cont">
                        <div className="toggle-button-cover">
                          <div className="button-cover">
                            <div className="togglebuttons r" id="button-1">
                              <input type="checkbox" checked={values.allowPurchasedInbox}
                                onChange={(e) => {
                                  setValues({ ...values, allowPurchasedInbox: e.target.checked })
                                }}
                                className="checkbox" />
                              <div className="knobs" />
                              <div className="layer" />
                            </div>
                          </div>

                        </div>
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
                        <div className="toggle-button-cover">
                          <div className="button-cover">
                            <div className="togglebuttons r" id="button-1">
                              <input type="checkbox" checked={values.allowFollowingInvite}
                                onChange={(e) => {
                                  setValues({ ...values, allowFollowingInvite: e.target.checked })
                                }}
                                className="checkbox" />
                              <div className="knobs" />
                              <div className="layer" />
                            </div>
                          </div>

                        </div>
                      </div>
                      <p>People that follow me may message me </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-yellow btnpadding" onClick={() => handleSave()}>Save </button>
                    <button className="btn btn-outline-grey ml-4">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MainSection Ends here */}
        </section>
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

