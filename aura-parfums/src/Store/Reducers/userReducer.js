const initialState = {
    email: null,
    password: null,
    id: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                id: action.payload.id
            };

        case "REMOVE_USER":
            return {
                ...state,
                email: null,
                password: null,
                id: null,
            };

        case "UPDATE_PASSWORD":
            return {
                ...state,
                password: action.payload.password
            }
        default:
            return state;
    }
};

export { userReducer };