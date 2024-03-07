import { combineReducers } from "redux";

import authReducer from "./auth";
import currentuserReducer from "./currentUser";
import usersReducer from "./users";
import singleUserReducer from "./userSingle";
// For Tips
import TipsReducer from "./tipsReducer";
import getTipsReducer from "./getTips";
import singleTipReducer from "./getSingleTips";
import courseReducer from '../reducers/coursesReducers/courseReducer'
import getCoursesReducer from "./coursesReducers/getCourses";
import GetCourseSingleReducer from "./coursesReducers/singleCourse";
import UpdateCourseReducer from "./coursesReducers/updateCourse";

import setJobs from './jobsReducers/setJobsReducer'
import AllJobsReducer from "./jobsReducers/allJobsReducer";
import UpdateJobsReducer from "./jobsReducers/updateJobsReducer";
import getSingleJobReducer from "./jobsReducers/getSingleJobReducer";

import getProfileReducer from "./profile/getProfileReducer";
import setProfileReducer from "./profile/setProfileReducer";
import updateProfileReducer from "./profile/updateProfileReducer";
import getExpReducer from "./profile/userExperience/getExp";
import setExpReducer from "./profile/userExperience/setExp";
import updateExpReducer from "./profile/userExperience/updateExp";
import getEducationReducer from "./profile/userEducation/getEdu";
import setEducationReducer from "./profile/userEducation/setEdu";
import updateEducationReducer from "./profile/userEducation/updateEdu";

import getskillsReducer from "./profile/userSkills/getskills";
import setUserSkillsReducer from "./profile/userSkills/setskills";
import UpdateSkillsReducer from "./profile/userSkills/updateskills";

import getCertificatesReducer from "./profile/certificatesReducer/getCertificatesReducer";
import setCertificatesReducer from "./profile/certificatesReducer/setCertificatesReducer";
import updateCertificateReducer from "./profile/certificatesReducer/updateCertificateReducer";

import getLanguageReducer from "./profile/languageReducer/getLang";
import setLanguageReducer from "./profile/languageReducer/setLang";
import updateLanguageReducer from "./profile/languageReducer/updateLang";

import updateAddInfoReducer from "./profile/additionalInfoReducer/updateAddInfo";
import setAdditionalInfoReducer from "./profile/additionalInfoReducer/setAddInfo";
import getAddInfoReducer from "./profile/additionalInfoReducer/getAddInfo";

import CVsettergetterReducer from "./profile/CVReducer/CVSetterGetterReducer";
import UpdateCVReducer from "./profile/CVReducer/updateCVReducer";

import setRecProfileReducer from "./recruiterProfile/setProfile";
import getRecProfileReducer from "./recruiterProfile/getProfile";
import updateRecProfileReducer from "./recruiterProfile/updateProfile"

export default combineReducers({
    authReducer,
    currentuserReducer,
    usersReducer,
    singleUserReducer,
//  For Tips  
    TipsReducer,
    getTipsReducer,
    singleTipReducer,
//   For Courses 
    courseReducer,
    getCoursesReducer,
    GetCourseSingleReducer,
    UpdateCourseReducer,
    setJobs,
    AllJobsReducer,
    UpdateJobsReducer,
    getSingleJobReducer,
    getProfileReducer,
    setProfileReducer,
    updateProfileReducer,
    getExpReducer,
    setExpReducer,
    updateExpReducer,
    getEducationReducer,
    setEducationReducer,
    updateEducationReducer,
    getskillsReducer,
    setUserSkillsReducer,
    UpdateSkillsReducer,
    getCertificatesReducer,
    setCertificatesReducer,
    updateCertificateReducer,
    getLanguageReducer,
    setLanguageReducer,
    updateLanguageReducer,
    updateAddInfoReducer,
    setAdditionalInfoReducer,
    getAddInfoReducer,
    CVsettergetterReducer,
    UpdateCVReducer,
    // Recruiter Profile
    setRecProfileReducer,
    getRecProfileReducer,
    updateRecProfileReducer,


})