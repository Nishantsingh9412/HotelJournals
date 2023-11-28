const authReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))       // ? -> optional chaining
            return { ...state, data: action?.data }
        case 'LOGOUT':
            localStorage.clear();
            return {...state,data:null}
        case 'AUTH_ERROR':
            console.log('Received SIGNUP_ERROR with message:', action.payload); // Add this line
            return { ...state, message: action.payload }
        default:
            return state;
    }
}

export default authReducer