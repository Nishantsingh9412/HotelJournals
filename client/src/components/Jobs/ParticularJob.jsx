import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { es } from 'date-fns/locale';
import { useNavigate, useParams } from 'react-router-dom';
import PuffLoader from "react-spinners/PuffLoader";
// Library for date and time
import { formatDistanceToNow } from 'date-fns';
// Toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Icons
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import { FiLink } from "react-icons/fi";
import {
    FaGlobe,
} from 'react-icons/fa';
import { HiBuildingOffice2, HiMiniUserGroup } from "react-icons/hi2";
import {
    FaLocationDot,
    FaWallet,
} from "react-icons/fa6";
import { IoLogoLinkedin } from 'react-icons/io5';

import jobdescriptionCSS from './particularjob.module.css';
import { ApplyJobAction, getJobSingleAction, getJobsSimilarAction } from '../../redux/actions/jobsAdmin.js';
import { checkAppliedForJob } from '../../api/index.js';



const ParticularJob = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const localUser = JSON.parse(localStorage.getItem('Profile'));
    const userId = localUser?.result?._id;
    console.log("User Id \n");
    console.log(userId);

    const clientURL = process.env.REACT_APP_CLIENT_URL;
    const [similarJobs, setSimilarJobs] = useState([{}]);
    const [appliedToJob, setAppliedToJob] = useState(false);
    const [loadingPage, setLoadinPage] = useState(true);
    const [similarJobsLoading, setSimilarJobsLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) {
            return;
        }
        dispatch(getJobSingleAction(id))
    }, [dispatch]);


    // useEffect(() => {
    //     if (!userId) {
    //         navigate('/login');
    //     }
    // }, [userId])

    const checkLoggedIn = () => {
        if (!userId) {
            toast.error('Por favor inicie sesión para solicitar trabajo');
            return false;
        }
        return true;
    }

    const handleJobApply = async (jobId) => {
        if (!checkLoggedIn()) {
            return;
        }
        setLoading(true);
        const jobApplicants = {
            jobId: jobId,
            userId: userId
        }
        dispatch(ApplyJobAction(jobApplicants)).then((response) => {
            if (response.success) {
                toast.success(response.message);
                setAppliedToJob(true);
                setLoading(false);
            } else {
                toast.error(response.message);
                setLoading(false);
            }
        })
    }



    const singleJobsData = useSelector((state) => state?.getSingleJobReducer);
    const posted_at = new Date(singleJobsData?.result?.created_at);
    const singleRecruiterData = singleJobsData?.result?.recruiter_info;



    useEffect(() => {
        if (!id || !userId) {
            return;
        }
        checkAppliedForJob(id, userId)
            .then((res) => {
                console.log("This is response \n")
                console.log(res);
                if (res?.data?.applied) {
                    setAppliedToJob(true);
                }
            }).catch((err) => {
                console.log("Error in checking applied job \n");
                console.log(err);
            })
    }, [id])


    useEffect(() => {
        if (singleJobsData?.result) {
            setLoadinPage(false);
        }
    }, [singleJobsData?.result])


    const getSimilarJobsfn = () => {
        if (!id) {
            return;
        }
        dispatch(getJobsSimilarAction(id)).then((res) => {
            if (res.success) {
                console.log("Similar Jobs \n");
                console.log(res?.data?.result);
                setSimilarJobs(res?.data?.result);
                setSimilarJobsLoading(false);
            } else {
                console.log("Error in getting Similar Jobs \n");
            }
        })
    }

    useEffect(() => {
        getSimilarJobsfn();
    }, [id])

    return (
        <>
            {loadingPage ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <PuffLoader
                        color="red"
                        size={70}
                    />
                </div>
            ) : (
                <div className={jobdescriptionCSS.jobcontainer}>
                    <ToastContainer />
                    <div className={jobdescriptionCSS.leftContainer}>


                        <div className={jobdescriptionCSS.company}>
                            <div className={jobdescriptionCSS.companydescription}>
                                <div className={jobdescriptionCSS.leftcompanydescripton}>
                                    <h1
                                        style={{ fontWeight: '600', fontSize: '18px' }}
                                    > {singleJobsData?.result?.jobTitle} </h1>

                                    <div className={jobdescriptionCSS.ownername}>
                                        {/* <h1>Saint Gobain </h1> */}
                                        <h1
                                            style={{ fontWeight: '600' }}
                                        >{singleRecruiterData?.companyName}</h1>
                                        {/* 
                                        <div className={jobdescriptionCSS.dreview}>
                                            <FaStar />
                                        </div> */}
                                        {/* <p>1238 Reviews</p> */}
                                    </div>
                                    <div className={jobdescriptionCSS.yearname}>
                                        <div className={jobdescriptionCSS.reservation}>
                                            <TbBriefcase2 size={20} />
                                            <p>
                                                &nbsp;
                                                {singleJobsData?.result?.workExperienceMin} -
                                                {singleJobsData?.result?.workExperienceMax}
                                                &nbsp;Years
                                            </p>
                                        </div>
                                        <div className={jobdescriptionCSS.reservation}>
                                            <FaWallet
                                                style={{ opacity: '0.7' }}
                                                className={jobdescriptionCSS.svgg}
                                            />
                                            <p>
                                                &nbsp;
                                                {singleJobsData?.result?.salaryStart}
                                                - {singleJobsData?.result?.salaryEnd}
                                                &nbsp; {singleJobsData?.result?.salarySpecification}

                                            </p>
                                        </div>
                                    </div>
                                    <div className={jobdescriptionCSS.companylocation}>
                                        <div className={jobdescriptionCSS.locationlogo}>
                                            <FaLocationDot
                                                style={{ opacity: '0.7' }}
                                            /></div>
                                        <p>
                                            {singleJobsData?.result?.jobLocation?.map((location, index, arr) => (
                                                <span key={location.id}>
                                                    {location}
                                                    {index < arr.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                {/* rightcompanydescription section  */}
                                <div className={jobdescriptionCSS.rightcompanydescripton}>
                                    <div className={jobdescriptionCSS.rightcompanydescriptonlogo}>
                                        {/* <img src={companyimage} alt="img" /> */}
                                        <img src={singleRecruiterData?.company_logo} alt="company Logo" />
                                    </div>
                                </div>
                            </div>

                            <hr style={{ width: '100%', marginTop: '25px', marginBottom: '25px' }} />
                            <div className={jobdescriptionCSS.details}>
                                <div className={jobdescriptionCSS.openinginformation}>
                                    {/* <div className={jobdescriptionCSS.opening"></div>
                                            <div className={jobdescriptionCSS.opening"></div>
                                            <div className={jobdescriptionCSS.opening"></div> */
                                    }

                                    <p>
                                        {/* Posted: */}
                                        {/* <span>{singleJobsData?.result?.created_at &&
                                            `${formatDistanceToNow(posted_at)} ago`}
                                        </span> */}
                                        Subido:

                                        <span
                                            style={{ fontWeight: '600' }}
                                        >{singleJobsData?.result?.created_at &&
                                            ` hace ${formatDistanceToNow(posted_at, { locale: es })}`}
                                        </span>
                                    </p>

                                    <p>
                                        {/* Openings: */}
                                        Visitas:
                                        <span
                                            style={{ fontWeight: '600' }}
                                        > {singleJobsData?.result?.no_of_openings}</span>
                                    </p>
                                    {
                                        singleJobsData?.result?.isExternal ?
                                            <></> :
                                            <>
                                                <p>
                                                    {/* Applicants: */}
                                                    Solicitantes:

                                                    <span
                                                        style={{ fontWeight: '600' }}
                                                    > {singleJobsData?.result?.applicants?.length}</span>
                                                </p>
                                            </>
                                    }
                                </div>
                                <div className={jobdescriptionCSS.detailbutton}>
                                    {
                                        singleJobsData?.result?.isExternal ?
                                            <a href={singleJobsData?.result?.jobLink} style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer'>
                                                <button className='btn btn-info mt-2 mb-2 w-100 d-flex' style={{ borderRadius: '50px', padding: '10px 25px 10px 25px' }}>
                                                    {/* Apply */}
                                                    Inscribirme
                                                    <FaExternalLinkAlt
                                                        style={{ marginLeft: '5px' }}
                                                    />
                                                </button>
                                            </a> :
                                            !appliedToJob ?
                                                <button className='btn btn-info mt-2 mb-2 w-50 '
                                                    onClick={() => {
                                                        handleJobApply(singleJobsData?.result?._id);
                                                    }}>
                                                    {loading ?
                                                        <>
                                                            <div>
                                                                <PuffLoader
                                                                    size={25}
                                                                    color="#ffffff"
                                                                />
                                                                {/* <span className='pl-2 text'> Applying  ... </span> */}
                                                            </div>
                                                        </> :
                                                        // 'Apply'
                                                        'Inscribirme'
                                                    }
                                                </button> :
                                                <button className='btn btn-success mt-2 mb-2 w-50 ' style={{ cursor: 'not-allowed' }} disabled>
                                                    {/* Applied */}
                                                    Inscrito
                                                </button>
                                    }
                                    {/* </center> */}
                                </div>
                            </div>

                        </div>

                        <div className={jobdescriptionCSS.jobdescription}>
                            {/* <h1>Job description</h1> */}
                            <h1> Descripción </h1>
                            <div className={jobdescriptionCSS.JDHTML}>
                                <div dangerouslySetInnerHTML={{ __html: singleJobsData?.result?.jobDescription }}></div>
                            </div>

                            <div className={jobdescriptionCSS.KeySkills}>
                                {/* <h1>Key Skills</h1> */}
                                <h1>
                                    Requisitos
                                </h1>
                                {/* <p>Skills highlighted with ‘*‘ are preferred keyskills</p> */}

                                <div className={jobdescriptionCSS.keyskillsButton}>
                                    {singleJobsData?.result?.mandatorySkills?.map((skill, index) => (
                                        <button key={index} className={jobdescriptionCSS.btn}>{skill}</button>
                                    ))}
                                    {singleJobsData?.result?.optionalSkills?.map((skill, index) => (
                                        <button key={index} className={jobdescriptionCSS.btn}>{skill}</button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={jobdescriptionCSS.aboutcompany}>
                            {/* <h1>About company</h1> */}
                            <h1> Sobre la compañía </h1>
                            {singleRecruiterData?.CompanyDescription && (
                                <div
                                    dangerouslySetInnerHTML={{ __html: singleRecruiterData.CompanyDescription }}
                                />
                            )}
                            <div className='mt-2'>

                                {singleRecruiterData?.numberOfEmployees && (
                                    <p className='d-flex'>
                                        <HiMiniUserGroup
                                            size={'20'}
                                            style={{ marginRight: '5px' }}
                                        />
                                        {singleRecruiterData.numberOfEmployees}
                                    </p>
                                )}

                                {singleRecruiterData?.HeadQuarters && (
                                    <p className='d-flex'>
                                        <HiBuildingOffice2
                                            size={'20'}
                                            style={{ marginRight: '5px' }}
                                        />
                                        {singleRecruiterData.HeadQuarters}
                                    </p>
                                )}

                                {singleRecruiterData?.companyWebsite && (
                                    <p className='d-flex align-items-center'>
                                        <FaGlobe size={'20'} style={{ marginRight: '5px' }} />
                                        Website:
                                        <a
                                            href={singleRecruiterData.companyWebsite}
                                            style={{ marginLeft: '5px', color: '#1DA1F2' }}
                                            title={singleRecruiterData.companyWebsite}
                                        >
                                            Visit Website
                                        </a>
                                    </p>
                                )}

                                {singleRecruiterData?.twitter && (
                                    <p className='d-flex align-items-center'>
                                        <FiLink size={'20'} style={{ marginRight: '5px' }} />
                                        Twitter:
                                        <a
                                            href={singleRecruiterData.twitter}
                                            style={{ marginLeft: '5px', color: '#1DA1F2' }}
                                            title={singleRecruiterData.twitter}
                                        >
                                            Follow on Twitter
                                        </a>
                                    </p>
                                )}

                                {singleRecruiterData?.linkedIn && (
                                    <p className='d-flex align-items-center'>
                                        <IoLogoLinkedin size={'25'} style={{ marginRight: '5px' }} />
                                        LinkedIn:
                                        <a
                                            href={singleRecruiterData.linkedIn}
                                            style={{ marginLeft: '5px', color: '#1DA1F2' }}
                                            title={singleRecruiterData.linkedIn}
                                        >
                                            View Profile
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={jobdescriptionCSS.rightContainer}>
                        <div className={jobdescriptionCSS.recommendedjobs}>
                            <div className={jobdescriptionCSS.recommendedjobsdetail}>
                                {/* <h1>Jobs you might be interested in</h1> */}
                                <h1
                                    style={{ fontWeight: '600' }}
                                > Empleos que te pueden interesar </h1>


                                {similarJobsLoading ?
                                    <div
                                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}
                                    >
                                        <PuffLoader
                                            color="red"
                                            size={70}
                                        />
                                    </div>
                                    :
                                    similarJobs?.map((job, index) => {
                                        return (
                                            <div
                                                key={index}
                                                onClick={() => window.open(`/AllJobs/${job._id}`, '_blank')}
                                                className={jobdescriptionCSS.jobDetailsection}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className={jobdescriptionCSS.jobDetailsectionleft}>
                                                    <h1>{job.jobTitle}</h1>
                                                    <p>{job.companyName}</p>
                                                    <div className={jobdescriptionCSS.joblocation}>
                                                        <div className={jobdescriptionCSS.jobicon}>
                                                            <FaLocationDot
                                                                style={{ opacity: '0.7' }}
                                                            /></div>
                                                        {job?.jobLocation?.slice(0, 2)?.map((location, index) => (
                                                            <p key={index}>
                                                                {location}
                                                                {index < job.jobLocation.length - 1 ? ', ' : ''}
                                                            </p>
                                                        ))}
                                                        {job?.jobLocation?.length > 2 && <p>...</p>}
                                                    </div>
                                                    <div className={jobdescriptionCSS.joblocation}>
                                                        <div className={jobdescriptionCSS.jobicon}>
                                                            <FaWallet
                                                                style={{ opacity: '0.7' }}
                                                            />
                                                        </div>
                                                        <p>
                                                            &nbsp;{job?.salaryStart} -
                                                            {job?.salaryEnd}
                                                            &nbsp;
                                                            {job?.salarySpecification}
                                                        </p>
                                                    </div>
                                                    <div className={jobdescriptionCSS.joblocation}>
                                                        <div className={jobdescriptionCSS.jobicon}><TbBriefcase2 /></div>
                                                        <p>
                                                            &nbsp;{job?.workExperienceMin} -
                                                            {job?.workExperienceMax}
                                                            &nbsp; Years
                                                            {/* {job?.salarySpecification} */}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={jobdescriptionCSS.jobDetailsectionright}>
                                                    <div className={jobdescriptionCSS.jobDetailsectionrightlogo}>
                                                        <img src={job?.recruiter_info?.company_logo} alt="" />
                                                    </div>
                                                    <p>Posted: {job?.created_at &&
                                                        `${formatDistanceToNow(job?.created_at)} ago`}  </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* <div className={jobdescriptionCSS.jobdetailsButton}>
                                <button>View All</button>
                            </div> */}
                        </div>
                        {/* Rest of your code */}
                    </div>
                </div>
            )}
        </>
    )

}

export default ParticularJob
