import HttpHelper from "../../helpers/httpHelper";
require('dotenv').config();

const SHOPPING_API_URL = process.env.REACT_APP_SHOPPING_API_URL;

class ShoppingAPI {
    //#region Cart
    static AddItemToCart(req) {
        let url = `${SHOPPING_API_URL}/cart/add-item`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static GetCart(req) {
        let url = `${SHOPPING_API_URL}/cart`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static UpdateCart(req) {
        let url = `${SHOPPING_API_URL}/cart`;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    //#endregion

    //#region Admin 

    //#region Order

    static GetOrderList(req) {
        let url = `${SHOPPING_API_URL}/order`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetOrderById(req) {
        let url = `${SHOPPING_API_URL}/order` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static UpdateOrder(req) {
        let url = `${SHOPPING_API_URL}/order` + req.id;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static CreateOrder(req) {
        let url = `${SHOPPING_API_URL}/order`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    //#endregion

    //#region Order Group

    static CreateOrderGroup(req) {
        let url = `${SHOPPING_API_URL}/order-group`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    //#endregion

    //#region Payment

    static CreateSubscription(req) {
        let url = `${SHOPPING_API_URL}/payment/subscription`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static CreateUpgradeAccountSubscription(req) {
        let url = `${SHOPPING_API_URL}/payment/upgrade-account`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static GetPlanDetails(req) {
        let url = `${SHOPPING_API_URL}/payment/upgrade-plan`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    //#endregion

    //#region Payment Config

    static GetPaymentConfig(req) {
        let url = `${SHOPPING_API_URL}/payment-config`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetPaymentPayoutConfig(req) {
        let url = `${SHOPPING_API_URL}/payment-config/payout`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    //#endregion

    //#region Product

    static GetProducts(req) {
        let url = `${SHOPPING_API_URL}/product`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static GetProductByIds(req) {
        let url = `${SHOPPING_API_URL}/product/list-by-ids`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static CreateProduct(req) {
        let url = `${SHOPPING_API_URL}/product`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static UpdateProduct(req) {
        let url = `${SHOPPING_API_URL}/product/` + req.id;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static GetProductById(req) {
        let url = `${SHOPPING_API_URL}/product/` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static DeleteProductById(req) {
        let url = `${SHOPPING_API_URL}/product/` + req.id;
        return HttpHelper.httpRequest(url, "DELETE", {}, req)
    }

    static UpdateProductStatus(req) {
        let url = `${SHOPPING_API_URL}/product/` + req.id;
        return HttpHelper.httpRequest(url, "PATCH", {}, req)
    }

    //#endregion

    //#region Category

    static GetCategories(req) {
        let url = `${SHOPPING_API_URL}/product-category`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static CreateCategory(req) {
        let url = `${SHOPPING_API_URL}/product-category`;
        return HttpHelper.httpRequest(url, "POST", {}, req)
    }

    static UpdateCategory(req) {
        let url = `${SHOPPING_API_URL}/product-category` + req.id;
        return HttpHelper.httpRequest(url, "PUT", {}, req)
    }

    static GetCategoryById(req) {
        let url = `${SHOPPING_API_URL}/product-category` + req.id;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    static DeleteCategoryById(req) {
        let url = `${SHOPPING_API_URL}/product-category` + req.id;
        return HttpHelper.httpRequest(url, "DELETE", {}, req)
    }

    //#endregion

    //#region Transactions

    static GetTransactions(req) {
        let url = `${SHOPPING_API_URL}/transaction`;
        return HttpHelper.httpRequest(url, "GET", {}, req)
    }

    //#endregion
}

export default ShoppingAPI;