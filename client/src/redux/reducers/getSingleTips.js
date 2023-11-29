const singleTipReducer = (state = {data:null} , action) => {
    switch(action.type){
        case 'GET_SINGLE_TIPS':
            console.log("Single Tips Reducer : ", action.data);
            return {...state,data:action.data}
        default:
            return state;
    }
}

export default singleTipReducer;