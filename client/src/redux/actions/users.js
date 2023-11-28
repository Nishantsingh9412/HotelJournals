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