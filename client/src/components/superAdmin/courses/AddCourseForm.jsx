import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import languages from '../../admin/AdminCourses/languages.js'
import { useDispatch } from 'react-redux';
import { SetCourse } from '../../../redux/actions/courseAdmin';


// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ]


const AddCourseForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [courseTitle, setCourseTitle] = useState('');
    const [courseDesc, setCourseDesc] = useState('');
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
    const [picThumbUploaded, setPicThumbUploaded] = useState(false);
    const [picLogo, setPicLogo] = useState('');
    const [picLogoUploaded, setPicLogoUploaded] = useState(false)
    const [loading, setLoading] = useState(false);

    const storedProfile = JSON.parse(localStorage.getItem('Profile'));
    const storedProfileUserID = storedProfile?.result?._id;

    const isValidURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }

    useEffect(() => {
        setCourseDuration(courseDurationValue + " " + courseDurationUnit);
        // if (storedProfile?.result?.userType !== 'educator' || !storedProfile?.result === null) {
        //     navigate('/login');
        //     // toast.error('You are not authorized to access this page');
        // }
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
            setLoading(false);
            return toast.error('Thumbnail size should be less than 1 MB ')
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
            setPicThumbUploaded(true);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
            return toast.error('Error Uploading Image to server')
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
            setLoading(false);
            return toast.error('Logo size should be less than 1 MB ')
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
            setPicLogoUploaded(true);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
            return toast.error('Error Uploading Image to server')
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(courseTitle, courseDesc, courseLanguage, courseLink, courseFormat, isFree, coursePrice, courseDuration, courseCompany, picThumb, picLogo);
        if (!courseTitle || !difficulty || !courseDesc || courseLanguage.length === 0 || !courseLink || !courseFormat || isFree === null || (isFree === false && coursePrice === "")
            || !courseDurationValue || !courseDurationUnit || !courseCompany || !courseCategory || !courseType || !picThumb || !picLogo) {
            return toast.error('Please fill all fields');
        }

        if (courseDesc.length < 200) {
            return toast.error('Course Description must be more than 200 characters');
        } if (isFree) {
            setCoursePrice(0);
        } if (!isValidURL(courseLink)) {
            return toast.error(' Enter a Valid Course Link');
        } if (!picLogoUploaded) {
            return toast.error('Logo not uploaded to server');
        } if (!picThumbUploaded) {
            return toast.error('Thumbnail not uploaded to server');
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
            created_by: storedProfileUserID,
        };

        console.log(courseData)
        const response = await dispatch(SetCourse(courseData));
        if (response.success) {
            console.log("This is response.path  " + response.path);
            navigate('/superadmin/courses')
            toast.success(response.message);
        } else {
            toast.error(response.message);

        }
    }



    return (
        <>
            <div className="container mt-4 mb-3">
                <Toaster />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="course_title">
                            {/* Course Title */}
                            Nombre del Curso
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Intro to methodolgy"
                            onChange={(e) => setCourseTitle(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="difficulty">
                            {/* Course Difficulty Level */}
                            Dificultad del Curso
                        </label>
                        <select
                            id="difficulty"
                            className="form-control"
                            onChange={(e) => setDifficulty(e.target.value)} >
                            <option value="">
                                {/* Select */}
                                Seleccionar
                            </option>
                            <option
                                // value="Beginner"
                                value="Básico"
                            >
                                {/* Beginner */}
                                Básico
                            </option>
                            <option
                                // value="Intermediate"
                                value="Intermedio"
                            >
                                {/* Intermediate */}
                                Intermedio
                            </option>
                            <option
                                // value="Advanced"
                                value="Avanzado"
                            >
                                {/* Advanced */}
                                Avanzado
                            </option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="course_desc">
                            {/* Course Description (Minimum 200 Words) */}
                            Descripción del Curso (Mínimo 200 palabras)
                        </label>
                        <textarea
                            type="text"
                            rows="5"
                            className="form-control"
                            // placeholder="Add Course Description"
                            placeholder="Describe tu curso"
                            onChange={(e) => setCourseDesc(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputLanguages">
                                {/* Course Language */}
                                Idioma del Curso
                            </label>
                            <Select
                                placeholder='Seleccionar'
                                options={languages}
                                isMulti
                                onChange={(selectedOptions) =>
                                    setCourseLanguage(selectedOptions.map((option) => option.value))
                                }
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="course_link">
                                {/* Course Link */}
                                Link del Curso
                            </label>
                            <input
                                type="url"
                                className="form-control"
                                placeholder="https://www.example.com/course/nanocourse-111"
                                onChange={(e) => setCourseLink(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="format">
                                {/* Format */}
                                Formato
                            </label>
                            <select
                                id="format"
                                className="form-control"
                                onChange={(e) => setCourseFormat(e.target.value)}
                            >
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

                        <div className="form-group col-md-6">
                            <label className="ml-1 mt-1 mb-2">
                                {/* Is this course free? */}
                                ¿Este curso es gratis?
                            </label> <br />
                            <>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isFree"
                                        id="yes"
                                        value={true}
                                        checked={isFree === true}
                                        onChange={() => setIsFree(true)}
                                    />
                                    <label className="form-check-label" htmlFor="yes">
                                        {/* Yes */}
                                        Sí
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isFree"
                                        id="no"
                                        value={false}
                                        checked={isFree === false}
                                        onChange={() => setIsFree(false)}
                                    />
                                    <label className="form-check-label" htmlFor="no">
                                        No
                                    </label>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className="form-row">
                        {isFree ? (
                            <>
                                {/* True Case */}
                            </>) : (<>
                                <div className='form-group mt-3'>
                                    <label htmlFor="price">
                                        {/* Course Price */}
                                        Precio del Curso
                                    </label>
                                    <input type="text" className='form-control' placeholder='$105.45' onChange={(e) => setCoursePrice(e.target.value)} />
                                </div> </>)
                        }
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">
                                {/* Course Duration Value */}
                                Duración del Curso
                            </label>
                            <input
                                min={0}
                                type="number"
                                className="form-control"
                                placeholder="4.5"
                                onChange={(e) => setCourseDurationValue(e.target.value)}
                            />
                        </div>


                        <div className="form-group col-md-2">
                            <label htmlFor="inputState">
                                {/* Duration Unit  */}
                                Medida de Duración
                            </label>
                            <select
                                className="form-control"
                                onChange={(e) => setCourseDurationUnit(e.target.value)}
                            >
                                <option value="">
                                    {/* Select */}
                                    Seleccionar
                                </option>
                                <option
                                    // value="Minutes"
                                    value="Minutos"
                                >
                                    {/* Minutes */}
                                    Minutos
                                </option>

                                <option
                                    // value="Hours"
                                    value="Horas"
                                >
                                    {/* Hours */}
                                    Horas
                                </option>
                                <option
                                    // value="Days"
                                    value="Días"
                                >
                                    {/* Days */}
                                    Días
                                </option>
                                <option
                                    // value="Weeks"
                                    value="Semanas"
                                >
                                    {/* Weeks */}
                                    Semanas
                                </option>
                                <option
                                    // value="Months"
                                    value="Meses"
                                >
                                    {/* Months */}
                                    Meses
                                </option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="company_name">
                                {/* Company Name */}
                                Nombre de la Empresa
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Example Solutions pvt. ltd."
                                onChange={(e) => setCourseCompany(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor="course category" >
                                {/* Course Category */}
                                Categoría del Curso
                            </label>
                            <select className='form-control' onChange={(e) => setCourseCategory(e.target.value)}>
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
                                <option value="Negocios">Negocios</option>
                                <option value="Desarrollo Personal">Desarrollo Personal</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Recursos Humanos">Recursos Humanos</option>
                                <option value="Liderazgo Y gestión">Liderazgo Y Gestión</option>
                                <option value="Idiomas">Idiomas</option>
                                <option value="Preparación de exámenes">Preparación de Exámenes</option>
                                <option value="Pastelería">Pastelería</option>
                                <option value="Gestión de Cruceros">Gestión de Cruceros</option>
                                <option value="Enología">Enología</option>
                                <option value="Dirección Hotelera">Dirección Hotelera</option>
                                <option value="Ventas Y Marketing">Ventas Y Marketing</option>
                                <option value="Gestión de Eventos">Gestión de Eventos</option>
                                <option value="Revenue Management">Revenue Management</option>
                                <option value="Recepción">Recepción</option>
                                <option value="F&B">F&B</option>
                                <option value="Spa">Spa</option>
                                <option value="Turismo">Turismo</option>
                                <option value="Habilidades empresariales">Habilidades Empresariales</option>
                                <option value="Guía Turístico">Guía Turístico</option>
                                <option value="Otros">Otros</option>
                                <option value="Pisos">Pisos</option>
                            </select>

                        </div>

                        <div className='form-group col-md-6'>
                            <label htmlFor='course_type' > Course Type </label>
                            <select className='form-control' onChange={(e) => setCourseType(e.target.value)}>
                                <option value="">Seleccionar</option>
                                <option value="Certificados profesionales">Certificados profesionales</option>
                                <option value="Curso">Curso</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Licenciatura">Licenciatura</option>
                                <option value="Máster">Máster</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputZip">
                                {/* Course Thumbnail (Image should be less than 1 MB) */}
                                Miniatura del curso (la imagen debe ocupar menos de 1 MB)
                                <small className='text-danger'> * </small>
                            </label>
                            <input
                                type="file"
                                accept='image/*'
                                className="form-control"
                                onChange={(e) => postThumbnail(e.target.files[0])}
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputZip">
                                {/* Company Logo (Image should be less than 1 MB) */}
                                Logotipo de la empresa (La imagen debe ocupar menos de 1 MB)
                                <small className='text-danger'> * </small>
                            </label>
                            <input
                                type="file"
                                accept='image/*'
                                className="form-control"
                                onChange={(e) => postLogo(e.target.files[0])}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-3 btn btn-success w-100"
                        disabled={loading}
                    >
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
        </>
    )
}

export default AddCourseForm
