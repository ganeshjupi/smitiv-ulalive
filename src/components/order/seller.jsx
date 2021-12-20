import React from "react";
import Header from "../common/topbar";
import CloseIcon from "../../assets//images/close-ico.svg"
import Profile from "../../assets//images/Profile.svg"
import $ from "jquery";

class Seller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        $(function () {
            $(".fold-table tr.view").on("click", function () {
                $(this).toggleClass("open").next(".fold").toggleClass("open");
            });
        });
    }

    render() {
        return (
            <div>
                <div>
                    {/* Main Wrapper Starts here */}
                    <section className="container-fluid">
                        {/* header Starts here */}
                        <Header />
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-12 mt-4 mb-4 center">
                                <div className="snippet-block">

                                    <div className="row  mt-4 mb-4">
                                        <div className="col-lg-3 col-md-3 col-6">
                                            <a href="profile-subcribe.html" className="nav-link mainNavItemChild active">All</a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-6">
                                            <a href="profile-following.html" className="nav-link mainNavItemChild ">To Ship</a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-6">
                                            <a href="profile-follower.html" className="nav-link mainNavItemChild ">To Received</a>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-6">
                                            <a href="profile-follower.html" className="nav-link mainNavItemChild ">Completed</a>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-12 col-md-12 snippet-cont paddingsearch">

                                        <input type="text" className="form-control formbg searchiconspace" placeholder="Search" />
                                        <a href="javascript:;" className="search-icon"><img src="../images/search-icon.svg" alt="icon" /></a>


                                    </div>

                                    <div className="hdr-right mb-3">
                                        <div className="action-sec">
                                            <div className="col-12 text-xl-right text-left">
                                                <div className="row paddingsearch">
                                                    <div className="pl-2 col-12 col-lg-6 col-md-6 mb-4">
                                                        <select className="form-control bg-white">
                                                            <option>All Categories</option>
                                                            <option>Feb</option>
                                                            <option>Mar</option>

                                                        </select>
                                                    </div>
                                                    <div className="pl-2">
                                                        <select className="form-control bg-white">
                                                            <option>Period : All time</option>
                                                            <option>Feb</option>
                                                            <option>Mar</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive paddingsearch">
                                        <table className="custom-table  fold-table">
                                            <thead>
                                                <tr>
                                                    <th className="checkbox-th text-center">
                                                        <span>Name</span>
                                                    </th>
                                                    <th className="checkbox-th  text-center">
                                                        <span>Item</span>
                                                    </th><th className="checkbox-th text-center">
                                                        <span>Qnty</span>
                                                    </th>
                                                    <th className="checkbox-th text-center">
                                                        <span>Total</span>
                                                    </th>
                                                    <th className="checkbox-th text-center">
                                                        Process
                                                    </th>
                                                    <th className="checkbox-th">
                                                    </th>
                                                    <th className="checkbox-th">
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="view">
                                                    <td className="py-3">
                                                        <div className="imagedisplay">
                                                            <img src="../images/profilepic.svg" className="ml-2 image" alt="icon" />
                                                            <span className="vertical  text-bold pl-2 pt-3">Lincoln Levin</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3">
                                                        <div className="imagedisplay">
                                                            <img src="../images/buytree.svg" className="ml-2 image" alt="icon" />
                                                            <span className="vertical  pl-2 pt-3">Tree decoration Sale!</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 text-center" >
                                                        <p className="text-center">3 x</p>
                                                    </td>
                                                    <td className="py-3" colspan="1">
                                                        <p className="text-danger text-center">SGD 1.99</p>
                                                    </td>
                                                    <td className="py-3 text-center" colspan="1">
                                                        <button className="btn btn-red ">Ship</button>
                                                    </td>
                                                    <td className="py-3" colspan="2">
                                                        <button className="faq-toggle position-relative table-toggle action-wrap text-rigth">
                                                            <img src="../images/downarrow.svg" className="image-fluid" alt="icon" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="fold">
                                                    <td colSpan={7}>
                                                        <div className="fold-content">
                                                            <div className="snippet-block bg-grey my-4">
                                                                <table className="custom-table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" c className="ml-2 image" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-3 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2 image" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-3 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2 image" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-4 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="row">
                                                                    <div className="col-12 mt-4 text-left">
                                                                        <div className="col-md-12 profile-blk">
                                                                            <h3>Shipping information</h3>
                                                                            <div className="row ">
                                                                                <div className="col-lg-12 col-md-12">
                                                                                    <div className="form-group">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 col-md-12 col-6">
                                                                                                <label className="text-bold">Courier</label>
                                                                                                <div className="snippet-cont">
                                                                                                    <input type="text" className="form-control" name defaultValue="Antran" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-12 col-6">
                                                                                                <label className="text-bold">Tracking number </label>
                                                                                                <div className="snippet-cont">
                                                                                                    <input type="text" className="form-control" name defaultValue="Antran" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="form-group col-lg-6 col-md-12">
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-3 col-md-3">
                                                                                    <div className="form-group snippet-cont">
                                                                                        <label className="text-bold"> Add Bill Attahment</label>
                                                                                        {/* Upload Area */}
                                                                                        <div id="uploadArea" className="upload-area">
                                                                                            {/* Header */}
                                                                                            <div className="upload-area__header">
                                                                                                <p className="upload-area__paragraph">
                                                                                                    <strong className="upload-area__tooltip">
                                                                                                        <span className="upload-area__tooltip-data" />
                                                                                                        {/* Data Will be Comes From Js */}
                                                                                                    </strong>
                                                                                                </p>
                                                                                            </div>
                                                                                            {/* End Header */}
                                                                                            {/* Drop Zoon */}
                                                                                            <div id="dropZoon" className="upload-area__drop-zoon drop-zoon">
                                                                                                <img src="../images/cam.svg" />
                                                                                                <span id="loadingText" className="drop-zoon__loading-text">Please Wait</span>
                                                                                                <img src alt="Preview Image" id="previewImage" className="drop-zoon__preview-image" draggable="false" />
                                                                                                <input type="file" id="fileInput" className="drop-zoon__file-input" accept="image/*" />
                                                                                            </div>
                                                                                            {/* End Drop Zoon */}
                                                                                            {/* File Details */}
                                                                                            <div id="fileDetails" className="upload-area__file-details file-details">
                                                                                                <h3 className="file-details__title">Uploaded File</h3>
                                                                                                <div id="uploadedFile" className="uploaded-file">
                                                                                                    <div className="uploaded-file__icon-container">
                                                                                                        <i className="bx bxs-file-blank uploaded-file__icon" />
                                                                                                        <span className="uploaded-file__icon-text" />
                                                                                                        {/* Data Will be Comes From Js */}
                                                                                                    </div>
                                                                                                    <div id="uploadedFileInfo" className="uploaded-file__info">
                                                                                                        <span className="uploaded-file__name">Proejct 1</span>
                                                                                                        <span className="uploaded-file__counter">0%</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            {/* End File Details */}
                                                                                        </div>
                                                                                        {/* End Upload Area */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 mt-4 text-left">
                                                                        <div className="col-md-12 profile-blk">
                                                                            <h3>Shipping information</h3>
                                                                            <div className="row ">
                                                                                <div className="col-lg-12 col-md-12">
                                                                                    <div className="form-group">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 col-md-12 col-6">
                                                                                                <label className="text-bold">Full name</label>
                                                                                                <div className="snippet-cont">
                                                                                                    <input type="text" className="form-control" name defaultValue="Antran" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-12 col-6 ">
                                                                                                <div className="form-group">
                                                                                                    <label className="text-bold">Phone Number</label>
                                                                                                    <div className="snippet-cont">
                                                                                                        <div className="input-group mb-3">
                                                                                                            <div className="input-group-prepend">
                                                                                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../images/Flag of New Zealand.svg" alt="icon" /><span className="text-right pl-2">+65</span></button>
                                                                                                                <div className="dropdown-menu">
                                                                                                                    <a className="dropdown-item" href="#">Action</a>
                                                                                                                    <a className="dropdown-item" href="#">Another action</a>
                                                                                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                                                                                    <div role="separator" className="dropdown-divider" />
                                                                                                                    <a className="dropdown-item" href="#">Separated link</a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 col-md-12 col-6">
                                                                                                <label className="text-bold">Address</label>
                                                                                                <div className="snippet-cont">
                                                                                                    <textarea type="Date" className="form-control h-25" rows={4} name value="20-Nov-21" defaultValue={""} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <input type="checkbox" aria-label="Text input with dropdown button" />
                                                                            <label>Save information</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 mt-4 text-left">
                                                                        <div className="col-md-12 profile-blk">
                                                                            <h3>ETA (Estimated Time of Arrival)</h3>
                                                                            <div className="row ">
                                                                                <div className="col-lg-12 col-md-12">
                                                                                    <div className="form-group">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 col-md-12 col-6">
                                                                                                <div className="row">
                                                                                                    <div className="col-6 col-lg-6 col-md-6">
                                                                                                        <label>Purchase date</label>
                                                                                                    </div>
                                                                                                    <div className="col-6 col-lg-6 col-md-6">
                                                                                                        <label>09-09-2021</label>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 col-md-12 col-6">
                                                                                                <div className="row">
                                                                                                    <div className="col-6 col-lg-6 col-md-6">
                                                                                                        <label>Purchase time</label>
                                                                                                    </div>
                                                                                                    <div className="col-6 col-lg-6 col-md-6">
                                                                                                        <label>12-02</label>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 col-md-12 col-6 ">
                                                                                                <div className="form-group">
                                                                                                    <label className="text-bold">Date</label>
                                                                                                    <div className="snippet-cont">
                                                                                                        <input type="datetime-local" className="form-control" name />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-12 col-lg-12 mt-4 mb-4  text-right">
                                                                                    <button className="btn btn-outline-grey ">Cancel</button>
                                                                                    <button className="btn btn-yellow btnpadding ml-4">Save </button>
                                                                                </div>
                                                                                <span className="lineseperater" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row filter-sec">
                                                                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-3">
                                                                    </div>
                                                                    <div className="float-right col-md-6 col-12">
                                                                        <table className="custom-table">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="py-3 text-right"><p className="text-bold">Order Item </p></td>
                                                                                    <td className="py-3 text-right">
                                                                                        <p className="text-danger text-bold">SGD 1.99</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="py-3 text-right"><p className="text-bold">Shipping Fee</p></td>
                                                                                    <td className="py-3 text-right">
                                                                                        <p className="text-danger text-bold">Free</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="py-3 text-right"><p className="text-bold">Total</p></td>
                                                                                    <td className="py-3 text-right">
                                                                                        <p className="text-danger text-bold">SGD 1.99</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className="col-lg-12 col-md-12 col-12  mb-3">
                                                                            <div className="action-sec">
                                                                                <div className="col-12">
                                                                                    <div className="col-12 col-lg-12 mt-4 mb-4  text-right">
                                                                                        <button className="btn btn-green btnpadding ">Ship</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div></td>
                                                </tr>
                                                <tr className="view">
                                                    <td className="py-3">
                                                        <div className="imagedisplay">
                                                            <img src="../images/profilepic.svg" alt="icon" />
                                                            <span className="vertical  text-bold pl-2 pt-3">Lincoln Levin</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3">
                                                        <div className="imagedisplay">
                                                            <img src="../images/buytree.svg" className="ml-2 image" alt="icon" />
                                                            <span className="vertical  pl-2 pt-3">Tree decoration Sale!</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 text-center" >
                                                        <p className="text-center">3 x</p>
                                                    </td>
                                                    <td className="py-3" colspan="1">
                                                        <p className="text-danger text-center">SGD 1.99</p>
                                                    </td>
                                                    <td className="py-3 text-center" colspan="1">
                                                        <button className="btn btn-transparent text-danger">Shipped</button>
                                                    </td>
                                                    <td className="py-3" colspan="2">
                                                        <button className="faq-toggle position-relative table-toggle action-wrap text-rigth">
                                                            <img src="../images/downarrow.svg" className="image-fluid" alt="icon" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="fold">
                                                    <td colSpan={7}>
                                                        <div className="fold-content">
                                                            <div className="snippet-block bg-grey my-4">
                                                                <div className="row filter-sec py-4">
                                                                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-3">
                                                                        <div className="action-sec">
                                                                            <div className="col-12">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-6">
                                                                                        <h3><img src="../images/checkmap.svg" alt="icon" />Ship to address</h3>
                                                                                        <p>Antran</p>
                                                                                        <span className="text-grey">2972 Westheimer Rd. Santa Ana,<br /> Illinois
                                                                                            +84904240390 </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-12 col-md-12 col-12  mb-3">
                                                                        <div className="action-sec">
                                                                            <div className="col-12 text-xl-right text-left">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-6">
                                                                                        <p className="text-grey">Purchase Date 09-09-2021</p>
                                                                                        <p className="text-grey">Purchase time 09-09-2021</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <table className="custom-table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-3 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2 image" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-3 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-4 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="float-right col-md-5">
                                                                    <table className="custom-table">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">order Item</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">SGD 1.99</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">Shipping Fee</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">Free</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">Total</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">SGD 1.99</p>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div></td>
                                                </tr>
                                                <tr className="view">
                                                    <td className="py-3">
                                                        <div className="imagedisplay">
                                                            <img src="../images/profilepic.svg" alt="icon" />
                                                            <span className="vertical  text-bold pl-2 pt-3">Lincoln Levin</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3">
                                                        <div className="imagedisplay">
                                                            <img src="../images/buytree.svg" className="ml-2 image" alt="icon" />
                                                            <span className="vertical  pl-2 pt-3">Tree decoration Sale!</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 text-center" >
                                                        <p className="text-center">3 x</p>
                                                    </td>
                                                    <td className="py-3" colspan="1">
                                                        <p className="text-danger text-center">SGD 1.99</p>
                                                    </td>
                                                    <td className="py-3 text-center" colspan="1">
                                                        <button className="btn btn-transparent text-pelorous">Complete</button>
                                                    </td>
                                                    <td className="py-3" colspan="2">
                                                        <button className="faq-toggle position-relative table-toggle action-wrap text-rigth">
                                                            <img src="../images/downarrow.svg" className="image-fluid" alt="icon" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="fold">
                                                    <td colSpan={7}>
                                                        <div className="fold-content">
                                                            <div className="snippet-block bg-grey my-4">
                                                                <div className="row filter-sec py-4">
                                                                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-3">
                                                                        <div className="action-sec">
                                                                            <div className="col-12">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-6">
                                                                                        <h3><img src="../images/checkmap.svg" alt="icon" />Ship to address</h3>
                                                                                        <p>Antran</p>
                                                                                        <span className="text-grey">2972 Westheimer Rd. Santa Ana,<br /> Illinois
                                                                                            +84904240390 </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-12 col-md-12 col-12  mb-3">
                                                                        <div className="action-sec">
                                                                            <div className="col-12 text-xl-right text-left">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-6">
                                                                                        <p className="text-grey">Purchase Date 09-09-2021</p>
                                                                                        <p className="text-grey">Purchase time 09-09-2021</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group snippet-cont">
                                                                        <label className="text-bold"> Add Bill Attahment</label>
                                                                    </div>
                                                                    <img src="../images/bill.svg" className="ml-2" alt="icon" />
                                                                </div>
                                                                <table className="custom-table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2 image" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-3 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-3 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-4 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="float-right col-md-5">
                                                                    <table className="custom-table">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">Order Item</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">SGD 1.99</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">Shipping Fee</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">Free</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">Total</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">SGD 1.99</p>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="col-12 col-lg-12 mt-4 mb-4  text-right">
                                                                        <button className="btn btn-yellow btnpadding">Continue Shopping</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div></td>
                                                </tr>
                                                <tr className="view">
                                                    <td className="py-3">
                                                        <div className="imagedisplay">
                                                            <img src="../images/profilepic.svg" alt="icon" />
                                                            <span className="vertical  text-bold pl-2 pt-3">Lincoln Levin</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3">
                                                        <div className="imagedisplay">
                                                            <img src="../images/buytree.svg" className="ml-2 image" alt="icon" />
                                                            <span className="vertical  pl-2 pt-3">Tree decoration Sale!</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 text-center" >
                                                        <p className="text-center">3 x</p>
                                                    </td>
                                                    <td className="py-3" colspan="1">
                                                        <p className="text-danger text-center">SGD 1.99</p>
                                                    </td>
                                                    <td className="py-3 text-center" colspan="1">
                                                        <button className="btn btn-blue">To Receive</button>
                                                    </td>
                                                    <td className="py-3" colspan="2">
                                                        <button className="faq-toggle position-relative table-toggle action-wrap text-rigth">
                                                            <img src="../images/downarrow.svg" className="image-fluid" alt="icon" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="fold">
                                                    <td colSpan={7}>
                                                        <div className="fold-content">
                                                            <div className="snippet-block bg-grey my-4">
                                                                <div className="row filter-sec py-4">
                                                                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-3">
                                                                        <div className="action-sec">
                                                                            <div className="col-12">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-6">
                                                                                        <h3><img src="../images/checkmap.svg" alt="icon" />Ship to address</h3>
                                                                                        <p>Antran</p>
                                                                                        <span className="text-grey">2972 Westheimer Rd. Santa Ana,<br /> Illinois
                                                                                            +84904240390 </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-12 col-md-12 col-12  mb-3">
                                                                        <div className="action-sec">
                                                                            <div className="col-12 text-xl-right text-left">
                                                                                <div className="row">
                                                                                    <div className="col-lg-12 col-md-12 col-6">
                                                                                        <p className="text-grey">Purchase Date 09-09-2021</p>
                                                                                        <p className="text-grey">Purchase time 09-09-2021</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3">
                                                                    <div className="form-group snippet-cont">
                                                                        <label className="text-bold"> Add Bill Attahment</label>
                                                                    </div>
                                                                    <img src="../images/bill.svg" className="ml-2" alt="icon" data-toggle="modal" data-target="#delete-pop" />
                                                                </div>
                                                                <table className="custom-table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-3 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-3 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="py-3">
                                                                                <div>
                                                                                    <img src="../images/buytree.svg" className="ml-2" alt="icon" />
                                                                                    <span className="vertical text-bold">Tree decoration Sale!</span>
                                                                                </div>
                                                                            </td>
                                                                            <td className="py-3">
                                                                                x1
                                                                            </td>
                                                                            <td className="py-4 text-right">
                                                                                <p className="text-danger text-bold">SGD 1.99</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="float-right col-md-5">
                                                                    <table className="custom-table">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">Order Item</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">SGD 1.99</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">Shipping Fee</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">Free</p>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="py-3 text-right"><p className="text-bold">Total</p></td>
                                                                                <td className="py-3 text-right">
                                                                                    <p className="text-danger text-bold">SGD 1.99</p>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="col-12 col-lg-12 mt-4 mb-4  text-right">
                                                                        <button className="btn btn-yellow btnpadding">Received</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>


                        </div>


                        {/* MainSection Ends here */}

                    </section>
                    <div className="modal fade" id="delete-pop">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <button type="button" className="close" data-dismiss="modal">
                                    <img src={CloseIcon} alt="icon" />
                                </button>
                                {/* Modal body Starts here */}
                                <div className="modal-body text-center p-3 p-md-5">
                                    <img className="img-fluid" src={Profile} alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main Wrapper Ends here */}
                </div>

            </div>
        );
    }
}

export default Seller;


