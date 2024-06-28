import { getStoredUsers } from "../../Utils/getStoredUsers";
import { setStoredUsers } from "../../Utils/setStoredUsers";

const initialState = {
    email: null,
    password: null,
    id: null,
    cartItems: null,
    phoneNumber: null,
    name: null,
    surname: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER": {

            console.log("ACTION EMAIL: ",action.payload.email )

            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                id: action.payload.id,
                cartItems: action.payload.cartItems,
                phoneNumber: action.payload.phoneNumber,
                name: action.payload.name,
                surname: action.payload.surname
            };
        }

        case "ADD_CART_ITEM": {
            const storedUsers = getStoredUsers();
            const userIndex = storedUsers.findIndex(user => user.id === state.id);
            const { productId, count, size, brand, name, image} = action.payload.cartItem;

            const existingItemIndex = state.cartItems.findIndex(item =>
                item.productId === productId && item.size.id === size.id
            );

            let newCartItems;

            if (existingItemIndex !== -1) {
                // Если элемент с таким productId и size.id уже есть в корзине, увеличиваем count
                newCartItems = state.cartItems.map((item, index) => {
                    if (index === existingItemIndex) {
                        return {
                            ...item,
                            count: item.count + count,
                        };
                    }
                    return item;
                });
            } else {
                const newItem = { brand, count, productId, size, name, image };
                newCartItems = [...state.cartItems, newItem];
            }

            const newState = {
                ...state,
                cartItems: newCartItems
            };

            if (userIndex !== -1) {
                storedUsers[userIndex].cartItems = newState.cartItems;
                setStoredUsers(storedUsers);
            }

            return newState;
        }


        case "REMOVE_USER": {
            return initialState;
        }

        case "UPDATE_PHONE_NUMBER": {
            const newPhoneNumber = action.payload.phoneNumber;


            const newState = {
                ...state,
                phoneNumber: newPhoneNumber
            }

            const storedUsers = getStoredUsers();
            const userIndex = storedUsers.findIndex(user => user.id === state.id);

            if (userIndex !== -1) {
                storedUsers[userIndex].phoneNumber = newPhoneNumber;
                setStoredUsers(storedUsers);
            }

            return newState;
        }

        case "UPDATE_NAME": {
            const newName = action.payload.name;


            const newState = {
                ...state,
                name: newName
            }

            const storedUsers = getStoredUsers();
            const userIndex = storedUsers.findIndex(user => user.id === state.id);

            if (userIndex !== -1) {
                storedUsers[userIndex].name = newName;
                setStoredUsers(storedUsers);
            }

            return newState;
        }

        case "UPDATE_SURNAME": {
            const newSurname = action.payload.surname;

            const newState = {
                ...state,
                surname: newSurname
            }

            const storedUsers = getStoredUsers();
            const userIndex = storedUsers.findIndex(user => user.id === state.id);

            if (userIndex !== -1) {
                storedUsers[userIndex].surname = newSurname;
                setStoredUsers(storedUsers);
            }

            return newState;
        }

        case "UPDATE_PHONE_NUMBER": {
            const newSurname = action.payload.surname;

            const newState = {
                ...state,
                phoneNumber: newSurname
            }

            const storedUsers = getStoredUsers();
            const userIndex = storedUsers.findIndex(user => user.id === state.id);

            if (userIndex !== -1) {
                storedUsers[userIndex].surname = newSurname;
                setStoredUsers(storedUsers);
            }

            return newState;
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