export const onSearch = (city) => ({
    type: "ON_SEARCH",
    payload: city
})

export const onSuccess = (data) => ({
    type: "ON_SUCCESS",
    payload: data
})

export const onCurrSuccess = (data) => ({
    type: "ON_CURR_SUCCESS",
    payload: data
})

export const onError = (err) => ({
    type: "ON_ERROR",
    payload: err
})

export const onCurrError = (err) => ({
    type: "ON_CURR_ERROR",
    payload: err
})

export const logout = () => ({
    type: "LOGOUT",
    payload: null
})