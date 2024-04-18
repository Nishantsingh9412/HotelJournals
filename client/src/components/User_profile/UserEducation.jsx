import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// React toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// React bootstrap 
import Modal from 'react-bootstrap/Modal'
import { Button, Toast } from 'react-bootstrap';
import PuffLoader from "react-spinners/PuffLoader";

// React icons 
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap, FaPen, FaPencil } from 'react-icons/fa6';
import { CiSquarePlus } from "react-icons/ci";

import PrCss from './userProfile.module.css';
import { deleteEducationAction, getUserEducationAction, setUserEducationAction, updateUserEducationAction } from '../../redux/actions/userProfile/userEducation';
import { RxPencil1 } from 'react-icons/rx';


function MyVerticallyCenteredModal(props) {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [school, setSchool] = useState('');
    const [city, setCity] = useState('');
    const [degree, setDegree] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmitEducation = async (e) => {
        e.preventDefault();
        setLoading(true);
        const educationData = {
            school,
            city,
            degree,
            start_date,
            end_date,
            description,
            userId: id
        }
        console.log(educationData);
        const response = await dispatch(setUserEducationAction(educationData));
        if (response.success) {
            const resp2 = await dispatch(getUserEducationAction(id));
            if (resp2.success) {
                setLoading(false);
                props.onHide();
            } else {
                toast.info('Please refresh the page and try again', { position: 'bottom-right' })
            }
        }
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
                    <FaGraduationCap
                        size={'20'}
                    />
                    <h5 className='mt-2'>
                        {/* Add your Education */}
                        Añade tu educación
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Highlight your achievements </b></h6>
                <p>
                    Write about what you've studied , or where are you studying
                </p>

                <form >
                    <ToastContainer />
                    <div className="form-group">
                        <label htmlFor="degree">School / University Name </label>
                        <input
                            type="text"
                            className="form-control"
                            id="degree"
                            placeholder="XYZ University"
                            onChange={(e) => setSchool(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <div className="form-group col">
                            <label htmlFor="city">City / Country</label>
                            <select
                                className='form-control'
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Kannauj">Kannauj</option>
                                <option value="Kanpur">Kanpur</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Chennai">Chennai</option>
                            </select>
                        </div>

                        <div className='form-group col'>
                            <label htmlFor="degree"> Degree </label>
                            <input
                                type="text"
                                className="form-control"
                                id="degree"
                                placeholder="Degree Name"
                                onChange={(e) => setDegree(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col'>
                            <label htmlFor="startdate"> Start Date</label>
                            <input
                                type="date"
                                className='form-control'
                                onChange={(e) => setStart_date(e.target.value)}
                            />
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="enddate"> End Date </label>
                            <input
                                type="date"
                                className='form-control'
                                onChange={(e) => setEnd_date(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            placeholder="Write about your education"
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                        ></textarea>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={handleSubmitEducation}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Submitting... </span>
                        </div>
                    </> : 'Submit'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function MyVerticallyCenteredModalForEdit(props) {

    const { id } = useParams();
    const editId = props.editid;
    const deleteId = props.deleteid;
    const [school, setSchool] = useState('');
    const [city, setCity] = useState('');
    const [degree, setDegree] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [delLoading, setDelLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSubmitEducationEdit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!school || !city || !degree || !start_date || !end_date) {
            toast.error('Please fill all the fields');
            setLoading(false);
            return;
        }
        const educationData = {
            school,
            city,
            degree,
            start_date,
            end_date,
            description,
        }
        console.log(educationData);
        const response = await dispatch(updateUserEducationAction(editId, educationData));
        if (response.success) {
            const resp2 = await dispatch(getUserEducationAction(id));
            if (resp2.success) {
                setLoading(false);
                props.onHide();
            } else {
                toast.info('Please refresh the page and try again')
            }
        }
    }

    const handledeleleEducationonEdit = async (e) => {
        setDelLoading(true);
        const response = await dispatch(deleteEducationAction(deleteId));
        if (response.success) {
            const resp2 = await dispatch(getUserEducationAction(id));
            if (resp2.success) {
                setDelLoading(false);
                props.onHide();
            } else {
                toast.info('Please refresh the page and try again')
            }
        }
    }


    const allEducationExperiencesReducer = useSelector(state => state?.getEducationReducer);
    const allEducationExperiences = allEducationExperiencesReducer?.data?.result;
    const education = allEducationExperiences?.filter(education => education?._id === editId)[0];
    console.log(education);

    // const allExperiences = useSelector((state) => state.getExpReducer);
    // const singleData = allExperiences?.data?.result;
    // const filteredData = singleData?.filter(data => data._id == id)[0];;
    // console.log('Filtered Data', filteredData);

    useEffect(() => {
        if (education) {
            setSchool(education?.school);
            setCity(education?.city);
            setDegree(education?.degree);
            setStart_date(education?.start_date.split('T')[0]);
            setEnd_date(education?.end_date.split('T')[0]);
            setDescription(education?.description);
        }
    }, [education])


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
                    <FaGraduationCap
                        size={'20'}
                    />
                    <h5 className='mt-2'>
                        {/* Add your Education */}
                        Añade tu educación
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Highlight your achievements </b></h6>
                <p>
                    Write about what you've studied , or where are you studying
                </p>

                <form >
                    <ToastContainer />
                    <div className="form-group">
                        <label htmlFor="degree">School / University Name
                            <small className='text-danger'>*</small>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="degree"
                            value={school}
                            placeholder="XYZ University"
                            onChange={(e) => setSchool(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <div className="form-group col">
                            <label htmlFor="city">
                                City / Country
                                <small className='text-danger'>*</small>
                            </label>
                            <select
                                className='form-control'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}

                            >
                                <option value="">Select</option>
                                <option value="Kannauj">Kannauj</option>
                                <option value="Kanpur">Kanpur</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Chennai">Chennai</option>
                            </select>
                        </div>

                        <div className='form-group col'>
                            <label htmlFor="degree">
                                Degree
                                <small className='text-danger'>*</small>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="degree"
                                value={degree}
                                placeholder="Degree Name"
                                onChange={(e) => setDegree(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col'>
                            <label htmlFor="startdate">
                                Start Date
                                <small className='text-danger'>*</small>
                            </label>
                            <input
                                type="date"
                                className='form-control'
                                value={start_date}
                                onChange={(e) => setStart_date(e.target.value)}
                            />
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="enddate">
                                End Date
                                <small className='text-danger'>*</small>
                            </label>
                            <input
                                type="date"
                                className='form-control'
                                value={end_date}
                                onChange={(e) => setEnd_date(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            placeholder="Write about your education"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                        ></textarea>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={handledeleleEducationonEdit} className='btn btn-danger' >
                    {delLoading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Removing ... </span>
                        </div>
                    </> : 'Remove Education'}
                </Button>
                <Button onClick={handleSubmitEducationEdit}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Updating... </span>
                        </div>
                    </> : 'Update'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}



const UserEducation = () => {

    const { id } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [modalEditShow, setModalEditShow] = useState(false);
    const [editId, setEditId] = useState('');
    const [deleteId, setDeleteId] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserEducationAction(id));
    }, [dispatch])

    const allEducationExperiencesReducer = useSelector(state => state.getEducationReducer);
    const allEducationExperiences = allEducationExperiencesReducer?.data?.result;
    console.log(allEducationExperiences)


    function formatDateAndCalculateDifference(dateString1, dateString2) {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);

        // Format dates
        const options = { year: 'numeric', month: 'long' };
        const formattedDate1 = date1.toLocaleString('default', options);
        const formattedDate2 = date2.toLocaleString('default', options);

        // Calculate difference in months
        const diffInMonths = date2.getMonth() - date1.getMonth() +
            (12 * (date2.getFullYear() - date1.getFullYear()));

        if (diffInMonths > 12) {
            const differenceInYears = Math.floor(diffInMonths / 12);
            return `${formattedDate1} - ${formattedDate2} · ${differenceInYears} years  ${diffInMonths - (differenceInYears * 12)} months`;
        } else {
            return `${formattedDate1} - ${formattedDate2} · ${diffInMonths} months`;
        }

    }

    return (
        <div id='educationscroll'>
            {allEducationExperiences?.length === 0 ?
                (
                    <>
                        <div className={` ${PrCss.addSections}`} style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
                            <div className="card w-100">
                                <div className="card-body text-center">
                                    <i className='fa-solid fa-plus'></i>
                                    <p className='card-text'>
                                        {/* Add your Education */}
                                        Añade tu educación
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {allEducationExperiences && allEducationExperiences.length > 0 ?
                            <div className="card-body mt-3 mb-0 pb-0">
                                <div className='row justify-content-between ml-2 mr-2'>
                                    <h5 className="card-title"> Education </h5>
                                    <div style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
                                        <CiSquarePlus size={'35'} />
                                    </div>
                                </div>
                            </div>
                            : <> </>
                        }
                        <div className="card mt-3"
                            style=
                            {{
                                boxShadow: '14px 10px 20px 3px #d3beae',
                                borderRadius: '25px 25px 25px 25px'
                            }}
                        >
                            <div className="card-body">
                                {
                                    allEducationExperiences?.sort((a, b) => new Date(b.start_date) - new Date(a.start_date))?.map((education, index) => (
                                        <div key={index}>
                                            <div className='row'>
                                                <h5 className="card-title ml-3">{education.school} - {education.city}</h5>
                                                <div className=' ml-2 mt-1' style={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        setModalEditShow(true);
                                                        setEditId(education._id);
                                                        setDeleteId(education._id)
                                                    }}>
                                                    <RxPencil1 />
                                                </div>
                                            </div>
                                            <div className="card-text">
                                                {education.degree}
                                            </div>
                                            <div className="card-text">
                                                {formatDateAndCalculateDifference(education.start_date, education.end_date)}
                                            </div>
                                            {index !== allEducationExperiences.length - 1 && <hr />}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                )}

            {/* Modal Start */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <MyVerticallyCenteredModalForEdit
                show={modalEditShow}
                onHide={() => setModalEditShow(false)}
                editid={editId}
                deleteid={deleteId}
            />

            {/* Modal End */}
        </div>
    )
}

export default UserEducation
