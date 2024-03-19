import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import Swal from 'sweetalert2'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Icons 
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { FaCheckCircle } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
// import { IoMdTime } from "react-icons/io";
// import { FaArrowUpRightDots } from "react-icons/fa6";


// Modules 

import { AcceptJobsAction, DeleteJobAction, RejectJobsAction, getJobsSuperAdminAction } from '../../../redux/actions/jobsAdmin.js';
import styles from './JobsDashboard.module.css';
// import ManageAllStyles from './ManageAllJobs.module.css';

const JobsDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showDropDown, setShowDropDown] = useState(false);

    const baseURL = "http://localhost:3000/"

    const AllJobs = useSelector((state) => state.AllJobsSuperAdmin)
    console.log(AllJobs);

    // const MyJobs = AllJobs?.result?.filter((jobs) => jobs.created_by === local_user_id);
    const MyJobs = AllJobs?.result
    console.log(MyJobs);


    const handleJobAccepted = async (jobId) => {
        const response = await dispatch(AcceptJobsAction(jobId));
        if (response.success) {
            toast.success(response.message);
        } else {
            toast.info('Error in Accepting Job')
        }
    }


    const handleJobRejected = async (jobId) => {
        const response = await dispatch(RejectJobsAction(jobId));
        if (response.success) {
            toast.error(response.message);
        } else {
            toast.info('Error in Accepting Job')
        }
    }


    const handleShare = (jobId) => {
        copy(`${baseURL}alljobs/${jobId}`);
        // alert(`Copied Url : ${baseURL}alljobs/${jobId}`)
        Swal.fire({
            title: "Job Copied To Clipboard!",
            // text: `Copied Url : ${baseURL}alljobs/${jobId}`,
            icon: "success"
        });
    }


    useEffect(() => {
        dispatch(getJobsSuperAdminAction())
    }, [dispatch, handleJobAccepted, handleJobRejected]);

    // Deletion of Job
    const handleConfirmedDelete = (id) => {
        dispatch(DeleteJobAction(id));
        navigate('/superadmin/jobs');
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

    return (

        <>
            <div className='mb-5'>
                <ToastContainer />
                {/* <div className={ManageAllStyles.sidebar}>
                    <SideBar />
                </div> */}

                {/* <div className='container d-flex mt-2 '>
                        <h2 className='pt-4 mb-4'> Recruiter Dashboard  </h2>
                        <div className='ml-4 mt-4'>
                            <button className='btn btn-warning text-white'>
                                <NavLink to='/jobs/post' target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                                    Add a new Job
                                </NavLink>
                            </button>
                        </div>

                    </div> */}
                <div className='col'>
                    {/* {
                        MyJobs?.map((job, index) => (
                            <div className="col-md-6 col-lg-6 " style={{ marginTop: '1vw' }}>
                                <div className="card shadow">

                                    <div className="card-body ">
                                        <h5 className="card-title">{job.jobTitle}</h5>
                                        <p className="card-text text-muted mb-2">{job.created_at}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="badge badge-success">Active</span>
                                            <div>
                                                <button className="btn btn-sm btn-light mr-2" >
                                                    <IoShareSocial />
                                                </button>
                                                <button className='btn btn-sm btn-light mr-2'>
                                                    <HiDotsVertical />
                                                </button>
                                                <NavLink style={{ textDecoration: 'none' }} to={`/jobs/dashboard/update/${job._id}`} >
                                                    <button className='btn btn-sm btn-light mr-2' > <FaPencil /> </button>
                                                </NavLink>
                                                <NavLink style={{ textDecoration: 'none' }} to={`/jobs/dashboard/`}>
                                                    <button className='btn btn-sm btn-light mr-2' onClick={() => { handleDelete(job._id) }} ><IoTrashBin /></button>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="mb-2">
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
                                        <a href={`/alljobs/${job._id}`} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                            <button
                                                className="btn btn-sm btn-block"
                                                style={{ backgroundColor: '#E4B49D' }}
                                            >
                                                View Job
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                        } */}


                    <div className={`${styles.JobsDashboardContainer} container`}>
                        {MyJobs?.map((job, index) => (
                            <div key={index} className="row border mb-3 p-3">
                                <div className="col-sm-12 col-md-2">{job.jobTitle}</div>
                                <div className="col-sm-12 col-md-2">{job.created_at}</div>
                                <div className="col-sm-12 col-md-2">
                                    {job.isVerifiedJob ?
                                        <>
                                            <span className="badge badge-success">
                                                Active
                                            </span>
                                        </>
                                        :
                                        <>
                                            <span className="badge badge-danger">
                                                Inactive
                                            </span>
                                        </>
                                    }
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <button
                                        className="btn btn-sm btn-light mr-2"
                                        onClick={() => handleShare(job._id)}
                                    >
                                        <IoShareSocial />
                                    </button>
                                    <button className='btn btn-sm btn-light mr-2'
                                        onClick={() => handleJobAccepted(job._id)}
                                    >
                                        <FaCheckCircle />
                                    </button>
                                    <button className='btn btn-sm btn-light mr-2'
                                        onClick={() => handleJobRejected(job._id)}

                                    >
                                        <ImCancelCircle />
                                    </button>
                                    <NavLink style={{ textDecoration: 'none' }} to={`/superadmin/jobs/update/${job._id}`}>
                                        <button className='btn btn-sm btn-light mr-2' > <FaPencil /> </button>
                                    </NavLink>

                                    <button
                                        className='btn btn-sm btn-light mr-2'
                                        onClick={() => { handleDelete(job._id) }}
                                    >
                                        <IoTrashBin />
                                    </button>

                                </div>
                                <div className="col-sm-12 col-md-2">
                                    <a href={`/superadmin/jobs/view/${job._id}`} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <button
                                            className={`${styles.viewButton} btn btn-sm btn-block`}
                                            style={{ backgroundColor: '#E4B49D' }}
                                        >
                                            View Job
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div >
        </>
    )
}

export default JobsDashboard
