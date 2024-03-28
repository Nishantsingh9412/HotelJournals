import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
// Purify About Company
import DOMPurify from 'dompurify';
import PuffLoader from "react-spinners/PuffLoader";
// ToastContainer
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Loader

// import ImageCropper from './ImageCropper';

import { PiSelectionSlashDuotone } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import MainRecruiterDashboard from '../admin/RecruiterDashboard/MainRecruiterDashboard';
import { getRecProfileAction, setRecProfileAction } from '../../redux/actions/recProfile';
import Profile from './ImageCropperForRecProfile/Profile';
import RecruiterFinalDashboard from '../admin/AdminJobs/RecruiterFinalDashboard';
import ProfilePic from '../User_profile/ProfilePic';
import RecruiterCSS from './recruiterProfile.module.css';


const RecruiterProfile = () => {

    const industryTypes = [
        "Select Industry Type",
        "3D Printing",
        "Accounting",
        "Advanced Manufacturing",
        "Airlines/Aviation",
        "Advertising Technology",
        "Agriculture",
        "Animation",
        "Apparel & Fashion",
        "Architecture & Planning",
        "Arts and Crafts",
        "Automotive",
        "Banking",
        "Biotechnology",
        "Broadcast Media",
        "Building Materials",
        "Business Supplies and Equipment",
        "Capital Markets",
        "Chemicals",
        "Civic & Social Organization",
        "Civil Engineering",
        "Commercial Real Estate",
        "Computer & Network Security",
        "Computer Games",
        "Computer Hardware",
        "Computer Networking",
        "Computer Software",
        "Construction",
        "Consumer Electronics",
        "Consumer Goods",
        "Consumer Services",
        "Cosmetics",
        "Dairy",
        "Defense & Space",
        "Design",
        "Education Management",
        "E-Learning",
        "Electrical/Electronic Manufacturing",
        "Entertainment",
        "Environmental Services",
        "Events Services",
        "Executive Office",
        "Facilities Services",
        "Farming",
        "Financial Services",
        "Fine Art",
        "Fishery",
        "Food & Beverages",
        "Food Production",
        "Fund-Raising",
        "Furniture",
        "Glass, Ceramics & Concrete",
        "Government Administration",
        "Government Relations",
        "Graphic Design",
        "Health, Wellness and Fitness",
        "Higher Education",
        "Hospital & Health Care",
        "Hospitality",
        "Human Resources",
        "Import and Export",
        "Individual & Family Services",
        "Industrial Automation",
        "Information Services",
        "Information Technology and Services",
        "Insurance",
        "International Trade and Development",
        "Internet",
        "Investment Banking",
        "Investment Management",
        "Judiciary",
        "Law",
        "Legislative Office",
        "Leisure, Travel & Tourism",
        "Libraries",
        "Logistics and Supply Chain",
        "Luxury Goods & Jewelry",
        "Machinery",
        "Management Consulting",
        "Maritime",
        "Marketing and Advertising",
        "Mechanical or Industrial Engineering",
        "Media Production",
        "Medical Devices",
        "Medical Practice",
        "Mental Health Care",
        "Military",
        "Mining & Metals",
        "Motion Pictures and Film",
        "Music",
        "Nanotechnology",
        "Newspapers",
        "Non-Profit Organization Management",
        "Oil & Energy",
        "Online Media",
        "Outsourcing/Offshoring",
        "Package/Freight Delivery",
        "Packaging and Containers",
        "Paper & Forest Products",
        "Performing Arts",
        "Pharmaceuticals",
        "Philanthropy",
        "Photography",
        "Plastics",
        "Political Organization",
        "Primary/Secondary Education",
        "Printing",
        "Professional Training & Coaching",
        "Program Development",
        "Public Policy",
        "Public Relations and Communications",
        "Public Safety",
        "Publishing",
        "Railroad Manufacture",
        "Ranching",
        "Real Estate",
        "Recreational Facilities and Services",
        "Religious Institutions",
        "Renewables & Environment",
        "Research",
        "Restaurants",
        "Retail",
        "Security and Investigations",
        "Semiconductors",
        "Shipbuilding",
        "Sporting Goods",
        "Sports",
        "Staffing and Recruiting",
        "Supermarkets",
        "Telecommunications",
        "Textiles",
        "Think Tanks",
        "Translation and Localization",
        "Transportation/Trucking/Railroad",
        "Utilities",
        "Venture Capital & Private Equity",
        "Veterinary",
        "Warehousing",
        "Wholesale",
        "Wine and Spirits",
        "Wireless",
        "Writing and Editing"
    ];
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState('');
    const [Designation, setDesignation] = useState('');
    const [numberOfEmployees, setNumberOfEmployees] = useState('');
    const [HeadQuarters, setHeadQuarters] = useState('');
    const [industryType, setIndustryType] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [CompanysTagline, setCompanysTagline] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [CompanyDescription, setCompanyDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);

    const localUser = JSON.parse(localStorage.getItem('Profile'));
    const localuserId = localUser?.result?._id;
    const [currentRecProfile, setCurrentRecProfile] = useState(null);

    // const loadedImage = useEffect(() => {

    // },[])

    useEffect(() => {
        dispatch(getRecProfileAction(localuserId))
    }, [])
    
    const currentUserProfileFromDB = useSelector(state => state.getRecProfileReducer);
    console.log(currentUserProfileFromDB);
    
    const currentProfileData = currentUserProfileFromDB?.data?.result[0];
    console.log(currentProfileData);

    useEffect(() => {
        if (currentProfileData) {
            setCurrentRecProfile(currentProfileData);
        } 
    }, [currentProfileData]);

    useEffect(() => {
        if(currentRecProfile){
            navigate('/recruiter');
        }else{
            setTimeout(() => {
                setLoadingPage(false);
            },5000);
        }
    },[currentRecProfile])


    // const currentRecProfile = currentUserProfileFromDB?.data?.result[0];

    const isValidUrl = (url) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(url);
    }

    // const postCompanyLogo = (pics) => {
    //     setLoading(true);
    //     if (pics === undefined) {
    //         toast.error("This didn't work.")
    //         setLoading(false);
    //         return;
    //     }
    //     if (pics.size > 1000000) {
    //         setLoading(false);
    //         return toast.error('Image size should not exceed 1MB');
    //     }
    //     if (pics.type !== 'image/jpeg' && pics.type !== 'image/png') {
    //         toast.error('Invalid image format');
    //         setLoading(false);
    //         return;
    //     }
    //     const data = new FormData();
    //     data.append('file', pics);
    //     data.append('upload_preset', 'Hotel_Journals_app');
    //     data.append('cloud_name', 'dwahql1jy');
    //     fetch('https://api.cloudinary.com/v1_1/dwahql1jy/image/upload', {
    //         method: 'post',
    //         body: data
    //     }).then(res => res.json()).then(data => {
    //         setCompanyLogo(data.url.toString());
    //         console.log(data);
    //         setLoading(false);
    //     }).catch(err => {
    //         console.log(err);
    //         setLoading(false);
    //     })
    // }
    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!companyName ||
            !Designation ||
            !HeadQuarters ||
            !industryType ||
            !companyType ||
            !CompanyDescription) {
            setLoading(false);
            return toast.error('Please fill all the mandatory fields');
        }
        if (companyWebsite && !isValidUrl(companyWebsite)) {
            return toast.error('Invalid Company Website');
        }
        if (twitter && !isValidUrl(twitter)) {
            return toast.error('Invalid Twitter URL');
        }
        if (linkedIn && !isValidUrl(linkedIn)) {
            return toast.error('Invalid LinkedIn URL');
        }
        const sanitizedAboutCompany = DOMPurify.sanitize(CompanyDescription);

        const profileData = {
            companyName,
            Designation,
            numberOfEmployees,
            HeadQuarters,
            industryType,
            companyType,
            companyWebsite,
            CompanyDescription: sanitizedAboutCompany,
            CompanysTagline,
            twitter,
            linkedIn,
            // company_logo: companyLogo,
            created_by: localuserId
        }

        console.log("This is ProfileData");
        console.log(profileData);

        const response = await dispatch(setRecProfileAction(profileData))
        if (response.success) {
            toast.success(response.message)
            dispatch(getRecProfileAction(localuserId));
            setLoading(false);
            navigate('/recruiter');
            // onFormSubmit(); // Redirect to RecruiterFinalDashboard
        } else {
            toast.error(response.message)
            setLoading(false);
        }
    }


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
                <div className='container'
                    style={{
                        height: 'auto',
                        borderRadius: '10px',
                        // padding: '10vw',
                    }}
                >
                    <ToastContainer />

                    <div className='alert alert-primary mt-2 text-center'> Company Information </div>

                    <form onSubmit={handleProfileSubmit}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                            }
                        }}
                    >
                        <div className="form-row mt-3">
                            <div className="form-group col-md-6">
                                <label htmlFor="companyName" className='text-dark'> Company Name  <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className='form-control'
                                    placeholder='Enter Company Name'
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Designation" className='text-dark'> Designation <span className='text-danger'>*</span> </label>
                                <input
                                    type="text"
                                    onChange={(e) => setDesignation(e.target.value)}
                                    className='form-control'
                                    placeholder='Enter Designation' />
                            </div>
                        </div>

                        <div className='form-row mt-3'>
                            <div className="form-group col-md-6">
                                <label htmlFor="NoOfEmployees"> No of Employees </label>
                                <select
                                    className='form-control'
                                    onChange={(e) => setNumberOfEmployees(e.target.value)}
                                >
                                    <option value=""> Select No of Employees </option>
                                    <option value="1-10"> 1-10 </option>
                                    <option value="11-50"> 11-50 </option>
                                    <option value="51-200"> 51-200 </option>
                                    <option value="201-500">201-500</option>
                                    <option value="501-1000">501-1000</option>
                                    <option value="1000-5000">1000-5000 </option>
                                    <option value="5000+">5000+ </option>
                                </select>
                            </div>
                            {/* Country API for HeadQuarters */}
                            <div className="form-group col-md-6">
                                <label htmlFor="HeadQuarters"> HeadQuarters <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
                                    onChange={(e) => setHeadQuarters(e.target.value)}
                                    className='form-control'
                                    placeholder='Enter HeadQuarters'
                                />
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="industryType"> Industry Type <span className='text-danger'>*</span> </label>
                                <select
                                    className='form-control'
                                    onChange={(e) => setIndustryType(e.target.value)}
                                >
                                    {industryTypes.map((type, index) => (
                                        type === 'Select Industry Type' ?
                                            <>
                                                <option key={index} value="" > Select Industry Type </option>
                                            </>
                                            :
                                            <>
                                                <option key={index} value={type}>
                                                    {type}
                                                </option>
                                            </>
                                    ))}
                                </select>
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor="companyType"> Company Type <span className='text-danger'>*</span> </label>
                                <select
                                    className='form-control'
                                    onChange={(e) => setCompanyType(e.target.value)}
                                >
                                    <option value=""> Select Company Type </option>
                                    <option value="Private"> Private </option>
                                    <option value="Public"> Public </option>
                                    <option value="Government"> Government </option>
                                    <option value="NGO"> NGO </option>
                                    <option value="Other"> Other </option>
                                </select>
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="companyWebsite"> Company Website </label>
                                <input
                                    type="url"
                                    onChange={(e) => setCompanyWebsite(e.target.value)}
                                    className='form-control'
                                    placeholder='www.yourcompanyname.com'
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor="CompanyTagline"> Company Tagline </label>
                                <input
                                    type="text"
                                    onChange={(e) => setCompanysTagline(e.target.value)}
                                    className='form-control'
                                    placeholder='Enter Company Tagline' />
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="twitter"> X (Formerly Twitter) </label>
                                <input
                                    type="url"
                                    onChange={(e) => setTwitter(e.target.value)}
                                    className='form-control'
                                    placeholder='https://twitter.com/yourusername' />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor="linkedIn"> LinkedIn </label>
                                <input
                                    type="url"
                                    onChange={(e) => setLinkedIn(e.target.value)}
                                    className='form-control'
                                    placeholder='https://www.linkedin.com/yourusername'
                                />
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-12'>
                                <label htmlFor="companyDescription"> About Company <span className='text-danger'>*</span></label>
                                {/* <ReactQuill
                                    theme="snow"
                                    modules={modules}
                                    onChange={(e) => setCompanyDescription(e)}
                                    // formats={formats}
                                    placeholder='Write something about your company'
                                /> */}
                                <textarea
                                    className='form-control'
                                    rows={5}
                                    cols={10}
                                    onChange={(e) => setCompanyDescription(e.target.value)}
                                    placeholder='Write something about your company'
                                />
                            </div>
                            {/* <div className='form-group col-md-6'>
                                <label htmlFor="companyLogo"> Company Logo </label>
                                <input
                                    type="file"
                                    className='form-control'
                                    onChange={(e) => postCompanyLogo(e.target.files[0])}
                                />
                                <ImageCropper />
                            </div> */}
                        </div>
                        <button className='btn btn-dark w-100 mt-2 mb-2'>
                            {loading ? <>
                                <div className='d-flex '>
                                    <PuffLoader
                                        size={25}
                                        color="#ffffff"
                                    /> <span className='pl-2'> Loading ... </span>
                                </div>
                            </> : 'Save Details'}
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default RecruiterProfile
