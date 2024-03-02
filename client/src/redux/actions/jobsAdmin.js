import * as api from '../../api/index.js'


export const UpdateCandidStatsAction = (ApplicantStatus) => async(dispatch) => {
    try{
        const {data} = await api.updateCandidateStatus(ApplicantStatus);
        dispatch({type:'UPDATE_CANDIDATE_STATUS',data});
        return {success:true, message:"Candidate Status Updated Successfully"}
    }catch(err){
        console.log("Error from UpdateCandidStat Action: ", err.message, err.stack);
        return { success: false, message:err.response.data.message}
    }
}

export const ApplyJobAction = (jobApplicants) => async(dispatch) => {
    try{
        const {data} = await api.ApplyJob(jobApplicants);
        dispatch({type:'APPLY_JOB',data});
        return { success: true, message: "Applied for Job Successfully"};
    }catch(err){
        console.log("Error from ApplyJob Action: ", err.message, err.stack);
        return { success: false, message:err.response.data.message };
    }
}

export const CreateJob = (jobData) => async (dispatch) => {
    try {
        const { data } = await api.PostNewJob(jobData);
        dispatch({ type: 'CREATE_JOB', data });
        console.log("Job Admin Action : ", data);
        return { success: true  , message: "Job Posted Successfully"};
    } catch (error) {
        console.log("Error from JobAdmin Action ", error, error);
        return { success: false, message: error.response.data.message };
    }
}

export const GetJobs = () => async (dispatch) => {
    try {
        const { data } = await api.GetAllJobs();
        dispatch({ type: 'GET_ALL_JOBS', data });
        console.log("GetJobs Action : ", data);
        // return { success: true, data: data };
    } catch (error) {
        console.log("Error from GetJobsAction: ", error.message, error.stack);
        // return { success: false, message: error.response.data.message };
    }
}

export const getJobSingleAction = (id) => async(dispatch) => {
    try{    
        const {data} = await api.GetSingleJob(id);
        dispatch({type:'GET_JOB_SINGLE',data});
        console.log("GetJobSingle Action : ", data);
    }catch(err){
        console.log("Error from GetJobSingle Action: ", err.message, err.stack);
    }   
}



export const UpdateAJobAction = (id,jobData) => async(dispatch) => {
    try {
        const {data} = await api.UpdateJob(id,jobData);
        dispatch({type:'UPDATE_CURRENT_JOB',data});
        console.log("UpdateJob Action : ", data);
        return {success: true , message: "Job Updated Successfully"};
    } catch (error) {
        console.log("Error from UpdateJob Action: ", error.message, error.stack);
        return { success: false, message: error.response.data.message };
    }
}

export const DeleteJobAction = (id) => async(dispatch) => {
    try {
        const {data} = await api.DeleteJob(id);
        dispatch(GetJobs());
    } catch (error) {
        console.log("Error from DeleteJob Action: ", error.message, error.stack);
        return { success: false, message: error.response.data.message };
    }
}

