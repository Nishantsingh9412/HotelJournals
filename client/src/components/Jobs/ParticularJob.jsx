import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PuffLoader from "react-spinners/PuffLoader";
// Library for date and time
import { formatDistanceToNow } from 'date-fns';
// React toast 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Icons
import { FaStar } from "react-icons/fa";
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
import { FaHouseChimneyCrack } from "react-icons/fa6";
import { FaFirstAid } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
// CSS 
import jobdescriptionCSS from './particularjob.module.css';
// Images 
import companyimage from "../../assets/JobImage/companyimage.jpg";
import img2 from "../../assets/JobImage/img2.gif";
import img3 from "../../assets/JobImage/img3.gif";


import { ApplyJobAction, getJobSingleAction } from '../../redux/actions/jobsAdmin.js';
import { getRecProfileAction } from '../../redux/actions/recProfile.js';
import { IoLogoLinkedin } from 'react-icons/io5';


const ParticularJob = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const localUser = JSON.parse(localStorage.getItem('Profile'));
    const userId = localUser?.result?._id;
    console.log("User Id \n");
    console.log(userId);
    const [appliedToJob, setAppliedToJob] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getJobSingleAction(id))
    }, [dispatch]);



    const handleJobApply = async (jobId) => {
        setLoading(true);
        // console.log(`Job Applied with id : ${jobId}`);
        // console.log(`User Applied with id : ${userId}`);
        const jobApplicants = {
            jobId: jobId,
            userId: userId
        }
        const response = await dispatch(ApplyJobAction(jobApplicants))
        if (response.success) {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
        setLoading(false);
    }



    const singleJobsData = useSelector((state) => state?.getSingleJobReducer);
    const posted_at = new Date(singleJobsData?.result?.created_at);
    console.log("Single Job Data \n");
    console.log(singleJobsData);

    useEffect(() => {
        dispatch(getRecProfileAction(singleJobsData?.result?.created_by));
    }, [singleJobsData, dispatch])

    const recProfileData = useSelector((state) => state?.getRecProfileReducer)
    console.log("Recruiter Profile Data \n");
    const singleRecruiterData = recProfileData?.data?.result[0];
    console.log(singleRecruiterData);

    const appliedCandidates = singleJobsData?.result?.applicants;
    // console.log("Applied Candidates \n");
    // console.log(appliedCandidates);

    // if(singleJobsData?.result?.applicants?.includes(userId)){
    //     toast.info('You have already applied for this job');
    // }
    const applicantsSet = new Set(singleJobsData?.result?.applicants.map((applicant) => applicant.user));
    console.log("Applicants Set \n");
    console.log(applicantsSet);

    console.log("Appis \n");
    console.log(singleJobsData?.result?.applicants)

    // if (applicantsSet.has(userId)) {
    //     toast.info('You have already applied for this job');
    // }

    useEffect(() => {
        setAppliedToJob(applicantsSet.has(userId));
    }, [appliedToJob, applicantsSet, userId, singleJobsData?.result?.applicants])

    useEffect(() => {
        if (applicantsSet?.has(userId)) {
            setAppliedToJob(true);
        }
    }, [id, singleJobsData?.result?.applicants])


    // return (
    //     <div className='container mt-4'>
    //         <ToastContainer />
    //         <div class="card text-center">
    //             <div class="card-header">
    //                 {singleJobsData?.result?.jobTitle}
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">Extra Benifits</h5>
    //                 {singleJobsData?.result?.extraBenifits?.map((benifits, index) => (
    //                     <span className='rounded' key={index} style={{ marginRight: '10px', border: '20% ' }}>
    //                         {benifits}
    //                     </span>
    //                 ))}
    //             </div>

    //             <center>
    //                 {!appliedToJob ?
    //                     <button className='btn btn-info mt-2 mb-2 w-25 ' onClick={() => {
    //                         handleJobApply(singleJobsData?.result?._id);
    //                         setAppliedToJob(true);
    //                     }}>
    //                         {loading ?
    //                             <>
    //                                 <div className='d-flex'>
    //                                     <PuffLoader
    //                                         size={25}
    //                                         color="#ffffff"
    //                                     />
    //                                     <span className='pl-2 text'> Applying  ... </span>
    //                                 </div>
    //                             </> :
    //                             'Apply'
    //                         }
    //                     </button> :
    //                     <button className='btn btn-success mt-2 mb-2 w-25 ' disabled>
    //                         Applied
    //                     </button>
    //                 }
    //             </center>
    //             <div class="card-footer text-muted">
    //                 {singleJobsData?.result?.created_at &&
    //                     `posted ${formatDistanceToNow(posted_at)} ago`}
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <>
            <div className={jobdescriptionCSS.jobcontainer}>

                <div className={jobdescriptionCSS.leftContainer}>


                    <div className={jobdescriptionCSS.company}>
                        <div className={jobdescriptionCSS.companydescription}>
                            <div className={jobdescriptionCSS.leftcompanydescripton}>
                                <h1> {singleJobsData?.result?.jobTitle} </h1>

                                <div className={jobdescriptionCSS.ownername}>
                                    {/* <h1>Saint Gobain </h1> */}
                                    <h1>{singleRecruiterData?.companyName}</h1>

                                    <div className={jobdescriptionCSS.dreview}>
                                        <FaStar />
                                    </div>
                                    <p>1238 Reviews</p>
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
                                        <FaWallet className={jobdescriptionCSS.svgg} />
                                        <p>
                                            &nbsp;
                                            {singleJobsData?.result?.salaryStart}
                                            - {singleJobsData?.result?.salaryEnd}
                                            &nbsp; {singleJobsData?.result?.salarySpecification}

                                        </p>
                                    </div>
                                </div>
                                <div className={jobdescriptionCSS.companylocation}>
                                    <div className={jobdescriptionCSS.locationlogo}><FaLocationDot /></div>
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
<div className={jobdescriptionCSS.opening"></div> */}

                                <p>Posted: <span>{singleJobsData?.result?.created_at &&
                                    `${formatDistanceToNow(posted_at)} ago`} </span> </p>

                                <p>Openings: <span>{singleJobsData?.result?.no_of_openings} </span></p>
                                <p>Applicants: <span>{singleJobsData?.result?.applicants?.length}</span></p>
                            </div>
                            <div className={jobdescriptionCSS.detailbutton}>
                                {/* <button type="button" className={jobdescriptionCSS.btn1}>Register To Apply</button> */}
                                {/* <button type="button" className={jobdescriptionCSS.btn2}>

                </button> */}

                                {/* <center> */}
                                {!appliedToJob ?
                                    <button className='btn btn-info mt-2 mb-2 w-50 ' onClick={() => {
                                        handleJobApply(singleJobsData?.result?._id);
                                        setAppliedToJob(true);
                                    }}>
                                        {loading ?
                                            <>
                                                <div className=''>
                                                    <PuffLoader
                                                        size={25}
                                                        color="#ffffff"
                                                    />
                                                    <span className='pl-2 text'> Applying  ... </span>
                                                </div>
                                            </> :
                                            'Apply'
                                        }
                                    </button> :
                                    <button className='btn btn-success mt-2 mb-2 w-25 ' disabled>
                                        Applied
                                    </button>
                                }
                                {/* </center> */}
                            </div>
                        </div>

                    </div>

                    <div className={jobdescriptionCSS.jobdescription}>
                        <h1>Job description</h1>
                        <div className={jobdescriptionCSS.JDHTML}>
                            <div dangerouslySetInnerHTML={{ __html: singleJobsData?.result?.jobDescription }}></div>
                        </div>

                        <div className={jobdescriptionCSS.KeySkills}>
                            <h1>Key Skills</h1>
                            {/* <p>Skills highlighted with ‘*‘ are preferred keyskills</p> */}

                            <div className={jobdescriptionCSS.keyskillsButton}>
                                {singleJobsData?.result?.mandatorySkills?.map((skill, index) => (
                                    <button key={index} className={jobdescriptionCSS.btn}>{skill}</button>
                                ))}
                                {singleJobsData?.result?.optionalSkills?.map((skill, index) => (
                                    <button key={index} className={jobdescriptionCSS.btn}>{skill}</button>
                                ))}
                                {/* <button className={jobdescriptionCSS.btn}></button> */}
                                {/* <button className={jobdescriptionCSS.btn}>Sales Executive</button>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button> */}
                            </div>
                        </div>

                        {/* <p>Job Description and Key Responsibilities: <br />
            Responsible for developing the portfolio of Adhesives and Sealants products for construction, industrial and automotive markets. The person should have in-depth understanding of adhesives and sealants, their applications, key customers and their expectations.
            The person should be able to define a go-to market strategy with the appropriate marketing mix.
            He/she needs to have a strong performance record with the mindset of a start-up business and be able to multitask.</p>
        <ul>
            <h1>Major responsibilities will include the following:</h1>
            <li>Getting new leads from customers</li>
            <li>Mapping of market at distributor/dealer level per district & gaining inputs into market size, market trends by product line, understanding market issues/distributor feedback</li>
            <li>Supporting distributors to get orders from retailers</li>
            <li>Performing secondary sales for dealers</li>
            <li>Conducting product trials</li>
            <li>Communication of latest news from the business/schemes etc. Getting distributor feedback on schemes/promotions needed</li>
            <li>Assisting in expanding distributor/dealer network across the respective states.</li>
            <li>Build market information</li>
        </ul>
        <ul>
            <h1>Desired Candidate Profile:</h1>
            <li>Qualifications: Graduate</li>
            <li>Work Experience: 2-3 years of Sales experience</li>
            <li>Preferably having worked in Adhesives/Sealants segments; alternatively having experience in allied industries like Plywood, Glass and Hardware segments</li>
            <li>Should have knowledge of retail sales, additionally any knowledge of industrial and project sales would be appreciated.Role & responsibilities</li>
        </ul>
        <div className={jobdescriptionCSS.rolecatagory}>
            <h1>Role: <span> Field Sales Executive</span></h1>
            <h1>Industry Type: <span> Engineering & Construction</span></h1>
            <h1>Department: <span> Sales & Business Development</span></h1>
            <h1>Employment Type: <span>  Full Time, Permanent</span></h1>
            <h1>Role Category: <span> Retail & B2C Sales</span></h1>
        </div>
        <div className={jobdescriptionCSS.education}>
            <h1>Education</h1>
            <h1>UG: <span>Any Graduate</span></h1>
        </div>
        <div className={jobdescriptionCSS.KeySkills}>
            <h1>Key Skills</h1>
            <p>Skills highlighted with ‘*‘ are preferred keyskills</p>
            <div className={jobdescriptionCSS.preferedbutton}>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button>
            </div>
            <div className={jobdescriptionCSS.keyskillsButton}>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button>
                <button className={jobdescriptionCSS.btn}>Sales Executive</button>
            </div>
        </div>
        <div className={jobdescriptionCSS.iconcontainer}>
            <div className={jobdescriptionCSS.icons}> <a href=""><FaLinkedin /></a></div>
            <div className={jobdescriptionCSS.icons}> <a href=""><FaFacebook /></a></div>
            <div className={jobdescriptionCSS.icons}> <a href=""><FaTwitter /></a></div>
            <div className={jobdescriptionCSS.icons}> <a href=""><FaYoutube /></a></div>
        </div> */}
                    </div>

                    <div className={jobdescriptionCSS.aboutcompany}>
                        <h1>About company</h1>
                        {/* <p>Saint-Gobain designs, manufactures and distributes materials and solutions for the construction, mobility and industrial markets. Developed through a continuous innovation process, our integrated solutions provide sustainability and performance in daily life, addressing the renovation of public and private buildings, light construction and the decarbonization of construction and industry. The Adhesives & Sealants Business is a part of Saint-Gobains High-Performance Solutions sector. In 2018, Saint-Gobain acquired Tekbond - a leading player in the Brazilian Adhesives market thereby bringing the brand to India. The business is a part of Grindwell Norton and is built on lasting relationships and strong partnerships supported by a wide range of adhesives, sealants, sprays, foams and tape products. Tekbond product range includes Silicone Sealants, Polyurethane (PU) sealants, Acrylic Sealants, MS Hybrid, Adhesives and spray paints To know more about our business, visit our website: <a href="https://tekbondindia.saint-gobain.com">https://tekbondindia.saint-gobain.com</a></p> */}

                        {/* <p dangerouslySetInnerHTML={{ __html: singleRecruiterData?.CompanyDescription }} /> */}
                        {/* <h1>Company Info</h1> */}
                        {/* <h1>Address: <span>5th Floor, Leela Business Park,Airport Road Metro Station, Andheri Kurla Road, Andheri East – Mumbai 400059</span></h1> */}
                        {/* {singleRecruiterData?.companyName && (
            <p>
                <FaBuilding /> Company Name: {singleRecruiterData.companyName}
            </p>
        )} */}

                        {/* {singleRecruiterData?.Designation && (
            <p>
                <FaUsers /> Designation: {singleRecruiterData.Designation}
            </p>
        )} */}

                        {singleRecruiterData?.CompanyDescription && (
                            <div
                                dangerouslySetInnerHTML={{ __html: singleRecruiterData.CompanyDescription }}
                            />
                        )}

                        {/* {singleRecruiterData?.numberOfEmployees && (
            <p>
                <FaUsers /> Number of Employees: {singleRecruiterData.numberOfEmployees}
            </p>
        )} */}

                        <div>

                            {singleRecruiterData?.numberOfEmployees && (
                                <p>
                                    <HiMiniUserGroup /> {singleRecruiterData.numberOfEmployees}
                                </p>
                            )}

                            {singleRecruiterData?.HeadQuarters && (
                                <p>
                                    <HiBuildingOffice2 /> {singleRecruiterData.HeadQuarters}
                                </p>
                            )}

                            {singleRecruiterData?.companyWebsite && (
                                <p>
                                    <FaGlobe /> Website: <a href={singleRecruiterData.companyWebsite}>{singleRecruiterData.companyWebsite}</a>
                                </p>
                            )}

                            {singleRecruiterData?.twitter && (
                                <p>
                                    <FiLink /> Twitter: <a href={singleRecruiterData.twitter}>{singleRecruiterData.twitter}</a>
                                </p>
                            )}

                            {singleRecruiterData?.linkedIn && (
                                <p>
                                    <IoLogoLinkedin /> LinkedIn: <a href={singleRecruiterData.linkedIn}>{singleRecruiterData.linkedIn}</a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>


                {/* right section   start */}
                <div className={jobdescriptionCSS.rightContainer}>
                    <div className={jobdescriptionCSS.recommendedjobs}>
                        <div className={jobdescriptionCSS.recommendedjobsdetail}>
                            <h1>Jobs you might be interested in</h1>
                            <div className={jobdescriptionCSS.jobDetailsection}>
                                <div className={jobdescriptionCSS.jobDetailsectionleft}>
                                    <h1> Sales Marketing Executive / Back Office</h1>
                                    <p>urja sealants pvt ltd</p>
                                    <div className={jobdescriptionCSS.marketingreview}>
                                        <div className={jobdescriptionCSS.marketingicon}>
                                            <FaStar />
                                        </div>
                                        <p>87, review</p>
                                    </div>
                                    <div className={jobdescriptionCSS.joblocation}>
                                        <div className={jobdescriptionCSS.jobicon}><FaLocationDot /></div>
                                        <p>pune</p>
                                    </div>
                                </div>
                                <div className={jobdescriptionCSS.jobDetailsectionright}>
                                    <div className={jobdescriptionCSS.jobDetailsectionrightlogo}>
                                        <img src={companyimage} alt="" />
                                    </div>
                                    <p>posted 8 days</p>
                                </div>
                            </div>
                            <div className={jobdescriptionCSS.jobDetailsection}>
                                <div className={jobdescriptionCSS.jobDetailsectionleft}>
                                    <h1> Digital marketing Executive immediate joing </h1>
                                    <p>net Lynax Solution</p>
                                    <div className={jobdescriptionCSS.marketingreview}>
                                        <div className={jobdescriptionCSS.marketingicon}>
                                            <FaStar />
                                        </div>
                                        <p>87, review</p>
                                    </div>
                                    <div className={jobdescriptionCSS.joblocation}>
                                        <div className={jobdescriptionCSS.jobicon}><FaLocationDot /></div>
                                        <p>pune</p>
                                    </div>
                                </div>
                                <div className={jobdescriptionCSS.jobDetailsectionright}>
                                    <div className={jobdescriptionCSS.jobDetailsectionrightlogo}>
                                        <img src={img2} alt="" />
                                    </div>
                                    <p>posted 8 days</p>
                                </div>
                            </div>
                            <div className={jobdescriptionCSS.jobDetailsection}>
                                <div className={jobdescriptionCSS.jobDetailsectionleft}>
                                    <h1> SEO Executive / Back Office</h1>
                                    <p>urja sealants pvt ltd</p>
                                    <div className={jobdescriptionCSS.marketingreview}>
                                        <div className={jobdescriptionCSS.marketingicon}>
                                            <FaStar />
                                        </div>
                                        <p>87, review</p>
                                    </div>
                                    <div className={jobdescriptionCSS.joblocation}>
                                        <div className={jobdescriptionCSS.jobicon}><FaLocationDot /></div>
                                        <p>pune</p>
                                    </div>
                                </div>
                                <div className={jobdescriptionCSS.jobDetailsectionright}>
                                    <div className={jobdescriptionCSS.jobDetailsectionrightlogo}>
                                        <img src={img3} alt="" />
                                    </div>
                                    <p>posted 8 days</p>
                                </div>
                            </div>
                        </div>

                        <div className={jobdescriptionCSS.jobdetailsButton}>
                            <button>View All</button>
                        </div>
                    </div>
                    {/* reviews section start  */}
                    <div className={jobdescriptionCSS.reviews}>
                        <div className={jobdescriptionCSS.reviewsheading}>
                            <h1>Reveiws</h1>
                            <a href="">Read all 1238 reviews</a>
                        </div>

                        <div className={jobdescriptionCSS.reviewsdetail}>
                            <h1>Territory Sales Incharge in Guwahati, Assam</h1>
                            <div className={jobdescriptionCSS.reviewsdate}>
                                <p>Anonymous</p>
                                <p>19 april 2023</p>
                            </div>
                            <a href="">likes</a>
                            <p>Overall is good . Reputed organisation, good company culture, standard procedure</p>
                        </div>
                        <div className={jobdescriptionCSS.reviewpost}>
                            <div className={jobdescriptionCSS.reviewpostleft}><p>Follow Saint Gobain to receive the latest job postings and alerts</p></div>
                            <div className={jobdescriptionCSS.reviewpostright}>
                                <button>Follow</button>
                                <p>47.0k followers</p>
                            </div>
                        </div>

                    </div>
                    <div className={jobdescriptionCSS.banefitsection}>
                        <div className={jobdescriptionCSS.banefitperk}>

                            <h1>Benefits & Perks <br /><span>Benefits & Perks</span> </h1>


                            <a href="">view all</a>
                        </div>
                        <div className={jobdescriptionCSS.perks}>
                            <div className={jobdescriptionCSS.perklogosection}>
                                <div className={jobdescriptionCSS.perkimage}>
                                    <FaFirstAid />
                                </div>
                                <p>Health </p>
                            </div>
                            <div className={jobdescriptionCSS.perklogosection}>
                                <div className={jobdescriptionCSS.perkimage}>
                                    <FaBagShopping />
                                </div>
                                <p>Job Training</p>
                            </div>
                            <div className={jobdescriptionCSS.perklogosection}>
                                <div className={jobdescriptionCSS.perkimage}>
                                    <FaCar />
                                </div>
                                <p>Transport</p>
                            </div>
                            <div className={jobdescriptionCSS.perklogosection}>
                                <div className={jobdescriptionCSS.perkimage}>
                                    <FaUserTie />
                                </div>
                                <p>Soft Training</p>
                            </div>
                            <div className={jobdescriptionCSS.perklogosection}>
                                <div className={jobdescriptionCSS.perkimage}>
                                    <FaHouseChimneyCrack />
                                </div>
                                <p>House</p>
                            </div>
                            <div className={jobdescriptionCSS.perklogosection}>
                                <div className={jobdescriptionCSS.perkimage}>
                                    <FaCoffee />
                                </div>
                                <p>Coffetery</p>
                            </div>

                        </div>

                    </div>


                    {/* <div className={jobdescriptionCSS.servicesection}>
            <div className={jobdescriptionCSS.servicedetail}>
                <div className={jobdescriptionCSS.servicelink}>
                    <p>Services you might be
                        interested in</p>
                    <a href="">link</a>
                </div>
                <p>Resume Display <br /> <span>Increase your profile visibility to recruiters upto 3 times</span> <br />
                    Get a Featured Profile, Stand out and get noticed in recruiter eyes.
                </p>
            </div>
            <div className={jobdescriptionCSS.serviceBottom}>
                <div className={jobdescriptionCSS.logoService}>
                    <img src={companyimage} alt="" />
                </div>
                <h1>Company Name</h1>
            </div>

        </div> */}

                </div>

            </div>
        </>
    )

}

export default ParticularJob
