import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PrCss from './userProfile.module.css';
import { fetchAllUsers } from '../../redux/actions/users';


const ProfilePic = () => {

  const dispatch = useDispatch();
  const {id} = useParams();
  const users = useSelector((state) => state.usersReducer)
  const currentUser = users?.allUserDetails?.filter((user) => user._id === id)[0];


  useEffect(() => {
    dispatch(fetchAllUsers());
  },[dispatch])


  return (
    <div className={`container mt-1 ${PrCss.mainProfile}`} >
        <div className='row'>
          <div className='col'>
            {/* name and other details */}
            <div className={PrCss.leftSection}>
              <h1> {currentUser?.fname} {currentUser?.lname}</h1>
              <h4> Lorem ipsum dolor </h4>
              <h6> Lorem ipsum dolor sit amet </h6>

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
