// import React, { useState } from 'react'

// import EducatorProfile from '../Educator_Profile/EducatorProfile'
// import RecruiterProfile from '../Recruiters_profile/RecruiterProfile'
// import UserProfile from '../User_profile/UserProfile'
// import MainRecruiterDashboard from '../admin/RecruiterDashboard/MainRecruiterDashboard'

// const ProfileWrapper = () => {
//     const localUser = JSON.parse(localStorage.getItem('Profile'));
//     const localUserType = localUser?.result?.userType;

//     // State to track whether the recruiter form has been submitted or not
//     // const [isRecruiterFormSubmitted, setIsRecruiterFormSubmitted] = useState(false);

//     if (localUserType == 'educator') {
//         return <EducatorProfile />;
//     }
//     else if (localUserType == 'recruiter') {
//         // If the recruiter form has not been submitted, show the form
//         // if (!isRecruiterFormSubmitted) {
//             // return <RecruiterProfile onFormSubmit={() => setIsRecruiterFormSubmitted(true)} />;
//         // }
//         // If the recruiter form has been submitted, show the recruiter dashboard
//         // return <MainRecruiterDashboard />;
//         return <RecruiterProfile />
//     } else {
//         return <UserProfile />;
//     }
// }
// export default ProfileWrapper

import React, { useState, useEffect } from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

import EducatorProfile from '../Educator_Profile/EducatorProfile'
import RecruiterProfile from '../Recruiters_profile/RecruiterProfile'
import UserProfile from '../User_profile/UserProfile'
import ManageCourses from '../Educator_Profile/ManageCourses'

// import MainRecruiterDashboard from '../admin/RecruiterDashboard/MainRecruiterDashboard'

const ProfileWrapper = () => {
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('Profile'));
        const localUserType = localUser?.result?.userType;
        setUserType(localUserType);
    }, []);

    if (!userType) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <PuffLoader
                    color="red"
                    size={70}
                />
            </div>
        )
    }

    if (userType == 'educator') {
        return <ManageCourses />
    }
    else if (userType == 'recruiter') {
        return <RecruiterProfile />
    } else {
        return <UserProfile />;
    }
}

export default ProfileWrapper;