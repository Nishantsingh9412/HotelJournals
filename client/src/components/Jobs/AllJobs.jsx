import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button } from 'react-bootstrap';
// Icons 
import { FaLocationDot, FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { TbBriefcase } from 'react-icons/tb';
import { FaWallet } from 'react-icons/fa';
// import { IoMdTime } from "react-icons/io";
// import { FaArrowUpRightDots } from "react-icons/fa6";


// Modules 
// import { DeleteJobAction, GetJobs } from '../../../redux/actions/jobsAdmin.js';
import { GetJobs } from '../../redux/actions/jobsAdmin.js';
import JobsBgImg from '../../assets/img/brief2.png'
import 'animate.css';

// import { DeleteACourseAction } from '../../../redux/actions/courseAdmin.js';

const AllJobs = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showDropDown, setShowDropDown] = useState(false);
    const [jobId, setJobId] = useState('');

    const AllJobsData = useSelector((state) => state.AllJobsReducer)
    console.log(AllJobsData);

    // const localStorageData = JSON.parse(localStorage.getItem('Profile'));
    // const local_user_id = localStorageData?.result?._id;
    // console.log(`LocalUSERID :  ${local_user_id}`);
    // const MyJobs = AllJobsData?.result?.filter((jobs) => jobs.created_by === local_user_id);


    const MyJobs = AllJobsData?.result;
    console.log(MyJobs);

    useEffect(() => {
        dispatch(GetJobs())
    }, [dispatch]);

    const handleConfirmedDelete = (id) => {
        // dispatch(DeleteJobAction(id));
        // navigate('/job/dashboard');
        // console.log('Job Deleted successfully')
        // toast.success('Job Deleted Successfully')
    }


    const handleDelete = (id) => {
        // const result = window.confirm('Are you sure you want to delete this Job ?');
        // if (result) {
        //     console.log('Delete the course')
        //     handleConfirmedDelete(id);
        // } else {
        //     console.log('Cancelled')
        // }
    }

    const handleApply = (jobId) => {
        // e.preventDefault();
        const jobid = jobId;
        const userApplied = JSON.parse(localStorage.getItem('Profile'));
        console.log('this is the user applied : ')
        console.log(userApplied?.result?._id);
        console.log('this is the job id : ')
        console.log(jobid);

        // console.log(userApplied?._id);
    }




    return (

        <>
            <div className='mb-5'>

                <ToastContainer />
                <div className='container-fluid d-flex '
                    style={{
                        backgroundImage: `url(${JobsBgImg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '35vh',
                    }}
                >
                    <div
                        className='row 
                        animate__animated
                        animate__fadeIn
                        animate__slower 
                        animate__repeat-2'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '30vw',
                            color:'#4e88f1',

                        }}
                    >
                        <h1>Get Hired with </h1>
                        <p style={{
                            marginLeft: '15px',
                            marginTop: '10px',
                            color:'#4e88f1',
                            fontWeight: 'bold',
                            fontSize: '35px'
                        }}>
                            Hotel Journals
                        </p>
                    </div>
                    <div className='ml-4 mt-4'>
                        {/* <button className='btn btn-warning text-white'>
                            <NavLink to='/jobs/post' target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                                Add a new Job
                            </NavLink>
                        </button> */}
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {MyJobs?.map((job, index) => (
                            <div className="col-md-4 col-sm-12" style={{ marginTop: '1vw', cursor: 'pointer' }} onClick={() => navigate(`/AllJobs/${job._id}`)}>
                                <Card style={{ width: '100%', marginBottom: '1vw' }}>
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://media.geeksforgeeks.org/img-practice/prod/jobs/1/Web/Other/1631311446380_1708941800.jpg"
                                                alt="Logo"
                                                style={{ width: '50px', height: '50px', marginRight: '10px' }}
                                            />
                                            <div>
                                                <Card.Title>{job.jobTitle}</Card.Title>
                                                <p className="card-text text-muted mb-2">{job.created_at}</p>
                                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            </div>
                                        </div>
                                        <Card.Text className='d-flex text-muted'
                                            style={{
                                                fontSize: '1rem',
                                                padding: '1vw',
                                                marginLeft: '3vw'
                                            }}
                                        >
                                            <div className='d-flex '>
                                                <TbBriefcase />
                                                <p>
                                                    Fresher
                                                </p>
                                            </div>
                                            <div className='d-flex ml-2'>
                                                <FaWallet />
                                                <p>
                                                    ₹ {job.salaryStart} LPA - ₹ {job.salaryEnd} LPA
                                                </p>
                                            </div>
                                            <div className='d-flex ml-2'>
                                                <FaLocationDot />
                                                <p>
                                                    {job.jobLocation}
                                                </p>
                                            </div>
                                        </Card.Text>
                                        <hr />
                                        <div className='d-flex'>
                                            <small style={{ flex: '1' }}> Apply by : {new Date(job.joiningDate).toLocaleDateString()}</small>
                                            <Button variant="success" style={{ flex: '1' }}>View</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default AllJobs
