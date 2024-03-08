const userProfilePicReducer = (state = {data:null}, action) => {
    switch(action.type){
        case 'GET_PROFILE_PIC':
            return {...state,data: action.data};
        case 'UPDATE_USER_PROFILE_PICS':
            return {...state,data: action.data};
        case 'DELETE_USER_PROFILE_PICS':
            return {...state,
                data:'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
            };
        default:
            return state;
    }
}

export default userProfilePicReducer;