import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createDeliveryAddressRequest, getDeliveryAddressRequest } from "../../store/user/deliveryaddress/deliveryaddress.actions";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import { useSelector } from "react-redux";
import { getSearchedUsers } from "../../store/user/user.selector";
import { IsNullOrEmpty } from "../../helpers/utility";
import { getDeliveryAddresses } from "../../store/user/deliveryaddress/deliveryaddress.selector";

export default function DeliveryAddress() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [status, setStatus] = useState("Active");

  const { users } = useSelector((state) => {
    return {
      users: getSearchedUsers(state)
    }
  })
  const { deliveryAddress } = useSelector((state) => {
    return {
      deliveryAddress: getDeliveryAddresses(state),
    }
  });

  const validate = () => {
    return !IsNullOrEmpty(address) &&
      !IsNullOrEmpty(postCode) &&
      !IsNullOrEmpty(name) &&
      !IsNullOrEmpty(phone);
  }

  useEffect(() => {
    dispatch(getDeliveryAddressRequest());
  }, []);

  const handleSave = () => {
    let data = {
      "name": name,
      "phone": phone,
      "address": address,
      "subAddress": address1,
      "city": city,
      "isDefault": isDefault,
      "isSeller": isSeller,
      "postCode": postCode,  
      "status": status
    }

    dispatch(createDeliveryAddressRequest(data, history));
  }

  let isValid = validate();

  return (
    <div>
      <div>
        <section className="container-fluid">
          <Header history={history} />
          <div className="row">
            <Sidebar history={history} />
       
            <div className="col-lg-3 col-md-3 col-12 settingborder">
              <div className="snippet-hdr">
                <h3 className="mt-4 mb-4">My address</h3>
              </div>
              <div className="row">
                <div className="col-md-12 profile-blk">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group snippet-cont">
                        <label className="text-bold">Name</label>
                        <div className="snippet-cont">
                          <input type="text" className="form-control" name placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group snippet-cont">
                        <label className="text-bold">Phone</label>
                        <div className="snippet-cont">
                          <input type="text" className="form-control" name placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group snippet-cont">
                        <label className="text-bold">Address</label>
                        <textarea type="Date" className="form-control h-25" rows={2} name placeholder="House number, Unit number" value={address} onChange={(e) => setAddress(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group snippet-cont">
                        <label className="text-bold">Address 2</label>
                        <textarea type="Date" className="form-control h-25" rows={2} name placeholder="Block / Road" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-12 col-md-12 snippet-cont">
                      <label className="text-bold">City/ Town</label>
                      <div className="snippet-cont">
                        <input type="text" className="form-control" name placeholder="City/ Town" value={city} onChange={(e) => setCity(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-12 col-md-12 snippet-cont">
                      <label className="text-bold">Postcode</label>
                      <div className="snippet-cont">
                        <input type="text" className="form-control" name placeholder="Postcode" value={postCode} onChange={(e) => setPostCode(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-12 col-md-12 snippet-cont">
                      <label className="text-bold">Status</label>
                      <input type="radio" className="ml-2" checked={status === "Active"} onClick={(e) => setStatus("Active")} />&nbsp; Active
                      <input type="radio" className="ml-2" checked={status === "Inactive"} onClick={(e) => setStatus("Inactive")} />&nbsp; InActive
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group snippet-cont">
                        <input className="checkbox" type="checkbox" name required onClick={(e) => setIsDefault(e.target.checked)} />
                        <label className="text-bold ml-2">Is this Default Delivery Address</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group snippet-cont">
                        <input className="checkbox" type="checkbox" name onClick={(e) => setIsSeller(e.target.checked)} />
                        <label className="text-bold ml-2">Is this Default Seller Address</label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button className="btn btn-yellow btnpadding" disabled={!isValid} onClick={() => handleSave()}>Save </button>
                    <button className="btn btn-outline-grey ml-4">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 settingborder">
              <div className="snippet-hdr"><h3 className="mt-4 mb-4">Address list</h3></div>
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th className="checkbox-th">
                        <span>No</span>
                      </th>
                      <th className="checkbox-th">
                        <span>Name</span>
                      </th>
                      <th className="checkbox-th displaysingleline">
                        <span>Phone</span>
                      </th>
                      <th className="checkbox-th displaysingleline">
                        <span>City</span>
                      </th><th className="checkbox-th">
                        <span>Postcode</span>
                      </th>
                      <th className="checkbox-th">
                        <span>Is Default</span>
                      </th>
                      <th className="checkbox-th">
                        <span>Is Seller</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      deliveryAddress && deliveryAddress.map((item, index) => {
                        return <tr key={item._id}>
                          <td className="py-3 ">
                            <span>{index + 1}</span>
                          </td>
                          <td className="py-3 ">
                            <span>{item.name}</span>
                          </td>
                          <td className="py-3">
                            <span>{item.phone}</span>
                          </td>
                          <td className="py-3">
                            <span>{item.city}</span>
                          </td>
                          <td className="py-3">
                            <span>{item.postCode}</span>
                          </td>
                          <td className="py-3">
                            <span>{item.isDefault ? "Yes" : "No"}</span>
                          </td>
                          <td className="py-3">
                            <span>{item.isSeller ? "Yes" : "No"}</span>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
