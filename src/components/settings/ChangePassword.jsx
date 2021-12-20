import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IsNullOrEmpty } from "../../helpers/utility";
import { changePasswordRequest } from "../../store/user/user.actions";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate = () => {
    return !IsNullOrEmpty(oldPassword) &&
      !IsNullOrEmpty(newPassword) &&
      !IsNullOrEmpty(confirmPassword) &&
      newPassword === confirmPassword
  }
  const handleSave = () => {
    if (validate()) {
      dispatch(changePasswordRequest({
        oldPassword: oldPassword,
        newPassword: newPassword
      }))
    }
  }

  return (
    <div>
      <div>
        <section className="container-fluid">
          {/* header Starts here */}
          <Header />
          <div className="row">
            <Sidebar />
            {/* Mobile menu overlay Starts here */}

            {/* Mobile menu overlay Ends here */}
            {/* Left Wrap Ends here */}

            <div className="col-lg-12 col-md-12 col-12 settingborder">
              <div className="snippet-hdr">
                <h3 className="mt-4 mb-4">Change password</h3>
              </div>

              <div className="row">
                <div className="form-group col-lg-12 col-md-12 snippet-cont">
                  <label className="text-bold">Old password</label>
                  <input value={oldPassword} className="form-control" type="password" onChange={(e) => setOldPassword(e.target.value)} name placeholder="Old password" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-12 col-md-12 snippet-cont">
                  <label className="text-bold">New password</label>
                  <div className="snippet-cont">
                    <input type="password" value={newPassword} className="form-control" onChange={(e) => setNewPassword(e.target.value)} name placeholder="New password" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-12 col-md-12 snippet-cont">
                  <label className="text-bold">Retype new password</label>
                  <div className="snippet-cont">
                    <input type="password" value={confirmPassword} className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} name placeholder="Retype New password" />
                  </div>
                </div>
              </div>

              <div className="text-center row">
                <div className="col-6">
                  <button onClick={() => handleSave()} className="btn btn-yellow btnpadding">Save </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-outline-grey ml-4">Cancel</button>
                </div>

              </div>
            </div>
          </div>

          {/* MainSection Ends here */}
        </section>

      </div>

    </div>
  );
}

