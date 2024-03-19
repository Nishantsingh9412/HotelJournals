const AllJobsSuperAdmin = (state = [], action) => {
    switch (action.type) {
        case 'GET_JOBS_SUPER_ADMIN':
            return action.data;
        default:
            return state;
    }
}

export default AllJobsSuperAdmin;