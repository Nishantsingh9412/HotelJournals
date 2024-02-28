import * as api from '../../../api/index.js';

export const setUserCVAction = (id, file) => async (dispatch) => {
    try {
        const { data } = await api.setUserCv(id, file);
        dispatch({ type: 'SET_USER_CV', data });
        return { success: true, message: 'CV Added Successfully' }
    } catch (error) {
        console.log("Error from setUserCvAction ", error.message)
        return { success: false, message: error.message }
    }
}

export const getUserCVAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.getUserCv(id);
        dispatch({ type: 'GET_USER_CV', data });
        return { success: true, message: 'CV Fetched Successfully' }
    } catch (error) {
        dispatch({ type: 'GET_USER_CV', data: null });
        console.log("Error from getUserCvAction ", error.message)
        return { success: false, message: 'Error in getting CV' }
    }
}

export const updateUserCVAction = (id, file) => async (dispatch) => {
    try {
        const { data } = await api.updateUserCv(id, file);
        dispatch({ type: 'UPDATE_USER_CV', data });
        return { success: true, message: 'CV Updated Successfully' }
    } catch (error) {
        console.log("Error from updateUserCvAction ", error.message)
        return { success: false, message: 'Error in updating CV' }
    }
}

export const deleteUserCVAction = (id) => async (dispatch) => {
    try {
        await api.deleteUserCV(id);
        dispatch({ type: 'DELETE_USER_CV' });
        return { success: true, message: 'CV Deleted Successfully' }
    } catch (error) {
        console.log("Error from deleteUserCvAction ", error.message)
        return { success: false, message: 'Error in deleting CV' }
    }
}