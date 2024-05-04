const initialState = {
    courses: [],
}

const getCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COURSE':
            console.log("GET_COURSE_REDUCER", action.data);
            return { ...state, courses: action.data };
        case 'COURSE_SEARCH':
            console.log("COURSE_FILTER_REDUCER", action.data);
            return { ...state, courses: action.data };
        case 'COURSE_FILTER':
            console.log("COURSE_FILTER_REDUCER", action.data);
            return { ...state, courses: action.data };
        default:
            return state;
    }
}

export default getCoursesReducer;