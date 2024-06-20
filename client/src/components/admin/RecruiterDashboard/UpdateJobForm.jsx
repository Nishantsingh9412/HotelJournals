import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import DOMPurify from 'dompurify';
import Select from 'react-select'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import 'react-toastify/dist/ReactToastify.css';

import { UpdateAJobAction, getJobSingleAction } from '../../../redux/actions/jobsAdmin.js';
import languages from '../../admin/AdminCourses/languages.js';
import { useNavigate, useParams } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader.js';


const UpdateJobForm = () => {
    const { id } = useParams();
    console.log(id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [jobDecription, setJobDescription] = useState('');

    const [showJobLink, setShowJobLink] = useState(false);
    const [loading, setLoading] = useState(true);
    const [disableJoiningDate, setDisableJoiningDate] = useState(false);

    const [jobTitle, setJobTitle] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobLocation, setJobLocation] = useState([]);
    const [mandatorySkills, setMandatorySkills] = useState([]);
    const [optionalSkills, setOptionalSkills] = useState([]);
    const [joiningDate, setJoiningDate] = useState('');
    const [isImmediate, setIsImmediate] = useState(false);
    const [minWorkExp, setMinWorkExp] = useState(0);
    const [maxWorkExp, setMaxWorkExp] = useState(0);
    const [minSalary, setMinSalary] = useState(0);
    const [salaryCurrency, setSalaryCurrency] = useState('');
    const [maxSalary, setMaxSalary] = useState(0);
    const [noOfOpenings, setNoOfOpenings] = useState(0);
    const [extraBenifitsVal, setExtraBenifitsVal] = useState([]);
    const [isExternalLink, setIsExternalLink] = useState(false);
    const [jobLink, setJobLink] = useState('');

    const getJobsData = useSelector((state) => state.getSingleJobReducer);
    const singleJob = getJobsData?.result;
    // console.log("Hello Guuyzzzzzzzzz");
    console.log(singleJob);


    // For countries states and cities 

    const [countriesAll, setCountriesAll] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const [statesAll, setStatesAll] = useState([]);
    const [statesLoading, setStatesLoading] = useState(false);
    const [selectedState, setSelectedState] = useState('');

    const [citiesAll, setCitiesAll] = useState([]);
    const [citiesLoading, setCitiesLoading] = useState(false);

    const [selectedCity, setSelectedCity] = useState('');


    const isValidUrl = (url) => {
        try {
            new URL(url)
            return true;
        } catch (error) {
            return false;
        }
    }




    // const loadCountries = async () => {

    //     const response = await axios.get('https://api.countrystatecity.in/v1/countries', {
    //         headers: {
    //             'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
    //         }
    //     });
    //     console.log('countres')
    //     console.log(response);
    //     const countriesData = response?.data?.map((country) =>
    //     ({
    //         value: country.name,
    //         label: country.name,
    //         iso2: country.iso2
    //     }));

    //     setCountriesAll(countriesData);
    // }

    // const loadStates = async () => {
    //     setStatesLoading(true);
    //     const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, {
    //         headers: {
    //             'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
    //         }
    //     });
    //     if (response) {
    //         const statesData = response?.data?.map((state) =>
    //         ({
    //             value: state.name,
    //             label: state.name,
    //             iso2: state.iso2
    //         }));
    //         setStatesAll(statesData);
    //         setStatesLoading(false);
    //     }
    // }

    // const loadCities = async () => {
    //     setCitiesLoading(true);
    //     const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`, {
    //         headers: {
    //             'X-CSCAPI-KEY': process.env.REACT_APP_CSC_API_KEY
    //         }
    //     });

    //     if (response) {
    //         const citiesData = response.data.map((city) =>
    //         ({
    //             value: city.name,
    //             label: city.name
    //         }));

    //         setCitiesAll(citiesData);
    //         setCitiesLoading(false);
    //     }
    // }


    // useEffect(() => {
    //     if (selectedCountry) {
    //         loadStates();
    //     }
    // }, [selectedCountry])

    // useEffect(() => {
    //     if (selectedState) {
    //         loadCities();
    //     }
    // }, [selectedState])

    // useEffect(() => {
    //     loadCountries();
    //     // dispatch(GetJobs())
    // }, [dispatch]);

    // const getCities = async () => {
    //   const response = await axios.get('https://countriesnow.space/api/v0.1/countries/cities/q?country=germany');
    //   setCitiesData(response?.data?.data);
    // };

    // useEffect(() => {
    //   getCities();
    // }, [])

    // useEffect(() => {
    //     if (jobType === 'Remote') {
    //         setJobLocation('Remote');
    //     }
    // }, [jobType])

    useEffect(() => {
        if (jobType === 'Remoto') {
            setJobLocation('Remoto');
        }
    }, [jobType])

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],        // toggled buttons
            [{ 'list': 'ordered' }, { 'list': 'bullet' }] // dropdown with defaults from theme
        ]
    };

    // const cities = [
    //   { value: 'Delhi', label: 'Delhi' },
    //   { value: 'Kanpur', label: 'Kanpur' },
    //   { value: 'Gurugram', label: 'Gurugram' },
    //   { value: 'Noida', label: 'Noida' },
    // ]

    // const cities = citiesData.map(city => ({
    //   value: city, label: city
    // }));



    const skills = [
        { value: 'Administración de Suministros', label: 'Administración de Suministros' },
        { value: 'Administrativas', label: 'Administrativas' },
        { value: 'Árabe', label: 'Árabe' },
        { value: 'Alemán', label: 'Alemán' },
        { value: 'Análisis de Datos', label: 'Análisis de Datos' },
        { value: 'Análisis Financiero', label: 'Análisis Financiero' },
        { value: 'Atención al detalle', label: 'Atención al detalle' },
        { value: 'Bartending', label: 'Bartending' },
        { value: 'Buenas Relaciones con Empleados', label: 'Buenas Relaciones con Empleados' },
        { value: 'Catalán', label: 'Catalán' },
        { value: 'Checo', label: 'Checo' },
        { value: 'Cleaning Techniques', label: 'Cleaning Techniques' },
        { value: 'Client Relationship Management', label: 'Client Relationship Management' },
        { value: 'Communication Skills', label: 'Communication Skills' },
        { value: 'Conocimiento de Contratación', label: 'Conocimiento de Contratación' },
        { value: 'Conocimiento de Destinos', label: 'Conocimiento de Destinos' },
        { value: 'Conocimiento de Inventario', label: 'Conocimiento de Inventario' },
        { value: 'Conocimiento de Menú', label: 'Conocimiento de Menú' },
        { value: 'Conocimiento Offices', label: 'Conocimiento Offices' },
        { value: 'Conocimiento PMS', label: 'Conocimiento PMS' },
        { value: 'Contract Management', label: 'Contract Management' },
        { value: 'Creación de Menú', label: 'Creación de Menú' },
        { value: 'Customer Service', label: 'Customer Service' },
        { value: 'Data Analysis', label: 'Data Analysis' },
        { value: 'Decision-Making', label: 'Decision-Making' },
        { value: 'Dirección de Pisos', label: 'Dirección de Pisos' },
        { value: 'Dirección de Reservas', label: 'Dirección de Reservas' },
        { value: 'Documentos Financieros', label: 'Documentos Financieros' },
        { value: 'Estrategía de Marketing', label: 'Estrategía de Marketing' },
        { value: 'Estudio Curso Profesional', label: 'Estudio Curso Profesional' },
        { value: 'Estudio de Máster', label: 'Estudio de Máster' },
        { value: 'Español', label: 'Español' },
        { value: 'Estudio Universitario', label: 'Estudio Universitario' },
        { value: 'Event Planning', label: 'Event Planning' },
        { value: 'Financial Analysis', label: 'Financial Analysis' },
        { value: 'Financial Reporting', label: 'Financial Reporting' },
        { value: 'Formación y Desarrollo', label: 'Formación y Desarrollo' },
        { value: 'FP', label: 'FP' },
        { value: 'Francés', label: 'Francés' },
        { value: 'Front Office Operations', label: 'Front Office Operations' },
        { value: 'Gestión de Rendimiento', label: 'Gestión de Rendimiento' },
        { value: 'Habilidades Comunicativas', label: 'Habilidades Comunicativas' },
        { value: 'Habilidades Culinarias', label: 'Habilidades Culinarias' },
        { value: 'Habilidades de Escritura', label: 'Habilidades de Escritura' },
        { value: 'Habilidades para Negociar', label: 'Habilidades para Negociar' },
        { value: 'Habilidades Técnicas', label: 'Habilidades Técnicas' },
        { value: 'HR Policies and Procedures', label: 'HR Policies and Procedures' },
        { value: 'Inglés', label: 'Inglés' },
        { value: 'Investigación de mercados', label: 'Investigación de mercados' },
        { value: 'Italiano', label: 'Italiano' },
        { value: 'Japonés', label: 'Japonés' },
        { value: 'Liderazgo', label: 'Liderazgo' },
        { value: 'Mandarín', label: 'Mandarín' },
        { value: 'Manejo del Tiempo', label: 'Manejo del Tiempo' },
        { value: 'Market Research', label: 'Market Research' },
        { value: 'Marketing Strategy', label: 'Marketing Strategy' },
        { value: 'Negotiation Skills', label: 'Negotiation Skills' },
        { value: 'Operaciones de Front Office', label: 'Operaciones de Front Office' },
        { value: 'Operaciones de Restauración', label: 'Operaciones de Restauración' },
        { value: 'Order Taking', label: 'Order Taking' },
        { value: 'Organización', label: 'Organización' },
        { value: 'Otro Idioma', label: 'Otro Idioma' },
        { value: 'Performance Management', label: 'Performance Management' },
        { value: 'Plan Estratégico', label: 'Plan Estratégico' },
        { value: 'Plan de Eventos', label: 'Plan de Eventos' },
        { value: 'Planificación de Viajes', label: 'Planificación de Viajes' },
        { value: 'Portugués', label: 'Portugués' },
        { value: 'Presupuestar', label: 'Presupuestar' },
        { value: 'Problem-Solving Skills', label: 'Problem-Solving Skills' },
        { value: 'Procedimientos de Recursos Humanos', label: 'Procedimientos de Recursos Humanos' },
        { value: 'Recibir Comandas', label: 'Recibir Comandas' },
        { value: 'Recrutamiento', label: 'Recrutamiento' },
        { value: 'Redes Sociales', label: 'Redes Sociales' },
        { value: 'Relación con Clientes', label: 'Relación con Clientes' },
        { value: 'Resolución de Problemas', label: 'Resolución de Problemas' },
        { value: 'Reclutamiento', label: 'Reclutamiento' },
        { value: 'Ruso', label: 'Ruso' },
        { value: 'Sueco', label: 'Sueco' },
        { value: 'Supplier Management', label: 'Supplier Management' },
        { value: 'Técnicas de Limpieza', label: 'Técnicas de Limpieza' },
        { value: 'Técnicas de Ventas', label: 'Técnicas de Ventas' },
        { value: 'Time Management', label: 'Time Management' },
        { value: 'Toma de Decisiones', label: 'Toma de Decisiones' },
        { value: 'Tour Planning', label: 'Tour Planning' },
        { value: 'Training and Development', label: 'Training and Development' },
        { value: 'Finlandez', label: 'Finlandez ' },
        { value: 'Upselling', label: 'Upselling' },
        { value: 'Ucraniano', label: 'Ucraniano' },
        { value: 'Vasco', label: 'Vasco' },
    ];

    useEffect(() => {
        if (isImmediate) {
            const today = new Date().toISOString().split('T')[0];
            setJoiningDate(today);
        }
    }, [isImmediate]);




    useEffect(() => {
        dispatch(getJobSingleAction(id));
    }, [dispatch, id])


    useEffect(() => {
        if (singleJob) {
            setLoading(false);
            setJobTitle(singleJob?.jobTitle);
            setJobCategory(singleJob?.jobCategory);
            setJobType(singleJob?.jobType);
            setJobLocation(singleJob?.jobLocation);
            setMandatorySkills(singleJob?.mandatorySkills);
            setOptionalSkills(singleJob?.optionalSkills);
            setJoiningDate(singleJob?.joiningDate);
            setIsImmediate(singleJob?.isImmediate);
            setMinWorkExp(singleJob?.workExperienceMin);
            setMaxWorkExp(singleJob?.workExperienceMax);
            setMinSalary(singleJob?.salaryStart);
            setMaxSalary(singleJob?.salaryEnd);
            setSalaryCurrency(singleJob?.salarySpecification);
            setNoOfOpenings(singleJob?.no_of_openings);
            setExtraBenifitsVal(singleJob?.extraBenifits);
            setJobDescription(singleJob?.jobDescription);
            setIsExternalLink(singleJob?.isExternal);
            setJobLink(singleJob?.jobLink);
        }
    }, [singleJob])


    const mappedMandatorySkills = mandatorySkills.map((skill) => ({ value: skill, label: skill }));
    const mappedOptionalSkills = optionalSkills.map((skill) => ({ value: skill, label: skill }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (
                !jobTitle ||
                !jobCategory ||
                !jobType ||
                jobLocation.length === 0 ||
                mandatorySkills.length === 0 ||
                (isImmediate === false && !joiningDate) ||
                !minWorkExp ||
                !maxWorkExp ||
                !minSalary ||
                !maxSalary ||
                !salaryCurrency ||
                !noOfOpenings ||
                !jobDecription
            ) {
                return toast.error('Please fill all the required fields');
            }
            if (jobType === 'InOffice' || jobType === 'Hybrid') {
                if (jobLocation.length === 0 || jobLocation === 'Remote') {
                    return toast.error('Please select Atleast one Job Location');
                }
            }
            if (jobTitle.length < 5) {
                return toast.error('Job Title should be atleast 5 characters long');
            }
            if (minWorkExp > 20 || minWorkExp < 0) {
                return toast.error('Minimum Work Experience should be less than 20 and greater than 0');
            } if (maxWorkExp > 20 || maxWorkExp < 0) {
                return toast.error('Maximum Work Experience should be less than 20 and greater than 0');
            }
            if (minWorkExp > maxWorkExp) {
                return toast.error('Minimum Work Experience should be less than Maximum Work Experience');
            } if (minSalary < 0 || maxSalary < 0) {
                return toast.error('Salary should be greater than 0');
            }
            if (minSalary > maxSalary) {
                return toast.error('Minimum Salary should be less than Maximum Salaryyyyyyy');
            } if (noOfOpenings < 0) {
                return toast.error('No of Openings should be greater than 0');
            } if (noOfOpenings > 1000) {
                return toast.error('No of Openings should be less than 1000');
            } if (!joiningDate && !isImmediate) {
                return toast.error('Please select Joining Date');
            } if (jobDecription.length < 50) {
                return toast.error('Job Description should be atleast 50 characters long');
            } if (!isValidUrl(jobLink) && isExternalLink) {
                return toast.error('Please enter valid URL');
            }
            if (!joiningDate) {
                return toast.error('Please select Joining Date');
            }

            const sanitizedJD = DOMPurify.sanitize(jobDecription);

            const jobsData = {
                job_title: jobTitle,
                job_category: jobCategory,
                job_type: jobType,
                job_location: jobLocation,
                mandatory_skills: mandatorySkills,
                optional_skills: optionalSkills,
                joining_date: joiningDate,
                is_immediate: isImmediate,
                work_experience_min: minWorkExp,
                work_experience_max: maxWorkExp,
                salary_specification: salaryCurrency,
                salary_start: minSalary,
                salary_end: maxSalary,
                no_of_openings: noOfOpenings,
                extra_benifits: extraBenifitsVal,
                job_description: sanitizedJD,
                isExternal: isExternalLink,
                job_link: jobLink,
            }

            console.log(jobsData)

            if (jobsData) {
                const response = await dispatch(UpdateAJobAction(id, jobsData));
                if (response.success) {
                    toast.success('Job Updated Successfully');
                    navigate('/recruiter/manageJobs');
                } else {
                    console.log(response)
                    toast.error(response.message); // err.response.data.message
                }
            }
        } catch (error) {
            console.log(`this is from console.log ${error}`);
            // toast.error(`Job Posting Failed: ${error}`)
        }
    }




    return (
        <div className='mt-2 p-5'>
            <ToastContainer />

            {
                loading ?
                    (<div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}
                    >
                        <PuffLoader
                            color='#f44336'
                            size={70}
                        />
                    </div>) :

                    <>
                        <form onSubmit={handleSubmit}>
                            <div className='form-row '>

                                <div className='col-md-4'>
                                    <label htmlFor="job_title">
                                        {/* Job Title */}
                                        Puesto
                                        <small className='text-danger'> * </small>
                                    </label>
                                    <select
                                        className='form-control'
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)} >
                                        {/* <optgroup label="English">
                      <option value="F & B Kitchen">F & B Kitchen</option>
                      <option value="F & B Services">F & B Services</option>
                      <option value="Finance & Marketing">Finance & Marketing</option>
                      <option value="Guest Relations">Guest Relations</option>
                      <option value="Host/Hostess">Host/Hostess</option>
                      <option value="Housekeeping">Housekeeping</option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Management">Management</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Other">Other</option>
                      <option value="Pastry">Pastry</option>
                      <option value="Porter">Porter</option>
                      <option value="Project Management">Project Management</option>
                      <option value="Public Relations">Public Relations</option>
                      <option value="Purchasing">Purchasing</option>
                      <option value="Reception">Reception</option>
                      <option value="Recreation & Leisure">Recreation & Leisure</option>
                      <option value="Reservations">Reservations</option>
                      <option value="Revenue Management">Revenue Management</option>
                      <option value="Room Division Management">Room Division Management</option>
                      <option value="Sales">Sales</option>
                      <option value="Secretary / Executive Assistant">Secretary / Executive Assistant</option>
                      <option value="Security">Security</option>
                      <option value="Sommelier">Sommelier</option>
                      <option value="Spa">Spa</option>
                      <option value="Sport and Fitness">Sport and Fitness</option>
                      <option value="Steward">Steward</option>
                      <option value="Travel Guide">Travel Guide</option>
                      <option value="Travel Tour Operator">Travel Tour Operator</option>
                      <option value="Account Management">Account Management</option>
                      <option value="Administration">Administration</option>
                      <option value="Bar">Bar</option>
                      <option value="Concierge">Concierge</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Content & Communication">Content & Communication</option>
                      <option value="Customer Services">Customer Services</option>
                      <option value="Data & Analytics">Data & Analytics</option>
                      <option value="Event">Event</option>
                      <option value="F & B Management">F & B Management</option>
                    </optgroup> */}
                                        {/* <optgroup label="Spanish"> */}
                                        <option value=""> Seleccionar ... </option>
                                        <option value="Administración">Administración</option>
                                        <option value="Adjunto/a Dirección">Adjunto/a Dirección</option>
                                        <option value="Agente de Viajes">Agente de Viajes</option>
                                        <option value="Animación">Animación</option>
                                        <option value="Asistente de Dirección">Asistente de Dirección</option>
                                        <option value="Asistente ejecutivo/a">Asistente ejecutivo/a</option>
                                        <option value="Azafata">Azafata</option>
                                        <option value="Bar">Bar</option>
                                        <option value="Botones">Botones</option>
                                        <option value="Compras">Compras</option>
                                        <option value="Concierge / Conserje">Concierge / Conserje</option>
                                        <option value="Consulting">Consulting</option>
                                        <option value="Contenido y Comunicación">Contenido y Comunicación</option>
                                        <option value="Datos y Análisis">Datos y Análisis</option>
                                        <option value="Deportes">Deportes</option>
                                        <option value="Departamento Legal">Departamento Legal</option>
                                        <option value="Dirección">Dirección</option>
                                        <option value="Eventos">Eventos</option>
                                        <option value="F&B Cocina">F&B Cocina</option>
                                        <option value="F&B Management">F&B Management</option>
                                        <option value="F&B Servicio">F&B Servicio</option>
                                        <option value="Finanzas y Marketing">Finanzas y Marketing</option>
                                        <option value="Gestión de Ingresos">Gestión de Ingresos</option>
                                        <option value="Guía Turístico">Guía Turístico</option>
                                        <option value="Guest Relations">Guest Relations</option>
                                        <option value="Housekeeping">Housekeeping</option>
                                        <option value="Host/ Hostess">Host/ Hostess</option>
                                        <option value="Jefe de cuentas">Jefe de cuentas</option>
                                        <option value="Lavandería">Lavandería</option>
                                        <option value="Mantenimiento">Mantenimiento</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Otros">Otros</option>
                                        <option value="Pastelería">Pastelería</option>
                                        <option value="Portero">Portero</option>
                                        <option value="Project Management">Project Management</option>
                                        <option value="Recursos Humanos">Recursos Humanos</option>
                                        <option value="Recepción">Recepción</option>
                                        <option value="Relaciones Públicas">Relaciones Públicas</option>
                                        <option value="Reservas">Reservas</option>
                                        <option value="Revenue Management">Revenue Management</option>
                                        <option value="Room Division Management">Room Division Management</option>
                                        <option value="Seguridad">Seguridad</option>
                                        <option value="Servicio al Cliente">Servicio al Cliente</option>
                                        <option value="Sommelier">Sommelier</option>
                                        <option value="Spa">Spa</option>
                                        <option value="Subdirección">Subdirección</option>
                                        <option value="Ventas">Ventas</option>
                                        {/* </optgroup> */}
                                    </select>
                                </div>
                                <div className='col-md-4'>
                                    <label htmlFor="company_name">
                                        {/* Job Category */}
                                        Tipo de Contrato
                                        <small className='text-danger'> * </small> </label>
                                    <select
                                        value={jobCategory}
                                        className='form-control'
                                        onChange={(e) => setJobCategory(e.target.value)}
                                    >
                                        {/* <option value="">Select</option>
                    <option value="Intern">Intern</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option> */}
                                        <option value="">  Seleccionar ...  </option>
                                        <option value="Prácticas">Prácticas</option>
                                        <option value="Jornada Completa">Jornada Completa</option>
                                        <option value="Media Jornada">Media Jornada</option>
                                        <option value="Contrato Fijo">Contrato Fijo</option>
                                    </select>
                                </div>

                                <div className='col-md-2'>
                                    <label htmlFor="jobType">
                                        {/* Job Type */}
                                        Tipo de empleo
                                        <small className='text-danger'> * </small> </label>
                                    <select
                                        className='form-control'
                                        value={jobType}
                                        onChange={(e) => setJobType(e.target.value)}
                                    >
                                        {/* <option value="">Select</option> */}
                                        {/* <option value="Remote"> Remote </option> */}
                                        {/* <option value="InOffice"> InOffice </option> */}
                                        {/* <option value="Hybrid"> Hybrid </option> */}
                                        <option value="">  Seleccionar ...  </option>
                                        <option value="Remoto">Remoto</option>
                                        <option value="Presencial">Presencial</option>
                                        <option value="Híbrido">Híbrido</option>
                                    </select>
                                </div>
                            </div>
                            {/* 
              <div className='form-row mt-4'>
                <div className="col-md-4">
                  <label htmlFor="country"> Country  <small className='text-danger'> * </small> </label>
                  <input type='text' className='form-control' placeholder='India' onChange={(e) => setCountry(e.target.value)} />
                </div>
              </div> */}

                            {/* Testing Starts */}
                            {/* {jobType === 'InOffice' || jobType === 'Hybrid' ?
                <>
                  <div className='form-row mt-3'>
                    <div className="col-md-4">
                      <label htmlFor="select countries">
                        Country
                      </label>
                      <Select
                        options={countriesAll?.map((country) => country)}
                        onChange={(e) => {
                          setSelectedCountry(e.iso2);
                          console.log('Selected Country : ', e.iso2);
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="select state">
                        State
                      </label>
                      <Select
                        options={statesAll?.map((state) => state)}
                        isDisabled={statesLoading}
                        isLoading={statesLoading}
                        onChange={(e) => {
                          setSelectedState(e.iso2);
                          console.log('Selected Country : ', e.iso2);
                        }}
                      />
                    </div>
                    <div className='col-md-4'>
                      <label htmlFor="select cities">
                        Cities
                      </label>
                      <Select
                        options={citiesAll?.map((city) => city)}
                        isDisabled={citiesLoading}
                        isLoading={citiesLoading}
                        isMulti
                        onChange={(selectedOps) => {
                          setJobLocation(selectedOps.map((city) => city.value));
                        }}
                      />
                    </div>
                  </div>
                </> : null
              } */}
                            {/* Testing End */}

                            {
                                jobType === 'Presencial' || jobType === 'Híbrido' ?
                                    <>
                                        <div className='col-md-4 mt-3 pl-0'>
                                            <label htmlFor="select cities">
                                                {/* Cities (Enter Location Separated by comma (,) ) */}
                                                Ciudad (Escribe el lugar separado por (,) )
                                            </label>
                                            <input
                                                type='text'
                                                value={jobLocation}
                                                // placeholder='Enter Location'
                                                placeholder='Escribe la ciudad'
                                                className='form-control'
                                                onChange={(e) => setJobLocation(e.target.value)}
                                            />
                                        </div>
                                    </> : null
                            }

                            <div className='form-row mt-4' >

                                {
                                    /* <div className="col-md-4">
                                      <label htmlFor="jobLocation"> Job Location  <small className='text-danger'> * </small> </label>
                                      <Select
                                        options={cities}
                                        isMulti
                                        isDisabled={country === '' ? true : false}
                                        onChange={(selectedOps) => setJobLocation(selectedOps.map(options => options.value))}
                                      />
                                    </div> */
                                }

                                {/* <Select options={} isMulti  /> */}
                                {/* onChange={(selectedOptions) => setCourseLanguage(selectedOptions.map(option => option.value))} */}
                                <div className='col-md-4'>
                                    <label htmlFor="mandatory_skills">
                                        {/* Mandatory Skills Eng*/}
                                        Habilidades Mandatoria
                                        <small className='text-danger'> * </small> </label>
                                    {/* Multiselect */}
                                    <Select
                                        options={skills}
                                        isMulti
                                        value={mandatorySkills.map((skill) => ({ value: skill, label: skill }))} // set value to the selected options
                                        onChange={(selectedOps) => setMandatorySkills(selectedOps.map(options => options.value))}
                                    />
                                </div>


                                <div className='col-md-4'>
                                    {/* Multiselect */}

                                    <label htmlFor="optional_skills">
                                        {/* Optional Skills */}
                                        Habilidades Opcionales
                                    </label>
                                    <Select

                                        options={skills.filter((skill) => !mandatorySkills.includes(skill.value))}
                                        isMulti
                                        value={optionalSkills.map((skill) => ({ value: skill, label: skill }))} // set value to the selected options
                                        onChange={(selectedOps) => setOptionalSkills(selectedOps.map(options => options.value))}
                                    />
                                </div>


                            </div>

                            <div className="form-row mt-4">
                                <div className='col-md-4'>
                                    {/* lets add date and time picker here */}
                                    <label htmlFor="jobPostedDate"  >
                                        {/* Joining Date */}
                                        Fecha de Incorporación
                                        <small className='text-danger'> * </small> </label>
                                    <input
                                        type='date'
                                        disabled={disableJoiningDate}
                                        className='form-control'
                                        min={new Date().toISOString().split('T')[0]}
                                        value={joiningDate.split('T')[0]}
                                        onChange={(e) => setJoiningDate(e.target.value)}

                                    />

                                    <div className='mt-3'>
                                        <input type='checkbox' id='isImmediate' className='pt-2' onClick={() => setDisableJoiningDate(prevState => !prevState)} onChange={() => setIsImmediate(true)} style={{ transform: 'scale(1.6)' }} />
                                        <label htmlFor='isImmediate' className='ml-1 ' >
                                            {/* Immediate Joining (Onboard within 30 days) */}
                                            Incorporación Inmediata (Empezar en los próximos 30 días)
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className="col-md-6 mt-4 pl-0">
                                    <label htmlFor="work_exp">
                                        {/* Work Experience (Years) */}
                                        Experiencia Laboral (Años)
                                        <small className='text-danger'>*</small>
                                    </label>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor="minExperience">
                                                {/* Minimum */}
                                                Mínimo
                                            </label>
                                            <input type='number'
                                                className='form-control'
                                                placeholder='0'
                                                min='0'
                                                max='20'
                                                value={minWorkExp}
                                                onChange={(e) => setMinWorkExp(parseInt(e.target.value))}
                                            />
                                        </div>

                                        <div className='col-md-4'>
                                            <label htmlFor="maxExperience">
                                                {/* Maximum */}
                                                Máximo
                                            </label>
                                            <input
                                                type='number'
                                                className='form-control'
                                                placeholder='20'
                                                min='0'
                                                max='20'
                                                value={maxWorkExp}
                                                onChange={(e) => setMaxWorkExp(parseInt(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mt-4 pl-0">
                                    <label htmlFor="salary">
                                        {/* Salary Range (Annual) */}
                                        Rango Salarial (Anual)
                                        <small className='text-danger'>*</small>
                                    </label>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label htmlFor="minSalary">
                                                Mínimo
                                                {/* Minimum */}
                                            </label>
                                            <input
                                                type='number'
                                                className='form-control'
                                                placeholder='0'
                                                min='0'
                                                value={minSalary}
                                                onChange={(e) => setMinSalary(parseInt(e.target.value))}
                                            />
                                        </div>

                                        <div className='col-md-4'>
                                            <label htmlFor="maxSalary">
                                                {/* Maximum */}
                                                Máximo
                                            </label>
                                            <input
                                                type='number'
                                                value={maxSalary}
                                                className='form-control'
                                                placeholder='100'
                                                min='0'
                                                onChange={(e) => setMaxSalary(parseInt(e.target.value))}
                                            />
                                        </div>

                                        <div className='col-md-2'>
                                            <label htmlFor="currency">
                                                {/* Currency */}
                                                Moneda
                                            </label>
                                            <select
                                                className='form-control mt-2'
                                                onChange={(e) => setSalaryCurrency(e.target.value)}
                                                value={salaryCurrency}
                                            >
                                                <option value="">
                                                    {/* Select */}
                                                    Seleccionar
                                                </option>
                                                {/* Countriy wise values  */}
                                                <option value="EUR"> EUR </option>
                                                <option value="GBP"> GBP </option>
                                                <option value="AUS"> AUS </option>
                                                <option value="USD"> USD </option>
                                                <option value="CAD"> CAD </option>
                                                <option value="SGD"> SGD </option>
                                                <option value="AED"> AED </option>
                                                <option value="ARS"> ARS </option>
                                                <option value="CLF"> CLF </option>
                                                <option value="COP"> COP </option>
                                                <option value="CRC"> CRC </option>
                                                <option value="CUC"> CUC </option>
                                                <option value="CUP"> CUP </option>
                                                <option value="COU"> COU </option>
                                                <option value="MAD"> MAD </option>
                                                <option value="MXN"> MXN </option>
                                                <option value="MXV"> MXV </option>
                                                <option value="NOK"> NOK </option>
                                                <option value="NZD"> NZD </option>
                                                <option value="PYG"> PYG </option>
                                                <option value="PEN"> PEN </option>
                                                <option value="DOP"> DOP </option>
                                                <option value="RUB"> RUB </option>
                                                <option value="SEK"> SEK </option>
                                                <option value="TRY"> TRY </option>
                                                <option value="UYI"> UYI </option>
                                                <option value="UYU"> UYU </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-md-4'>
                                    <label htmlFor="no_of_ops">
                                        {/* No of Openings */}
                                        Nº de Candidatos
                                        <small className='text-danger'> * </small></label>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='5'
                                        min='0'
                                        max='500'
                                        value={noOfOpenings}
                                        onChange={(e) => setNoOfOpenings(parseInt(e.target.value))}
                                    />
                                </div>
                                {/* <div className='col-md-4'>
                  <label htmlFor="extra_benifits"> Extra Benifits </label>
                  <Select options={extraBenifits} isMulti onChange={(selectedOps) => setExtraBenifitsVal(selectedOps.map(option => option.value))} />
                </div> */}
                                <div className='col-md-6'>
                                    {/* Left Jodit Editor  */}
                                    <label htmlFor="jobDesc">
                                        {/* Job Decription */}
                                        Descripción del Puesto
                                        <small className='text-danger'> * </small>
                                    </label>
                                    <ReactQuill
                                        theme="snow"
                                        modules={modules}
                                        value={jobDecription}
                                        onChange={setJobDescription}
                                    />
                                </div>
                            </div>

                            <div className='form-row mt-4'>
                                {/* IsExternalLink  */}
                                <div className='col-md-4'>
                                    <label htmlFor="isExternalLink">
                                        {/* Is External Link */}
                                        Link Externo
                                    </label>
                                    <input
                                        type='checkbox'
                                        id='isExternalLink'
                                        onClick={() => setShowJobLink(prevState => !prevState)}
                                        checked={isExternalLink}
                                        onChange={() => setIsExternalLink(!isExternalLink)}
                                        className='pt-2 ml-3'
                                        style={{ transform: 'scale(1.6)' }}
                                    />
                                    <div>
                                        {
                                            isExternalLink ?
                                                (<>
                                                    <div>
                                                        <label htmlFor="jobLink" className='mt-2' >
                                                            {/* Job Link */}
                                                        </label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            value={jobLink}
                                                            onChange={(e) => setJobLink(e.target.value)}
                                                            placeholder='https://job-link/'

                                                        />
                                                    </div>

                                                </>) : <></>
                                        }
                                    </div>
                                </div>
                            </div>

                            <button type='submit' className='btn btn-dark w-100 mt-3 mb-2'>
                                {/* Post Job */}
                                Subir Empleo
                            </button>
                        </form >
                    </>

            }


        </div >
    )
}

export default UpdateJobForm
