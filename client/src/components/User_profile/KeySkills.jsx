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
import { FaPencil } from "react-icons/fa6";
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
        { value: 'Project Management', label: 'Project Management' },
        { value: 'Data Analysis', label: 'Data Analysis' },
        { value: 'Software Development', label: 'Software Development' },
        { value: 'Cyber Security', label: 'Cyber Security' },
        { value: 'Machine Learning', label: 'Machine Learning' },
        { value: 'Cloud Computing', label: 'Cloud Computing' },
        { value: 'Digital Marketing', label: 'Digital Marketing' },
        { value: 'Customer Service', label: 'Customer Service' }
    ]

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
            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <span ><FaRegUser /> Add Skills </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Show your skills to recruiters </b></h6>
                <p>
                    Add your skills to show recruiters what you are good fit for their organization
                </p>
                <form>
                    <label htmlFor="skills">Skills</label>
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
                            /> <span className='pl-2'> Adding Skills ... </span>
                        </div>
                    </> : 'Add Skills'}
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
        { value: 'Project Management', label: 'Project Management' },
        { value: 'Data Analysis', label: 'Data Analysis' },
        { value: 'Software Development', label: 'Software Development' },
        { value: 'Cyber Security', label: 'Cyber Security' },
        { value: 'Machine Learning', label: 'Machine Learning' },
        { value: 'Cloud Computing', label: 'Cloud Computing' },
        { value: 'Digital Marketing', label: 'Digital Marketing' },
        { value: 'Customer Service', label: 'Customer Service' }
    ]

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
            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <span ><FaRegUser /> Edit Skills </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Show your skills to recruiters </b></h6>
                <p>
                    Add your skills to show recruiters what you are good fit for their organization
                </p>
                <form>
                    <label htmlFor="skills">Skills</label>
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
                                <span className='pl-2'> Removing Skills ... </span>
                            </div>
                        </> :
                        'Remove Skills'
                    }
                </Button>
                <Button onClick={submitKeySkillsEdited}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Updating Skills ... </span>
                        </div>
                    </> : 'Update Skills'}
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
                                <p className='card-text'>Add your skills </p>
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
                            style={{ cursor: 'pointer'}}
                        >
                            <p>Skills</p>
                            <RxPencil1 />
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
