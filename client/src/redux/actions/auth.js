import * as api from '../../api/index.js'
import { setCurrentUser } from './CurrentUser';

// export const signup = (authData,navigate) => async (dispatch) => {
//     try{
//         const {data} = await api.signUp(authData)
//         if(data.success === false){
//             dispatch({type:'SIGNUP_ERROR',payload:data.message})
//         }else{
//             dispatch({type:'AUTH',data});
//         }        // navigate('/');
//     }catch(error){
//         console.log(error.message);
//         console.log( "from signup action: "+ error.message);
//     }
// }


export const signup = (authData,navigate) => async (dispatch) => {
    try{
        const {data} = await api.signUp(authData)
        dispatch({type:'AUTH',data});
        console.log(data);
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        dispatch({type:'CLEAR_MESSAGE',payload:null})
        navigate(`/profile/${data?.result?._id}`);
    }catch(error){  
        console.log(error.response.data.message); // Log the error message
        dispatch({type:'AUTH_ERROR',payload:error.response.data.message}); // Dispatch the SIGNUP_ERROR action with the error message
        dispatch({type:'CLEAR_MESSAGE',payload:null})
        console.log(error.message);
        console.log( "from signup action: "+ error.message);
    }
}

export const login = (authData,navigate) => async(dispatch) => {
    try{
        const {data} = await api.Login(authData);
        dispatch({type:'AUTH',data});
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        dispatch({type:'CLEAR_MESSAGE',payload:null})
        navigate(`/profile/${data?.result?._id}`);
    }catch(error){
        console.log(error.message + error.response.data.message);
        dispatch({type:'AUTH_ERROR',payload:error.response.data.message});
        dispatch({type:'CLEAR_MESSAGE',payload:null})
    }
}


// export const login = (authData,navigate) => async(dispatch) => {
//     try{
//         const response = await api.Login(authData);
//         if(response && response.data){
//             const {data} = response;
//             dispatch({type:'AUTH',data});
//             dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
//             console.log('success from login action')
//             navigate('/profile');
//         } else {
//             console.log('No response from server');
//         }
//     }catch(error){
//         console.log(error.message);
//         console.log( "from login action: " + error.message);
//         if (error.response && error.response.data) {
//             dispatch({type:'AUTH_ERROR',payload:error.response.data.message});
//         }
//     }
// }