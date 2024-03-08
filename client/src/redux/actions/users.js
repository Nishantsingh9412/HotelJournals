import * as api from '../../api/index.js';

// export const fetchAllUsers = () => async (dispatch) => {
//     try{    
//         const {data} = await api.Profile();
//         console.log(" Data from fetchall users action" + data) 
//         dispatch({type:'FETCH_USERS',payload:data})
//     }catch(error){
//         console.log("Error from fetchall users action " + error.message)
//     }
// }

export const fetchAllUsers = () => async (dispatch) => {
    try {    
        const { data } = await api.Profile();
        console.log("Data from fetchall users action: ", data);
        dispatch({ type: 'FETCH_USERS', payload: data });
    } catch (error) {
        console.log("Error from fetchall users action: ", error.message);
        dispatch({ type: 'FETCH_USERS_ERROR', payload: error.message });
    }
}

export const fetchSingleUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.singleProfile(id);
        dispatch({ type: 'FETCH_SINGLE_USER', data });
        console.log("Data from fetchsingle user action: ", data);
        return { success: true, message:'User Fetched Successfully' };
    } catch (error) {
        console.log("Error from fetchsingle user action: ", error.message);
        return { success: false, message:error.response.data.message}
    }
}

export const getProfilePicAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.getProfilePicSingle(id);
        dispatch({ type: 'GET_PROFILE_PIC', data });
        return { success: true, message:'Profile Pic Fetched Successfully',data };
    } catch (error) {
        console.log("Error from get profile pic action: ", error.message);
        return { success: false, message:error.response.data.message}
    }
}

export const updateUserProfilePicAction = (id,profilepicData) => async(dispatch) => {
    try{
        const {data} = await api.updateUserProfilePics(id,profilepicData)
        dispatch({type:'UPDATE_USER_PROFILE_PICS',data})
        return {success: true, message:'User Profile Pics Updated Successfully'};
    }catch(error){
        console.log("Error from update user profile pics action: ", error.message);
        return {success: false, message:error.response.data.message}
    }
}

export const deleteUserProfilePicAction = (id) => async(dispatch) => {
    try{
        const {data} = await api.deleteUserProfilePic(id);
        dispatch({type:'DELETE_USER_PROFILE_PICS',data})
        return {success: true, message:'User Profile Pics Deleted Successfully'};
    }catch(error){
        console.log("Error from delete user profile pics action: ", error.message);
        return {success: false, message:error.response.data.message}
    }
}