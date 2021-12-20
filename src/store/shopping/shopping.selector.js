export function getCategoryList(state) {
    return state.ShoppingReducer.categories;
}

export function getProductList(state) {
    return state.ShoppingReducer.products;
}

export function getProducts(state) {
    return state.ShoppingReducer.productList;
}

export function getCartList(state) {
    return state.ShoppingReducer.cart;
}

export function getCartProductList(state) {
    return state.ShoppingReducer.cartProducts;
}

export function getOrderList(state) {
    return state.ShoppingReducer.orders;
}

export function getOrderGroup(state) {
    return state.ShoppingReducer.orderGroup;
}

export function getUpgradePlan(state) {
    return state.ShoppingReducer.plans;
}

export function getPaymentConfig(state) {
    return state.ShoppingReducer.paymentConfig;
}

