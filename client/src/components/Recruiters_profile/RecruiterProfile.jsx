import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// Purify About Company
import DOMPurify from 'dompurify';
import PuffLoader from "react-spinners/PuffLoader";
// ToastContainer
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Loader

// import ImageCropper from './ImageCropper';

import { useNavigate } from 'react-router-dom';
import { getRecProfileAction, setRecProfileAction } from '../../redux/actions/recProfile';


const RecruiterProfile = () => {

    const industryTypes = [
        "Select Industry Type",
        "Hotel",
        "Turismo",
        "Recursos Humanos",
        "Marketing",
        "Dirección",
        "Empresarial"
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
        if (currentRecProfile) {
            navigate('/recruiter');
        } else {
            setTimeout(() => {
                setLoadingPage(false);
            }, 5000);
        }
    }, [currentRecProfile])


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
        }
        if (CompanyDescription.length > 3000) {
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
            created_by: localuserId
        }


        dispatch(setRecProfileAction(profileData)).then((response => {
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
        }))
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

                    <div
                        className='alert mt-2 text-center'
                        style={{ backgroundColor: '#E4B49D', color: 'white' }}
                    >
                        {/* Company Information */}
                        Información Empresarial
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
                                    {/* Company Name */}
                                    Empresa
                                    <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
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
                                    <span className='text-danger'>*</span> </label>
                                <input
                                    type="text"
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
                                    onChange={(e) => setCompanyWebsite(e.target.value)}
                                    className='form-control'
                                    // placeholder='www.yourcompanyname.com'
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
                                    onChange={(e) => setCompanysTagline(e.target.value)}
                                    className='form-control'
                                    // placeholder='Enter Company Tagline' 
                                    placeholder='Lema de la Empresa'
                                />
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="twitter"> X (Antiguo Twitter)</label>
                                <input
                                    type="url"
                                    onChange={(e) => setTwitter(e.target.value)}
                                    className='form-control'
                                    placeholder='https://twitter.com/tuusuario' />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor="linkedIn"> LinkedIn </label>
                                <input
                                    type="url"
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
                                    <span className='text-danger'>*</span>
                                </label>
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
                                    // placeholder='Write something about your company'
                                    placeholder='Escribe algo sobre tu empresa'
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
                        <button
                            className='btn w-100 mt-2 mb-2'
                            style={{ backgroundColor: '#E4B49D', color: 'white' }}
                        >
                            {loading ? <>
                                <div className='d-flex justify-content-center '>
                                    <PuffLoader
                                        size={25}
                                        color="#ffffff"
                                    /> <span className='pl-2'>
                                        {/* Loading ... */}
                                        Cargando ...
                                    </span>
                                </div>
                            </> :
                                // 'Save Details'
                                'Guardar Detalles'
                            }
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default RecruiterProfile
