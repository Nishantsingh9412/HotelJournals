import * as api from '../../api/index.js';

export const SetCourse = (courseData) => async (dispatch) => {
    try {
        const {data} = await api.CourseAdminData(courseData);
        dispatch({type: 'COURSE', data});
        console.log("Course Admin Action : ", data);
        return {success:true,message:'Course posted successfully'}
    } catch (error) {
        console.log(" Error from CourseAdmin Action: " + error.message, error.stack);
        return {success:false,message:'Error posting Course'}
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

export const UpdateCourseAction = (id,courseData) => async(dispatch) => {
    try{
        const {data} = await api.UpdateCourseData(id,courseData);
        dispatch({type:'UPDATE_CURRENT_COURSE',data});
        console.log("UpdateCourse Action : ", data);
        return {success:true,message:'Course updated successfully'}
    }catch(err){
        console.log("Error from UpdateCourse Action : " + err.message);
        return {success:false,message:'Error updating Course'}

    }
}

export const DeleteACourseAction = (id) => async(dispatch) => {
    try{
        const {data} = await api.DeleteCourse(id);
        dispatch(GetCourse());
    }catch(err){
        console.log("Error from DeleteCourse Action : " + err.message);
    }
}

