import * as api from '../../api/index.js';

export const SetCourse = (courseData) => async (dispatch) => {
    try {
        const {data} = await api.CourseAdminData(courseData);
        dispatch({type: 'COURSE', data});
        console.log("Course Admin Action : ", data);
    } catch (error) {
        console.log(" Error from CourseAdmin Action: " + error.message, error.stack);
    }
}
                // It can be also written as it is a higher order function:  
    // function createAsyncDispatchFunction(courseData) {
    //     return async function(dispatch) {
    //       // Your code here
    //     }
    //   }

export const GetCourse = () => async (dispatch) => {
    try {
        const {data} = await api.getCourseData();
        dispatch({type:'GET_COURSE',data});
        console.log("GetCourse Action : ", data);
    } catch (error) {
        console.log("Error From GetCourse Action: " + error.message, error.stack);
    }
}


export const GetCourseSingle = (id) => async (dispatch) => {
    try{
        const {data} = await api.getCourseDataSingle(id);
        dispatch({type:'GET_COURSE_SINGLE',data});
        console.log("GetCourseSingle Action : ", data);
    }catch(error){
        console.log("Error From GetCourseSingle Action: " + error.message, error.stack);
    }
}


