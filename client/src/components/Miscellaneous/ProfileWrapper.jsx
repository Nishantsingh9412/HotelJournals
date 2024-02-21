import React from 'react'

import EducatorProfile from '../Educator_Profile/EducatorProfile'
import RecruiterProfile from '../Recruiters_profile/RecruiterProfile'
import UserProfile from '../User_profile/UserProfile'
const ProfileWrapper = () => {

    const localUser = JSON.parse(localStorage.getItem('Profile'));;
    const localUserType = localUser?.result?.userType;
  
    if(localUserType == 'educator'){
        return <EducatorProfile />
    }
    else if(localUserType == 'recruiter'){
        return <RecruiterProfile />
    }else{
        return <UserProfile />
    }
}

export default ProfileWrapper
