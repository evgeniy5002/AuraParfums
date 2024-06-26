import { getStoredGuest } from "../../Utils/getStoredGuest";
import { setStoredGuest } from "../../Utils/setStoredGuest";

const initialState = {
    cartItems: getStoredGuest().cartItems || []
}

export const guestReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GUEST_CART_ITEM": {
            const itemIndex = state.cartItems.findIndex(item => item.productId === action.payload.cartItem.productId);

            let newCartItems;

            if (itemIndex !== -1) {
                newCartItems = state.cartItems.map((item, index) => {
                    if (index === itemIndex) {
                        // item = {count: _, productId: _}
                        return {
                            ...item,
                            count: item.count + action.payload.cartItem.count
                        };
                    }
                    return item;
                });
            }
            else {
                newCartItems = [...state.cartItems, action.payload.cartItem];
            }

            const newState = {
                ...state,
                cartItems: newCartItems
            }

            const storedGuest = getStoredGuest();
            storedGuest.cartItems = newState.cartItems;
            setStoredGuest(storedGuest);

            return newState;
        }
        default:
            return state;
    }
}
