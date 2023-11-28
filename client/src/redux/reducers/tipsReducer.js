const TipsReducer = (state = { data:null },action) => {
    switch(action.type){
        case 'TIPS':
            console.log("Tips Reducer : ", action.data);
            return {...state,data:action.data}
        default:
            return state;
    }
}

export default TipsReducer;