import React from 'react'
import PrCss from './userProfile.module.css';


const ProfilePic = () => {
  return (
    <div className={`container mt-1 ${PrCss.mainProfile}`} >
        <div className='row'>
          <div className='col'>
            {/* name and other details */}
            <div className={PrCss.leftSection}>
              <h1> Nishant Singh</h1>
              <h4> Student from  Axis </h4>
              <h6> Lives in Kanpur Uttar Pradesh </h6>

            </div>
          </div>

          <div className='col '>
            <div className={PrCss.rightSection}>
              <img src='https://via.placeholder.com/170x170' alt="User's Profile picture" />


            </div>
          </div>
        </div>
      </div>

  )
}

export default ProfilePic
