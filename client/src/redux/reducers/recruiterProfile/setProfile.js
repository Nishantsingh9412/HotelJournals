const setRecProfileReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "SET_REC_PROFILE":
            return { ...state, data: action.data };
        default:
            return state;
    }
}
export default setRecProfileReducer;