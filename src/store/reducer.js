const initialState = {
    inProgress: false,
    data: null,
    curr: null,
    err: null,
    currErr: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ON_SEARCH":
            return Object.assign({}, state, { inProgress: true })
        case "ON_SUCCESS":
            return Object.assign({}, state, { data: action.payload.data, inProgress: false })
        case "ON_CURR_SUCCESS":
            return Object.assign({}, state, { curr: action.payload, inProgress: false })
        case "ON_ERROR":
            return Object.assign({}, state, { err: action.payload, inProgress: false })
        case "ON_CURR_ERROR":
            return Object.assign({}, state, { currErr: action.payload, inProgress: false })
        case "LOGOUT":
            return Object.assign({}, state, { data: null, curr: null, inProgress: false })
        default:
            return state;
    }
}

export default reducer;