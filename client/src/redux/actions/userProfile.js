import * as api from '../../api/index.js'

export const createProfileAction = (profileData) => async (dispatch) => {
    try {
        const { data } = await api.setUserProfile(profileData);
        dispatch({ type: 'CREATE_PROFILE', data });
        console.log("CreateProfile Action : ", data);
        return { success: true, message: "Profile Created Successfully" };
    } catch (error) {
        console.log("Error from createProfileAction: ", error.message, error.stack);
        return { success: false, message: error?.response?.data?.message };
    }
}

export const getProfileAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.getUserProfile(id);
        dispatch({ type: 'GET_PROFILE', data });
        console.log("GetProfile Action : ", data);
        return { success: true, data: data }
    } catch (error) {
        console.log("Error from getProfileAction: ", error.message, error.stack);
    }
}

export const updateUserProfileAction = (id, profileData) => async (dispatch) => {
    try {
        const { data } = await api.updateUserProfile(id, profileData);
        dispatch({ type: 'UPDATE_PROFILE', data });
        console.log("UpdateProfile Action : ", data);
        return { success: true, message: "Profile Updated Successfully" }
    } catch (error) {
        console.log("Error from updateUserProfile: ", error.message, error.stack);
        return { success: false, message: error?.response?.data?.message };
    }
}

export const DeleteUserProfile = (id) => async (dispatch) => {
    try {
        const { data } = await api.DeleteUserProfile(id);
        // dispatch(getProfileAction());
        return { success: true, message: "Profile Deleted Successfully" }
    } catch (error) {
        console.log("Error from DeleteUserProfile: ", error.message, error.stack);
        return { success: false, message: error?.response?.data?.message };
    }
}