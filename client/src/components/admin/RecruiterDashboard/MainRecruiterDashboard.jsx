import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PuffLoader from "react-spinners/PuffLoader";
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

import { fetchSingleUser } from '../../../redux/actions/users.js';
import { getRecProfileAction } from '../../../redux/actions/recProfile.js';
import SideBar from './Sidebar/SideBar.jsx';
import ViewProfile from './ViewProfile.jsx';
import ManageAllStyles from './ManageAllJobs.module.css';
import UpdateRecProfileForm from './UpdateRecProfileForm.jsx';
import RecruiterSidebarFinal from '../../Miscellaneous/RecruiterSidebarFinal.jsx';

const MainRecruiterDashboard = () => {

  const [oldProfilePic, setOldProfilePic] = useState('');
  const [loading, setLoading] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localUser = JSON.parse(localStorage.getItem('Profile'));
  const localUserId = localUser?.result?._id;
  console.log(localUserId);

  useEffect(() => {
    dispatch(fetchSingleUser(localUserId));
  }, [dispatch])

  useEffect(() => {
    if (localUserId) {
      dispatch(getRecProfileAction(localUserId))
    }
  }, [dispatch])

  const recruiterProfile = useSelector((state) => state.getRecProfileReducer);
  const singleRecruiterData = recruiterProfile?.data?.result[0];

  useEffect(() => {
    if (recruiterProfile) {
      setLoading(false);
    }

  }, [recruiterProfile])

  const handleProfileClick = () => {
    dispatch(getRecProfileAction(localUserId));
  }

  useEffect(() => {
    if (singleRecruiterData) {
      setOldProfilePic(singleRecruiterData?.company_logo);
      setLoading(false);
    } else {
      navigate('/login');
    }
  }, [singleRecruiterData])

  console.log(singleRecruiterData);
  console.log(43, singleRecruiterData)
  console.log(44, oldProfilePic)

  useEffect(() => {
    // for logout redirect to login page
    if (!localStorage.getItem('Profile')) {
      navigate('/login');
    }
  }, [])


  return (
    <>

      {loading ? (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <PuffLoader
            color="red"
            size={70}
          />
        </div>

      ) : (

        <div className='mb-5'>
          <ToastContainer />
          <div className={ManageAllStyles.sidebar}>
            {/* <SideBar /> */}
            <RecruiterSidebarFinal />
          </div>
          <div className={ManageAllStyles.content} >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              {/* <h3 className='mt-2' >
                Welcome  {singleRecruiterData?.created_by?.fname} To
                Hotel Journals </h3> */}
              <h3 className='mt-2'>
                Bienvenido/a {singleRecruiterData?.created_by?.fname}  a Hotel Journals
              </h3>


              {/* h2 */}
              <FaEdit
                size={30}
                onClick={() => setEditProfile(!editProfile)}
                style={{ color: '#e4b49d', marginLeft: '10px', cursor: 'pointer' }}
              />
            </div>
            {
              editProfile ?
                (
                  <UpdateRecProfileForm />
                ) : (
                  <>
                    <ViewProfile
                      data={singleRecruiterData}
                    />
                  </>
                )}
          </div>
        </div>
      )}
    </>
  )
}

export default MainRecruiterDashboard
