import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrivateLoungeRequest, updatePrivateLoungeRequest } from "../../store/user/privatelounge/privatelounge.actions";
import { getCurrentPrivateLounge } from "../../store/user/privatelounge/privatelounge.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";

export default function PrivateLounge() {
  const dispatch = useDispatch();
  const [annuallySubscription, setAnnuallySubscription] = useState("");
  const [monthlySubscription, setMonthlySubscription] = useState("");
  const [description, setDescription] = useState("");

  const { privacylounge } = useSelector((state) => {
    return {
      privacylounge: getCurrentPrivateLounge(state)
    }
  });

  useEffect(() => {
    dispatch(getPrivateLoungeRequest())
  }, []);


  useEffect(() => {
    if (privacylounge) {
      setAnnuallySubscription(privacylounge.annuallySubscription);
      setMonthlySubscription(privacylounge.monthlySubscription);
      setDescription(privacylounge.description);
    }
  }, [privacylounge]);

  const handleSave = () => {
    dispatch(updatePrivateLoungeRequest({
      monthlySubscription: monthlySubscription,
      description: description,
      annuallySubscription: annuallySubscription
    }))
  }

  return (
    <div>
      <div>
        <section className="container-fluid">
          {/* header Starts here */}
          <Header />
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-9 col-12 settingborder">
              <div className="snippet-hdr">
                <h3 className="mt-4 mb-4">Subscription</h3>
              </div>
              <div className="snippet-hdr">
                <h3 className="mb-4">Private lounge</h3>
              </div>
              <label className="text-bold">User can set monthly subscription fee for his private lounge</label>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-9 col-md-12">
                      <div className="snippet-cont py-4 ">
                        <label className="text-bold">Set monthly subscription fee for VIP circle</label>
                        <div className="flex">
                          <input value={monthlySubscription} type="text" className="form-control col-lg-8" onChange={(e) => setMonthlySubscription(e.target.value)} name defaultValue="Antran" />
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
                          <input value={annuallySubscription} type="text" className="form-control col-lg-8" onChange={(e) => setAnnuallySubscription(e.target.value)} name defaultValue="Antran" />
                          <p className="mt-2 ml-2">/ annum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      <div className="form-group snippet-cont">
                        <label className="text-bold">Private lounge description</label>
                        <textarea value={description} type="Date" className="form-control h-25" onChange={(e) => setDescription(e.target.value)} rows={4} name placeholder="Describe your private lounge contents" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <span className="lineseperater"></span>

                  <div className="row">
                    <div className="col-lg-9 col-md-12">
                      <div className="snippet-cont py-4 ">
                        <label className="text-bold">VIP Circle</label>

                      </div>
                      <label className="forgot-pass text-bold"> <img src="../images/add-4 1.svg" alt="icon" /> Add circle</label>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="custom-table text-center">

                      <tbody>
                        <tr className="borderbottom">

                          <td>
                            <div className="imagedisplay">
                              <img src="../images/preloved.svg" alt="icon" />


                            </div>
                            <label className="text-bold mt-3"> Preloved</label>
                          </td>
                          <td>
                            <div className="flex mb-4">
                              <label className="text-bold mt-3">Set Yearly subscription fee</label>
                              <input type="text" className="form-control col-lg-6  ml-4 pl-2" name defaultValue="Antran" />
                              <p className="mt-2 ml-2">/ month</p>
                            </div>
                            <div className="flex mb-4">
                              <label className="text-bold mt-3">Set Monthly subscription fee</label>
                              <input type="text" className="form-control col-lg-6  ml-2" name defaultValue="Antran" />
                              <p className="mt-2 ml-2">/ month</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex mb-5">
                              <button className="btn btn-yellow btnpadding ">Edit</button>
                            </div>
                          </td>
                        </tr>

                        <tr className="borderbottom">

                          <td>
                            <div className="imagedisplay">
                              <img src="../images/preloved.svg" alt="icon" />


                            </div>
                            <label className="text-bold mt-3"> Preloved</label>
                          </td>
                          <td>
                            <div className="flex mb-4">
                              <label className="text-bold mt-3">Set Yearly subscription fee</label>
                              <input type="text" className="form-control col-lg-6  ml-4 pl-2" name defaultValue="Antran" />
                              <p className="mt-2 ml-2">/ month</p>
                            </div>
                            <div className="flex mb-4">
                              <label className="text-bold mt-3">Set Monthly subscription fee</label>
                              <input type="text" className="form-control col-lg-6  ml-2" name defaultValue="Antran" />
                              <p className="mt-2 ml-2">/ month</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex mb-5">
                              <button className="btn btn-yellow btnpadding ">Edit</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>

                    </table>

                    <div className="text-center mb-4 mt-4">
                      <button onClick={() => handleSave()} className="btn btn-yellow btnpadding">Save </button>
                      <button className="btn btn-outline-grey ml-4">Cancel</button>
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

