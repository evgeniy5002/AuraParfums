import { createStore, combineReducers } from "redux";

import { userReducer } from "./Reducers/userReducer.js";
import { guestReducer } from "./Reducers/guestReducer.js";

const rootReducer = combineReducers({
    user: userReducer,
    guest: guestReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log("Store State: ", store.getState());
    console.log("Store State Password: ", store.getState().password);
});

export default store;