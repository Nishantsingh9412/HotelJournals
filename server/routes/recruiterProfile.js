import express from 'express';
import {
    deleteRecruiterProfile,
    getRecruiterProfile,
    setRecruiterProfile,
    updateRecruiterProfile
} from '../controllers/recProfile.js';



const router = express.Router();
// Create Profile
router.post('/setrecprofile', setRecruiterProfile)
// Get Profile
router.get('/getrecprofile/:id', getRecruiterProfile)
// Update Profile
router.patch('/updaterecprofile/:id', updateRecruiterProfile)
// Delete Profile
router.delete('/deleterecprofile/:id', deleteRecruiterProfile)


export default router