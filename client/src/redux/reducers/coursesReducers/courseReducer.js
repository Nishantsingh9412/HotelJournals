// const initialState = {
//     data: null
// }

const CourseReducer = (state = {data: null}, action) => {
    switch (action.type) {
        case 'COURSE':
            try {
                console.log("Course Reducer : ", action.data);
                return { ...state, data: action.data }
            } catch (error) {
                console.log("Error from Course Reducer : ", error.message);
            }
            // console.log("Courses Reducer : ", action.data);
            // return { ...state, data: action.data }
        default:
            return state;
    }
}

export default CourseReducer;