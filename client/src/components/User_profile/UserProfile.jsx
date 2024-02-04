import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProfilePic from './ProfilePic';
import PrCss from './userProfile.module.css';
import {fetchAllUsers} from '../../redux/actions/users'

const UserProfile = () => {
  
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const {id} = useParams();
  const users = useSelector((state) => state.usersReducer)
  const currentUser = users?.allUserDetails?.filter((user) => user._id === id)[0];
  console.log(currentUser);

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('Profile'));
    console.log("Stored profile : " , storedProfile);
    
    if(!storedProfile || storedProfile?.result?._id !== id || !storedProfile?.result){
      navigate('/login'); 
    }

    dispatch(fetchAllUsers());
  },[dispatch])

  return (

    <div >   {/*  main container */}
      <ProfilePic />
      <div className='container'>
        <div className='row pt-2  '>
          <div className={PrCss.contactFollow}>

            <div className='card w-75'>
              <div className='card mt-5'>
                <div className="card-body ">
                  <i className="fa-solid fa-user fa-3x"></i> &nbsp;
                  <span>
                    Profile at 60% Completion
                  </span>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: '23vw' }}>
              <div className="card-body text-center">
                <i className="fa-solid fa-envelope"></i> &nbsp;
                <span>
                  Contact
                </span>
              </div>
              <div className="card-body">
                <i className="fa-solid fa-at"></i> &nbsp;
                <span>
                  {currentUser?.email}
                </span>
              </div>
              <div className="card-body">
                <i className="fa-solid fa-phone"></i>&nbsp;
                <span>
                   {currentUser?.country_code} - {currentUser?.phone}
                </span>
              </div>
            </div>

          </div>
        </div>
        <div className='row'>
          <div className={` ${PrCss.addSections}`}>
            <div className="card w-100">
              <div className="card-body text-center">
                <i className='fa-solid fa-plus'></i>
                <p className='card-text'> Briefly Introduce Yourself  </p>
              </div>
            </div>
          </div>

          <div className={` ${PrCss.addSections}`}>
            <div className="card w-100">
              <div className="card-body text-center">
                <i className='fa-solid fa-plus'></i>
                <p className='card-text'> Add your experiences  </p>
              </div>
            </div>
          </div>

          <div className={` ${PrCss.addSections}`}>
            <div className="card w-100">
              <div className="card-body text-center">
                <i className='fa-solid fa-plus'></i>
                <p className='card-text'>Add your skills </p>
              </div>
            </div>
          </div>
          <div className={` ${PrCss.addSections}`}>
            <div className="card w-100">
              <div className="card-body text-center">
                <i className='fa-solid fa-plus'></i>
                <p className='card-text'> Upload your CV's  </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserProfile
