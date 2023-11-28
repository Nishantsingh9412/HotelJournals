const getTipsReducer = (state = [],action) => {
    switch(action.type){
        case 'GET_TIPS':
            console.log("Get Tips Reducer : ", action.data);
            return action.data;
        default:
            return state;
    }
}
export default getTipsReducer;