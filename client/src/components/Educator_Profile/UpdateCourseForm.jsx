import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";
import PuffLoader from 'react-spinners/PuffLoader';
import { useDispatch, useSelector } from 'react-redux';

import languages from '../admin/AdminCourses/languages';
import { GetCourseSingle, UpdateCourseAction } from '../../redux/actions/courseAdmin.js';

const UpdateCourseForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(GetCourseSingle(id))
    }, [dispatch]);


    const isValidURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }

    const [courseTitle, setCourseTitle] = useState('');
    const [courseDesc, setCourseDesc] = useState('');
    const [pageLoad, setPageLoad] = useState(true);
    const [courseLanguage, setCourseLanguage] = useState([]);
    const [courseLink, setCourseLink] = useState('');
    const [courseCategory, setCourseCategory] = useState('');
    const [courseType, setCourseType] = useState('');
    const [courseFormat, setCourseFormat] = useState('');
    const [isFree, setIsFree] = useState(true);
    const [coursePrice, setCoursePrice] = useState('');
    const [courseDurationValue, setCourseDurationValue] = useState('');
    const [courseDurationUnit, setCourseDurationUnit] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [courseCompany, setCourseCompany] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [picThumb, setPicThumb] = useState('');
    const [picLogo, setPicLogo] = useState('');
    const [loading, setLoading] = useState(false);
    // To be deleted
    const storedProfile = JSON.parse(localStorage.getItem('Profile'));
    const storedProfileUserID = storedProfile?.result?._id;
    // To be deleted end 
    const singleCourse = useSelector((state) => state.GetCourseSingleReducer)
    // console.log('CourseDuration isiiiiiii : ',singleCourse?.result?.duration.split(' ')[1],singleCourse?.result?.duration.split(' ')[0]);
    console.log(` UPDATECOURSE.JSX`, singleCourse);
    const [hasUserChangedValue, setHasUserChangedValue] = useState(false);

    useEffect(() => {
        if (singleCourse?.result) {
            setCourseTitle(singleCourse?.result?.title);
            setCourseDesc(singleCourse?.result?.description);
            // setCourseLanguage(singleCourse?.result?.languages.map(lang => lang.value));
            setCourseLanguage(singleCourse?.result?.languages);
            setCourseLink(singleCourse?.result?.course_link);
            setCourseCategory(singleCourse?.result?.course_category);
            setCourseType(singleCourse?.result?.course_type);
            setCourseFormat(singleCourse?.result?.format);
            setIsFree(singleCourse?.result?.isFree);
            setCoursePrice(singleCourse?.result?.price);
            if (singleCourse?.result?.duration) {
                const [value, unit] = singleCourse.result.duration.split(' ');
                if (value) {
                    setCourseDurationValue(parseFloat(value));
                }
                if (unit) {
                    setCourseDurationUnit(unit);
                }
            }
            setDifficulty(singleCourse?.result?.difficulty);
            setCourseCompany(singleCourse?.result?.company_name);
            setPageLoad(false);
        }

    }, [singleCourse])


    useEffect(() => {
        setCourseDuration(courseDurationValue + " " + courseDurationUnit);
    }, [courseDurationValue, courseDurationUnit])


    const postThumbnail = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast.error("This didn't work.")
            setLoading(false);
            return;
        }
        if (pics.type !== 'image/jpeg' && pics.type !== 'image/png') {
            toast.error('Invalid image format');
            setLoading(false);
            return;
        } if (pics.size > 1000000) {
            toast.error('Image size should be less than 1 MB');
            setLoading(false);
            return;
        }
        const data = new FormData();
        data.append('file', pics);
        data.append('upload_preset', 'Hotel_Journals_app');
        data.append('cloud_name', 'dwahql1jy');
        fetch('https://api.cloudinary.com/v1_1/dwahql1jy/image/upload', {
            method: 'post',
            body: data
        }).then(res => res.json()).then(data => {
            setPicThumb(data.url.toString());
            console.log(data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    const postLogo = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast.error("This didn't work.")
            setLoading(false);
            return;
        }
        if (pics.type !== 'image/jpeg' && pics.type !== 'image/png') {
            toast.error('Invalid image format');
            setLoading(false);
            return;
        }
        if (pics.size > 1000000) {
            toast.error('Image size should be less than 1 MB');
            setLoading(false);
            return;
        }
        const data = new FormData();
        data.append('file', pics);
        data.append('upload_preset', 'Hotel_Journals_app');
        data.append('cloud_name', 'dwahql1jy');
        fetch('https://api.cloudinary.com/v1_1/dwahql1jy/image/upload', {
            method: 'post',
            body: data
        }).then(res => res.json()).then(data => {
            setPicLogo(data.url.toString());
            console.log(data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    const fieldsValidate = () => {
        if (!courseTitle) {
            toast.error('Please fill the course title');
            return false;
        }
        if (!difficulty) {
            toast.error('Please fill the difficulty');
            return false;

        }
        if (!courseDesc) {
            toast.error('Please fill the course description');
            return false;

        }
        if (courseLanguage.length === 0) {
            toast.error('Please fill the course language');
            return false;

        }
        if (!courseLink) {
            toast.error('Please fill the course link');
            return false;

        }
        if (!courseFormat) {
            toast.error('Please fill the course format');
            return false;

        }
        if (isFree === null) {
            toast.error('Please specify if the course is free');
            return false;

        }
        if (isFree === false && coursePrice === "") {
            toast.error('Please fill the course price');
            return false;

        }
        if (!courseDurationValue || !courseDurationUnit) {
            toast.error('Please fill the course duration');
            return false;

        }
        if (!courseCompany) {
            toast.error('Please fill the company name');
            return false;

        }
        if (!courseCategory) {
            toast.error('Please fill the course category');
            return false;

        }
        if (!courseType) {
            toast.error('Please fill the course type');
            return false;

        }
        if (!picThumb) {
            toast.error('Please upload a thumbnail picture');
            return false;

        }
        if (!picLogo) {
            toast.error('Please upload a logo picture');
            return false;
        }
        return true;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log(courseTitle, courseDesc, courseLanguage, courseLink, courseFormat, isFree,
        // coursePrice, courseDuration, courseCompany,  picThumb, picLogo);
        // if (!courseTitle || !difficulty || !courseDesc || courseLanguage.length === 0 || !courseLink || !courseFormat || isFree === null || (isFree === false && coursePrice === "")
        //     || !courseDurationValue || !courseDurationUnit || !courseCompany || !courseCategory || !courseType || !picThumb || !picLogo) {
        //     setLoading(false);
        //     return toast.error('Please fill all fields');
        // }

        if (!fieldsValidate()) {
            return;
        }
        if (courseDesc.length < 200) {
            setLoading(false);
            return toast.error('Course Description must be more than 200 characters');
        }
        if (isFree) {
            setCoursePrice(0);
        } if (!isValidURL(courseLink)) {
            setLoading(false);
            return toast.error(' Enter a Valid Course Link');
        } if (picThumb.size > 1000000 || picLogo.size > 1000000) {
            setLoading(false);
            toast.error('Image size should be less than 1 MB');
            return;
        }

        const courseData = {
            title: courseTitle,
            description: courseDesc,
            company_name: courseCompany,
            course_category: courseCategory,
            course_type: courseType,
            price: coursePrice,
            isFree: isFree,
            difficulty: difficulty,
            course_link: courseLink,
            format: courseFormat,
            languages: courseLanguage,
            duration: courseDuration,
            banner_image: picThumb,
            brand_image: picLogo,
            // created_by:storedProfileUserID,
        };

        const response = await dispatch(UpdateCourseAction(id, courseData));
        if (response.success) {
            // console.log("This is response.path  " + response.path);
            toast.success(response.message);
            navigate(`/profile/${storedProfileUserID}`);
        } else {
            toast.error(response.message);
        }
        setLoading(false);
    }





    return (
        <>

            {pageLoad ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
                >
                    <PuffLoader
                        color="red"
                        size={70}
                    />
                </div>
            ) : (
                <div className='container mt-4 mb-3'>
                    <Toaster />
                    <form onSubmit={handleSubmit}>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <div>
                                    <label htmlFor="course_title">
                                        {/* Course Title */}
                                        Nombre del Curso
                                    </label>
                                    <input type="text" class="form-control" value={courseTitle} placeholder="Intro to methodolgy" onChange={(e) => setCourseTitle(e.target.value)} />
                                </div>

                                <div className='mt-3'>
                                    <label htmlFor="difficulty">
                                        {/* Course Difficulty Level */}
                                        Dificultad del Curso
                                    </label>
                                    <div className="col pl-0">
                                        <select id="difficulty" value={difficulty} className="form-control" onChange={(e) => setDifficulty(e.target.value)}>
                                            <option value="">
                                                {/* Select */}
                                                Seleccionar
                                            </option>
                                            <option value="Beginner">
                                                {/* Beginner */}
                                                Básico
                                            </option>
                                            <option value="Intermediate">
                                                {/* Intermediate */}
                                                Intermedio
                                            </option>
                                            <option value="Advanced">
                                                {/* Advanced */}
                                                Avanzado
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* Hello Motto */}
                            <div class="form-group col-md-6">
                                <label htmlFor="course_desc">
                                    {/* Course Description (Minimum 200 Words) */}
                                    Descripción del Curso (Mínimo 200 palabras)
                                </label>
                                <textarea type="text" rows="5" value={courseDesc} class="form-control"
                                    // placeholder="Course Description"
                                    placeholder="Describe tu curso"

                                    onChange={(e) => setCourseDesc(e.target.value)} > </textarea>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div class="form-group col-md-6">
                                <label htmlFor="inputLanguages">
                                    {/* Course Language */}
                                    Idioma del Curso
                                </label>
                                {/* <Select options={languages} isMulti onChange={(selectedOptions) => setCourseLanguage(selectedOptions.map(option => option.value))} /> */}
                                <Select
                                    options={languages}
                                    isMulti
                                    value={courseLanguage.map(lang => ({ value: lang, label: lang }))}
                                    onChange={(selectedOptions) =>
                                        setCourseLanguage(selectedOptions.map(option => option.value))
                                    }
                                />
                            </div>


                            <div class="form-group col-md-6">
                                <label htmlFor="course_link">
                                    {/* Course Link */}
                                    Link del Curso
                                </label>
                                <input type="url" class="form-control" value={courseLink} placeholder="https://www.example.com/course/nanocourse-111" onChange={(e) => setCourseLink(e.target.value)} />
                            </div>
                        </div>


                        <div className="form-group row">
                            <div className='form-group col-md-6'>
                                <label htmlFor="format" className="form-label">
                                    {/* Format */}
                                    Formato
                                </label>
                                <div className="col pl-0">
                                    <select id="format" className="form-control" value={courseFormat} onChange={(e) => setCourseFormat(e.target.value)}>
                                        <option value="">
                                            {/* Select */}
                                            Seleccionar
                                        </option>
                                        <option value="Online">
                                            Online
                                        </option>
                                        <option value="Offline">
                                            {/* Offile */}
                                            Presencial
                                        </option>
                                        <option value='Both'>
                                            {/* both */}
                                            Híbrido
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor="course_option">
                                    {/* Is this course free */}
                                    ¿Este curso es gratis?
                                    <small className='text-danger'> * </small>
                                </label>
                                <div className='col-md-2'>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="freeYes" name="isFree" defaultChecked className="custom-control-input" onChange={() => { setIsFree(true); setCoursePrice(''); }} />
                                        <label class="custom-control-label" for="freeYes">
                                            {/* Yes */}
                                            Si
                                        </label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="freeNo" name="isFree" className="custom-control-input" onChange={() => setIsFree(false)} />
                                        <label class="custom-control-label" for="freeNo">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    {isFree ? (
                                        <>
                                            {/* True Case */}
                                        </>) : (<>
                                            {/* False case */}
                                            <div className='form-group mt-3'>
                                                <label htmlFor="price">
                                                    {/* Course Price */}
                                                    Precio del Curso
                                                </label>
                                                <input type="text" className='form-control' placeholder='$105.45' onChange={(e) => setCoursePrice(e.target.value)} />
                                            </div> </>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label htmlFor="inputState">
                                    {/* Course Duration Value */}
                                    Duración del Curso
                                </label>
                                <input type='number' value={courseDurationValue} className='form-control' placeholder='4.5' onChange={(e) => { setCourseDurationValue(e.target.value) }} />
                            </div>

                            <div class="form-group col-md-2">
                                <label htmlFor="inputState">
                                    {/* Duration  Unit */}
                                    Medida de Duración
                                </label>
                                <select className='form-control' value={courseDurationUnit} onChange={(e) => setCourseDurationUnit(e.target.value)}>
                                    <option value="">
                                        {/* Select */}
                                        Seleccionar
                                    </option>
                                    <option value="Minutes">
                                        {/* Minutes */}
                                        Minutos
                                    </option>

                                    <option value="Hours">
                                        {/* Hours */}
                                        Horas
                                    </option>
                                    <option value="Days">
                                        {/* Days */}
                                        Días
                                    </option>
                                    <option value="Weeks">
                                        {/* Weeks */}
                                        Semanas
                                    </option>
                                    <option value="Months">
                                        {/* Months */}
                                        Meses
                                    </option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label htmlFor="company_name">
                                    {/* Course provider company Name */}
                                    Nombre de la Empresa
                                </label>
                                <input type="text" class="form-control" value={courseCompany} placeholder="Example Solutions pvt. ltd." onChange={(e) => setCourseCompany(e.target.value)} />
                            </div>

                        </div>

                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <label htmlFor="course category" >
                                    {/* Course Category */}
                                    Categoría del Curso
                                </label>
                                <select className='form-control' value={courseCategory} onChange={(e) => setCourseCategory(e.target.value)}>
                                    <option value="">
                                        {/* Select Course Category */}
                                        Seleccionar Categoría del Curso
                                    </option>
                                    {/* In English */}
                                    {/* <option value="Culinary"> Culinary </option>
                                <option value="Business"> Business </option>
                                <option value="Personal Development"> Personal Development </option>
                                <option value="Marketing"> Marketing </option>
                                <option value="Human Resource"> Human Resource </option>
                                <option value="Leadership And Management"> Leadership And Management </option>
                                <option value="Language"> Language </option>
                                <option value="Test Preparation"> Test Preparation </option>
                                <option value="Pastry"> Pastry </option>
                                <option value="Cruises Management"> Cruises Management </option>
                                <option value="Oenology"> Oenology </option>
                                <option value="Hospitality Management"> Hospitality Management </option>
                                <option value="Sales And Marketing"> Sales And Marketing </option>
                                <option value="Event Management"> Event Management </option>
                                <option value="Revenue Management"> Revenue Management </option>
                                <option value="Reception"> Reception </option>
                                <option value="Food And Beverages"> Food And Beverages </option>
                                <option value="Spa"> Spa </option>
                                <option value="Tourism"> Tourism </option>
                                <option value="Business Skills"> Business Skills </option> */}
                                    {/* In spanish */}
                                    <option value="Cocina">Cocina</option>
                                    <option value="Desarrollo Personal">Desarrollo Personal</option>
                                    <option value="Dirección Hotelera">Dirección Hotelera</option>
                                    <option value="Enología">Enología</option>
                                    <option value="F&B">F&B</option>
                                    <option value="Gestión de Cruceros">Gestión de Cruceros</option>
                                    <option value="Gestión de Eventos">Gestión de Eventos</option>
                                    <option value="Guía Turístico">Guía Turístico</option>
                                    <option value="Habilidades Empresariales">Habilidades Empresariales</option>
                                    <option value="Idiomas">Idiomas</option>
                                    <option value="Liderazgo Y Gestión">Liderazgo Y Gestión</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Negocios">Negocios</option>
                                    <option value="Otros">Otros</option>
                                    <option value="Pastelería">Pastelería</option>
                                    <option value="Pisos">Pisos</option>
                                    <option value="Preparación de Exámenes">Preparación de Exámenes</option>
                                    <option value="Recepción">Recepción</option>
                                    <option value="Recursos Humanos">Recursos Humanos</option>
                                    <option value="Revenue Management">Revenue Management</option>
                                    <option value="Spa">Spa</option>
                                    <option value="Turismo">Turismo</option>
                                    <option value="Ventas Y Marketing">Ventas Y Marketing</option>
                                </select>

                            </div>

                            <div className='form-group col-md-6'>
                                <label htmlFor='course_type'  > Course Type </label>
                                <select className='form-control' value={courseType} onChange={(e) => setCourseType(e.target.value)}>
                                    <option value="">Seleccionar</option>
                                    <option value="Certificados profesionales">Certificados profesionales</option>
                                    <option value="Curso">Curso</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Licenciatura">Licenciatura</option>
                                    <option value="Máster">Máster</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-row'>
                            <div class="form-group col-md-6">
                                <label htmlFor="inputZip">
                                    {/* Course Thumbnail */}
                                    Miniatura del curso (la imagen debe ocupar menos de 1 MB)
                                </label>
                                <input
                                    type="file"
                                    accept='image/*'
                                    className="form-control"
                                    onChange={(e) => postThumbnail(e.target.files[0])}
                                />
                            </div>

                            <div class="form-group col-md-6">
                                <label htmlFor="inputZip">
                                    {/* Company Logo */}
                                    Logotipo de la empresa (La imagen debe ocupar menos de 1 MB)
                                </label>
                                <input
                                    type="file"
                                    accept='image/*'
                                    className="form-control"
                                    onChange={(e) => postLogo(e.target.files[0])}
                                />
                            </div>
                        </div>


                        <button type="submit" class="mt-3 btn btn-success w-100" disabled={loading}>
                            {loading ?
                                // "Loading..." 
                                "Cargando..."
                                :
                                // "Publish"
                                "Publicar"
                            }
                        </button>
                    </form>
                </div>
            )}
        </>

    )
}


export default UpdateCourseForm
