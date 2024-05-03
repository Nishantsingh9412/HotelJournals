import axios from 'axios'


const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
});

// Miscellaneous
export const setMail = (mailData) => API.post('/mail', mailData)

// Authentication 

export const signUp = (authData) => API.post('/user/signup', authData)

export const Login = (authData) => API.post('/user/login', authData)

// Forgot Password
export const ForgotPasswordAPI = (authData) => API.post('/user/forgotpassword', authData)

// Reset Password

export const resetPasswordAPI = (authData) => API.post(`/user/reset-password/${authData.token}`, { newPassword: authData.newPassword })

// Auth SuperAdmin
export const SuperAdminAuth = (authData) => API.post('/superadmin/login', authData)

// Count SuperAdmin Jobs
export const countSuperAdminJobs = () => API.get('/superadmin/jobs-count')
// Count SuperAdmin Courses
export const countSuperAdminCourses = () => API.get('/superadmin/courses-count')
// Count SuperAdmin Tips
export const countSuperAdminTips = () => API.get('/superadmin/tips-count')
// Recent Unverified Jobs
export const recentUnverifiedJobs = () => API.get('/superadmin/recent-unverified-jobs')
// Recent Courses
export const recentCourses = () => API.get('/superadmin/recent-courses')



// Getting all users data from database
export const Profile = () => API.get('/user/profile')

// Getting single user data from database
export const singleProfile = (id) => API.get(`/user/profile/${id}`)

// updating single user data from database
export const updateSingleProfile = (id, updatedData) => API.patch(`/user/profile/${id}`, updatedData)

// Updating user profile pic
export const updateUserProfilePics = (id, profileData) => API.patch(`/user/profile/updatepic/${id}`, profileData)
// Deleting user profile pic
export const deleteUserProfilePic = (id) => API.patch(`/user/profile/deletepic/${id}`)

// Getting user profile pic
export const getProfilePicSingle = (id) => API.get(`/user/profile/pic/${id}`)

// Tips Admin (Blog creation)
export const TipsAdminData = (tipsData) => API.post('/admin/tips', tipsData)

// Tips Data (Blog fetching)  For All Blogs 
export const TipsData = () => API.get('/admin/tips')

// Tips Data for single Blog 
export const TipsDataSingle = (id) => API.get(`/admin/tips/${id}`)

// Deleting a Blog
export const DeleteTip = (id) => API.delete(`/admin/tips/${id}`)

// For Updating a Tip
export const UpdateTip = (id, tipsdata) => API.patch(`/admin/tips/${id}`, tipsdata)

//  ----------------------------  For Creating a Course---------------

// Paginating the courses
export const paginateCourses = (page, limit) => API.get(`/courses/paginateCourses?page=${page}&limit=${limit}`)

// Setting  up courses Filter API
export const courseFilter = (filterData,page,limit) => API.get(`/courses/courseFilter?${filterData}&page=${page}&limit=${limit}`)

// Setting up courses Search API
export const courseSearch = (searchData,page,limit) => API.get(`/courses/courseSearch?${searchData}&page=${page}&limit=${limit}`)

// Course Admin (Course creation)
export const CourseAdminData = (courseData) => API.post('/courses/newCourse', courseData)

// Course Data (Course fetching)  For All Courses

export const getCourseData = () => API.get('/courses/allCourses')

// Course Data for single Course

export const getCourseDataSingle = (id) => API.get(`/courses/singleCourse/${id}`)

// Editing a Course
export const UpdateCourseData = (id, courseData) => API.patch(`/courses/singleCourse/${id}`, courseData)

// Deleting a Course

export const DeleteCourse = (id) => API.delete(`/courses/singleCourse/${id}`)



//  ----------------------------  For Creating a Job---------------
// Checking user has applied for job or nor 

export const checkAppliedByUserAllJobs = (id) => API.get(`/jobs/checkapplied-by-user/${id}`)

export const checkAppliedForJob = (jobid, userid) => API.get(`/jobs/checkapplied/${jobid}/${userid}`)

// Getting similar jobs
export const getSimilarJobs = (id) => API.get(`/jobs/similarJobs/${id}`)

// Updating Candidate Status
export const updateCandidateStatus = (updatedStatus) => API.patch('/jobs/updatestatus', updatedStatus)
// Job Apply (Applicants)
export const ApplyJob = (jobApplicants) => API.patch('/jobs/applyjob', jobApplicants)
// Job Admin (Job creation)
export const PostNewJob = (JobData) => API.post('/jobs/createjob', JobData)

// Job Data (Job fetching)  For All Jobs (Verified Jobs)
export const GetAllJobs = () => API.get('jobs/allJobs')

export const GetJobsPaginated = (page, limit) => API.get(`jobs/lazy-loading-jobs?page=${page}&limit=${limit}`)


// Job Data( Only Hired Candidates ) For Recruiter Jobs (For Recruiter) By Job Id
// export const HiredCandidates = (id) => API.get(`/jobs/recruiter/hired/${id}`)

// Job Data( Only Rejected Candidates ) For Recruiter Jobs (For Recruiter) By Job Id
// export const RejectedCandidates = (id) => API.get(`/jobs/recruiter/rejected/${id}`)

// Job Data( Only Offered Candidates ) For Recruiter Jobs (For Recruiter) By Job Id
// export const OfferedCandidates = (id) => API.get(`/jobs/recruiter/offered/${id}`)

// export const notOfferedCandidates = (id) => API.get(`/jobs/recruiter/notOffered/${id}`)

// Job Data (Job fetching)  For Recruiter Jobs (For Recruiter) By Recruiter Id
export const GetRecruiterJobs = (id) => API.get(`/jobs/recruiter/${id}`)

// Accept jobs SuperAdmin  (For SuperAdmin)
export const AcceptJob = (id) => API.patch(`/jobs/verifyjob/${id}`)

// Reject jobs SuperAdmin  (For SuperAdmin)
export const RejectJob = (id) => API.patch(`/jobs/rejectjob/${id}`)

// Job Data (Job fetching)  For All Jobs (For SuperAdmin Both Verified and Unverified Jobs)
export const GetAllJobsForSuperAdmin = () => API.get('jobs/alljobsforsuperadmin')

// Getting Single Job
export const GetSingleJob = (id) => API.get(`/jobs/singlejob/${id}`)

// Updating a Job
export const UpdateJob = (id, JobData) => API.patch(`jobs/singlejob/${id}`, JobData)

// Deleting a Job
export const DeleteJob = (id) => API.delete(`jobs/singlejob/${id}`)


//  ----------------------------------------- For User Profile (Introduction) ------------------------------
// Setting User Profile
export const setUserProfile = (profileData) => API.post('/user/profile/setProfile', profileData)

// Getting User Profile
export const getUserProfile = (id) => API.get(`/user/profile/getProfile/${id}`)

// Updating User Profile
export const updateUserProfile = (id, profileData) => API.patch(`/user/profile/editProfile/${id}`, profileData)

// Deleting User Profile
export const DeleteUserProfile = (id) => API.delete(`/user/profile/deleteProfile/${id}`)

//  ----------------------------------------- For User Profile  (Experience) ------------------------------
// Setting User Experience
export const setUserExperience = (experienceData) => API.post('/user/profile/setExperience', experienceData)

// Getting User Experience
export const getUserExperience = (id) => API.get(`/user/profile/getExperience/${id}`)

// Updating User Experience
export const editUserExperience = (id, experienceData) => API.patch(`/user/profile/editExperience/${id}`, experienceData)

// Deleting User Experience
export const DeleteUserExperience = (id) => API.delete(`/user/profile/deleteExperience/${id}`)

// ----------------------------------------- For User Profile  (Education) ------------------------------`
// Setting User Education
export const setUserEducation = (educationData) => API.post('/user/profile/setEducation', educationData)

// Getting User Education
export const getUserEducation = (id) => API.get(`/user/profile/getEducation/${id}`)

// Updating User Education
export const editUserEducation = (id, updatedData) => API.patch(`/user/profile/edituserEducation/${id}`, updatedData)

// Deleting User Education
export const deleteUserEducation = (id) => API.delete(`/user/profile/deleteEducation/${id}`)




// ----------------------------------------- For User Profile  (Skills) ------------------------------
// Setting User Skills
export const setUserSkills = (skillData) => API.post('/user/profile/setSkills', skillData)

// Getting User Skills
export const getUserSkills = (id) => API.get(`/user/profile/getSkills/${id}`)

// Updating User Skills
export const updateUserSkills = (id, updatedData) => API.patch(`/user/profile/editSkills/${id}`, updatedData)

// Deleting User Skills
export const deleteUserSkills = (id) => API.delete(`/user/profile/deleteSkills/${id}`)

// ----------------------------------------- For User Profile (Certificates) ------------------------------
// Setting User Certificates
export const setUserCertification = (CertificatesData) => API.post('user/profile/setCertification', CertificatesData)

// Getting User Certificates
export const getUserCertification = (id) => API.get(`/user/profile/getCertification/${id}`)

// Updating User Certificates
export const updateUserCertification = (id, updatedData) => API.patch(`/user/profile/editCertification/${id}`, updatedData)

// Deleting User Certificates
export const deleteCertification = (id) => API.delete(`/user/profile/deleteCertification/${id}`)

// ----------------------------------------- For User Profile (Languages) ------------------------------
// Setting User Languages
export const setUserLanguage = (LanguageData) => API.post('/user/profile/setLanguage', LanguageData)
// Getting User Language
export const getUserLanguage = (id) => API.get(`/user/profile/getLanguage/${id}`)
// Updating User Language
export const updateUserLanguage = (id, updatedData) => API.patch(`/user/profile/editLanguage/${id}`, updatedData)
// Deleting User Language
export const deleteUserLanguage = (id) => API.delete(`/user/profile/deleteLanguage/${id}`)

// ----------------------------------------- For User Profile (Additional Information) ------------------------------
// Setting additional Info
export const setAdditionalInfo = (additionalData) => API.post('/user/profile/setAddInfo', additionalData)
// Getting additional Info
export const getAdditionalInfo = (id) => API.get(`/user/profile/getAddInfo/${id}`)
// Updating additional Info
export const updatedAdditionalInfo = (id, updatedData) => API.patch(`/user/profile/editAddInfo/${id}`, updatedData)
// Deleting additional Info
export const deleteAdditionalInfo = (id) => API.delete(`user/profile/deleteAdditionalInfo/${id}`)

// ----------------------------------------- For User Profile (CV) ------------------------------
// Setting User CV
export const setUserCv = (id, cvData) => API.post(`/user/profile/uploadCV/${id}`, cvData)
// Getting User CV
export const getUserCv = (id) => API.get(`/user/profile/getCV/${id}`)
// Updating User CV
export const updateUserCv = (id, cvData) => API.patch(`/user/profile/updateCV/${id}`, cvData)
// Deleting User CV
export const deleteUserCV = (id) => API.delete(`/user/profile/deleteCV/${id}`)

// ----------------------------------------- For Recruiter Profile ------------------------------
// Setting Recruiter Profile
export const setRecruiterProfile = (profileData) => API.post('/recruiter/profile/setrecprofile', profileData)
// Getting Recruiter Profile
export const getRecruiterProfile = (id) => API.get(`/recruiter/profile/getrecprofile/${id}`)

// Updating Recruiter Profile
export const updateRecruiterProfile = (id, profileData) => API.patch(`/recruiter/profile/updaterecprofile/${id}`, profileData)
// Deleting Recruiter Profile
export const deleteRecruiterProfile = (id) => API.delete(`/recruiter/profile/deleterecprofile/${id}`)


// ----------------------------------------- For Recruiter Profile (Profile Pic) ------------------------------

// Getting recruiter profile pic 
export const getRecruiterProfilePic = (id) => API.get(`/recruiter/profile/getrecpic/${id}`)
// Updating recruiter profile pic
export const updateRecruiterProfilePic = (id, profilepicData) => API.patch(`/recruiter/profile/updaterecpic/${id}`, profilepicData)
// Deleting recruiter profile pic
export const deleteRecruiterProfilePic = (id) => API.patch(`/recruiter/profile/deleterecpic/${id}`)


