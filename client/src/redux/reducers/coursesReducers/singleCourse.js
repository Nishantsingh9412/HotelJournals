const GetCourseSingleReducer = (state = {data:null} , action) => {
    switch(action.type){
        case 'GET_COURSE_SINGLE':
            console.log("GET_COURSE_SINGLE_REDUCER" , action.data);
            return action.data;
        default:
            return state;
    }
}

export default GetCourseSingleReducer;