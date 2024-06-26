const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const ADD_CART_ITEM = "ADD_CART_ITEM";

export const setUser = ({ email, password, id, cartItems }) => ({
    type: SET_USER,
    payload: { email, password, id, cartItems },
});

export const removeUser = () => ({
    type: REMOVE_USER,
});

export const updatePassword = (newPassword) => ({
    type: UPDATE_PASSWORD,
    payload: { newPassword }
});

export const addCartItem = (cartItem) => {

    console.log("ADD CART ITEM ACTION", cartItem);

    return {
        type: ADD_CART_ITEM,
        payload: { cartItem }
    }
};