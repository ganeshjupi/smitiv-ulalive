
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Order from "../../assets/images/itembox.svg";
import Select from "../../assets/images/select.svg";
import Info from "../../assets/images/info.svg";
import Ship from "../../assets/images/ship.svg";
import ThumbLine from "../../assets/images/thumbline.svg";
import { uploadProductsRequest } from "../../store/file/file.actions";
import { IsNullOrEmpty } from "../../helpers/utility";
import { addProductRequest } from "../../store/shopping/shopping.actions";
import { useSelector } from "react-redux";

import { getUploadedProductImage } from "../../store/file/file.selector";
require('dotenv').config();

export default function AddProduct() {
  const dispatch = useDispatch();
  const [bannerImageSrc, setBannerImageSrc] = useState("");
  const [itemName, setitemName] = useState("");
  const [stockQuantity, setstockQuantity] = useState("");
  const [itemDescription, setitemDescription] = useState("");
  const [itemPrice, setitemPrice] = useState("");
  const [shippingFee, setshippingFee] = useState("0.00");

  const { uploadProductResponse } = useSelector((state) => {
    return {
      uploadProductResponse: getUploadedProductImage(state)
    }
  })

  const changeBanner = async (e) => {
    const files = e.target.files[0];

    dispatch(uploadProductsRequest(files));

    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setBannerImageSrc(reader.result);
    }, false);

    if (files) {
      reader.readAsDataURL(files);
    } else {
      setBannerImageSrc("");
    }
  }

  const validate = () => {
    return !IsNullOrEmpty(itemName) &&
      !IsNullOrEmpty(itemName) &&
      !IsNullOrEmpty(stockQuantity) &&
      !IsNullOrEmpty(itemDescription) &&
      !IsNullOrEmpty(itemPrice) &&
      !IsNullOrEmpty(shippingFee) &&
      !IsNullOrEmpty(bannerImageSrc) &&
      parseFloat(itemPrice) > 0
  }

  const handleClick = () => {
    dispatch(addProductRequest({
      name: itemName,
      descriptions: itemDescription,
      images: `https://${uploadProductResponse.bucket}.s3.ap-southeast-1.amazonaws.com/${uploadProductResponse.key}`,
      attachments: uploadProductResponse._id,
      price: parseFloat(itemPrice),
      shippingFee: parseFloat(shippingFee),
      quantity: parseFloat(stockQuantity),
    }))
  }

  let isValid = validate();
  let clasName = bannerImageSrc ? 'addproductimage' : 'img-thumbnail';
  return (
    
    <div className="row">
      <div className="col-12 col-lg-12 col-md-12 mt-12 mb-12">
        <div className="snippet-block bg-grey">
          <div className="col-12 col-lg-12 col-md-12 py-4">
            <div className="snippet-cont fm-snippet py-4 edititem bg-white">
              <div className="text-center">
                <div className="py-4">
                  <div className="upload-btn-img">
                  
                    <img src={bannerImageSrc ? bannerImageSrc : ThumbLine} className={clasName}  alt="user profile image" />
                    <input type="file" name="banner_image" onChange={changeBanner} />
                    <p className="mb-0 mt-2 line text-bold">Thumbnail</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-12 col-md-12 snippet-cont">
                <label className="text-bold"> <img src={Order} />Item name</label>
                <div className="snippet-cont">
                  <input type="text" className="form-control bg-white" name placeholder="Item name" value={itemName} onChange={(e) => setitemName(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-12 col-md-12 snippet-cont">
                <label className="text-bold"><img src={Select} />Stock quantity <span className="text-danger">*</span></label>
                <div className="snippet-cont">
                  <input type="text" className="form-control  bg-white" name placeholder="Enter stock quantity" value={stockQuantity} onChange={(e) => setstockQuantity(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-12 col-md-12 snippet-cont">
                <label className="text-bold"><img src={Info} />Item description</label>
                <div className="snippet-cont">
                  <textarea type="Date" className="form-control h-25 bg-white" rows={4} name placeholder="Enter item description" defaultValue={""} value={itemDescription} onChange={(e) => setitemDescription(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <label className="text-bold"><i className="fa fa-shipping"></i>Item price</label>
                <div className="snippet-cont">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend bg-white">
                      <button type="button" className="bg-white itemprice" aria-haspopup="true" aria-expanded="false">SGD</button>
                    </div>
                    <input type="number" className="form-control bg-white" aria-label="Text input with dropdown button" placeholder=" 0.00" value={itemPrice} onChange={(e) => setitemPrice(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="form-group">
                  <label className="text-bold"><img src={Ship} />Shipping fee<span className="text-danger">*</span> </label>
                  <div className="snippet-cont">
                    <div className="btn-group">
                      <button type="button" className="btn bg-white itemprice">SGD</button>
                      <button type="button" className="btn bg-white itemprice dropdown-toggle-split w-10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>{shippingFee}</span>
                        <img src="../images/dropdown.svg" alt="" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={(e) => setshippingFee("0.00")}>0.00</a>
                        <a className="dropdown-item" onClick={(e) => setshippingFee("20.00")}>20.00</a>
                        <a className="dropdown-item" onClick={(e) => setshippingFee("50.00")}>50.00</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="text-center">
          <button className="btn btn-refer btnpadding" onClick={() => handleClick()} disabled={!isValid} > Save Change</button>
        </div>
      </div>
    </div>
  );
}



