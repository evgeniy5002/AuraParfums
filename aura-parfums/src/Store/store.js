import { createStore } from "redux";
import { userReducer } from "./Reducers/userReducer.js";

const store = createStore(userReducer);

store.subscribe(() => {
    console.log("Store State: ", store.getState());
    console.log("Store State Password: ", store.getState().password);
});

export default store;