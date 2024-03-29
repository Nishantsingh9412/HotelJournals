const getCertificatesReducer = (state = { data: null }, action) => {
    switch(action.type){
        case 'GET_USER_CERTIFICATES':
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export default getCertificatesReducer;