const getRecProfileReducer = (state = {data:null}, action) => {
    switch (action.type) {
        case "GET_REC_PROFILE":
            return { ...state, data: action.data };
        default:
            return state;
    }
}
export default getRecProfileReducer;