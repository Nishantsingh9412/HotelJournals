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