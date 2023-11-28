// const initialState = {
//     users: [],
//     error: null,
// };

// const usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FETCH_USERS':
//             return { ...state, users: action.payload };
//         case 'FETCH_USERS_ERROR':
//             return { ...state, error: action.payload };
//         default:
//             return state;
//     }
// };
const usersReducer = (states = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;
        case 'FETCH_USERS_ERROR':
            return { ...states,error: action.payload };
        default:
            return states;
    }
}

export default usersReducer;