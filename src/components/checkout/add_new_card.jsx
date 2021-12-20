import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addOrderRequest, fetchPaymentConfigRequest } from '../../store/shopping/shopping.actions';
import { getCartList, getPaymentConfig } from "../../store/shopping/shopping.selector";
import { getDeliveryAddressRequest } from "../../store/user/deliveryaddress/deliveryaddress.actions";
import { getDeliveryAddresses } from "../../store/user/deliveryaddress/deliveryaddress.selector";
import { getUserProfile } from '../../store/user/user.selector';
import BuyTree from "../../assets/images/buytree.svg";
import Header from "../common/topbar";
import CheckoutForm from "./checkoutForm";
import { Elements } from '@stripe/react-stripe-js';
var currency = "";
var stripePromise = null;
const ELEMENTS_OPTIONS = {
	fonts: [
		{
			cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
		},
	],
}

export default function AddNewCard() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [selectedAddress, setSelectedAddress] = useState("");

	useEffect(() => {
		dispatch(getDeliveryAddressRequest());
		dispatch(fetchPaymentConfigRequest());
	}, []);

	const { deliveryAddresses, cart, userProfile, paymentConfig } = useSelector((state) => {
		return {
			deliveryAddresses: getDeliveryAddresses(state),
			cart: getCartList(state),
			userProfile: getUserProfile(state),
			paymentConfig: getPaymentConfig(state)
		}
	});

	useEffect(() => {
		if (paymentConfig && paymentConfig.publicKey) {
            stripePromise = loadStripe(paymentConfig.publicKey);
        }
	}, [paymentConfig])

	useEffect(() => {
		let defaultAddress = deliveryAddresses.filter((x) => x.isDefault);
		if (defaultAddress.length > 0) {
			setSelectedAddress(defaultAddress[0]);
		}
	}, [deliveryAddresses])

	const handleChecked = (item) => {
		setSelectedAddress(item);
	}

	if (cart && cart.cartItems.length === 0) {
		history.push("/home");
	}

	const handleSave = (token, addresses) => {
		let data = {
			'carts': cart._id,
			'orderItems': cart.cartItems.map((x) => {
				return {
					product: x.product._id,
					quantity: x.quantity,
					prices: x.product.price,
				}
			}),
			'notes': "Test",
			'shippingFee': cart.shippingFee,
			'tax': cart.tax,
			'otherFee': cart.otherFee,
			'totalPrices': cart.totalPrices,
			'seller': cart.cartItems[0].product.user.id,
			'sellerUserName': cart.cartItems[0].product.user.userName,
			'buyer': userProfile._id,
			'buyerUserName': userProfile.userName,
			'livestream': cart.cartItems[0].livestreams[0],
			'livestreamTitle': cart.cartItems[0].livestreams[0],
			'deliveryAddress': selectedAddress,
			'orderStatus': "Pending",
			'currency': "SGD"
		}

		dispatch((addOrderRequest(data)));
		history.push("/order");
	}

	return (
		<div>
			<section className="container-fluid">
				{/* header Starts here */}
				<Header />
				<div className="row ">
					<div className="col-lg-9 col-md-12 col-12 mt-4 mb-4">
						<div className="snippet-block px-4">
							<div className="snippet-hdr py-4">
								<h3>Checkout/ Subscribe</h3>
							</div>
							{
								deliveryAddresses && deliveryAddresses.map((item) => {
									return <div className="row filter-sec">
										<div className="col-xl-9 col-lg-9 col-md-9 col-9 mb-3">
											<label>Address</label><br />
											<span>{item.address},{item.city}-{item.postCode}
												<br />
												<i className="fa fa-phone"></i>&nbsp;{item.phone} </span>
										</div>
										<div className="col-xl-3 col-lg-3 col-md-3 col-3  mb-3">
											<div className="action-sec row hdr-right paymentradio">
												<div className="round">
													<input type="checkbox" id="checkboxs" checked={selectedAddress._id === item._id} onChange={() => handleChecked(item)} />
													<label htmlFor="checkboxs" />
												</div>
											</div>
										</div>
									</div>
								})
							}
							<Link to="/delivery-address">
								<div className="row filter-sec">
									<div className="col-xl-6 col-lg-6 col-md-6 col-6 mb-3">
										<label><i className="fa fa-map-marker"></i>&nbsp;Add new address</label><br />
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-6  mb-3">
										<div className="action-sec row">
											<div className="col-12 text-xl-right text-right">
												<i className="fa fa-arrow-right"></i>
											</div>
										</div>
									</div>
								</div>
							</Link>
							{/* <div className="text-right mt-4 mb-4">

                <button className="btn btn-green w-25 ">Save</button>
              </div> */}

							<hr />
							<div className="snippet-hdr py-4">
								<h3>Payment Option</h3>
							</div>
							{
								stripePromise ?
									<Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
										<CheckoutForm OnSuccess={handleSave} billingAddress={selectedAddress._id} cart={cart} />
									</Elements> : <span />
							}
						</div>
					</div>
					{/* Card */}
					{/* Card */}
					<div className="col-lg-3 col-md-12 col-12 mt-4 mb-4">
						<div className="snippet-block ">
							<div className="snippet-hdr py-4 ml-2">
								<h3>Details</h3>
							</div>
							<div className="flex px-2">
								<img src="../images/profilepic.svg" alt="icon" />
								<span className="vertical text-bold pl-2 pt-3">{cart.title}</span>
							</div>
							<div className="table-responsive tablexaxis">
								<table className="custom-table">
									<thead>
										{
											cart.cartItems.map((cartItem) => {
												currency = cartItem.product.currency;
												return <tr>
													<td className="py-3 tableheigth">
														<div className="imagedisplay justify">
															<img src={BuyTree} className="profile buy" alt="icon" />
															<span className="text-bold displaysingleline">{cartItem.product.name}</span><br />
														</div>
														<span className="pl-50 text-danger position">{cartItem.product.currency} <span className="text-bold pricing">{cartItem.product.price}</span></span>
													</td>
													<td className="py-3">
														<p className="text-gray mt-4  mb-0">{cartItem.quantity}x</p>
													</td>
												</tr>
											})
										}

										<tr>
											<td className="py-3">
												<div>
													<span className="vertical text-bold text-grey">Shipping fee</span>
												</div>
											</td>
											<td className="py-3">
												{cart.shippingFee} {currency}
											</td>
										</tr>
										<tr className="borderbottom">
											<td className="py-3">
												<div>
													<span className="vertical text-bold text-grey">Order Total  (3)</span>
												</div>
											</td>
											<td className="py-3">
												x1
											</td>
										</tr>
										<tr>
											<td className="py-3">
												<div>
													<span className="vertical text-bold ">Total</span>
												</div>
											</td>
											<td className="py-3 paddingleftrigth">
												<span className="text-danger vertical">{currency} <span className="pricing">{cart.totalPrices}</span></span>
											</td>
										</tr>
									</thead>
								</table>
								<div className="col-12 col-lg-12 mt-4 mb-4  text-center">
									<button className="btn btn-outline-grey btnpadding w-75 mt-4 mb-4" onClick={() => handleSave()}>Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
