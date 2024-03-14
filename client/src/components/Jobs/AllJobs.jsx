import React, { useEffect, useState } from 'react'
import {
    Button as ButtonChakra,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';

import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button } from 'react-bootstrap';
// Icons 
import { FaBuilding, FaFilter, FaLocationDot, FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { TbBriefcase } from 'react-icons/tb';
import { FaWallet } from 'react-icons/fa';
import { BsBuildingFill, BsBuildings } from 'react-icons/bs';
// import { IoMdTime } from "react-icons/io";
// import { FaArrowUpRightDots } from "react-icons/fa6";


// Modules 
// import { DeleteJobAction, GetJobs } from '../../../redux/actions/jobsAdmin.js';
import { GetJobs } from '../../redux/actions/jobsAdmin.js';
import JobsBgImg from '../../assets/img/brief2.png'
import 'animate.css';
import styles from './AllJobs.module.css';
import { CiFilter } from 'react-icons/ci';

// import { DeleteACourseAction } from '../../../redux/actions/courseAdmin.js';

const AllJobs = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alljobsValue, setAllJobsValue] = useState(true);
    const [applied, setApplied] = useState(false);
    const [IsFilteredCheck, setIsFilteredCheck] = useState(true);
    const [AllFilters, setAllFilters] = useState({
        yearsOfExperience: '',
        salaryMin:null,
        salaryMax:null,
        salarySpecification: '',
        jobDesignation: '',
        locationType: '',
        citiesFilter: [],
    })

    const [showDropDown, setShowDropDown] = useState(false);
    const [jobId, setJobId] = useState('');

    const AllJobsData = useSelector((state) => state.AllJobsReducer)
    console.log(AllJobsData);

    const userProfile = JSON.parse(localStorage.getItem('Profile'));
    const user_id = userProfile?.result?._id;
    const AppliedJobs = AllJobsData?.result?.filter((job) => job.jobApplicants.some((applicant) => applicant.user === user_id));
    console.log("These are all applied Jobs \n : ");
    console.log(AppliedJobs);

    // const localStorageData = JSON.parse(localStorage.getItem('Profile'));
    // const local_user_id = localStorageData?.result?._id;
    // console.log(`LocalUSERID :  ${local_user_id}`);
    // const MyJobs = AllJobsData?.result?.filter((jobs) => jobs.created_by === local_user_id);


    const MyJobs = AllJobsData?.result;

    // Filtraion of Jobs



    console.log(MyJobs);

    useEffect(() => {
        dispatch(GetJobs())
    }, [dispatch]);

    const options = [
        { value: 'Salary', label: 'Salary' },
        { value: 'Experience', label: 'Experience' },
        { value: 'Recent_Jobs', label: 'Recent Jobs' },
        { value: 'Apply_Before', label: 'Apply Before' }
    ]

    const cities = [
        { value: 'Kanpur', label: 'Kanpur' },
        { value: 'Lucknow', label: 'Lucknow' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Hyderabad', label: 'Hyderabad' },
        { value: 'Chennai', label: 'Chennai' },
        { value: 'Kolkata', label: 'Kolkata' },
        { value: 'Pune', label: 'Pune' },
        { value: 'Jaipur', label: 'Jaipur' },
        { value: 'Ahmedabad', label: 'Ahmedabad' },
        { value: 'Surat', label: 'Surat' },
    ]
    const designations = [
        { value: 'Software_Developer', label: 'Software Developer' },
        { value: 'Frontend_Developer', label: 'Frontend Developer' },
        { value: 'Backend_Developer', label: 'Backend Developer' },
    ]

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

    const handleApplyFilter = () => {
        console.log('All Filters')
        console.log(AllFilters);
        console.log('Filter Applied');
    }

    const handleClearFilter = () => {
        console.log('Clarity Aa gyi hai');
    }




    return (

        <>
            <div className='mb-5'>
                <ToastContainer />
                {/* Image Section get started with Hotel Journals */}
                <div className='container-fluid d-flex '
                    style={{
                        backgroundImage: `url(${JobsBgImg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '55vh',
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
                            color: 'black',

                        }}
                    >
                        <h1>Get Hired with </h1>
                        <p style={{
                            marginLeft: '15px',
                            marginTop: '10px',
                            color: 'black',
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
                {/* Filter Section  Start*/}
                <div className='d-flex justify-content-end'>
                    <ButtonChakra
                        leftIcon={<CiFilter size={'25'} />}
                        bgColor={'#E4B49D'}
                        color={'white'}
                        borderRadius={'50px'}
                        width={'8rem'}
                        alignSelf={'flex-end'}
                        p={5}
                        m={5}
                        marginRight={'5vw'}
                        onClick={() => setIsFilteredCheck(!IsFilteredCheck)}
                    >
                        Filter
                    </ButtonChakra>
                </div>
                {/* Filter Section End */}

                <div className='container' style={{ boxShadow: '10px 10px 10px #e4b49d' }} >
                    {
                        IsFilteredCheck &&
                        <div>
                            <h4> Sort By </h4>
                            <div >
                                <hr />
                                <label htmlFor="applications"> Applications </label>
                                <Select options={options} isMulti />
                            </div>
                            <div className='form-row mt-2'>
                                <div className='col-md-4'>
                                    <label htmlFor="yearsExperience">
                                        Years of Experience
                                    </label>
                                    <select
                                        className='form-control'
                                        onChange={(e) => setAllFilters({ ...AllFilters, yearsOfExperience: e.target.value })}
                                    >
                                        <option value=""> Select </option>
                                        <option value="0">{"<1"}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">{">10"}</option>
                                    </select>
                                </div>
                                <div className='col-md-4'>
                                    <label htmlFor="salary"> Salary Range </label>
                                    <div className='row ml-2'>
                                        <input
                                            className="form-control col-md-4"
                                            type="number"
                                            placeholder='Min'
                                            min={0}
                                            onChange={(e) => setAllFilters({ ...AllFilters, salaryMin: e.target.value })}
                                        />
                                        <input
                                            className="form-control col-md-4 ml-2"
                                            type="number"
                                            placeholder='Max'
                                            max={10000000}
                                            onChange={(e) => setAllFilters({ ...AllFilters, salaryMax: e.target.value })}
                                        />
                                        <select
                                            className='form-control col-md-2 ml-2'
                                            onChange={(e) => setAllFilters({ ...AllFilters, salarySpecification: e.target.value })}
                                        >
                                            <option value=""> Select </option> 
                                            <option value="LPA">LPA</option>
                                            <option value="USD">USD</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <label htmlFor="designation"> Designation </label>
                                    <Select 
                                        options={designations} 
                                        onChange={(selectedOption) => setAllFilters({...AllFilters, jobDesignation: selectedOption.value})}
                                    />
                                </div>
                            </div>

                            <div className="form-row mt-2">
                                <div className='col-md-4'>
                                    <label htmlFor="location"> Location Type</label>
                                    <select 
                                        className='form-control'
                                        onChange={(e) => setAllFilters({...AllFilters,locationType:e.target.value})}
                                    >
                                        <option value=""> Select </option>
                                        <option value="Remote">Remote</option>
                                        <option value="InOffice">In Office</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>
                            </div>
                            <label htmlFor="jobType mt-4"> Select Location </label>
                            <div className="form-row mt-2">
                                <div className="col-md-4">
                                    <label htmlFor="Country"> Country </label>
                                    <select className='form-control'>
                                        <option value="" > Select </option>
                                        <option value="India">India</option>
                                        <option value="Spain">Spain</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state">State</label>
                                    <select className='form-control'>
                                        <option value="" > Select </option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="city">City</label>
                                    <Select 
                                        options={cities} 
                                        isMulti 
                                        onChange={(selectedOption) => setAllFilters({...AllFilters, jobDesignation: selectedOption.value})}

                                        onChange={(selectedOps) => {
                                            setAllFilters({...AllFilters,citiesFilter:selectedOps.map((city) => city.value)})
                                        }}
                                        />
                                </div>
                            </div>
                            <div className='d-flex justify-content-end m-4' >
                                <p
                                    onClick={handleClearFilter}
                                    style={{
                                        width: '8rem',
                                        marginTop: '0.5rem',
                                        marginBottom: '2vw',
                                        padding: '5',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Clear
                                </p>
                                <ButtonChakra
                                    p={5}
                                    width={'8rem'}
                                    borderRadius={'50px'}
                                    bgColor={'#E4B49D'}
                                    marginBottom={'2vw'}
                                    onClick={handleApplyFilter}
                                >
                                    Apply
                                </ButtonChakra>

                            </div>
                        </div>
                    }
                </div>

                {/* All Jobs and  Applied Jobs  */}
                <div className='container mb-0 m-5 '>
                    <div className='d-flex mb-0' >
                        <div className='ml-2'
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setAllJobsValue(true);
                                setApplied(false);
                            }}
                        >
                            <p> All Jobs </p>
                        </div>
                        <div className='ml-3'
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setAllJobsValue(false);
                                setApplied(true);
                            }}
                        >
                            <p> Applied </p>
                        </div>
                    </div>
                    <hr />
                </div>

                {
                    alljobsValue &&
                    <div className={styles.jobContainer}>
                        <div className="row ">
                            {MyJobs?.map((job, index) => (
                                <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 `}
                                    style={{ marginTop: '1vw', cursor: 'pointer' }}
                                    onClick={() => navigate(`/AllJobs/${job._id}`)}
                                >
                                    <Card
                                        style={{ width: '100%', marginBottom: '1vw' }}
                                        className={`${styles.cardContainer}`}
                                    >
                                        <Card.Body>
                                            <div className="d-flex align-items-center">
                                                {job.company_logo ?
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Logo"
                                                        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '7px' }}
                                                    />
                                                    :
                                                    <BsBuildings
                                                        style={{ width: '50px', height: '30px', marginRight: '10px', borderRadius: '7px' }}
                                                        aria-label="Logo"
                                                    />
                                                }
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
                                                    <TbBriefcase className={styles.jobIconSmall} />
                                                    <p className={styles.paraSmallHeading}>
                                                        {job.workExperienceMin}-{job.workExperienceMax} years
                                                    </p>
                                                </div>
                                                <div className='d-flex ml-2'>
                                                    <FaWallet className={styles.jobIconSmall} />
                                                    <p className={styles.paraSmallHeading}>
                                                        {job.salaryStart}-{job.salaryEnd} {job.salarySpecification}
                                                    </p>
                                                </div>
                                                <div className='d-flex ml-2'>
                                                    <FaLocationDot className={styles.jobIconSmall} />
                                                    <p className={styles.paraSmallHeading}>
                                                        {job.jobLocation}
                                                    </p>
                                                </div>
                                            </Card.Text>
                                            <hr />
                                            <div className='d-flex'>
                                                <small style={{ flex: '1' }}> Apply by : {new Date(job.joiningDate).toLocaleDateString()}</small>
                                                {/* <Button variant="success" style={{ flex: '1' }}>View</Button> */}
                                                <ButtonChakra
                                                    // colorScheme='linkedin'
                                                    p={5}
                                                    width={'8rem'}
                                                    borderRadius={'50px'}
                                                    bgColor={'#E4B49D'}
                                                >
                                                    Apply
                                                </ButtonChakra>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {
                    applied &&
                    <div className={styles.jobContainer} style={{ cursor: 'not-allowed' }}>
                        <div className="row " >
                            {AppliedJobs?.map((job, index) => (
                                <div className={`col-xl-4 col-lg-6 col-md-6 col-sm-12 `}
                                    style={{
                                        marginTop: '1vw',
                                    }}
                                // aria-disabled='true'
                                >
                                    <Card
                                        style={{ width: '100%', marginBottom: '1vw' }}
                                        className={`${styles.cardContainer}`}

                                    >
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
                                                    <TbBriefcase className={styles.jobIconSmall} />
                                                    <p className={styles.paraSmallHeading}>
                                                        {job.workExperienceMin}-{job.workExperienceMax} years
                                                    </p>
                                                </div>
                                                <div className='d-flex ml-2'>
                                                    <FaWallet className={styles.jobIconSmall} />
                                                    <p className={styles.paraSmallHeading}>
                                                        {job.salaryStart}-{job.salaryEnd} {job.salarySpecification}
                                                    </p>
                                                </div>
                                                <div className='d-flex ml-2'>
                                                    <FaLocationDot className={styles.jobIconSmall} />
                                                    <p className={styles.paraSmallHeading}>
                                                        {job.jobLocation}
                                                    </p>
                                                </div>
                                            </Card.Text>
                                            <hr />
                                            <div className='d-flex'>
                                                <small style={{ flex: '1' }}> Apply by : {new Date(job.joiningDate).toLocaleDateString()}</small>
                                                {/* <Button variant="success" style={{ flex: '1' }}>View</Button> */}
                                                <ButtonChakra
                                                    // colorScheme='linkedin'
                                                    p={5}
                                                    width={'8rem'}
                                                    borderRadius={'50px'}
                                                    bgColor={'#E4B49D'}
                                                    isDisabled={true}
                                                >
                                                    Apply
                                                </ButtonChakra>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div >
        </>
    )
}

export default AllJobs
