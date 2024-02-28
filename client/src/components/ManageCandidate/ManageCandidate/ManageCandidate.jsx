import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Icons
import { LuContact2 } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { BiAperture } from "react-icons/bi";
import { GrUserManager } from "react-icons/gr";
import { MdMarkEmailRead } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { GoDiscussionOutdated } from "react-icons/go";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { CiBookmark } from "react-icons/ci";

// import { RiSaveLine } from "react-icons/ri";

import styles from './ManageCandidate.module.css';
import img2 from "../../../assets/manageimg/manageimg/img2.png";
import img1 from '../../../assets/manageimg/manageimg/img1.png';
import AllCandidates from './AllCandidates';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteJobAction, GetJobs } from '../../../redux/actions/jobsAdmin.js';




const ManageCandidate = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [AllCandidatesVal, setAllCandidatesVal] = useState(false);
  const [NotOfferedVal, setNotOfferedVal] = useState(false);
  const [OfferedVal, setOfferedVal] = useState(false);
  const [HiredVal, setHiredVal] = useState(false);
  const [RejectedVal, setRejectedVal] = useState(false);

  const [manageCandidate, setManageCandidate] = useState(false);
  const [manageDashboard, setManageDashboard] = useState(false);


  const AllJobs = useSelector((state) => state.AllJobsReducer)
  console.log(AllJobs);

  const localStorageData = JSON.parse(localStorage.getItem('Profile'));
  const local_user_id = localStorageData?.result?._id;
  console.log(`LocalUSERID :  ${local_user_id}`);

  const MyJobs = AllJobs?.result?.filter((jobs) => jobs.created_by === local_user_id);
  console.log(MyJobs);

  useEffect(() => {
    dispatch(GetJobs())
  }, [dispatch]);

  useEffect(() => {
    if (manageCandidate) {
      setManageDashboard(false);
    }
  }, [manageCandidate])

  useEffect(() => {
    if (manageDashboard) {
      setManageCandidate(false);
    }
  }, [manageDashboard])

  // Deletion of Job
  const handleConfirmedDelete = (id) => {
    dispatch(DeleteJobAction(id));
    navigate('/job/dashboard');
    console.log('Job Deleted successfully')
    toast.success('Job Deleted Successfully')
  }

  const handleDelete = (id) => {
    const result = window.confirm('Are you sure you want to delete this Job ?');
    if (result) {
      console.log('Delete the course')
      handleConfirmedDelete(id);
    } else {
      console.log('Cancelled')
    }
  }

  
  const handleCheckboxChange = (e) => {
    console.log(e.target.checked);
  }


  return (
    <div className={styles.ManageCandidateContainer} >

      <div className={styles.ManageCandidateLeft}>

        <div className={styles.sidebar}>
          <div
            className='d-flex'
            onClick={() => setManageDashboard(prevState => !prevState)}
            style={{ fontWeight: 'bolder' }}
          >
            <div className={styles.sideicon}><MdDashboard /></div>
            <p>Dashboard G</p>
          </div>
        </div>
        <div
          className={styles.sidebar}
          onClick={() => setManageCandidate(prevState => !prevState)}
        >
          <div className={styles.sideicon}><LuContact2 /></div>
          <h1 htmlFor="">Manage Candidates   </h1>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideicon}><BiAddToQueue /></div>
          <h1 htmlFor="">Edit Opportunty  </h1>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideicon}><BiAperture /></div>
          <h1 htmlFor="">Opportunity Stats   </h1>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideicon}><GrUserManager /></div>
          <h1 htmlFor="">Manage Roles   </h1>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideicon}><MdMarkEmailRead /></div>
          <h1 htmlFor="">Manage Roles   </h1>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideicon}><SiMinutemailer /></div>
          <h1 htmlFor="">Marketing Roles</h1>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideicon}><GoDiscussionOutdated /></div>
          <h1 htmlFor="">Discussion  </h1>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideicon}><IoNotificationsCircleOutline /></div>
          <h1 htmlFor="">Manage Notifications   </h1>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sideicon}><CiBank /></div>
          <h1 htmlFor=""> Manage Rounds </h1>
        </div>


      </div>

      {/* right section  */}

      {manageCandidate &&
        <div className={styles.ManageCandidateRight} style={{ maxHeight: '800px', overflowY: 'scroll' }}>
          <div className='d-flex'>
            <p
              className='pl-2'
              style={{ cursor: 'pointer' }}
              onClick={() => setAllCandidatesVal(prevState => !prevState)}
            >All</p>
            <p
              className='pl-2'
              style={{ cursor: 'pointer' }}
              onClick={() => setNotOfferedVal(prevState => !prevState)}
            >Not Offered</p>
            <p
              className='pl-2'
              style={{ cursor: 'pointer' }}
              onClick={() => setOfferedVal(prevState => !prevState)}
            >Offered</p>
            <p
              className='pl-2'
              style={{ cursor: 'pointer' }}
              onClick={() => setHiredVal(prevState => !prevState)}
            >Hired</p>
            <p
              className='pl-2'
              style={{ cursor: 'pointer' }}
              onClick={() => setRejectedVal(prevState => !prevState)}
            >Rejected</p>
          </div>
          <div className={styles.ManageCandidateHeading}>
            <div className={styles.checkbox}>
              <input type="checkbox" />
            </div>
            <div className={styles.serialnumber}>#</div>
            <div className={styles.status}> Applicants </div>
            <div className={styles.status2}>Action / Status</div>
          </div>
          {AllCandidatesVal && <AllCandidates />}

        </div>
      }

      <div className='col'>
          <div className={` mt-2 ${styles.twelve}`}>
            <h1> My Jobs  </h1>
            {/* <hr /> */}
          </div>
        {manageDashboard &&
          MyJobs?.map((job, index) => (
            <div className="col-md-6 col-lg-6 " style={{ marginTop: '1vw' }}>
              <div className="card shadow">

                <div className="card-body ">
                  <h5 className="card-title">{job.jobTitle}</h5>
                  <p className="card-text text-muted mb-2">{job.created_at}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge badge-success">Active</span>
                    {/* <span className="badge badge-success">Active</span> */}
                    <div>
                      <button className="btn btn-sm btn-light mr-2" >
                        <IoShareSocial />
                      </button>
                      <button className='btn btn-sm btn-light mr-2'>
                        <HiDotsVertical />
                      </button>
                      {/* <button className='btn btn-sm btn-light mr-2'>
                                        <FaPencil />
                                    </button> */}

                      <NavLink style={{ textDecoration: 'none' }} to={`/jobs/dashboard/update/${job._id}`} >
                        <button className='btn btn-sm btn-light mr-2' > <FaPencil /> </button>
                      </NavLink>
                      <NavLink style={{ textDecoration: 'none' }} to={`/jobs/dashboard/`}>
                        <button className='btn btn-sm btn-light mr-2' onClick={() => { handleDelete(job._id) }} ><IoTrashBin /></button>
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-2">
                    {/* <p className="mb-1"><strong>Skills:</strong></p> */}
                    <div className="d-flex flex-wrap mt-2">
                      {job.mandatorySkills.map((skill, index) => (
                        <span key={index} className="badge badge-pill badge-light mr-2 mb-1 p-2">{skill}</span>
                      ))}
                      {job.optionalSkills.map((skill, index) => (
                        <span key={index} className="badge badge-pill badge-light mr-2 mb-1 p-2">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0 p-0">
                  <button
                    className="btn btn-sm btn-block"
                    onClick={() => navigate(`/jobs/dashboard/${job._id}/job/manage/`)}
                    style={{ backgroundColor: '#E4B49D' }}
                  >
                    View Applicants
                  </button>
                  {/* <button
                    className="btn btn-sm btn-block"
                    onClick={() => navigate(`/jobs/dashboard/${job._id}/job/manage/finalize`)}
                    style={{ backgroundColor: 'green', color: 'white' }}
                  >
                    Finalize
                  </button> */}

                </div>
              </div>
            </div>
          ))}
      </div>
    </div >
  )
}

export default ManageCandidate