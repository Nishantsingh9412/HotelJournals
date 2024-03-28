// singleUserReducer.js
const singleUserReducer = (state = {data:null} , action) => {
    switch(action.type){
        case 'FETCH_SINGLE_USER':
            return {...state, data:action.data};
        case 'UPDATE_SINGLE_USER':
            return {...state, data:action.data};
        default:
            return state;
    }
}

export default singleUserReducer;
