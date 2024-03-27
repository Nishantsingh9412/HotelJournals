import * as api from '../../api/index.js'

// export const getHiredCandidatesAction = (jobId) => async (dispatch) => {
//     try {
//         const { data } = await api.HiredCandidates(jobId);
//         dispatch({ type: 'GET_HIRED_CANDIDATES', data });
//         return { success: true, message: "Hired Candidates Fetched Successfully" };
//     } catch (error) {
//         console.log("Error from getHiredCandidates Action: ", error.message, error.stack);
//         return { success: false, message: error.response.data.message };
//     }
// }

// export const getRejectedCandidatesAction = (jobId) => async (dispatch) => {
//     try {
//         const { data } = await api.RejectedCandidates(jobId);
//         dispatch({ type: 'GET_REJECTED_CANDIDATES', data });
//         return { success: true, message: "Rejected Candidates Fetched Successfully" };
//     } catch (error) {
//         console.log("Error from getRejectedCandidates Action: ", error.message, error.stack);
//         return { success: false, message: error.response.data.message };
//     }
// }

// export const getOfferedCandidatesAction = (jobId) => async (dispatch) => {
//     try {
//         const { data } = await api.OfferedCandidates(jobId);
//         dispatch({ type: 'GET_OFFERED_CANDIDATES', data });
//         return { success: true, message: "Offered Candidates Fetched Successfully" };
//     } catch (error) {
//         console.log("Error from AllOfferedCandidates Action: ", error.message, error.stack);
//         return { success: false, message: error.response.data.message };
//     }
// }

// export const notOfferedCandidatesAction = (jobId) => async (dispatch) => {
//     try{
//         const {data} = await api.notOfferedCandidates(jobId);
//         dispatch({type:'NOT_OFFERED_CANDIDATES',data});
//         return { success: true, message: "Not Offered Candidates Fetched Successfully" };
//     }catch(error){
//         console.log("Error from notOfferedCandidates Action: ", error.message, error.stack);
//         return { success: false, message: error.response.data.message };
//     }
// }

export const getJobsRecruiterAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.GetRecruiterJobs(id);
        dispatch({ type: 'GET_JOBS_RECRUITER', data });
        return { success: true, message: "Jobs Fetched Successfully" };
    } catch (error) {
        console.log("Error from getJobsRecruiter Action: ", error.message, error.stack);
        return { success: false, message: error.response.data.message };
    }
}

export const getJobsSuperAdminAction = () => async (dispatch) => {
    try {
        const { data } = await api.GetAllJobsForSuperAdmin();
        dispatch({ type: 'GET_JOBS_SUPER_ADMIN', data });
        return { success: true, message: "Jobs Fetched Successfully" };
    } catch (err) {
        console.log("Error from getJobsSuperAdmin Action: ", err.message, err.stack);
        return { success: false, message: err.response.data.message };
    }
}

// For Super Admin Accept Job 
export const AcceptJobsAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.AcceptJob(id);
        // getJobsSuperAdminAction();
        // dispatch({type:'ACCEPTED_JOBS',data});
        return { success: true, message: "Jobs Accepted Successfully" };
    } catch (error) {
        console.log("Error from AcceptJobs Action: ", error.message, error.stack);
        return { success: false, message: error.response.data.message };
    }
}

// For Super Admin Reject Job
export const RejectJobsAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.RejectJob(id);
        // getJobsSuperAdminAction();
        // dispatch({type:'REJECTED_JOBS',data});
        return { success: true, message: "Jobs Rejected Successfully" };
    } catch (error) {
        console.log("Error from RejectJobs Action: ", error.message, error.stack);
        return { success: false, message: error.response.data.message };
    }
}



export const UpdateCandidStatsAction = (ApplicantStatus) => async (dispatch) => {
    try {
        const { data } = await api.updateCandidateStatus(ApplicantStatus);
        dispatch({ type: 'UPDATE_CANDIDATE_STATUS', data });
        return { success: true, message: "Candidate Status Updated Successfully" }
    } catch (err) {
        console.log("Error from UpdateCandidStat Action: ", err.message, err.stack);
        return { success: false, message: err.response.data.message }
    }
}

export const ApplyJobAction = (jobApplicants) => async (dispatch) => {
    try {
        const { data } = await api.ApplyJob(jobApplicants);
        dispatch({ type: 'APPLY_JOB', data });
        return { success: true, message: "Applied for Job Successfully" };
    } catch (err) {
        console.log("Error from ApplyJob Action: ", err.message, err.stack);
        return { success: false, message: err.response.data.message };
    }
}

export const CreateJob = (jobData) => async (dispatch) => {
    try {
        const { data } = await api.PostNewJob(jobData);
        dispatch({ type: 'CREATE_JOB', data });
        console.log("Job Admin Action : ", data);
        return { success: true, message: "Job Posted Successfully" };
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

export const getJobSingleAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.GetSingleJob(id);
        dispatch({ type: 'GET_JOB_SINGLE', data });
        console.log("GetJobSingle Action : ", data);
    } catch (err) {
        console.log("Error from GetJobSingle Action: ", err.message, err.stack);
    }
}



export const UpdateAJobAction = (id, jobData) => async (dispatch) => {
    try {
        const { data } = await api.UpdateJob(id, jobData);
        dispatch({ type: 'UPDATE_CURRENT_JOB', data });
        console.log("UpdateJob Action : ", data);
        return { success: true, message: "Job Updated Successfully" };
    } catch (error) {
        console.log("Error from UpdateJob Action: ", error.message, error.stack);
        return { success: false, message: error.response.data.message };
    }
}

export const DeleteJobAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.DeleteJob(id);
        return { success: true, message: "Job Updated Successfully" };
    } catch (error) {
        console.log("Error from DeleteJob Action: ", error.message, error.stack);
        return { success: false, message: error.response.data.message };
    }
}

