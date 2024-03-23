const recruiterImages = (state = {data:null} ,action ) => {
    switch(action.type){
        case 'GET_RECRUITER_PROFILE_PIC':
            return {...state,data:action.data};
        case 'UPDATE_RECRUITER_PROFILE_PIC':
            return {...state,data:action.data};
        case 'DELETE_RECRUITER_PROFILE_PIC':
            return {...state,data:action.data};
        default:
            return state;
    }
}

export default recruiterImages;