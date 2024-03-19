import express from 'express';

import {
    DeleteJob,
    applyJob,
    editJob,
    getAllJobs,
    getSingleJob,
    postJobs,
    updateCandidateStatus,
    filterJobs,
    VerifyJobs,
    rejectJobs,
    getAllJobsForSuperAdmin
} from '../controllers/jobs.js';

const router = express.Router();

// Verify Jobs SuperAdmin
router.patch('/verifyjob/:id', VerifyJobs)

// Reject Jobs SuperAdmin
router.patch('/rejectjob/:id', rejectJobs)

// Create Filter Section 
router.get('/filter',filterJobs)

// Update candidate status
router.patch('/updatestatus', updateCandidateStatus)
// Apply for a job
router.patch('/applyjob', applyJob)
// Add a new Job
router.post('/createjob', postJobs)
// get all Jobs
router.get('/alljobs', getAllJobs)

router.get('/alljobsforsuperadmin', getAllJobsForSuperAdmin)

// get a single Job
router.get('/singlejob/:id', getSingleJob)
// Delete a single Job
router.delete('/singlejob/:id', DeleteJob)
// Edit a job
router.patch('/singlejob/:id', editJob)






export default router