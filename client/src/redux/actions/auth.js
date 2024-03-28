import * as api from '../../api/index.js'
import { setCurrentUser } from './CurrentUser';

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        localStorage.setItem('Profile', JSON.stringify(data));
        dispatch({ type: 'AUTH', data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate(`/profile/${data?.result?._id}`);
        return { success: true, message: 'User created successfully' }
    } catch (error) {
        if (error.response && error.response.data.message) {
            return { success: false, message: error.response.data.message }
        } else {
            return { success: false, message: 'Something went wrong' }
        }
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.Login(authData);
        localStorage.setItem('Profile', JSON.stringify(data));
        dispatch({ type: 'AUTH', data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate(`/profile/${data?.result?._id}`);
        return { success: true, message: 'User created successfully' }
    } catch (error) {
        if (error.response && error.response.data.message) {
            return { success: false, message: error.response.data.message }
        } else {
            return { success: false, message: 'Something went wrong' }
        }
    }
}
