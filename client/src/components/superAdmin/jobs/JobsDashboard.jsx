import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
// import ReactGridTable from "@nadavshaar/react-grid-table";
import GridTable from '@nadavshaar/react-grid-table';

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
import { PiNotepad } from 'react-icons/pi';
import { Button } from '@chakra-ui/react';
import { FcCancel } from 'react-icons/fc';
// import ManageAllStyles from './ManageAllJobs.module.css';

const JobsDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [TableLoading,setTableLoading] = useState(true);

    const baseURL = "http://localhost:3000/"

    const AllJobs = useSelector((state) => state.AllJobsSuperAdmin)
    console.log(AllJobs);

    // const MyJobs = AllJobs?.result?.filter((jobs) => jobs.created_by === local_user_id);
    const MyJobs = AllJobs?.result
    console.log(MyJobs);

    useEffect(() => {
        if (MyJobs) {
            setTableLoading(false)
        }
    },[MyJobs])


    const handleJobAccepted = async (jobId) => {
        const response = await dispatch(AcceptJobsAction(jobId));
        if (response.success) {
            toast.success(response.message);
            dispatch(getJobsSuperAdminAction())
        } else {
            toast.info('Error in Accepting Job')
        }
    }


    const handleJobRejected = async (jobId) => {
        const response = await dispatch(RejectJobsAction(jobId));
        if (response.success) {
            toast.error(response.message);
            dispatch(getJobsSuperAdminAction())
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
    }, []);

    // useEffect(() => {
    //     dispatch(getJobsSuperAdminAction())
    // }, [handleJobAccepted, handleJobRejected]);

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
    

    const FnameCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner'
                style={{
                    display: 'flex',
                }}
            >
                {/* <ImageChakra
                    borderRadius='full'
                    boxSize='50px'
                    src={data?.pic}
                    alt='user-image'
                /> */}
                <span className='rgt-text-truncate row-hover' style={{ marginLeft: 10, marginTop: 15 }}>
                    {data?.jobTitle}
                </span>
            </div>
        )
    }

    const ViewCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner' >
                <a
                    href={`/alljobs/${data._id}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ textDecoration: 'none' }}
                >
                    <button
                        className="btn btn-sm btn-block w-50"
                        style={{ backgroundColor: '#E4B49D' }}
                    >
                        View Job
                    </button>
                </a>
            </div>
        )
    }


    const VerifiedCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner'
                style={{
                    display: 'flex',

                }}
            >
                <span className='rgt-text-truncate row-hover' style={{ marginLeft: 10, marginTop: 15 }}>
                    {data.isVerifiedJob ?
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
                </span>
            </div>
        )
    }


    const IconCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        const dispatch = useDispatch();
        const { id } = useParams();
        const [showModal, setModalShow] = useState(false);


        const handleEye = (e) => {
            e.preventDefault();
            // console.log(`Applicant ID: ${data._id}, Icon Name: Eye`)
        }

        const handleNotepad = async (e) => {
            e.preventDefault();
            console.log("this is notepad", data, data._id)
            setModalShow(true);
            // const updatedStatsUser = {
            //     jobId:id,
            //     userId:data._id,
            //     status:'Offered'
            // }
            // const response = await dispatch(UpdateCandidStatsAction(updatedStatsUser));

            // if(response.success){
            //     toast.success('Applicant Offered Successfully')
            // }else{
            //     toast.error('Applicant Not Offered Try Again'  )
            // }

            // <div>
            // <UserEmailModal
            //     show={true}
            //     onHide={() => setMailModalShow(false)}
            //     userid={data._id}
            //     applicants={data}
            // />
            // </div>
            console.log(`Applicant ID: ${data._id}, Icon Name: UserCheck`)
        }

        const handleRejected = async (e) => {
            e.preventDefault();
            const updatedStatsUser = {
                jobId: id,
                userId: data._id,
                status: 'Rejected'
            }
            const response = { success: true }

            if (response.success) {
                toast.success('Applicant Rejected Successfully')
            } else {
                toast.error('Applicant Not Rejected Try Again')
            }

            console.log("All params")
            const allParams = [id, data._id, 'Rejected'];
            console.log(allParams)
            console.log(`Applicant ID: ${data._id}, Icon Name: UserTimes`)
        }


        return (
            <div>
                <div className='rgt-cell-inner'
                    style={{
                        display: 'flex',
                        margin: '20px',
                        marginLeft:'10px'
                    }}
                >
                    <button
                        className="btn btn-sm btn-light mr-2"
                        onClick={() => handleShare(data._id)}
                    >
                        <IoShareSocial />
                    </button>
                    <button className='btn btn-sm btn-light mr-2'
                        onClick={() => handleJobAccepted(data._id)}
                    >
                        <FaCheckCircle />
                    </button>
                    <button className='btn btn-sm btn-light mr-2'
                        onClick={() => handleJobRejected(data._id)}

                    >
                        <ImCancelCircle />
                    </button>
                    <NavLink style={{ textDecoration: 'none' }} to={`/superadmin/jobs/update/${data._id}`}>
                        <button className='btn btn-sm btn-light mr-2' > <FaPencil /> </button>
                    </NavLink>

                    <button
                        className='btn btn-sm btn-light mr-2'
                        onClick={() => { handleDelete(data._id) }}
                    >
                        <IoTrashBin />
                    </button>
                </div>
            </div>
        )
    }




    const columns = [
        {
            id: 1,
            field: 'jobTitle',
            label: 'Job Title',
            cellRenderer: FnameCell
        },
        {
            id: 2,
            field: 'isVerifiedJob',
            label: 'Status',
            cellRenderer: VerifiedCell,
        },
        {
            id: 3,
            field: 'company_name',
            label: 'Company Name',
        },
        {
            id: 4,
            field: 'actionStatus',
            label: 'Action / Status',
            cellRenderer: IconCell

        },
        {
            id: 5,
            field: 'view',
            label: 'View',
            cellRenderer: ViewCell
        },

    ];

    const JobsAll = ({ MyJobs }) => {
        return (
            <div className='container mt-2 responsive-table' >
                <GridTable 
                    isLoading={TableLoading}
                    columns={columns} 
                    rows={MyJobs} 
                    />
            </div>
        );
    };

    return (

        <>
            <div className='mb-5'>
                <ToastContainer />
                <NavLink to='/superadmin/jobs/post' style={{ textDecoration: 'none', color: 'white' }}>
                    <button className="btn btn-warning mb-4 ml-3">
                        + Add New Job
                    </button>
                </NavLink>
                <div className='col'>
                    {/* <div className={`${styles.JobsDashboardContainer} container`}>
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
                    </div> */}
                    <div className={`${styles.JobsDashboardContainer} container`}>
                        <JobsAll MyJobs={MyJobs} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsDashboard
