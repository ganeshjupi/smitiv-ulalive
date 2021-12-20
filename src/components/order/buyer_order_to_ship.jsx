import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BuyTree from "../../assets//images/buytree.svg";
import DownArrow from "../../assets//images/downarrow.svg";
import ProfilePic from "../../assets//images/profilepic.svg";
import SearchIcon from "../../assets//images/search-icon.svg";
import { getOrderRequest } from "../../store/shopping/shopping.actions";
import { getOrderList } from "../../store/shopping/shopping.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import NoImage from "../../assets/images/no-image.png";
import { IsNullOrEmpty } from "../../helpers/utility";

export default function BuyerOrderToShip() {
	const dispatch = useDispatch();
	const [tableType, setTableType] = useState("");
	const { allOrders } = useSelector((state) => {
		return {
			allOrders: getOrderList(state)
		}
	});

	useEffect(() => {
		dispatch(getOrderRequest());
	}, []);

	let orders = allOrders;

	if (!IsNullOrEmpty(tableType)) {
		orders = orders.filter((x) => x.orderStatus === tableType)
	}

	return (
		<div>
			<section className="container-fluid">
				<Header />
				<div className="row">
					<Sidebar />
					<div className="col-lg-9 col-md-9 col-12 heigthfixing">
						<div className="snippet-block bg-grey my-4">
							<div className="col-12 mt-4 mb-4">
								<div className="row  mt-4 mb-4">
									<div className="col-lg-3 col-md-6 col-6">
										<a
											href="#"
											className={`nav-link mainNavItemChild ${tableType === 'all' && 'active'}`}
											onClick={(e) => setTableType("")}
										>
											All
										</a>
									</div>
									<div className="col-lg-3 col-md-6 col-6 ">
										<a
											href="#"
											className={`nav-link mainNavItemChild ${tableType === 'to_ship' && 'active'}`}
											onClick={(e) => setTableType("ToShip")}
										>
											To Ship
										</a>
									</div>
									<div className="col-lg-3 col-md-6 col-6">
										<a
											href="#"
											className={`nav-link mainNavItemChild ${tableType === 'to_received' && 'active'}`}
											onClick={(e) => setTableType("ToReceived")}
										>
											To Receive
										</a>
									</div>
									<div className="col-lg-3 col-md-6 col-6">
										<a
											href="#"
											className={`nav-link mainNavItemChild ${tableType === 'completed' && 'active'}`}
											onClick={(e) => setTableType("Completed")}
										>
											Completed
										</a>
									</div>
								</div>
								<div className="form-group col-lg-12 col-md-12 snippet-cont">
									<div className="snippet-cont ">
										<input
											type="text"
											className="form-control formbg searchiconspace"
											name
											placeholder="Search"
										/>
										<a href="javascript:;" className="search-icon">
											<img src={SearchIcon} alt="icon" />
										</a>
									</div>
								</div>

								{/* <div className="col-xl-6 col-lg-12 col-md-12 col-12 mb-3"></div> */}
								<div className="hdr-right mb-3">
									<div className="action-sec">
										<div className="col-12 text-xl-right text-left">
											<div className="row px-3">
												<div className="pl-2 mb-2">
													<select className="form-control bg-white btnpadding">
														<option>All Categories</option>
														<option>Feb</option>
														<option>Mar</option>

													</select>
												</div>
												<div className="pl-2">
													<select className="form-control bg-white  btnpadding">
														<option>Period : All time</option>
														<option>Feb</option>
														<option>Mar</option>

													</select>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="table-responsive">
									<table className="custom-table text-center">
										<thead>
											<tr>
												<th className="checkbox-th">
													<span>Name</span>
												</th>
												<th className="checkbox-th">
													<span>Item</span>
												</th><th className="checkbox-th ">
													<span>Qnty</span>
												</th>
												<th className="checkbox-th ">
													<span>Total</span>
												</th>
												<th className="checkbox-th">
													Process
												</th>
												<th className="checkbox-th">
												</th>
											</tr>
										</thead>
										<tbody>
											{
												orders.map((order) => {
													return <tr>
														<td className="py-3 tableheigth">
															<div className="imagedisplay">
																<span className="vertical text-bold">{order.buyerUserName}</span>
															</div>
															<br />
															<br />
															<span className="text-gray ml-4 position">{order.code}</span>
														</td>
														<td className="py-3">
															<div className="imagedisplay">
																<img className="buy" src={order.firstProduct.product.images} alt="icon" />
																<span className="vertical text-gray pt-2">{order.firstProduct.product.name}</span>
															</div>
														</td>
														<td className="py-3">
															<p className="text-gray">{order.firstProduct.quantity}x</p>
														</td>
														<td className="py-3">
															<p className="text-gray">{order.currency} {order.totalPrices}</p>
														</td>
														<td className="py-3">
															<p className="text-received">{order.orderStatus}</p>
														</td>
														<td className="py-3">
															<div className="action-wrap">
																<a href="javascript:;" className="action-icon">
																	<img className="img-fluid" src={DownArrow} alt="icon" />
																</a>
															</div>
														</td>
													</tr>
												})
											}
											{
												orders && orders.length === 0 ?
													<img src={NoImage} /> : <span />
											}
										</tbody>
									</table>
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
