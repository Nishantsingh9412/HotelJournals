import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home'
import About from './components/About/About';
import Tips from './components/Tips/Tips';
import JournalsPage from './components/Journals/JournalsPage';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import UserProfile from './components/User_profile/UserProfile';
import AdminTips from './components/admin/AdminTips/AdminTips';
import SingleTip from './components/Tips/SingleTip';
import Dashboard from './components/admin/Dashboard/Dashboard';
import UpdateTips from './components/admin/AdminTips/UpdateTips';
import Courses from './components/courses/Courses';
import CreateCourse from './components/admin/AdminCourses/CreateCourse';
import CourseDescription from './components/courses/CourseDescription';
import EducatorDashboard from './components/admin/AdminCourses/EducatorDashboard';
import UpdateCourse from './components/admin/AdminCourses/UpdateCourse';
import JobsLanding from './components/Jobs/JobsLanding';
import JobsDashboard from './components/Jobs/JobsDashboard';
import CreateJobs from './components/admin/RecruiterDashboard/CreateJobs';
import RecruiterDashboard from './components/admin/AdminJobs/RecruiterDashboard';
import UpdateJobs from './components/admin/AdminJobs/UpdateJobs';
import AllJobs from './components/Jobs/AllJobs';
import ParticularJob from './components/Jobs/ParticularJob';
import ManageParticularJob from './components/Jobs/ManageParticularJob';
import FinalizeCandidates from './components/Jobs/FinalizeCandidates';
import HotelLandingpage from './components/Hotel_Journals_Landing_page/HotelLandingPage';
import JobDescription from './components/Job_Description/JobDescription2';
import ProfileWrapper from './components/Miscellaneous/ProfileWrapper';
import Job_search from './components/Job_search/Job_search';
import Dashboardd from './components/Dashboard/Dashboardd';
import ManageCandidate from './components/ManageCandidate/ManageCandidate/ManageCandidate';
import SidebarDashboard from './components/ManageCandidate/ManageCandidate/SidebarDashboard';
import ProfilePageNew from './components/ManageCandidate/ManageCandidate/ProfilePageNew';
import Resume from './components/Danish/Resume/Resume';
import ShowApplicantsTable from './components/Jobs/ShowApplicantsTable';
import ManageApplicants from './components/admin/RecruiterDashboard/ManageApplicants';
import MainRecruiterDashboard from './components/admin/RecruiterDashboard/MainRecruiterDashboard';
import RecruiterSidebar from './components/admin/RecruiterDashboard/RecruiterSidebar';
import Sidebar from './components/admin/RecruiterDashboard/Sidebar/SideBar'
import ManageAllJobs from './components/admin/RecruiterDashboard/ManageAllJobs';
import ImageCropperReal from './components/Recruiters_profile/ImageCropperReal';
import Jobs from './components/Jobs/JobsLanding/Jobs';
import SuperAdmin from './components/superAdmin/SuperAdmin';
import TipsSuperAdmin from './components/superAdmin/TipsSuperAdmin';
import AddTipSuperAdmin from './components/superAdmin/AddTipSuperAdmin';
import TipEditSuperAdmin from './components/superAdmin/TipEditSuperAdmin';
import CourseSuperAdmin from './components/superAdmin/courses/CourseSuperAdmin';
import AddCourseSA from './components/superAdmin/courses/AddCourseSA';
import EditCourse from './components/superAdmin/courses/EditCourse';
import JobsDashboardMain from './components/superAdmin/jobs/JobsDashboardMain';
import ViewParticularJob from './components/superAdmin/jobs/ViewParticularJob';
import CreateJobsSA from './components/superAdmin/jobs/CreateJobsSA';
import UpdateJobDashboard from './components/superAdmin/jobs/UpdateJobDashboard';
import ProfilePageMain from './components/Recruiters_profile/ProfilePageMain';
import RecruiterProfile from './components/Recruiters_profile/RecruiterProfile';
import RecruiterFinalDashboard from './components/admin/AdminJobs/RecruiterFinalDashboard';
import EmailTemp from './components/Miscellaneous/EmailTemp';
import RecruiterDashboardTest from './components/Miscellaneous/RecruiterSidebarFinal';
import PostCourse from './components/Educator_Profile/PostCourse';
import ManageCourses from './components/Educator_Profile/ManageCourses';
import UpdateCourseEdu from './components/Educator_Profile/UpdateCourseEdu';
import UpdateJobRecruiter from './components/admin/RecruiterDashboard/UpdateJobRecruiter';
import LoginSuperAdmin from './components/superAdmin/auth/LoginSuperAdmin';
import ProtectedRoute from './ProtectedRoute';


const AllRoutes = () => {
    return (
        <Routes >
            {/* <Route  path='/' element={< Home/>}> </Route> */}
            <Route path='/' element={<HotelLandingpage />} > </Route>
            <Route path='/about' element={< About />}>  </Route>
            <Route path='/tips' element={<Tips />} >  </Route>
            <Route path='/journals' element={<JournalsPage />} > </Route>
            <Route path='/signUp' element={<Signup />} > </Route>
            <Route path='/login' element={<Login />} > </Route>
            {/* <Route path='/profile/:id' element={<UserProfile/>} > </Route> */}
            <Route path='/profile/:id' element={<ProfileWrapper />} > </Route>
            <Route path='/admintips' element={<AdminTips />} > </Route>
            <Route path='/courses' element={<Courses />} > </Route>

            {/* Jobs Routes */}
            {/* <Route path='/jobs' element={<JobsLanding />} > </Route> */}
            <Route path='/jobs' element={<Jobs />} > </Route>

            <Route path='/AllJobs' element={<AllJobs />} > </Route>
            <Route path='/AllJobs/:id' element={<ParticularJob />} > </Route>

            {/* Admin Routes  */}
            {/*  For Tips */}
            <Route path='/dashboard' element={<Dashboard />}>  </Route>
            <Route path='/dashboard/updateTips/:id' element={<UpdateTips />}>  </Route>

            {/* For Courses */}
            {/* Create Course */}
            <Route path='/admin/courses' element={<CreateCourse />} >  </Route>
            {/* Get Single Course */}
            <Route path='courses/:id' element={<CourseDescription />} > </Route>
            {/* Course Dashboard */}
            <Route path='/educator/dashboard' element={<EducatorDashboard />}>  </Route>
            {/* Edit Course */}
            <Route path='/educator/dashboard/update/:id' element={<UpdateCourse />}>  </Route>
            {/* For Jobs */}
            {/* <Route path='/jobs/dashboard' element={<RecruiterDashboard />} > </Route> */}
            {/* <Route path='/jobs/dashboard/:id/job/manage/' element={<ManageParticularJob />} > </Route>  */}
            <Route path='/jobs/dashboard/:id/job/manage/finalize' element={<FinalizeCandidates />} > </Route>
            <Route path='/jobs/dashboard/update/:id' element={<UpdateJobs />}></Route>

            {/* Recruiter Dashboard */}
            <Route path='/jobs/mainrecruiterdash' element={<MainRecruiterDashboard />} > </Route>


            {/* // Temporary Route for testing */}
            {/* <Route path='/HotelLandingpage' element={<HotelLandingpage /> } > </Route> */}
            <Route path='/JobDescription' element={<JobDescription />} > </Route>
            <Route path='/jobsMainPage' element={<Job_search />} > </Route>
            {/* <Route path='/Dashboardnew/' element={<Dashboardd />} > </Route> */}
            <Route path='/manageCandidates' element={<ManageCandidate />} > </Route>
            <Route path='/test/:id' element={<SingleTip />} > </Route>
            <Route path='/test/sidebar' element={<SidebarDashboard />} > </Route>
            <Route path='/test/profilePage' element={<ProfilePageNew />} > </Route>
            <Route path='/test/resume' element={<Resume />} > </Route>
            <Route path='/test/showtable' element={<ShowApplicantsTable />} > </Route>

            {/* Superadmin login  */}

            <Route path='/login/superadmin' element={<LoginSuperAdmin />} > </Route>
            {/* SuperAdmin Dashboard */}
            {/* <ProtectedRoute path='/superadmin' element={<SuperAdmin />} > </ProtectedRoute> */}
            {/* Tips */}
            {/* <ProtectedRoute path='/superadmin/tips' element={<TipsSuperAdmin />} > </ProtectedRoute> */}
            {/* <ProtectedRoute path='/superadmin/tips/post' element={<AddTipSuperAdmin />} > </ProtectedRoute> */}
            {/* <ProtectedRoute path='/superadmin/tips/update/:id' element={<TipEditSuperAdmin />} > </ProtectedRoute> */}
            {/* Courses */}
            {/* <ProtectedRoute path='/superadmin/courses' element={<CourseSuperAdmin />} > </ProtectedRoute> */}
            {/* <ProtectedRoute path='/superadmin/courses/post' element={<AddCourseSA />} > </ProtectedRoute> */}
            {/* <ProtectedRoute path='/superadmin/courses/update/:id' element={<EditCourse />} > </ProtectedRoute> */}
            {/* Jobs */}
            {/* <ProtectedRoute path='/superadmin/jobs' element={<JobsDashboardMain />} > </ProtectedRoute> */}
            {/* <ProtectedRoute path='/superadmin/jobs/view/:id' element={<ViewParticularJob />} ></ProtectedRoute> */}
            {/* <ProtectedRoute path='/superadmin/jobs/post' element={<CreateJobsSA />} ></ProtectedRoute> */}
            {/* <ProtectedRoute path='/superadmin/jobs/update/:id' element={<UpdateJobDashboard />} ></ProtectedRoute> */}


            <Route path='/superadmin' element={<ProtectedRoute component={SuperAdmin} />} />
            {/* Tips */}
            <Route path='/superadmin/tips' element={<ProtectedRoute component={TipsSuperAdmin} />} />
            <Route path='/superadmin/tips/post' element={<ProtectedRoute component={AddTipSuperAdmin} />} />
            <Route path='/superadmin/tips/update/:id' element={<ProtectedRoute component={TipEditSuperAdmin} />} />

            {/* Courses */}
            <Route path='/superadmin/courses' element={<ProtectedRoute component={CourseSuperAdmin} />} />
            <Route path='/superadmin/courses/post' element={<ProtectedRoute component={AddCourseSA} />} />
            <Route path='/superadmin/courses/update/:id' element={<ProtectedRoute component={EditCourse} />} />

            {/* Jobs */}
            <Route path='/superadmin/jobs' element={<ProtectedRoute component={JobsDashboardMain} />} />
            <Route path='/superadmin/jobs/view/:id' element={<ProtectedRoute component={ViewParticularJob} />} />
            <Route path='/superadmin/jobs/post' element={<ProtectedRoute component={CreateJobsSA} />} />
            <Route path='/superadmin/jobs/update/:id' element={<ProtectedRoute component={UpdateJobDashboard} />} />


            {/* Routes for recruiter dashboard */}
            {/* <Route path='/test/recruiter/sidebarNew' element = {<RecruiterSidebar />} > </Route> */}
            <Route path='/test/recruiter/sidebar' element={<Sidebar />} > </Route>

            <Route path='/recruiter' element={<MainRecruiterDashboard />} > </Route>
            <Route path='/recruiter/jobs/post' element={<CreateJobs />} ></Route>
            <Route path='/recruiter/manageJobs' element={<ManageAllJobs />} > </Route>
            <Route path='/recruiter/job/update/:id' element={<UpdateJobRecruiter />} > </Route>
            <Route path='/recruiter/jobs/:id/job/manage/' element={<ManageParticularJob />} > </Route>
            {/* <Route path='/test/imageCropper' element={<ImageCropperReal />} > </Route> */}

            {/* Routes for Educator Dashboard */}
            <Route path='/educator/course/post' element={<PostCourse />} > </Route>
            <Route path='/educator/courses' element={<ManageCourses />} > </Route>
            <Route path='/educator/course/update/:id' element={<UpdateCourseEdu />} > </Route>

            {/* For Recruiter and Educator Profile  Testing */}
            <Route path='/test/profilepagmain' element={<ProfilePageMain />} > </Route>
            <Route path='/test/recprofile/:id' element={<RecruiterProfile />} > </Route>
            <Route path='/test/emailTemp' element={<EmailTemp />} > </Route>
            <Route path='/test/rec' element={<RecruiterDashboardTest />} > </Route>


            {/* Error 404 Route */}
            <Route path='*' element={<h1> 404 Not Found </h1>} > </Route>
            <Route path='/test/resume' element={<Resume />} > </Route>
            {/* <Route path='/superadmin' element={<Supe />} > </Route> */}

        </Routes>
    )
}

export default AllRoutes
