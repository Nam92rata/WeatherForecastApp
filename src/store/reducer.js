import { onSearch, onSuccess, onError } from "./actions";


const initialState = {
    inProgress: false,
    data: null,
    err: null
}


const reducer = (state = initialState, action) => {
    console.log("reducer ran", action, state);
    switch (action.type) {
        case "ON_SEARCH":
            return Object.assign({}, state, { inProgress: true })
        case "ON_SUCCESS":
            return Object.assign({}, state, { data: action.payload, inProgress: false })
        case "ON_ERROR":
            return Object.assign({}, state, { err: action.payload, inProgress: false })
    }
    return state;
}

export default reducer;