const AllJobsRecruiterReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_JOBS_RECRUITER':
            return action.data 
        default:
            return state;
    }
}

export default AllJobsRecruiterReducer;

