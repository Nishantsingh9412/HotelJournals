import React, { useEffect, useRef, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';

import CheckBox from "./CheckBoxSmallScreens";
import { courseFilterAction } from '../../redux/actions/courseAdmin';


const LeftSidebar = ({ onClose }) => {
  const btnRef = React.useRef();
  const dispatch = useDispatch();

  // action starts
  const setFilteredCurrentPage = (page) => ({
    type: 'SET_FILTERED_CURRENT_PAGE',
    data: page,
  });
  // action ends

  

  // ------------------- pagination for filtered courses start -------------------------------------------
  const [filteredPaginatedCourses, setFilteredPaginatedCourses] = useState()
  const [filteredLimit, setFilteredLimit] = useState(12);
  // const [filteredPageCount, setFilteredPageCount] = useState(1);
  // const filteredCurrentPage = useRef()
  const filteredCurrentPageR = useSelector((state) => state.paginationReducer.filteredCurrentPage)
  
  // ------------------- pagination for filtered courses end -------------------------------------------


  const [courseValueFilter, setCourseValueFilter] = useState({
    // isFree: false,
    Gratis: false,
    // isPaid: false
    Pago: false
  })

  const [locationTypeFilter, setLocationTypeFilter] = useState({
    Online: false,
    Offline: false,
    // Presencial: false
  })

  const [courseTypesFilter, setCourseTypesFilter] = useState({
    // Bachelors: false,
    Licenciatura: false,
    // Masters: false,
    Máster: false,
    Diploma: false,
    // Professional: false,
    "Certificados Profesionales": false,
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
    "Desarrollo Personal": false,
    Marketing: false,
    // HumanResource: false,
    "Recursos Humanos": false,
    // LeadershipAndManagement: false,
    "Liderazgo Y Gestión": false,
    // Language: false,
    Idiomas: false,
    // TestPreparation: false,
    "Preparación de Exámenes": false,
    // Pastry: false,
    Pastelería: false,
    // CruisesManagement: false,
    "Gestión de Cruceros": false,
    // Oenology: false,
    Enología: false,
    // HospitalityManagement: false,
    "Dirección Hotelera": false,
    // SalesAndMarketing: false,
    VentasYMarketing: false,
    // EventManagement: false,
    "Gestión de Eventos": false,
    "Revenue Management": false,
    // Reception: false,
    Recepción: false,
    "F&B": false,
    Spa: false,
    // Tourism: false,
    Turismo: false,
    // BusinessSkills: false
    "Habilidades Empresariales": false,
    "Guía Turístico": false,
    Pisos: false,
    Otros: false,
  })

  // useEffect(() => {
  //     dispatch(GetCourse());
  // }, [dispatch]);

  //  ------------------------ Filtration of all courses ---------------

  const handleClearAllFilters = () => {
    setFilteredPaginatedCourses(null);
    setCourseTypesFilter({
      // Bachelors: false,
      Licenciatura: false,
      // Masters: false,
      Máster: false,
      Diploma: false,
      // Professional: false,
      "Certificados Profesionales": false,
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
      "Desarrollo Personal": false,
      Marketing: false,
      // HumanResource: false,
      "Recursos Humanos": false,
      // LeadershipAndManagement: false,
      "Liderazgo Y Gestión": false,
      // Language: false,
      Idiomas: false,
      // TestPreparation: false,
      "Preparación de Exámenes": false,
      // Pastry: false,
      Pastelería: false,
      // CruisesManagement: false,
      "Gestión de Cruceros": false,
      // Oenology: false,
      Enología: false,
      // HospitalityManagement: false,
      "Dirección Hotelera": false,
      // SalesAndMarketing: false,
      "Ventas Y Marketing": false,
      // EventManagement: false,
      "Gestión de Eventos": false,
      "Revenue Management": false,
      // Reception: false,
      Recepción: false,
      "F&B": false,
      Spa: false,
      // Tourism: false,
      Turismo: false,
      // BusinessSkills: false
      "Habilidades Empresariales": false,
      "Guía Turístico": false,
      Pisos: false,
      Otros: false,
    })

    setLocationTypeFilter({
      Online: false,
      Offline: false,
      // Presencial: false
    })

    setCourseValueFilter({
      // isFree: false,
      Gratis: false,
      // isPaid: false
      Pago: false
    })
  }

  // const handlePageChangeForFilteredCourse = (e) => {
  //   console.log(e);
  //   // filteredCurrentPage.current = e.selected + 1;
  //   handleCoursesFilter();
  // }

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

    // dispatch(courseFilterAction(params, filteredCurrentPage.current, filteredLimit)).then((res) => {
    dispatch(courseFilterAction(params, filteredCurrentPageR, filteredLimit)).then((res) => {
      if (res.success) {
        // console.log(res.data);
        // setFilteredPageCount(res.data.result.pageCount);
        // setFilteredPaginatedCourses(res.data.result.pageinatedData);
        // setShowFilteredCourse(!showFilteredCourse);
      // } else {
      //   console.log(res.message);
      }
    }).catch((err) => {
      console.log('Error', err)
    })

  }

  useEffect(() => {
    // filteredCurrentPage.current = 1;
    dispatch(setFilteredCurrentPage(1));
    handleCoursesFilter();
  }, [courseLangFilter,
    courseTypesFilter,
    categoriesFilter,
    courseValueFilter,
    locationTypeFilter,
    // filteredCurrentPage,
    filteredLimit
  ])

  return (
    <>
      <div>

        <Drawer
          isOpen={true}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent style={{ maxWidth: "50%" }}>
            <DrawerCloseButton />
            <DrawerHeader>FILTER BY</DrawerHeader>

            <DrawerBody>
              <div className="ml-2 pb-3">
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
                      <div
                        style={{
                          display: 'flex',
                          marginLeft: '2rem',
                          marginTop: '0.4rem',
                          gap: '0.2rem',
                        }}
                      >
                        <p>
                          {/* Clear All */}
                          Eliminar Filtros
                        </p>
                        <RxCross2
                          style={{ marginTop: '0.2rem' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ml-2 pb-3">
                      <hr style={{ background: "#E4B49D", marginTop: '0' }} />

                      <h6 className="font-weight-bold">Course Types</h6>
                      <div className="ml-3">
                        <CheckBox
                          // content={"Bachelors"}
                          id="Licenciaturaside"
                          htmlFor="Licenciaturaside"
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
                          id="MásterSide"
                          htmlFor="MásterSide"
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
                          id="DiplomaSide"
                          htmlFor="DiplomaSide"
                          content={"Diploma"}
                          checked={courseTypesFilter.Diploma}
                          onChange={(e) =>
                            setCourseTypesFilter(
                              { ...courseTypesFilter, Diploma: e.target.checked }
                            )}
                        />
                        <CheckBox
                          // content={"Professional"}
                          id="CertificadosProfesionalesSide"
                          htmlFor="CertificadosProfesionalesSide"
                          content={"Certificados Profesionales"}
                          // checked={courseTypesFilter.Professional}
                          checked={courseTypesFilter["Certificados Profesionales"]}
                          onChange={(e) =>
                            setCourseTypesFilter(
                              {
                                ...courseTypesFilter,
                                // Professional: e.target.checked
                                ["Certificados Profesionales"]: e.target.checked
                              }
                            )}
                        />
                        <CheckBox
                          // content={"Short Course"}
                          content={"Curso"}
                          id="CursoSide"
                          htmlFor="CursoSide"
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
                            id="exampleRadiosSidebar1"
                            value="option1"
                          />
                          <label class="form-check-label" htmlFor="exampleRadiosSidebar1">
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
                            id="exampleRadiosSidebar2"
                            value="option2"
                          />
                          <label class="form-check-label" htmlFor="exampleRadiosSidebar2">
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
                          id="InglésSide"
                          htmlFor="InglésSide"
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
                          id="EspañolSide"
                          htmlFor="EspañolSide"
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
                          id="FrancésSide"
                          htmlFor="FrancésSide"
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
                          id="CatalánSide"
                          htmlFor="CatalánSide"
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
                          id="ItalianoSide"
                          htmlFor="ItalianoSide"
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
                          id="PortuguésSide"
                          htmlFor="PortuguésSide"
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
                          id="AlemánSide"
                          htmlFor="AlemánSide"
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
                          id="OtrosSide"
                          htmlFor="OtrosSide"
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
                          id="OnlineSide"
                          htmlFor="OnlineSide"
                          content={"Online"}
                          checked={locationTypeFilter.Online}
                          onChange={(e) =>
                            setLocationTypeFilter(
                              { ...locationTypeFilter, Online: e.target.checked }
                            )}
                        />
                        <CheckBox
                          // content={"Offline"}
                          id="PresencialSide"
                          htmlFor="PresencialSide"
                          content={"Presencial"}
                          checked={locationTypeFilter.Offline}
                          // checked={locationTypeFilter.Presencial}
                          onChange={(e) =>
                            setLocationTypeFilter(
                              {
                                ...locationTypeFilter,
                                Offline: e.target.checked
                                // Presencial: e.target.checked
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
                          id="CocinaSide"
                          htmlFor="CocinaSide"
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
                          id="NegociosSide"
                          htmlFor="NegociosSide"
                          // checked={categoriesFilter.Business}
                          checked={categoriesFilter.Negocios}
                        />
                        <CheckBox
                          onChange={(e) =>
                            setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                // PersonalDevelopment: e.target.checked
                                ["Desarrollo Personal"]: e.target.checked
                              }
                            )}
                          // content={"Personal Development"}
                          content={"Desarrollo Personal"}
                          id="DesarrolloPersonalSide"
                          htmlFor="DesarrolloPersonalSide"
                          // checked={categoriesFilter.PersonalDevelopment}
                          checked={categoriesFilter["Desarrollo Personal"]}
                        />
                        <CheckBox
                          onChange={(e) =>
                            setCategoriesFilter(
                              { ...categoriesFilter, Marketing: e.target.checked }
                            )}
                          content={"Marketing"}
                          id="MarketingSide"
                          htmlFor="MarketingSide"
                          checked={categoriesFilter.Marketing}
                        />
                        <CheckBox
                          onChange={(e) =>
                            setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                // HumanResource: e.target.checked
                                ["Recursos Humanos"]: e.target.checked
                              }
                            )}
                          content={"Recursos Humanos"}
                          id="RecursosHumanosSide"
                          htmlFor="RecursosHumanosSide"
                          // checked={categoriesFilter.HumanResource}
                          checked={categoriesFilter["Recursos Humanos"]}
                        />
                        <CheckBox
                          onChange={(e) =>
                            setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                ["Liderazgo Y Gestión"]: e.target.checked
                                // LeadershipAndManagement: e.target.checked
                              }
                            )}
                          // content={"Leadership and Management"}
                          content={"Liderazgo Y Gestión"}
                          id="LiderazgoYGestiónSide"
                          htmlFor="LiderazgoYGestiónSide"
                          // checked={categoriesFilter.LeadershipAndManagement}
                          checked={categoriesFilter["Liderazgo Y Gestión"]}
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
                          id="IdiomasSide"
                          htmlFor="IdiomasSide"
                          // checked={categoriesFilter.Language}
                          checked={categoriesFilter.Idiomas}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                // TestPreparation: e.target.checked
                                ["Preparación de Exámenes"]: e.target.checked
                              }
                            )}
                          // content={"Test Preparation"}
                          content={"Preparación de Exámenes"}
                          id="PreparacióndeExámenesSide"
                          htmlFor="PreparacióndeExámenesSide"
                          // checked={categoriesFilter.TestPreparation}
                          checked={categoriesFilter["Preparación de Exámenes"]}

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
                          id="PasteleríaSide"
                          htmlFor="PasteleríaSide"
                          // checked={categoriesFilter.Pastry}
                          checked={categoriesFilter.Pastelería}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                // CruisesManagement: e.target.checked
                                ["Gestión de Cruceros"]: e.target.checked
                              }
                            )
                          }
                          // content={"Cruises Management"}
                          content={"Gestión de Cruceros"}
                          id="GestióndeCrucerosSide"
                          htmlFor="GestióndeCrucerosSide"
                          // checked={categoriesFilter.CruisesManagement}
                          checked={categoriesFilter["Gestión de Cruceros"]}
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
                          id="EnologíaSide"
                          htmlFor="EnologíaSide"
                          // checked={categoriesFilter.Oenology}
                          checked={categoriesFilter.Enología}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                // HospitalityManagement: e.target.checked
                                ["Dirección Hotelera"]: e.target.checked
                              }
                            )}
                          // content={"Hospitality Management"}
                          content={"Dirección Hotelera"}
                          id="DirecciónHoteleraSide"
                          htmlFor="DirecciónHoteleraSide"
                          // checked={categoriesFilter.HospitalityManagement}
                          checked={categoriesFilter["Dirección Hotelera"]}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                // SalesAndMarketing: e.target.checked
                                ["Ventas Y Marketing"]: e.target.checked
                              }
                            )}
                          // content={"Sales and Marketing"}
                          content={"Ventas Y Marketing"}
                          id="VentasYMarketingSide"
                          htmlFor="VentasYMarketingSide"
                          // checked={categoriesFilter.SalesAndMarketing}
                          checked={categoriesFilter["Ventas Y Marketing"]}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                // EventManagement: e.target.checked
                                ["Gestión de Eventos"]: e.target.checked
                              }
                            )}
                          // content={"Event Management"}
                          content={"Gestión de Eventos"}
                          id="GestióndeEventosSide"
                          htmlFor="GestióndeEventosSide"
                          // checked={categoriesFilter.EventManagement}
                          checked={categoriesFilter["Gestión de Eventos"]}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                ["Revenue Management"]: e.target.checked
                              }
                            )}
                          content={"Revenue Management"}
                          id="RevenueManagementSide"
                          htmlFor="RevenueManagementSide"
                          checked={categoriesFilter["Revenue Management"]}
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
                          id="RecepciónSide"
                          htmlFor="RecepciónSide"
                          // checked={categoriesFilter.Reception}
                          checked={categoriesFilter.Recepción}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                ["F&B"]: e.target.checked
                              }
                            )}
                          content={"F&B"}
                          id="F&BSide"
                          htmlFor="F&BSide"
                          checked={categoriesFilter["F&B"]}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              { ...categoriesFilter, Spa: e.target.checked }
                            )}
                          content={"Spa"}
                          id="SpaSide"
                          htmlFor="SpaSide"
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
                          id="TurismoSide"
                          htmlFor="TurismoSide"
                          // checked={categoriesFilter.Tourism}
                          checked={categoriesFilter.Turismo}
                        />
                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                // BusinessSkills: e.target.checked
                                ["Habilidades Empresariales"]: e.target.checked
                              }
                            )}
                          // content={"Business Skills"}
                          content={"Habilidades Empresariales"}
                          id="HabilidadesEmpresarialesSide"
                          htmlFor="HabilidadesEmpresarialesSide"
                          // checked={categoriesFilter.BusinessSkills}
                          checked={categoriesFilter["Habilidades Empresariales"]}
                        />

                        <CheckBox
                          onChange={
                            (e) => setCategoriesFilter(
                              {
                                ...categoriesFilter,
                                ["Guía Turístico"]: e.target.checked
                              }
                            )}
                          content={"Guía Turístico"}
                          id="GuíaTurísticoSide"
                          htmlFor="GuíaTurísticoSide"
                          checked={categoriesFilter["Guía Turístico"]}
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
                          id="PisosSide"
                          htmlFor="PisosSide"
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
                          content={"Otros Categorías"}
                          id="OtrosCategoriesSide"
                          htmlFor="OtrosCategoriesSide"
                          checked={categoriesFilter.Otros}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}

export default LeftSidebar