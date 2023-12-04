const getTipsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TIPS':
            console.log("Get Tips Reducer : ", action.data);
            return action.data;
        case 'UPDATE_CURRENT_TIP':
            try {
                console.log("Update Tips Reducer : ", action.data);
                return state.map((tip) => tip._id === action.payload._id ? action.payload : tip)
            } catch (err) {
                console.log("Error from Update Tips Reducer : " + err.message);
            }
        default:
            return state;
    }
}
export default getTipsReducer;