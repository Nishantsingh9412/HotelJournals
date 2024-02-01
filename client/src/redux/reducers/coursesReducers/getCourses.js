const getCoursesReducer = (state = [] , action) => {
    switch(action.type){
        case 'GET_COURSE':
            console.log("GET_COURSE_REDUCER" , action.data);
            return action.data;
        default:
            return state;
    }
}

export default getCoursesReducer;