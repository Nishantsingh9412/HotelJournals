import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import PuffLoader from "react-spinners/PuffLoader";
import ReactQuill from 'react-quill';

import { fetchSingleUser } from '../../../redux/actions/users.js';
import { getRecProfileAction, setRecProfileAction, updateRecProfileAction } from '../../../redux/actions/recProfile.js';
import Profile from '../../Recruiters_profile/ImageCropperForRecProfile/Profile.jsx';
import SideBar from './Sidebar/SideBar.jsx';
import ViewProfile from './ViewProfile.jsx';

const UpdateRecProfileForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [oldProfilePic, setOldProfilePic] = useState('');
    const [editProfile, setEditProfile] = useState(false);

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

    const localUser = JSON.parse(localStorage.getItem('Profile'));
    const localUserId = localUser?.result?._id;
    console.log(localUserId);

    const recruiterProfile = useSelector((state) => state.getRecProfileReducer);
    const singleRecruiterData = recruiterProfile?.data?.result[0];



    const industryTypes = [
        "Select Industry Type",
        "Hotel",
        "Turismo",
        "Recursos Humanos",
        "Marketing",
        "Dirección",
        "Empresarial"
    ];

    useEffect(() => {
        dispatch(fetchSingleUser(localUserId));
    }, [dispatch])

    useEffect(() => {
        if (localUserId) {
            dispatch(getRecProfileAction(localUserId))
        }
    }, [dispatch])


    useEffect(() => {
        if (singleRecruiterData) {
            setOldProfilePic(singleRecruiterData?.company_logo);
            setLoading(false);
        }
    }, [singleRecruiterData])

    useEffect(() => {
        // for logout redirect to login page
        if (!localStorage.getItem('Profile')) {
            navigate('/login');
        }
    }, [])

    useEffect(() => {
        if (singleRecruiterData) {
            setCompanyName(singleRecruiterData?.companyName);
            setDesignation(singleRecruiterData?.Designation);
            setNumberOfEmployees(singleRecruiterData?.numberOfEmployees);
            setHeadQuarters(singleRecruiterData?.HeadQuarters);
            setIndustryType(singleRecruiterData?.industryType);
            setCompanyType(singleRecruiterData?.companyType);
            setCompanyWebsite(singleRecruiterData?.companyWebsite);
            setCompanysTagline(singleRecruiterData?.CompanysTagline);
            setTwitter(singleRecruiterData?.twitter);
            setLinkedIn(singleRecruiterData?.linkedIn);
            setCompanyDescription(singleRecruiterData?.CompanyDescription);
        }
    }, [singleRecruiterData])

    const handleProfileClick = () => {
        // setLoading(true);
        // dispatch(getRecProfileAction(localUserId)).then((res) => {
        //     if (res.success) {
        //         setLoading(false);
        //     }
        // })
    }


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
            setLoading(false);
            return toast.error('Invalid Company Website');
        }
        if (twitter && !isValidUrl(twitter)) {
            setLoading(false);
            return toast.error('Invalid Twitter URL');
        }
        if (linkedIn && !isValidUrl(linkedIn)) {
            setLoading(false);
            return toast.error('Invalid LinkedIn URL');
        } if (CompanyDescription.length < 50) {
            setLoading(false);
            return toast.error('Company Description should be atleast 50 characters long');
        } if (CompanyDescription.length > 3000) {
            setLoading(false);
            return toast.error('Company Description should not exceed 3000 characters');
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
            created_by: localUserId
        }

        dispatch(updateRecProfileAction(localUserId, profileData)).then((response) => {
            if (response.success) {
                dispatch(getRecProfileAction(localUserId)).then((res) => {
                    if (res.success) {
                        setLoading(false);
                        toast.success(response.message);
                    }
                })
            } else {
                toast.error(response.message)
                setLoading(false);
            }
        })

    }

    console.log(singleRecruiterData);
    console.log(100, singleRecruiterData)
    console.log(101, oldProfilePic)

    return (
        // <div>
        //     <div>
        //         <div className="container rounded bg-white mt-5 mb-5">
        //             <div className="row">
        //                 <div className="col-md-3 border-right">
        //                     <div
        //                         className="d-flex flex-column align-items-center text-center p-3 py-5"
        //                         onClick={handleProfileClick}
        //                     >
        //                         {/* <img
        //                     className="rounded-circle mt-5"
        //                     width="150px"
        //                     src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
        //                     alt="Profile"
        //                   />
        //               <span className="font-weight-bold">Edogaru</span> */}
        //                         {/* <span className="text-black-50">edogaru@mail.com.my</span> */}
        //                         <Profile
        //                             id={localUserId}
        //                             oldImage={oldProfilePic}
        //                         />
        //                         <span> </span>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-5 border-right">
        //                     <div className="p-3 py-5">
        //                         <div className="d-flex justify-content-between align-items-center mb-3">
        //                             <h4 className="text-right">Profile Settings</h4>
        //                         </div>
        //                         <div className="row mt-2">
        //                             <div className="col-md-6">
        //                                 <label className="labels">Name</label>
        //                                 <input type="text" className="form-control" placeholder="first name" />
        //                             </div>
        //                             <div className="col-md-6">
        //                                 <label className="labels">Surname</label>
        //                                 <input type="text" className="form-control" placeholder="surname" />
        //                             </div>
        //                         </div>
        //                         <div className="row mt-2">
        //                             <div className="col-md-6">
        //                                 <label className="labels">Name</label>
        //                                 <input type="text" className="form-control" placeholder="first name" />
        //                             </div>
        //                             <div className="col-md-6">
        //                                 <label className="labels">Surname</label>
        //                                 <input type="text" className="form-control" placeholder="surname" />
        //                             </div>
        //                         </div>
        //                         {/* Other input fields */}
        //                         <div className="mt-5 text-center">
        //                             <button className="btn btn-primary profile-button" type="button">
        //                                 Save Profile
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-4">
        //                     <div className="p-3 py-5">
        //                         <div className="d-flex justify-content-between align-items-center experience">
        //                             <span>Edit Experience</span>
        //                             <span className="border px-3 p-1 add-experience">
        //                                 <i className="fa fa-plus"></i>&nbsp;Experience
        //                             </span>
        //                         </div>
        //                         <br />
        //                         <div className="col-md-12">
        //                             <label className="labels">Experience in Designing</label>
        //                             <input type="text" className="form-control" placeholder="experience" />
        //                         </div>
        //                         <br />
        //                         <div className="col-md-12">
        //                             <label className="labels">Additional Details</label>
        //                             <input type="text" className="form-control" placeholder="additional details" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <>

            {loading ? (

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <PuffLoader
                        color="red"
                        size={70}
                    />
                </div>

            ) : (
                <div className='container mt-0 pt-0'
                    style={{
                        height: 'auto',
                        borderRadius: '10px',
                        padding: '10vw',
                    }}
                >
                    <ToastContainer />
                    <div className='mt-2' onClick={handleProfileClick}>
                        <Profile
                            id={localUserId}
                            oldImage={oldProfilePic}
                        />
                    </div>
                    <form onSubmit={handleProfileSubmit}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                            }
                        }}
                    >
                        <div className="form-row mt-3">
                            <div className="form-group col-md-6">
                                <label htmlFor="companyName" className='text-dark'>
                                    {/* Company Name  */}
                                    Empresa
                                    <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className='form-control'
                                    // placeholder='Enter Company Name'
                                    placeholder='Nombre de la Empresa'
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="Designation" className='text-dark'>
                                    {/* Designation */}
                                    Puesto
                                    <span className='text-danger'>*</span>
                                </label>
                                <input
                                    type="text"
                                    value={Designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                    className='form-control'
                                    // placeholder='Enter Designation'
                                    placeholder='Puesto'
                                />
                            </div>
                        </div>

                        <div className='form-row mt-3'>
                            <div className="form-group col-md-6">
                                <label htmlFor="NoOfEmployees">
                                    {/* No of Employees */}
                                    Selecciona Nº de Empleados
                                </label>
                                <select
                                    className='form-control'
                                    value={numberOfEmployees}
                                    onChange={(e) => setNumberOfEmployees(e.target.value)}
                                >
                                    <option value="">
                                        {/* Select No of Employees  */}
                                        Nº Empleados
                                    </option>
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
                                <label htmlFor="HeadQuarters">
                                    {/* HeadQuarters */}
                                    Sede Central

                                    <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
                                    value={HeadQuarters}
                                    onChange={(e) => setHeadQuarters(e.target.value)}
                                    className='form-control'
                                    // placeholder='Enter HeadQuarters'
                                    placeholder='Sede Central'
                                />
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="industryType">
                                    {/* Industry Type */}
                                    Tipo de Industria
                                    <span className='text-danger'>*</span> </label>
                                <select
                                    className='form-control'
                                    value={industryType}
                                    onChange={(e) => setIndustryType(e.target.value)}
                                >
                                    {industryTypes.map((type, index) => (
                                        type === 'Select Industry Type' ?
                                            <>
                                                <option key={index} value="" >
                                                    {/* Select Industry Type */}
                                                    Seleccionar Tipo de Industria
                                                </option>
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
                                <label htmlFor="companyType">
                                    {/* Company Type */}
                                    Tipo de Empresa

                                    <span className='text-danger'>*</span> </label>
                                <select
                                    className='form-control'
                                    value={companyType}
                                    onChange={(e) => setCompanyType(e.target.value)}
                                >
                                    <option value="">
                                        {/* Select Company Type */}
                                        Tipo de Empresa
                                    </option>
                                    <option value="Private">
                                        {/* Private */}
                                        Privado
                                    </option>
                                    <option value="Public">
                                        {/* Public */}
                                        Público
                                    </option>
                                    <option value="Government">
                                        {/* Government */}
                                        Gobierno
                                    </option>
                                    <option value="NGO">
                                        {/* NGO */}
                                        ONG
                                    </option>
                                    <option value="Other">
                                        {/* Other */}
                                        Otro
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="companyWebsite">
                                    {/* Company Website */}
                                    Website Corporativa
                                </label>
                                <input
                                    type="url"
                                    value={companyWebsite}
                                    onChange={(e) => setCompanyWebsite(e.target.value)}
                                    className='form-control'
                                    // placeholder='yourcompanywebsite.com'
                                    placeholder='www.nombredetucompañia.com'
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor="CompanyTagline">
                                    {/* Company Tagline */}
                                    Lema de la Empresa
                                </label>
                                <input
                                    type="text"
                                    value={CompanysTagline}
                                    onChange={(e) => setCompanysTagline(e.target.value)}
                                    className='form-control'
                                    // placeholder='Enter Company Tagline' 
                                    placeholder='Lema de la Empresa'
                                />
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="twitter"> X (Antiguo Twitter)  </label>
                                <input
                                    type="url"
                                    value={twitter}
                                    onChange={(e) => setTwitter(e.target.value)}
                                    className='form-control'
                                    placeholder='https://twitter.com/tuusuario' />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor="linkedIn"> LinkedIn </label>
                                <input
                                    type="url"
                                    value={linkedIn}
                                    onChange={(e) => setLinkedIn(e.target.value)}
                                    className='form-control'
                                    placeholder='https://www.linkedin.com/tuusuario'
                                />
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-12'>
                                <label htmlFor="companyDescription">
                                    {/* About Company */}
                                    Sobre la Compañía
                                    <span className='text-danger'>*</span></label>
                                <textarea
                                    className='form-control'
                                    value={CompanyDescription}
                                    rows={5}
                                    cols={10}
                                    onChange={(e) => setCompanyDescription(e.target.value)}
                                    // placeholder='Write something about your company'
                                    placeholder='Escribe algo sobre tu empresa'
                                />
                                {/* <ReactQuill
                                theme="snow"
                                modules={modules}
                                onChange={(e) => setCompanyDescription(e)}
                                // formats={formats}
                                placeholder='Write something about your company'
                            /> */}
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
                        <button
                            className='btn w-100 mt-2 mb-2'
                            style={{ background: '#E4B49D', color: 'white' }}
                        >
                            {loading ? <>
                                <div className='d-flex '>
                                    <PuffLoader
                                        size={25}
                                        color="#ffffff"
                                    /> <span className='pl-2'>
                                        {/* Loading ... */}
                                        Cargando
                                    </span>
                                </div>
                            </> :
                                // 'Save Details'
                                'Guardar detalles '
                            }
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default UpdateRecProfileForm
