import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Toast } from 'react-bootstrap';
import PuffLoader from "react-spinners/PuffLoader";
// react select
import Select from 'react-select'

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons 
import { FaBrain, FaLightbulb, FaPencil } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
// Custom CSS
import PrCss from './userProfile.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSkillsAction, getUserSkillsAction, setUserSkillsAction, updateUserSkillsAction } from '../../redux/actions/userProfile/userSkills';
import { RxPencil1 } from 'react-icons/rx';


function MyVerticallyCenteredModal(props) {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [skillsData, setSkillsData] = useState([]);  // react select data
    const dispatch = useDispatch();

    const options = [
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

    const submitKeySkills = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (skillsData.length === 0) {
            toast.error("Please select at least one skill");
            setLoading(false);
            return;
        }

        const skills = {
            skills: skillsData,
            userId: id
        }

        const response = await dispatch(setUserSkillsAction(skills));
        if (response.success) {
            const respo2 = await dispatch(getUserSkillsAction(id))
            if (respo2.success) {
                props.onHide();
            } else {
                toast.info('Please refresh the page and try again', { position: 'bottom-right' })
            }
        }
        setLoading(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props.onHide}
        >
            <Modal.Header
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                closeButton
            >
                <Modal.Title id="contained-modal-title-vcenter"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <FaLightbulb size={'20'} />
                    <h5 className='mt-2'>
                        {/* Add Skills */}
                        Agregar habilidades

                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>
                    {/* <b> Show your skills to recruiters </b> */}
                    <b>  Muestra tus habilidades a los reclutadores </b>
                </h6>
                <p>
                    {/* Add your skills to show recruiters what you are good fit for their organization */}
                    Añade tus habilidades para mostrar a los reclutadores que eres la mejor opción para su organización
                </p>
                <form>
                    <label htmlFor="skills">
                        {/* Skills */}
                        Habilidades
                    </label>
                    <Select
                        isMulti
                        options={options}
                        onChange={(selectedops) => setSkillsData(selectedops.map(option => option.value))}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={submitKeySkills}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'>  </span>
                        </div>
                    </> :
                        // 'Add Skills'
                        'Agregar habilidades'
                    }
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


function MyVerticallyCenteredModalEditSkills(props) {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [skillsData, setSkillsData] = useState([]);  // react select data
    const [loadingdel, setLoadingdel] = useState(false); // for delete button loading
    const getSkills = props.skills;
    const skill_id = props.skillid;
    const dispatch = useDispatch();

    const options = [
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
        if (getSkills) {
            setSkillsData(getSkills)
        }
    }, [getSkills])

    const submitKeySkillsEdited = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (skillsData.length === 0) {
            toast.error("Please select at least one skill");
            setLoading(false);
            return;
        }

        const skills = {
            skills: skillsData,
        }

        const response = await dispatch(updateUserSkillsAction(skill_id, skills));
        if (response.success) {
            const respo2 = await dispatch(getUserSkillsAction(id))
            if (respo2.success) {
                props.onHide();
            } else {
                toast.info('Please refresh the page and try again')
            }
        }
        setLoading(false);
    }

    const handledeleteSkills = async (e) => {
        e.preventDefault();
        setLoadingdel(true);
        const response = await dispatch(deleteSkillsAction(skill_id));
        if (response.success) {
            const respo2 = await dispatch(getUserSkillsAction(id));
            if (respo2.success) {
                props.onHide();
            } else {
                toast.info('Please refresh the page and try again')
            }
        }
        setLoadingdel(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props.onHide}
        >
            <Modal.Header
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                closeButton
            >
                <Modal.Title id="contained-modal-title-vcenter"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <FaLightbulb size={'20'} />
                    <h5 className='mt-2'>
                        {/* Edit Skills */}
                        Editar habilidades
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>
                    {/* <b> Show your skills to recruiters </b> */}
                    <b>  Muestra tus habilidades a los reclutadores </b>
                </h6>
                <p>
                    {/* Add your skills to show recruiters what you are good fit for their organization */}
                    Añade tus habilidades para mostrar a los reclutadores
                    que eres la mejor opción para su organización
                </p>
                <form>
                    <label htmlFor="skills">
                        {/* Skills */}
                        Habilidades
                    </label>
                    <Select
                        isMulti
                        options={options}
                        value={skillsData?.map((skill) => ({ value: skill, label: skill }))} // setting the value of react select
                        onChange={(selectedops) => setSkillsData(selectedops.map(option => option.value))}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={handledeleteSkills} className='btn btn-danger' >
                    {loadingdel ?
                        <>
                            <div className='d-flex'>
                                <PuffLoader
                                    size={25}
                                    color="#ffffff"
                                />
                                <span className='pl-2'>  </span>
                            </div>
                        </> :
                        // 'Remove Skills'
                        'Eliminar habilidades'
                    }
                </Button>
                <Button onClick={submitKeySkillsEdited}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'>  </span>
                        </div>
                    </> :
                        // 'Save'
                        'Guardar'


                    }
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


const KeySkills = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalEditSkillsShow, setModalEditSkillsShow] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserSkillsAction(id));
    }, [])

    const getSkills_from_reducer = useSelector((state) => state.getskillsReducer)
    const getskills = getSkills_from_reducer?.data?.result[0]?.skills;
    const skills_id = getSkills_from_reducer?.data?.result[0]?._id
    console.log(getskills)

    return (
        <div id='skillscroll'>
            <ToastContainer />
            {!getskills ?
                (<>
                    <div className={` ${PrCss.addSections}`} style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
                        <div className="card w-100">
                            <div className="card-body text-center">
                                <i className='fa-solid fa-plus'></i>
                                <p className='card-text'>
                                    {/* Add your skills */}
                                    Añade tus habilidades
                                </p>
                            </div>
                        </div>
                    </div>
                </>) :
                <>
                    <div className="mt-4 p-3"
                        style=
                        {{
                            boxShadow: '14px 10px 20px 3px #d3beae',
                            borderRadius: '25px 25px 25px 25px'
                        }}
                    >
                        <div className='d-flex '
                            onClick={() => setModalEditSkillsShow(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            <h5>
                                {/* Skills */}
                                Habilidades
                            </h5>
                            <div
                                style={{marginLeft: '10px'}}
                            >
                                <RxPencil1 />
                            </div>
                        </div>
                        {/* <div className="d-flex flex-wrap" style={{ width: '50vw' }}>
                        {
                            getskills.map((skill, index) => (
                                <div key={index} className="card mt-3"
                                    style=
                                    {{
                                        boxShadow: '14px 10px 20px 3px #d3beae',
                                        borderRadius: '25px 25px 25px 25px'
                                    }}
                                >
                                    <div className="card-body">
                                        <div className='row'>
                                            <h5 className="card-title ml-3">{skill}</h5>
                                            <div className='mt-1' 
                                                style={{ cursor: 'pointer' }}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div> */}
                        <div className="d-flex flex-wrap">
                            {
                                getskills.map((skill, index) => (
                                    <div key={index} className="m-2"
                                        style=
                                        {{
                                            padding: '5px',
                                            // backgroundColor: '#efefea',
                                            borderRadius: '25px',
                                            border: '1px solid rgb(71, 77, 106)',
                                            // boxShadow: '5px 5px 10px 2px #efefea',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setModalEditSkillsShow(true)}
                                    >
                                        <small>{skill}</small>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </>

            }
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


            <MyVerticallyCenteredModalEditSkills
                show={modalEditSkillsShow}
                skills={getskills}
                skillid={skills_id}
                onHide={() => setModalEditSkillsShow(false)}
            />
        </div>



    )
}

export default KeySkills
