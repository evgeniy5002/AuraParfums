const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const setUser = ({email, password, id}) => ({
    type: SET_USER,
    payload: { email, password, id},
});

export const removeUser = () => ({
    type: REMOVE_USER,
});

export const updatePassword = (newPassword) => ({
    type: UPDATE_PASSWORD,
    payload: { newPassword }
});