import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownArrow from "../../assets/images/downarrow.svg";
import { fetchPaymentConfigRequest } from "../../store/shopping/shopping.actions";
import { getPaymentConfig } from "../../store/shopping/shopping.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";

export default function AddBank() {
  const dispatch = useDispatch();
  const { paymentConfig } = useSelector((state) => {
    return {
      paymentConfig: getPaymentConfig(state)
    }
  })
  useEffect(() => {
    dispatch(fetchPaymentConfigRequest());
  }, []);

  return (
    <div>
      <div>
        <section className="container-fluid">
          <Header />
          <div className="row">
            <Sidebar />


            <div className="col-lg-9 col-md-9 col-12 settingborder mb-4">
              <h3 className="text-bold mt-4">Account</h3>


              <div className="row">
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="form-group ">
                    <label className="text-bold mt-4">Total fund in account</label>
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-md-6 mt-4">
                  <div className="hdr-right">
                    <img src={DownArrow} alt="icon" />
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12 form-group search-input">

                  <input type="text" name placeholder="RM 5,501.02" className="form-control text-bold widthdraw" />

                </div>
              </div>
              <button type='button' className="btn btn-yellow btnpadding mt-4">Withdraw fund</button>
              <span className="lineseperater mt-4"></span>
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="form-group ">
                    <label className="text-bold mt-4">Debit/ Credit Card</label>
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-md-6 mt-4">
                  <div className="hdr-right">
                    <img src={DownArrow} alt="icon" />
                  </div>
                </div>
              </div>
              <form >

                <div className="row mt-4">
                  <div className="col-md-4 form-group search-input">
                    <label className="text-bold">Name on card</label>
                    <input type="text" name placeholder="Fareez" className="form-control" />

                  </div>
                  <div className="col-md-3 form-group">
                    <label className="text-bold">Card number</label>
                    <div className="input-group">

                      <input type="text" name placeholder="XXXX XXXX XXXX XXXX" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-2 form-group">
                    <label className="text-bold">Expiry date</label>
                    <div className="input-group">

                      <input type="text" name placeholder="(MM/YY)" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-1 form-group">
                    <label className="text-bold">CCV</label>
                    <div className="input-group">

                      <input type="text" name placeholder="XXX" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-1 form-group">
                    <label className="text-bold"></label>
                    <div className="form-group mt-2">
                      <button type='button' className="btn btn-yellow btnpadding">Edit</button>
                    </div>
                  </div>

                </div>

                <button type='button' className="btn btn-yellow btnpadding">+ Add New card</button>
              </form>


              <span className="lineseperater mt-4"></span>
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6">
                  <div className="form-group ">
                    <label className="text-bold mt-4">Setup bank account</label>
                  </div>
                </div>
                <div className="col-6 col-lg-6 col-md-6 mt-4">
                  <div className="hdr-right">
                    <img src={DownArrow} alt="icon" />
                  </div>
                </div>
              </div>
              <form >

                <div className="row mt-4">
                  <div className="col-md-2 form-group search-input">
                    <label className="text-bold">Bank</label>
                    <input type="text" name placeholder="Fareez" className="form-control" />

                  </div>
                  <div className="col-md-3 form-group">
                    <label className="text-bold">Account name</label>
                    <div className="input-group">

                      <input type="text" name placeholder="XXXX XXXX XXXX XXXX" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-3 form-group">
                    <label className="text-bold">Account number</label>
                    <div className="input-group">

                      <input type="text" name placeholder="(MM/YY)" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-1 form-group">
                    <label className="text-bold"></label>
                    <div className="form-group mt-2">
                      <button type='button' className="btn btn-yellow btnpadding">Edit</button>
                    </div>
                  </div>
                  <div className="col-md-2 form-group ml-5">
                    <label className="text-bold"></label>
                    <div className="form-group mt-2">
                      <button type='button' className="btn btnwidthdrawgray">Set as default</button>
                    </div>
                  </div>

                </div>


                <div className="row mt-4">
                  <div className="col-md-2 form-group search-input">
                    <label className="text-bold">Bank</label>
                    <input type="text" name placeholder="Fareez" className="form-control" />

                  </div>
                  <div className="col-md-3 form-group">
                    <label className="text-bold">Account name</label>
                    <div className="input-group">

                      <input type="text" name placeholder="XXXX XXXX XXXX XXXX" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-3 form-group">
                    <label className="text-bold">Account number</label>
                    <div className="input-group">

                      <input type="text" name placeholder="(MM/YY)" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-1 form-group">
                    <label className="text-bold"></label>
                    <div className="form-group mt-2">
                      <button type='button' className="btn btn-yellow btnpadding">Edit</button>
                    </div>
                  </div>
                  <div className="col-md-2 form-group ml-5">
                    <label className="text-bold"></label>
                    <div className="form-group mt-2">
                      <button type='button' className="btn btnwidthdraw">Set as default</button>
                    </div>
                  </div>

                </div>
                <button type='button' className="btn btn-yellow btnpadding">+ Add New Bank</button>
              </form>

            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
