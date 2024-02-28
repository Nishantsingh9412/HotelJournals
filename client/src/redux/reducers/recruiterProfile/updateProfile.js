const updateRecReducer = (state = [] , action) => {
    switch(action.type){
        case 'UPDATE_REC_PROFILE':
            return state.map((rec) => rec._id === action.payload._id ? action.payload : rec)
        default:
            return state;
    }
}
export default updateRecReducer;