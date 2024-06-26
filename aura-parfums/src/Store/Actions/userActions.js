const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_PHONE_NUMBER = "UPDATE_PHONE_NUMBER";
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_SURNAME = "UPDATE_SURNAME";
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

export const updatePhoneNumber = (phoneNumber) => ({
    type: UPDATE_PHONE_NUMBER,
    payload: { phoneNumber }
});

export const updateName = (name) => ({
    type: UPDATE_NAME,
    payload: { name }
});

export const updateSurname = (surname) => ({
    type: UPDATE_SURNAME,
    payload: { surname }
});

export const addCartItem = (cartItem) => {
    return {
        type: ADD_CART_ITEM,
        payload: { cartItem }
    }
};