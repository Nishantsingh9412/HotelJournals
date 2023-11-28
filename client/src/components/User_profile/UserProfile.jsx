import React, { useEffect } from 'react'

import PrCss from './userProfile.module.css';
import ProfilePic from './ProfilePic';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAllUsers} from '../../redux/actions/users'

const UserProfile = () => {
  
  const dispatch = useDispatch();

  // const {id} = useParams();
  const id = "6478414164141264"
  const users = useSelector((state) => state.usersReducer)
  // const currentProfile = users?.filter((user) => user._id === id)[0]
  // const currentUser = useSelector((state) => state.currentUserReducer)

  useEffect(() => {
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
                <div class="card-body ">
                  <i class="fa-solid fa-user fa-3x"></i> &nbsp;
                  <span>
                    Profile at 60% Completion
                  </span>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: '23vw' }}>
              <div class="card-body text-center">
                <i class="fa-solid fa-envelope"></i> &nbsp;
                <span>
                  Contact
                </span>
              </div>
              <div class="card-body">
                <i class="fa-solid fa-at"></i> &nbsp;
                <span>
                  nishantsingh9412ns@gmail.com
                </span>
              </div>
              <div class="card-body">
                <i class="fa-solid fa-phone"></i>&nbsp;
                <span>
                  +12 - 11111 - 11111
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
