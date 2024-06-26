import { getStoredUsers } from "../../Utils/getStoredUsers";
import { setStoredUsers } from "../../Utils/setStoredUsers";

const initialState = {
    email: null,
    password: null,
    id: null,
    cartItems: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER": {
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                id: action.payload.id,
                cartItems: action.payload.cartItems
            };
        }

        case "ADD_CART_ITEM": {
            const newState = {
                ...state,
                cartItems: [...state.cartItems, action.payload.cartItem]
            }

            const storedUsers = getStoredUsers();
            const userIndex = storedUsers.findIndex(user => user.id === state.id);

            if (userIndex !== -1) {
                storedUsers[userIndex].cartItems = newState.cartItems;
                setStoredUsers(storedUsers);
            }

            return newState;
        }

        case "REMOVE_USER": {
            return {
                ...state,
                email: null,
                password: null,
                id: null,
                cartItems: null
            };
        }

        case "UPDATE_PASSWORD": {
            const newPassword = action.payload.newPassword;

            const newState = {
                ...state,
                password: newPassword
            };

            // Берется массив из localStorage и ищется пользователь с таким id, который совпадает с id текущего пользователя в state
            const storedUsers = getStoredUsers();
            const userIndex = storedUsers.findIndex(user => user.id === state.id);

            // Изменяется пароль пользователя в storedUsers чтобы сохранить его занаво в localStorage
            if (userIndex !== -1) {
                storedUsers[userIndex].password = newPassword;
                setStoredUsers(storedUsers);
            }

            return newState;
        }

        default:
            return state;
    }
};

export { userReducer };