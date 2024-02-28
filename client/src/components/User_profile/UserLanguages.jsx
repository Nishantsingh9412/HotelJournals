import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// React bootstrap 
import Modal from 'react-bootstrap/Modal'
import { Button, Toast } from 'react-bootstrap';
// Loader
import PuffLoader from "react-spinners/PuffLoader";
// React toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// React icons 
import { FaBriefcase } from "react-icons/fa";
import { FaPencil } from 'react-icons/fa6';
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineLanguage } from "react-icons/md";

import PrCss from './userProfile.module.css';
import { deleteUserLanguageAction, getUserLanguageAction, setUserLanguageAction, updateUserLanguageAction } from '../../redux/actions/userProfile/userLanguage';


function MyVerticallyCenteredModal(props) {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState('');
    const [proficiency, setProficiency] = useState('');

    const dispatch = useDispatch();

    const handleAddLanguage = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!language || !proficiency) {
            setLoading(false);
            return toast.error("Please fill the required fields");;
        }
        const LanguageData = {
            language,
            proficiency,
            userId: id
        }

        const response = await dispatch(setUserLanguageAction(LanguageData));
        if (response.success) {
            const respo2 = await dispatch(getUserLanguageAction(id));
            if (respo2) {
                props.onHide();
            } else {
                toast.info('Refresh page to see changes')
            }
        } else {
            return toast.error("Error in Adding Language");
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
            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <span ><MdOutlineLanguage /> Select Language </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Select Language </b></h6>
                <form>
                    <div>
                        <div className="form-group col-md-6">
                            <label htmlFor="language">
                                Language
                                <small className='text-danger'> * </small>
                            </label>
                            <select
                                className="form-control"
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="">Select Language</option>
                                <option value="English">English</option>
                                <option value="Urdu">Urdu</option>
                                <option value="Punjabi">Punjabi</option>
                                <option value="Sindhi">Sindhi</option>
                                <option value="Pashto">Pashto</option>
                                <option value="Balochi">Balochi</option>
                                <option value="Saraiki">Saraiki</option>
                                <option value="Hindko">Hindko</option>
                                <option value="Kashmiri">Kashmiri</option>
                                <option value="Brahui">Brahui</option>
                                <option value="Shina">Shina</option>
                                <option value="Khowar">Khowar</option>
                                <option value="Wakhi">Wakhi</option>
                                <option value="Burushaski">Burushaski</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="proficiency">
                                Proficiency
                                <small className='text-danger'> * </small>
                            </label>
                            <select
                                className="form-control"
                                onChange={(e) => setProficiency(e.target.value)}
                            >
                                <option value="">Select Proficiency</option>
                                <option value="Basic">Basic</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Conversational">Conversational</option>
                                <option value="Fluent">Fluent</option>
                                <option value="Native">Native</option>
                            </select>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={handleAddLanguage}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Adding Language... </span>
                        </div>
                    </> : 'Add Language'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function MyVerticallyCenteredModalEditLang(props) {


    const { id } = useParams();
    const editId = props.editid;
    const delid = props.delid;
    const allLanguages = props.allLanguages;
    const [delLoading, setdelLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState('');
    const [proficiency, setProficiency] = useState('');
    const dispatch = useDispatch();

    const selectedLang = allLanguages?.filter((lang) => lang._id === editId)[0];
    console.log(selectedLang)

    useEffect(() => {
        if (selectedLang) {
            setLanguage(selectedLang.language)
            setProficiency(selectedLang.proficiency)
        }
    }, [selectedLang])

    const handleEditLanguage = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!language || !proficiency) {
            setLoading(false);
            return toast.error("Please fill the required fields");;
        }
        const LanguageData = {
            language,
            proficiency
        }

        const response = await dispatch(updateUserLanguageAction(editId, LanguageData));
        if (response.success) {
            const respo2 = await dispatch(getUserLanguageAction(id));
            if (respo2) {
                props.onHide();
            } else {
                toast.info('Refresh page to see changes')
            }
        } else {
            return toast.error("Error in Adding Language");
        }
        setLoading(false);
    }

    const handledeleteLanguage = async (e) => {
        e.preventDefault();
        setdelLoading(true);
        const response = await dispatch(deleteUserLanguageAction(delid));
        if (response.success) {
            const respo2 = await dispatch(getUserLanguageAction(id));
            if (respo2) {
                props.onHide();
            } else {
                toast.info('Refresh page to see changes')
            }
        } else {
            return toast.error("Error in Deleting Language");
        }
        setdelLoading(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props.onHide}
        >
            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <span ><MdOutlineLanguage /> Update Language </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Select Language </b></h6>
                <form>
                    <div>
                        <div className="form-group col-md-6">
                            <label htmlFor="language">
                                Language
                                <small className='text-danger'> * </small>
                            </label>
                            <select
                                className="form-control"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="">Select Language</option>
                                <option value="English">English</option>
                                <option value="Urdu">Urdu</option>
                                <option value="Punjabi">Punjabi</option>
                                <option value="Sindhi">Sindhi</option>
                                <option value="Pashto">Pashto</option>
                                <option value="Balochi">Balochi</option>
                                <option value="Saraiki">Saraiki</option>
                                <option value="Hindko">Hindko</option>
                                <option value="Kashmiri">Kashmiri</option>
                                <option value="Brahui">Brahui</option>
                                <option value="Shina">Shina</option>
                                <option value="Khowar">Khowar</option>
                                <option value="Wakhi">Wakhi</option>
                                <option value="Burushaski">Burushaski</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="proficiency">
                                Proficiency
                                <small className='text-danger'> * </small>
                            </label>
                            <select
                                className="form-control"
                                value={proficiency}
                                onChange={(e) => setProficiency(e.target.value)}
                            >
                                <option value="">Select Proficiency</option>
                                <option value="Basic">Basic</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Conversational">Conversational</option>
                                <option value="Fluent">Fluent</option>
                                <option value="Native">Native</option>
                            </select>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={handledeleteLanguage} className='btn btn-danger' >
                    {delLoading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Removing ... </span>
                        </div>
                    </> : 'Remove Language'}

                </Button>
                <Button onClick={handleEditLanguage}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Updating Language... </span>
                        </div>
                    </> : 'Update Language'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


const UserLanguages = () => {

    const { id } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [modalEditShow, setModalEditShow] = useState(false);
    const [editId, setEditId] = useState(null);
    const [delId, setDelId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserLanguageAction(id))
    }, [])

    const allLanguages = useSelector((state) => state.getLanguageReducer);
    const allUserLanguage = allLanguages?.data?.result;
    console.log('This is allUserLanguages')
    console.log(allUserLanguage)

    return (
        <div id='languagescroll'>
            <ToastContainer />
            {(allUserLanguage?.length === 0 || allUserLanguage === undefined) ? <>
                <div className={` ${PrCss.addSections}`} style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
                    <div className="card w-100">
                        <div className="card-body text-center">
                            <i className='fa-solid fa-plus'></i>
                            <p className='card-text'> Add Languages </p>
                        </div>
                    </div>
                </div>
            </> :
                <>
                    <div class="card mt-3" style={{
                        width: '50vw',
                        boxShadow: '14px 10px 20px 3px #d3beae',
                        borderRadius: '25px 25px 25px 25px'
                    }}
                    >
                        <div className='p-4' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h5 style={{fontWeight:'600'}}> Languages </h5>
                            <div onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }} >
                                <CiSquarePlus size={'35'} />
                            </div>
                        </div>
                        
                        {allUserLanguage?.map((language) => {
                            return (
                                <div>
                                    <div className="card-body">
                                        <div className="card-header mt-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            {language.language}
                                            <div style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setModalEditShow(true);
                                                    setDelId(language._id);
                                                    setEditId(language._id);
                                                }}>
                                                <FaPencil />
                                            </div>
                                        </div>
                                        <div className="card-text ml-4">
                                            <p> Proficiency: {language.proficiency}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            }
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <MyVerticallyCenteredModalEditLang
                show={modalEditShow}
                delid={delId}
                editid={editId}
                allLanguages={allUserLanguage}
                onHide={() => setModalEditShow(false)}
            />
        </div>
    )
}

export default UserLanguages
