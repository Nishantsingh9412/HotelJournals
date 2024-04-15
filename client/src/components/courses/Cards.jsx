import React, { useEffect, useRef, useState } from 'react';
import { IoIosCloseCircle, IoMdTime } from 'react-icons/io';
import { FaArrowUpRightDots } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import CheckBox from "./CheckBox";
import CSS from './Cards.module.css';
import { GetCourse, courseFilterAction, coursePaginateAction } from '../../redux/actions/courseAdmin';

const cardImageStyle = {
    width: '100%',
    height: '200px',
};



const Cards = ({ filter }) => {
    const dispatch = useDispatch();

    // const [currentPage, setCurrentPage] = useState(2);
    const [paginatedCourses, setPaginatedCourses] = useState()
    const [limit, setLimit] = useState(12);
    const [pageCount, setPageCount] = useState(1);
    const currentPage = useRef()

    const [courseValueFilter, setCourseValueFilter] = useState({
        // isFree: false,
        Gratis: false,
        // isPaid: false
        Pago: false
    })

    const [locationTypeFilter, setLocationTypeFilter] = useState({
        Online: false,
        // Offline: false,
        Presencia: false
    })

    const [courseTypesFilter, setCourseTypesFilter] = useState({
        // Bachelors: false,
        Licenciatura: false,
        // Masters: false,
        Máster: false,
        Diploma: false,
        // Professional: false,
        CertificadosProfesionales: false,
        // ShortCourse: false,
        Curso: false,
    });

    const [courseLangFilter, setCourseLangFilter] = useState({
        // English: false,
        Inglés: false,
        // Spanish: false,
        Español: false,
        // French: false,
        Francés: false,
        Italian: false,
        // Portuguese: false,
        Portugués: false,
        // German: false,
        Alemán: false,
        // Catalan: false,.
        Catalán: false,
        // Other: false
        Otros: false
    });

    const [categoriesFilter, setCategoriesFilter] = useState({
        // Culinary: false,
        Cocina: false,
        // Business: false,
        Negocios: false,
        // PersonalDevelopment: false,
        DesarrolloPersonal: false,
        Marketing: false,
        // HumanResource: false,
        RecursosHumanos: false,
        // LeadershipAndManagement: false,
        LiderazgoYGestión: false,
        // Language: false,
        Idiomas: false,
        // TestPreparation: false,
        PreparaciónDeExámenes: false,
        // Pastry: false,
        Pastelería: false,
        // CruisesManagement: false,
        GestiónDeCruceros: false,
        // Oenology: false,
        Enología: false,
        // HospitalityManagement: false,
        DirecciónHotelera: false,
        // SalesAndMarketing: false,
        VentasYMarketing: false,
        // EventManagement: false,
        GestiónDeEventos: false,
        RevenueManagement: false,
        // Reception: false,
        Recepción: false,
        FoodAndBeverages: false,
        Spa: false,
        // Tourism: false,
        Turismo: false,
        // BusinessSkills: false
        HabilidadesEmpresariales: false,
        GuíaTurístico: false,
        Pisos: false,
        Otros: false,
    })

    // useEffect(() => {
    //     dispatch(GetCourse());
    // }, [dispatch]);


    const handleClearAllFilters = () => {
        setCourseTypesFilter({
            // Bachelors: false,
            Licenciatura: false,
            // Masters: false,
            Máster: false,
            Diploma: false,
            // Professional: false,
            CertificadosProfesionales: false,
            // ShortCourse: false,
            Curso: false,
        });


        setCourseLangFilter({
            // English: false,
            Inglés: false,
            // Spanish: false,
            Español: false,
            // French: false,
            Francés: false,
            // Italian: false,
            Italiano: false,
            // Portuguese: false,
            Portugués: false,
            // German: false,
            Alemán: false,
            // Catalan: false,
            Catalán: false,
        });

        setCategoriesFilter({
            // Culinary: false,
            Cocina: false,
            // Business: false,
            Negocios: false,
            // PersonalDevelopment: false,
            DesarrolloPersonal: false,
            Marketing: false,
            // HumanResource: false,
            RecursosHumanos: false,
            // LeadershipAndManagement: false,
            LiderazgoYGestión: false,
            // Language: false,
            Idiomas: false,
            // TestPreparation: false,
            PreparaciónDeExámenes: false,
            // Pastry: false,
            Pastelería: false,
            // CruisesManagement: false,
            GestiónDeCruceros: false,
            // Oenology: false,
            Enología: false,
            // HospitalityManagement: false,
            DirecciónHotelera: false,
            // SalesAndMarketing: false,
            VentasYMarketing: false,
            // EventManagement: false,
            GestiónDeEventos: false,
            RevenueManagement: false,
            // Reception: false,
            Recepción: false,
            FoodAndBeverages: false,
            Spa: false,
            // Tourism: false,
            Turismo: false,
            // BusinessSkills: false
            HabilidadesEmpresariales: false,
            GuíaTurístico: false,
            Pisos: false,
            Otros: false,
        })

        setLocationTypeFilter({
            Online: false,
            // Offline: false,
            Presencia: false
        })

        setCourseValueFilter({
            // isFree: false,
            Gratis: false,
            // isPaid: false
            Pago: false
        })
    }

    const handleCoursesFilter = async () => {
        const params = new URLSearchParams({
            courseTypesFilter: JSON.stringify(courseTypesFilter),
            courseLangFilter: JSON.stringify(courseLangFilter),
            categoriesFilter: JSON.stringify(categoriesFilter),
            locationTypeFilter: JSON.stringify(locationTypeFilter), // Online Offline
            courseValueFilter: JSON.stringify(courseValueFilter)    // Free Paid
        }).toString();

        console.log("Params \n");
        console.log(params);
        const response = await dispatch(courseFilterAction(params));
        if (response.success) {
            console.log(response.data);
        } else {
            console.log(response.message);
        }
    }


    useEffect(() => {
        handleCoursesFilter();
    }, [courseLangFilter,
        courseTypesFilter,
        categoriesFilter,
        courseValueFilter,
        locationTypeFilter,
    ])


    useEffect(() => {
        currentPage.current = 1
        getPaginatedUsers();
    }, [currentPage, limit])

    const handlePageClick = (e) => {
        console.log(e);
        // setCurrentPage(e.selected + 1);
        currentPage.current = e.selected + 1;
        getPaginatedUsers()
    }

    const getPaginatedUsers = () => {
        dispatch(coursePaginateAction(currentPage.current, limit)).then((res) => {
            if (res.success) {
                console.log(res.data);
                setPageCount(res.data.result.pageCount);
                setPaginatedCourses(res.data.result.pageinatedData);
            } else {
                console.log(res.message);
            }
        })
    }

    const AllCoursesData = useSelector((state) => state.getCoursesReducer);
    // console.log(AllCoursesData);

    return (
        <div className='container'>
            <div className='row'>
                {filter ?
                    <div className={`${CSS.filterBox} col`} style={{ maxWidth: "20rem" }}>
                        <div>
                            <div className="d-flex">
                                <h5 className='ml-2'>
                                    {/* Filter By */}
                                    Filtrar por
                                </h5>
                                <div
                                    style={{ marginLeft: '2vw', cursor: 'pointer' }}
                                    onClick={handleClearAllFilters}
                                >
                                    <p>
                                        {/* Clear All */}
                                        Eliminar Filtros
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="ml-2 pb-3">
                                    <hr style={{ background: "#E4B49D", marginTop: '0' }} />

                                    <h6 className="font-weight-bold">Course Types</h6>
                                    <div className="ml-3">
                                        <CheckBox
                                            // content={"Bachelors"}
                                            content={"Licenciatura"}
                                            // checked={courseTypesFilter.Bachelors}
                                            checked={courseTypesFilter.Licenciatura}
                                            onChange={(e) =>
                                                setCourseTypesFilter(
                                                    {
                                                        ...courseTypesFilter,
                                                        // Bachelors: e.target.checked
                                                        Licenciatura: e.target.checked
                                                    }
                                                )}
                                        />
                                        <CheckBox
                                            // content={"Masters"}
                                            content={"Máster"}
                                            // checked={courseTypesFilter.Masters}
                                            checked={courseTypesFilter.Máster}
                                            onChange={(e) =>
                                                setCourseTypesFilter(
                                                    {
                                                        ...courseTypesFilter,
                                                        // Masters: e.target.checked
                                                        Máster: e.target.checked
                                                    }
                                                )}
                                        />
                                        <CheckBox
                                            content={"Diploma"}
                                            checked={courseTypesFilter.Diploma}
                                            onChange={(e) =>
                                                setCourseTypesFilter(
                                                    { ...courseTypesFilter, Diploma: e.target.checked }
                                                )}
                                        />
                                        <CheckBox
                                            // content={"Professional"}
                                            content={"Certificados Profesionales"}
                                            // checked={courseTypesFilter.Professional}
                                            checked={courseTypesFilter.CertificadosProfesionales}
                                            onChange={(e) =>
                                                setCourseTypesFilter(
                                                    {
                                                        ...courseTypesFilter,
                                                        // Professional: e.target.checked
                                                        CertificadosProfesionales: e.target.checked
                                                    }
                                                )}
                                        />
                                        <CheckBox
                                            // content={"Short Course"}
                                            content={"Curso"}
                                            // checked={courseTypesFilter.ShortCourse}
                                            checked={courseTypesFilter.Curso}
                                            onChange={(e) =>
                                                setCourseTypesFilter(
                                                    {
                                                        ...courseTypesFilter,
                                                        Curso: e.target.checked
                                                        // ShortCourse: e.target.checked
                                                    }
                                                )}
                                        />
                                    </div>

                                    <h6 className='font-weight-bold mt-3'>
                                        {/* Course Value */}
                                        Valor del Curso
                                    </h6>
                                    <div className="ml-3">
                                        <div class="form-check">
                                            <input
                                                onChange={
                                                    (e) => setCourseValueFilter(
                                                        {
                                                            // isFree: e.target.checked
                                                            Gratis: e.target.checked
                                                        }
                                                    )}
                                                // checked={courseValueFilter.isFree
                                                checked={courseValueFilter.Gratis}
                                                class="form-check-input"
                                                name="exampleRadios"
                                                type="radio"
                                                id="exampleRadios1"
                                                value="option1"
                                            />
                                            <label class="form-check-label" for="exampleRadios1">
                                                {/* Free */}
                                                Gratis
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                onChange={
                                                    (e) => setCourseValueFilter(
                                                        // { isPaid: e.target.checked }
                                                        { Pago: e.target.checked }
                                                    )}
                                                // checked={courseValueFilter.isPaid}
                                                checked={courseValueFilter.Pago}
                                                class="form-check-input"
                                                name="exampleRadios"
                                                type="radio"
                                                id="exampleRadios2"
                                                value="option2"
                                            />
                                            <label class="form-check-label" for="exampleRadios2">
                                                {/* Paid */}
                                                Pago
                                            </label>
                                        </div>
                                    </div>
                                    <h6 className="font-weight-bold mt-3">
                                        {/* Course Languages */}
                                        Idioma del Curso
                                    </h6>
                                    <div className="ml-3">
                                        <CheckBox
                                            // content={"English"}
                                            content={"Inglés"}
                                            // checked={courseLangFilter.English}
                                            checked={courseLangFilter.Inglés}
                                            onChange={(e) =>
                                                setCourseLangFilter(
                                                    {
                                                        ...courseLangFilter,
                                                        // English: e.target.checked
                                                        Inglés: e.target.checked
                                                    }
                                                )}
                                        />
                                        <CheckBox
                                            // content={"Spanish"}
                                            content={"Español"}
                                            // checked={courseLangFilter.Spanish}
                                            checked={courseLangFilter.Español}
                                            onChange={(e) =>
                                                setCourseLangFilter(
                                                    {
                                                        ...courseLangFilter,
                                                        // Spanish: e.target.checked
                                                        Español: e.target.checked
                                                    }

                                                )}
                                        />
                                        <CheckBox
                                            // content={"French"}
                                            content={"Francés"}
                                            // checked={courseLangFilter.French}
                                            checked={courseLangFilter.Francés}
                                            onChange={(e) =>
                                                setCourseLangFilter(
                                                    {
                                                        ...courseLangFilter,
                                                        // French: e.target.checked
                                                        Francés: e.target.checked
                                                    }
                                                )}
                                        />
                                        <CheckBox
                                            // content={"Catalan"}
                                            content={"Catalán"}
                                            // checked={courseLangFilter.Catalan}
                                            checked={courseLangFilter.Catalán}
                                            onChange={(e) =>
                                                setCourseLangFilter(
                                                    {
                                                        ...courseLangFilter,
                                                        // Catalan: e.target.checked
                                                        Catalán: e.target.checked
                                                    }
                                                )
                                            }
                                        />
                                        <CheckBox
                                            // content={"Italian"}
                                            content={"Italiano"}
                                            // checked={courseLangFilter.Italian}
                                            checked={courseLangFilter.Italiano}
                                            onChange={(e) =>
                                                setCourseLangFilter(
                                                    {
                                                        ...courseLangFilter,
                                                        // Italian: e.target.checked
                                                        Italiano: e.target.checked
                                                    }
                                                )}
                                        />
                                        <CheckBox
                                            // content={"Portuguese"}
                                            content={"Portugués"}
                                            // checked={courseLangFilter.Portuguese}
                                            checked={courseLangFilter.Portugués}
                                            onChange={(e) =>
                                                setCourseLangFilter(
                                                    {
                                                        ...courseLangFilter,
                                                        // Portuguese: e.target.checked
                                                        Portugués: e.target.checked
                                                    }
                                                )}
                                        />
                                        <CheckBox
                                            // content={"German"}
                                            content={"Alemán"}
                                            // checked={courseLangFilter.German}
                                            checked={courseLangFilter.Alemán}
                                            onChange={(e) =>
                                                setCourseLangFilter(
                                                    {
                                                        ...courseLangFilter,
                                                        // German: e.target.checked
                                                        Alemán: e.target.checked
                                                    }
                                                )}
                                        />

                                        <CheckBox
                                            // content={"Other"}
                                            content={"Otros"}
                                            // checked={courseLangFilter.Other}
                                            checked={courseLangFilter.Otros}
                                            onChange={(e) =>
                                                setCourseLangFilter(
                                                    {
                                                        ...courseLangFilter,
                                                        // Other: e.target.checked
                                                        Otros: e.target.checked
                                                    }
                                                )}
                                        />
                                    </div>

                                    <h6 className="font-weight-bold mt-3">
                                        {/* Location Type */}
                                        Localización
                                    </h6>
                                    <div className="ml-3">
                                        <CheckBox
                                            content={"Online"}
                                            checked={locationTypeFilter.Online}
                                            onChange={(e) =>
                                                setLocationTypeFilter(
                                                    { ...locationTypeFilter, Online: e.target.checked }
                                                )}
                                        />
                                        <CheckBox
                                            // content={"Offline"}
                                            content={"Presencia"}
                                            // checked={locationTypeFilter.Offline}
                                            checked={locationTypeFilter.Presencia}
                                            onChange={(e) =>
                                                setLocationTypeFilter(
                                                    {
                                                        ...locationTypeFilter,
                                                        // Offline: e.target.checked
                                                        Presencia: e.target.checked
                                                    }
                                                )}
                                        />
                                    </div>

                                    <h6 className="font-weight-bold mt-3">
                                        {/* Categories */}
                                        Categorías
                                    </h6>
                                    <div className="ml-3">
                                        <CheckBox
                                            // content={"Culinary"}
                                            content={"Cocina"}
                                            // checked={categoriesFilter.Culinary}
                                            checked={categoriesFilter.Cocina}
                                            onChange={(e) =>
                                                setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // Culinary: e.target.checked
                                                        Cocina: e.target.checked
                                                    }
                                                )}
                                        />
                                        <CheckBox
                                            onChange={(e) =>
                                                setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // Business: e.target.checked
                                                        Negocios: e.target.checked
                                                    }
                                                )}
                                            // content={"Business"}
                                            content={"Negocios"}
                                            // checked={categoriesFilter.Business}
                                            checked={categoriesFilter.Negocios}
                                        />
                                        <CheckBox
                                            onChange={(e) =>
                                                setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // PersonalDevelopment: e.target.checked
                                                        DesarrolloPersonal: e.target.checked
                                                    }
                                                )}
                                            // content={"Personal Development"}
                                            content={"Desarrollo Personal"}
                                            // checked={categoriesFilter.PersonalDevelopment}
                                            checked={categoriesFilter.DesarrolloPersonal}
                                        />
                                        <CheckBox
                                            onChange={(e) =>
                                                setCategoriesFilter(
                                                    { ...categoriesFilter, Marketing: e.target.checked }
                                                )}
                                            content={"Marketing"}
                                            checked={categoriesFilter.Marketing}
                                        />
                                        <CheckBox
                                            onChange={(e) =>
                                                setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // HumanResource: e.target.checked
                                                        RecursosHumanos: e.target.checked
                                                    }
                                                )}
                                            content={"Recursos Humanos"}
                                            // checked={categoriesFilter.HumanResource}
                                            checked={categoriesFilter.RecursosHumanos}
                                        />
                                        <CheckBox
                                            onChange={(e) =>
                                                setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        LiderazgoYGestión: e.target.checked
                                                        // LeadershipAndManagement: e.target.checked
                                                    }
                                                )}
                                            // content={"Leadership and Management"}
                                            content={"Liderazgo y Gestión"}
                                            // checked={categoriesFilter.LeadershipAndManagement}
                                            checked={categoriesFilter.LiderazgoYGestión}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // Language: e.target.checked
                                                        Idiomas: e.target.checked
                                                    }
                                                )}
                                            // content={"Language"}
                                            content={"Idiomas"}
                                            // checked={categoriesFilter.Language}
                                            checked={categoriesFilter.Idiomas}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // TestPreparation: e.target.checked
                                                        PreparaciónDeExámenes: e.target.checked
                                                    }
                                                )}
                                            // content={"Test Preparation"}
                                            content={"Preparación de exámenes"}
                                            // checked={categoriesFilter.TestPreparation}
                                            checked={categoriesFilter.PreparaciónDeExámenes}

                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // Pastry: e.target.checked
                                                        Pastelería: e.target.checked
                                                    }
                                                )
                                            }
                                            // content={"Pastry"}
                                            content={"Pastelería"}
                                            // checked={categoriesFilter.Pastry}
                                            checked={categoriesFilter.Pastelería}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // CruisesManagement: e.target.checked
                                                        GestiónDeCruceros: e.target.checked
                                                    }
                                                )
                                            }
                                            content={"Cruises Management"}
                                            // checked={categoriesFilter.CruisesManagement}
                                            checked={categoriesFilter.GestiónDeCruceros}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // Oenology: e.target.checked
                                                        Enología: e.target.checked
                                                    }
                                                )
                                            }
                                            // content={"Oenology"}
                                            content={"Enología"}
                                            // checked={categoriesFilter.Oenology}
                                            checked={categoriesFilter.Enología}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // HospitalityManagement: e.target.checked
                                                        DirecciónHotelera: e.target.checked
                                                    }
                                                )}
                                            // content={"Hospitality Management"}
                                            content={"Dirección Hotelera"}
                                            // checked={categoriesFilter.HospitalityManagement}
                                            checked={categoriesFilter.DirecciónHotelera}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // SalesAndMarketing: e.target.checked
                                                        VentasYMarketing: e.target.checked
                                                    }
                                                )}
                                            // content={"Sales and Marketing"}
                                            content={"Ventas y Marketing"}
                                            // checked={categoriesFilter.SalesAndMarketing}
                                            checked={categoriesFilter.VentasYMarketing}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // EventManagement: e.target.checked
                                                        GestiónDeEventos: e.target.checked
                                                    }
                                                )}
                                            // content={"Event Management"}
                                            content={"Gestión de Eventos"}
                                            // checked={categoriesFilter.EventManagement}
                                            checked={categoriesFilter.GestiónDeEventos}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    { ...categoriesFilter, RevenueManagement: e.target.checked }
                                                )}
                                            content={"Revenue Management"}
                                            checked={categoriesFilter.RevenueManagement}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // Reception: e.target.checked
                                                        Recepción: e.target.checked
                                                    }
                                                )}
                                            // content={"Reception"}
                                            content={"Recepción"}
                                            // checked={categoriesFilter.Reception}
                                            checked={categoriesFilter.Recepción}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    { ...categoriesFilter, FoodAndBeverages: e.target.checked }
                                                )}
                                            content={"Food and Beverages"}
                                            checked={categoriesFilter.FoodAndBeverages}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    { ...categoriesFilter, Spa: e.target.checked }
                                                )}
                                            content={"Spa"}
                                            checked={categoriesFilter.Spa}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // Tourism: e.target.checked
                                                        Turismo: e.target.checked
                                                    }
                                                )}
                                            // content={"Tourism"}
                                            content={"Turismo"}
                                            // checked={categoriesFilter.Tourism}
                                            checked={categoriesFilter.Turismo}
                                        />
                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        // BusinessSkills: e.target.checked
                                                        HabilidadesEmpresariales: e.target.checked
                                                    }
                                                )}
                                            // content={"Business Skills"}
                                            content={"Habilidades Empresariales"}
                                            // checked={categoriesFilter.BusinessSkills}
                                            checked={categoriesFilter.HabilidadesEmpresariales}
                                        />

                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        GuíaTurístico: e.target.checked
                                                    }
                                                )}
                                            content={"Guía Turístico"}
                                            checked={categoriesFilter.GuíaTurístico}
                                        />

                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        Pisos: e.target.checked
                                                    }
                                                )}
                                            content={"Pisos"}
                                            checked={categoriesFilter.Pisos}
                                        />

                                        <CheckBox
                                            onChange={
                                                (e) => setCategoriesFilter(
                                                    {
                                                        ...categoriesFilter,
                                                        Otros: e.target.checked
                                                    }
                                                )}
                                            content={"Otros"}
                                            checked={categoriesFilter.Otros}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }


                <div className="container mt-5 col">
                    <div className={CSS.cardContainer} >
                        {paginatedCourses?.map((course, index) => (
                            <div className={CSS.courseCards} key={course._id} style={{ minWidth: "" }}>
                                <div className="card" style={{ border: '1px solid #E4B49D' }}>
                                    <img className="card-img-top" src={`${course.banner_image}`} alt="CardImageCap" style={cardImageStyle} />
                                    {course.isFree &&
                                        <span style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '-5px',
                                            backgroundColor: '#15803d',
                                            color: 'white',
                                            padding: '5px 20px',
                                            borderRadius: '5px',
                                            textAlign: 'right'
                                        }}>
                                            {/* Free */}
                                            Gratis
                                        </span>
                                    }
                                    <div className="card-body" style={{ padding: "10px" }}>
                                        <div style={{ minHeight: "11rem", overflow: "hidden" }}>
                                            <h6 className="card-title" style={{ fontWeight: 'bold' }}>
                                                {course.title}
                                            </h6>

                                            <p className="card-text" style={{ opacity: 0.9, fontSize: "16px!important" }}>

                                                {course.description.substr(0, 150)}...
                                            </p>
                                        </div>

                                        <div className="row mt-1">
                                            <p className="card-text ml-3" style={{ opacity: 0.8 }}>
                                                <IoMdTime /> <small> {course.duration} </small>
                                            </p>
                                            <p className="card-text ml-auto mr-3" style={{ opacity: 0.8 }}>
                                                <FaArrowUpRightDots /> <small> {course.difficulty} </small>
                                            </p>
                                        </div>
                                        <Link to={`/courses/${course._id}`} >
                                            <button className=" btn w-100" style={{ background: '#E4B49D', fontWeight: 600 }}>
                                                Enroll Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-4 ml-5'>
                <ReactPaginate
                    breakLabel="..."
                    // nextLabel="next >"
                    nextLabel="Siguiente >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    // previousLabel="< previous"
                    previousLabel="< Anterior"
                    renderOnZeroPageCount={null}
                    // CSS
                    containerClassName='pagination justify-content-center'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    activeClassName='active'
                    forcePage={currentPage.current - 1}
                />
            </div>

            {/* <input placeholder='limit' onChange={(e) => setLimit(parseInt(e.target.value))} /> */}
            {/* <button
                onClick={changeLimit}
            >  Set Limit  </button> */}
        </div >

    );
};

export default Cards;