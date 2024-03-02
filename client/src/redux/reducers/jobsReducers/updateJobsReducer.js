const UpdateJobsReducer = (state = [] , action) => {
    switch(action.type){
        case 'UPDATE_CURRENT_JOB':
            return state.map((job) => job._id === action.payload._id ? action.payload : job)
        case 'APPLY_JOB':
            return state.map((job) => job._id === action.data._id ? action.data : job)
        case 'UPDATE_CANDIDATE_STATUS':
            return state.map((job) => job._id === action.data._id ? action.data : job)
        default:
            return state;
    }
}

export default UpdateJobsReducer;