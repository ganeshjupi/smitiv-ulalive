import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getCartRequest, updateCartRequest } from "../../store/shopping/shopping.actions";
import { getCartList, getCartProductList } from "../../store/shopping/shopping.selector";
import Sidebar from "../common/sidebar";
import Header from "../common/topbar";
import NoImage from "../../assets//images/no-image.png";

export default function Cart() {
    const history = useHistory();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const goTo = (e, path) => {
        e.preventDefault();
        history.push("/" + path);
    };

    const { carts } = useSelector((state) => {
        return {
            carts: getCartList(state),
            cartProducts: getCartProductList(state)
        }
    })

    useEffect(() => {
        dispatch(getCartRequest());
    }, []);

    const updateCartProductItem = (id, qty, isAdd) => {
        if (isAdd) {
            qty = qty + 1;
        }
        else {
            qty = qty - 1;
        }
        dispatch(updateCartRequest({
            product: id,
            quantity: qty
        }));
        setQty(qty);
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure want to delete the item from cart?")) {
            dispatch(updateCartRequest({
                product: id,
                quantity: 0
            }));
        }
    }

    return (
        <div>
            <section className="container-fluid">
                {/* header Starts here */}
                <Header history={history} />
                <div className="row">
                    <Sidebar history={history} />
                    {/* Mobile menu overlay Starts here */}

                    {/* Mobile menu overlay Ends here */}
                    {/* Left Wrap Ends here */}
                    <div className="col-lg-9 col-md-9 col-12 heigthfixing">
                        <div className="snippet-block bg-grey my-4">
                            <div className="col-12 mt-4 mb-4">
                                <div className="form-group col-lg-12 col-md-12 snippet-cont">

                                    <div className="snippet-cont ">
                                        <input
                                            type="text"
                                            className="form-control formbg searchiconspace"
                                            name
                                            placeholder="Search"
                                        />
                                        <a href="javascript:;" className="search-icon">
                                            <img src="../images/search-icon.svg" alt="icon" />
                                        </a>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="custom-table text-center">
                                        <thead>
                                            <tr>
                                                <th className="checkbox-th text-center">
                                                    <input className="checkbox" type="checkbox" name />
                                                </th>
                                                <th className="checkbox-th pl-3 text-left">
                                                    <span>Name</span>
                                                </th>
                                                <th className="checkbox-th  pl-3 text-left">
                                                    <span>Item</span>
                                                </th><th className="checkbox-th  text-center">
                                                    <span>Qnty</span>
                                                </th>
                                                <th className="checkbox-th text-center">
                                                    <span>Total</span>
                                                </th>
                                                <th className="checkbox-th text-center">
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carts && carts.cartItems && carts.cartItems.map((x) => {
                                                    if (!x.product.user) {
                                                        return <p></p>
                                                    }
                                                    return (
                                                        <tr>
                                                            <td className="py-3">
                                                                <input className="checkbox" type="checkbox" name />
                                                            </td>
                                                            <td className="py-3">
                                                                <div className="imagedisplay">
                                                                    <span className="vertical text-bold">{x.product.user.userName}</span>
                                                                </div>
                                                            </td>
                                                            <td className="py-3">
                                                                <div className="imagedisplay">
                                                                    <img src={x.product.images} className="ml-2" alt="icon" width={64} />
                                                                    <span className="vertical  pl-2 ">{x.product.name}</span>
                                                                </div>
                                                            </td>
                                                            <td className="py-3">
                                                                <div className="quantity">
                                                                    <button onClick={() => updateCartProductItem(x.product._id, x.quantity, false)} className="quantity__minus">-</button>
                                                                    <input name="quantity" type="text" className="quantity__input" value={x.quantity} />
                                                                    <button onClick={() => updateCartProductItem(x.product._id, x.quantity, true)} className="quantity__plus">+</button>
                                                                </div>
                                                            </td>
                                                            <td className="py-3">
                                                                <p className="text-danger mb-0">{x.product.currency} <label className="pricing">{x.product.price} ({x.product.shippingFee})</label></p>
                                                            </td>
                                                            <td className="py-3">

                                                                <a href="javascript:;" onClick={() => handleDelete(x.product._id)} className="action-icon">
                                                                    <i className="fa fa-trash iconcolor"></i>
                                                                </a>

                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                            {
                                                carts && carts.cartItems && carts.cartItems.length === 0 ?
                                                    <tr>
                                                        <td colSpan={5}>
                                                            <div className="no-records">
                                                                <img src={NoImage} />
                                                            </div>
                                                        </td>
                                                    </tr> : <span />
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                {
                                    carts && carts.cartItems && carts.cartItems.length > 0 ?
                                        <>
                                            <div className="text-right mt-2">
                                                <p className="btn white uploadbutton text-bold mb-0">Total </p>

                                                <p className="btn btn-transparent text-danger uploadbutton mb-0">{carts.cartItems && carts.cartItems.length > 0 ? carts.cartItems[0].product.currency : ""} <label className="pricing">{carts.totalPrices}</label></p>
                                            </div>
                                            <div className="text-right mt-4 mb-4">
                                                <button type='button' className="btn btn-yellow w-25 " onClick={(e) => goTo(e, "add_new_card")}>Pay now</button>
                                            </div>
                                        </> :
                                        <></>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                {/* MainSection Ends here */}
            </section>

        </div>
    );
}


