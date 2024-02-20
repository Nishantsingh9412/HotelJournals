import * as api from '../../api/index.js'

export const sendMailAction = (mailData) => async(dispatch) => {
    try{
        const {data} = await api.setMail(mailData);
        return {success:true,message:'Mail sent successfully'}
    }catch(error){
        console.log("Error from sendMail Action: ", error.message, error.stack);
        return { success: false, message:'Error in sending mail' };
    }
}