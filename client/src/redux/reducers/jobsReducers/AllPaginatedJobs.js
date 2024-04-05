const AllPaginatedJobsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_JOBS_PAGINATED':
            return [...state, action.data];
        default:
            return state;
    }
}

export default AllPaginatedJobsReducer;
