import * as api from "../../api/index.js";

export const setRecProfileAction = (recProfileData) => async (dispatch) => {
    try{
        const {data} = await api.setRecruiterProfile(recProfileData);
        dispatch({type:"SET_REC_PROFILE",data});
        return {success:true,message:'Profile set successfully'}
    }catch(error){
        console.log("Error from setRecProfileAction",error.message);
        return {success:false,message:error.message}
    }
}

export const getRecProfileAction = (id) => async (dispatch) => {
    try{
        const {data} = await api.getRecruiterProfile(id);
        dispatch({type:"GET_REC_PROFILE",data});
        return {success:true,message:'Profile fetched successfully'}
    }catch(error){
        console.log("Error from getRecProfile",error.message);
        return {success:false,message:error.message}
    }
}

export const updateRecProfileAction = (id,updatedData) => async(dispatch) => {
    try{
        const {data} = await api.updateRecruiterProfile(id,updatedData);
        dispatch({type:'UPDATE_REC_PROFILE',data});
        return {success:true,message:'Profile updated successfully'}
    }catch(error){
        console.log("Error from updateRecProfileAction",error.message);
        return {success:false,message:error.message}
    }
}
export const deleteRecProfileAction = (id) => async(dispatch) => {
    try{
        await api.deleteRecruiterProfile(id);
        return {success:true,message:'Profile deleted successfully'}
    }catch(error){
        console.log("Error from deleteRecProfileAction",error.message);
        return {success:false,message:error.message}
    }
}