import * as api from '../../api/index.js';

export const SetTips = (tipsData) => async (dispatch) => {
    try{
        const {data} = await api.TipsAdminData(tipsData);
        dispatch({type:'TIPS',data});
        console.log("Tips Admin Action : " , data);
    }catch(error){
        console.log(":Error from TipsAdmin Action: " + error.message)
    }
}

export const GetTips = () => async (dispatch) => {
    try{
        const {data} = await api.TipsData();
        
        dispatch({type:'GET_TIPS',data});
        console.log("Tips Admin Action : " , data);
    }catch(error){
        console.log(":Error from TipsAdmin Action: " + error.message)
    }
}

export const GetSingleTips = (id) => async(dispatch) => {
    try{
        const {data} = await api.TipsDataSingle(id);
        dispatch({type:'GET_SINGLE_TIPS',data})
        console.log("Single Tips Action : " , data);
    }catch(err){
        console.log("Error from GetSingleTips Action : " + err.message);
    }
}

export const DeleteATip = (id) => async(dispatch) => {
    try{
        const {data} = await api.DeleteTip(id);
        dispatch(GetTips());
    }catch(err){
        console.log("Error from DeleteTips Action : " + err.message);
    }
} 

