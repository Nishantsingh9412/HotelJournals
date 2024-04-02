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
import { sendMailAction } from '../../../redux/actions/mail.js';
// import ManageAllStyles from './ManageAllJobs.module.css';

const JobsDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const rejectedHtmlTemplate = `
        <div style="background-color:#fff2e6;; color: #333; font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711390575/Hotel%20Journals/b5icroi6uetoui9uno1j.png" alt="Hotel Journals" height="200" style="margin-bottom: 20px; object-fit: cover; width: 100%;">
                <div style="padding: 40px;">
                    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; text-align: center;"> iLo SENTIMOS! </h1>
                    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;"><b> Hola Compi! </b> </p>
                    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">

                        Sentimos comunicarte que tu oferta de trabajo
                        no ha Sido publicada debido a que consideramos
                        que no cumple con los datos minimos
                        necesarios o no la hemos considerado veridica.
                    </p>
                    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Ponte en contacto con nosotros si crees que es
                        un error y Io solucionaremos :)
                    </p>
                    <p style="font-size: 16px; font-weight: bold; line-height: 1.5; margin-bottom: 20px; text-align:center;">¡Un abrazo!<br />Equipo de Hotel Journals</p>
                    <p style="font-size: 14px; font-style: italic; line-height: 1.5; margin-bottom: 20px; text-align:center;">Hotel Journals, en busca de un sector más justo.</p>
                    <hr style="border: 0; border-bottom: 2px solid #ccc; margin-bottom: 20px;">
                        <div style="margin-bottom: 20px; text-align: center;">
                            <a href="https://www.youtube.com/@Hoteljournals">
                                <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/YT.png" style="height: 50px; width: 50px;" alt="Icon 1">
                            </a>
                            <a href="https://www.instagram.com/hoteljournals">
                                <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/insta.png" style="height: 50px; width: 50px;" alt="Icon 1">
                            </a>
                            <a href="https://www.linkedin.com/company/hotel-journals">
                                <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/LinkedIn.png" style="height: 50px; width: 50px;" alt="Icon 1">
                            </a>
                            <a href="https://open.spotify.com/show/3xOjX5LUyM4XUhL9FRTkOo?si=qxabYKhHRD2Aea_utnQYYg">
                                <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/spotify.png" style="height: 50px; width: 50px;" alt="Icon 1">
                            </a>
                            <a href="https://www.tiktok.com/@hoteljournals">
                                <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/tiktok.png" style="height: 50px; width: 50px;" alt="Icon 1">
                            </a>
                        </div>
                        <p style="font-size: 14px; line-height: 1.5; text-align: center;">Copyright © 2024 Hotel Journals</p>
                </div>
        </div>
    `
    const acceptedHtmlTemplate =
        `
        <div style="background-color: #fff2e6; color: #333; font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
            <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711390575/Hotel%20Journals/b5icroi6uetoui9uno1j.png" alt="Hotel Journals" height="200" style="margin-bottom: 20px; object-fit: cover; width: 100%;">
                <div style="padding: 50px;">
                    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; text-align: center;">  iFELlClDADES! </h1>
                    <p style="font-size: 24px; line-height: 1.5; margin-bottom: 20px;"> <b>Hola Compi! </b> </p> <br />
                    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
                        Nos alegra comunicarte que tu oferta de trabajo
                        ha sido publicada.</p>
                    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 40px;">Te deseamos Io mejor en los siguientes pasos
                        que vienen.
                        <p style="font-size: 16px; font-weight: bold; line-height: 1.5; margin-bottom: 20px; text-align:center;">iUn abrazo y mucha suerte!
                            <br />Equipo de Hotel Journals</p>
                        <p style="font-size: 14px; font-style: italic; line-height: 1.5; margin-bottom: 20px; text-align:center;">Hotel Journals, en busca de un sector más justo.</p>
                        <hr style="border: 0; border-bottom: 2px solid #ccc; margin-bottom: 20px;">
                            <div style="margin-bottom: 20px; text-align: center;">
                                <a href="https://www.youtube.com/@Hoteljournals">
                                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/YT.png" style="height: 50px; width: 50px;" alt="Icon 1">
                                </a>
                                <a href="https://www.instagram.com/hoteljournals">
                                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/insta.png" style="height: 50px; width: 50px;" alt="Icon 1">
                                </a>
                                <a href="https://www.linkedin.com/company/hotel-journals">
                                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/LinkedIn.png" style="height: 50px; width: 50px;" alt="Icon 1">
                                </a>
                                <a href="https://open.spotify.com/show/3xOjX5LUyM4XUhL9FRTkOo?si=qxabYKhHRD2Aea_utnQYYg">
                                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/spotify.png" style="height: 50px; width: 50px;" alt="Icon 1">
                                </a>
                                <a href="https://www.tiktok.com/@hoteljournals">
                                    <img src="https://res.cloudinary.com/dezifvepx/image/upload/v1711394098/Hotel%20Journals/tiktok.png" style="height: 50px; width: 50px;" alt="Icon 1">
                                </a>
                            </div>
                            <p style="font-size: 14px; line-height: 1.5; text-align: center;">Copyright © 2024 Hotel Journals</p>
                        </div>
                </div>
        </div>
    `


    const [TableLoading, setTableLoading] = useState(true);
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
    }, [MyJobs])


    const handleJobAccepted = async (jobId, data) => {
        const mailData = {
            to: data.created_by.email,
            subject: 'Job Accepted',
            html: acceptedHtmlTemplate
        }
        const jobRejectionPromise = dispatch(AcceptJobsAction(jobId)).then(response => {
            if (response.success) {
                return dispatch(sendMailAction(mailData)).then(response2 => {
                    if (response2.success) {
                        dispatch(getJobsSuperAdminAction());
                        return response.message;
                    }
                    throw new Error('Error in sending mail');
                });
            }
            throw new Error('Error in rejecting job');
        });

        toast.promise(
            jobRejectionPromise,
            {
                pending: 'Processing job Acceptence...',
                success: 'Job Accepted successfully',
                error: 'Error in Job Acceptance process'
            }
        );
    }


    const handleJobRejected = async (jobId, data) => {
        // const response = await dispatch(RejectJobsAction(jobId));
        console.log('Data REceived from handle Job Rejected');
        const mailData = {
            to: data.created_by.email,
            subject: 'Job Rejected',
            html: rejectedHtmlTemplate
        }

        const jobRejectionPromise = dispatch(RejectJobsAction(jobId)).then(response => {
            if (response.success) {
                return dispatch(sendMailAction(mailData)).then(response2 => {
                    if (response2.success) {
                        dispatch(getJobsSuperAdminAction());
                        return response.message;
                    }
                    throw new Error('Error in sending mail');
                });
            }
            throw new Error('Error in rejecting job');
        });

        toast.promise(
            jobRejectionPromise,
            {
                pending: 'Processing job rejection...',
                success: 'Job rejected successfully',
                error: 'Error in job rejection process'
            }
        );
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
    const handleConfirmedDelete = async (id) => {
        const response = await dispatch(DeleteJobAction(id))
        if (response.success) {
            await dispatch(getJobsSuperAdminAction())
            navigate('/superadmin/jobs');
            console.log('Job Deleted successfully')
            toast.success('Job Deleted Successfully')
        } else {
            toast.error('Error in Deleting Job')
        }
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

    const CompanyNameCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner'
                style={{
                    display: 'flex',

                }}
            >
                <span className='rgt-text-truncate row-hover' style={{ marginLeft: 10, marginTop: 15 }}>
                    {data.recruiter_info.companyName ?
                        <>
                            {/* <span className="badge badge-success"> */}
                            {data.recruiter_info.companyName}
                            {/* </span> */}
                        </>
                        :
                        <>
                            {/* <span className="badge badge-danger"> */}

                            {/* </span> */}
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
        // const handleEye = (e) => {
        //     e.preventDefault();
        //     // console.log(`Applicant ID: ${data._id}, Icon Name: Eye`)
        // }

        // const handleNotepad = async (e) => {
        //     e.preventDefault();
        //     console.log("this is notepad", data, data._id)
        //     setModalShow(true);
        //     // const updatedStatsUser = {
        //     //     jobId:id,
        //     //     userId:data._id,
        //     //     status:'Offered'
        //     // }
        //     // const response = await dispatch(UpdateCandidStatsAction(updatedStatsUser));

        //     // if(response.success){
        //     //     toast.success('Applicant Offered Successfully')
        //     // }else{
        //     //     toast.error('Applicant Not Offered Try Again'  )
        //     // }

        //     // <div>
        //     // <UserEmailModal
        //     //     show={true}
        //     //     onHide={() => setMailModalShow(false)}
        //     //     userid={data._id}
        //     //     applicants={data}
        //     // />
        //     // </div>

        //     console.log(`Applicant ID: ${data._id}, Icon Name: UserCheck`)
        // }

        // const handleRejected = async (e) => {
        //     e.preventDefault();
        //     const updatedStatsUser = {
        //         jobId: id,
        //         userId: data._id,
        //         status: 'Rejected'
        //     }
        //     const response = { success: true }

        //     if (response.success) {
        //         toast.success('Applicant Rejected Successfully')
        //     } else {
        //         toast.error('Applicant Not Rejected Try Again')
        //     }
        //     console.log("All params")
        //     const allParams = [id, data._id, 'Rejected'];
        //     console.log(allParams)
        //     console.log(`Applicant ID: ${data._id}, Icon Name: UserTimes`)
        // }

        return (
            <div>
                <div className='rgt-cell-inner'
                    style={{
                        display: 'flex',
                        margin: '20px',
                        marginLeft: '10px'
                    }}
                >
                    <button
                        className="btn btn-sm btn-light mr-2"
                        onClick={() => handleShare(data._id)}
                    >
                        <IoShareSocial />
                    </button>
                    <button className='btn btn-sm btn-light mr-2'
                        onClick={() => handleJobAccepted(data._id, data)}
                    >
                        <FaCheckCircle />
                    </button>
                    <button className='btn btn-sm btn-light mr-2'
                        onClick={() => handleJobRejected(data._id, data)}

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
            field: 'ComapnyName',
            label: 'Company Name',
            cellRenderer: CompanyNameCell
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
