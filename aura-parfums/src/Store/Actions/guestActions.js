const ADD_GUEST_CART_ITEM = "ADD_GUEST_CART_ITEM";

export const addGuestCartItem = (cartItem) => {
    return {
        type: ADD_GUEST_CART_ITEM,
        payload: { cartItem }
    }
};