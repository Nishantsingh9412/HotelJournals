import React, { useEffect, useState } from 'react'
import { FaEye, FaUserCheck, FaUserTimes } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// React Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Heading,
} from '@chakra-ui/react'

import { Modal, Button as ButtonBoots } from 'react-bootstrap';
import { IoIosCheckmarkCircle, IoMdMail } from 'react-icons/io';
import DOMPurify from 'dompurify';
import ReactQuill from 'react-quill';
import PuffLoader from 'react-spinners/PuffLoader';

import { useParams } from 'react-router-dom';
import { PiNotepad } from 'react-icons/pi';
import { FcCancel } from 'react-icons/fc';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Image as ImageChakra } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import GridTable from '@nadavshaar/react-grid-table';

import {
    UpdateCandidStatsAction,
    // getHiredCandidatesAction,
    getJobSingleAction,
    // getOfferedCandidatesAction,
    // getRejectedCandidatesAction,
    // notOfferedCandidatesAction
} from '../../redux/actions/jobsAdmin';
import { fetchAllUsers } from '../../redux/actions/users';
import ProfilePic from '../User_profile/ProfilePic';
import SideDrawerProfile from './SideDrawerProfile';
import { sendMailAction } from '../../redux/actions/mail';
import SideBar from '../../components/admin/RecruiterDashboard/Sidebar/SideBar';
import RecruiterSidebarFinal from '../Miscellaneous/RecruiterSidebarFinal';
import './ManageParticularJob.css'




const FnameCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
    return (
        <div className='rgt-cell-inner'
            style={{
                display: 'flex',
                // alignItems: 'center',
                // overflow: 'hidden',
                // padding: '40px',
            }}
        >
            <ImageChakra
                borderRadius='full'
                boxSize='50px'
                src={data?.pic}
                alt='user-image'
            />
            <span className='rgt-text-truncate row-hover' style={{ marginLeft: 10, marginTop: 15 }}>
                {data?.fname}
            </span>
        </div>
    )
}

const PhoneCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
    return (
        <div className='rgt-cell-inner'
            style={{
                // display: 'flex',
                // alignItems: 'center',
                // overflow: 'hidden',
                // padding: '40px',

            }}
        >
            <span className='rgt-text-truncate row-hover'
                style={{ marginLeft: 10 }}

            >
                {data.country_code} {data.phone}
            </span>
        </div>
    )
}


const IconCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [showModal, setModalShow] = useState(false);

    // Sending mail to candidate functionality
    const handleNotepad = async (e) => {
        e.preventDefault();
        console.log("this is notepad uiududiudiudiui", data, data._id);
        setModalShow(true);

        // const updatedStatsUser = {
        //     jobId:id,
        //     userId:data._id,
        //     status:'Offered'
        // }
        // const response = await dispatch(UpdateCandidStatsAction(updatedStatsUser));

        // if(response.success){
        //     toast.success('Applicant Offered Successfully')
        // }else{
        //     toast.error('Applicant Not Offered Try Again'  )
        // }

        // <div>
        // <UserEmailModal
        //     show={true}
        //     onHide={() => setMailModalShow(false)}
        //     userid={data._id}
        //     applicants={data}
        // />
        // </div>
        // console.log(`Applicant ID: ${data._id}, Icon Name: UserCheck`)
    }

    const handleRejected = async (e) => {
        e.preventDefault();
        const updatedStatsUser = {
            jobId: id,
            userId: data._id,
            status: 'Rejected'
        }
        const response = await dispatch(UpdateCandidStatsAction(updatedStatsUser))
        if (response.success) {
            dispatch(getJobSingleAction(id))
            // toast.success('Applicant Rejected Successfully')
            toast.success('Candidato/a Rechazado/a Correctamente')
        } else {
            // toast.error('Applicant Not Rejected Try Again')
            toast.error('Candidato/a No Rechazado/a Inténtalo de Nuevo')

        }
        // console.log("All params")
        // const allParams = [id, data._id, 'Rejected'];
        // console.log(allParams)
        // console.log(`Applicant ID: ${data._id}, Icon Name: UserTimes`)
    }

    const handleSelected = async (e) => {
        e.preventDefault();
        const updatedStatsUser = {
            jobId: id,
            userId: data._id,
            status: 'Hired'
        }
        const response = await dispatch(UpdateCandidStatsAction(updatedStatsUser));
        if (response.success) {
            await dispatch(getJobSingleAction(id))
            // toast.success('Applicant Hired Successfully')
            toast.success('Candidato/a Seleccionado/a Correctamente')
        } else {
            // toast.error('Applicant Not Hired Try Again')
            toast.error('Candidato/a No Seleccionado/a Inténtalo de Nuevo')
        }
    }

    return (
        <div>
            <UserEmailModal
                show={showModal}
                onHide={() => setModalShow(false)}
                userid={data._id}
                applicant={data}
            />
            <div className='rgt-cell-inner'
                style={{
                    display: 'flex',
                    margin: '20px',
                }}
            >
                {/* For Getting User Details Eye Icon Click */}
                <SizeExample
                    fname={data?.fname}
                    id={data?._id}
                    pic={data?.pic}
                />
                <Button
                    ml={2}
                    onClick={handleNotepad}
                >
                    <PiNotepad style={{ color: 'green' }} />
                </Button>

                <Button
                    ml={2}
                    onClick={handleSelected}
                >
                    <IoIosCheckmarkCircle style={{ color: 'blue' }} />
                </Button>

                <Button
                    ml={2}
                    onClick={handleRejected}
                >
                    <FcCancel style={{ color: 'red' }} />
                </Button>
            </div>
        </div>
    )
}

// Table Columns
const columns = [
    {
        id: 1,
        field: 'image/fname',
        // label: 'Image /First Name',
        label: 'Foto / Nombre',
        cellRenderer: FnameCell
    },
    {
        id: 2,
        field: 'lname',
        // label: 'Last Name',
        label: 'Apellido'
    },
    {
        id: 3,
        field: 'email',
        // label: 'Email',
        label: 'Correo'
    },
    {
        id: 4,
        field: 'phone',
        // label: 'Phone Number',
        label: 'Teléfono',
        cellRenderer: PhoneCell
    },
    {
        id: 5,
        field: 'actionStatus',
        // label: 'Action / Status',
        label: 'Acción / Estado',
        width: '400px',
        cellRenderer: IconCell

    },
];
// Applicants List Table 
const ApplicantsList2 = ({ applicants }) => {
    return (
        <div className='container mt-2 responsive-table' >
            <GridTable
                columns={columns} rows={applicants}
            />
        </div>
    );
};

// User Details Modal 
function SizeExample(props) {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();

    const handleClick = (newSize) => {
        //   setSize(newSize)
        onOpen();
    }

    const handleClose = () => {
        dispatch({ type: 'GET_USER_CV', data: null })
        onClose();
    }
    return (
        <>
            <Button
                onClick={() => handleClick('xl')}
            // m={4}
            >
                <i className="fas fa-eye"></i>
            </Button>

            <Drawer onClose={handleClose} isOpen={isOpen} size={'xl'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{props?.fname}</DrawerHeader>
                    <DrawerBody>
                        <SideDrawerProfile
                            id={props?.id}
                            pic={props?.pic}
                        />

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}


function UserEmailModal(props) {

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const userId = props.userid;
    const applicant = props.applicant;
    // const OneAndOnlyOneApplicant = applicants?.filter((applicant) => applicant?._id === userId)[0];
    const OneAndOnlyOneApplicant = applicant;

    const dispatch = useDispatch();
    // const predefinedMessage =
    //     `
    // <p>Dear <b>${OneAndOnlyOneApplicant?.fname} ${OneAndOnlyOneApplicant?.lname}</b> </p>
    // <p>We are delighted to share that your application has advanced to the next stage for the position of <strong>[Position Name]</strong> at <strong>[Company Name]</strong>.</p>
    // <p>You have been selected for the <strong>[Next Round Name]</strong>. We encourage you to prepare thoroughly to make the most of this opportunity.</p>
    // <p>Should you have any questions or need further information, please do not hesitate to contact us.</p>
    // <p>Best Regards,</p>
    // [Your Name]<br>
    // [Your Position]<br>
    // [Company Name]
    // `;


    const predefinedMessage =
        `       
    <p>Estimado <b>${OneAndOnlyOneApplicant?.fname} ${OneAndOnlyOneApplicant?.lname}</b> </p>
    <p>Estamos encantados de compartir que su solicitud ha avanzado a la siguiente etapa para el puesto de <strong>[Nombre del puesto]</strong> en <strong>[Nombre de la empresa]</strong>.</p>
    <p>Ha sido seleccionado para el <strong>[Nombre de la siguiente ronda]</strong>. Le animamos a prepararse a fondo para aprovechar al máximo esta oportunidad.</p>
    <p>Si tiene alguna pregunta o necesita más información, no dude en ponerse en contacto con nosotros.</p>
    <p>Atentamente,</p>
    [Su nombre]<br>
    [Su posición]<br>
    [Nombre de la empresa]
    `


    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'], // toggled buttons
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // headings
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // lists
        ]
    };

    useEffect(() => {
        setTo(OneAndOnlyOneApplicant?.email);
    }, [OneAndOnlyOneApplicant])

    useEffect(() => {
        setMessage(predefinedMessage)
    }, [predefinedMessage])




    const handleSubmitMail = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!to || !subject || !message) {
            setLoading(false);
            return toast.error('All fields are required');
        }

        const sanitizedMessage = DOMPurify.sanitize(message);
        const mailData = {
            to,
            subject,
            // text: message,
            html: sanitizedMessage
        }
        const response = await dispatch(sendMailAction(mailData));
        if (response.success) {
            const updatedStatsUser = {
                jobId: id,
                userId: userId,
                status: 'Offered'
            }
            const responseNext = await dispatch(UpdateCandidStatsAction(updatedStatsUser))
            if (responseNext.success) {
                await dispatch(getJobSingleAction(id))
                toast.success(response.message);
                props.onHide()
            } else {
                toast.error(response.message);
            }
        } else {
            toast.error(response.message)
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
            <Modal.Header closeButton>
                <div style={{ textAlign: 'center' }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <div>
                                <IoMdMail
                                    style={{
                                        color: '#00008B'
                                    }}
                                />
                            </div>
                            <h5 className='mt-1'>
                                {/* Send Mail */}
                                Enviar Correo
                            </h5>
                        </div>
                    </Modal.Title>

                    <p className='text-muted'>
                        {/* <b>Note:</b> */}
                        {/* Sending promotional emails can lead to serious repercussions like debarment from listing future events on Hotel Journals. */}
                        <b> Nota: </b>
                        El envío de correos electrónicos promocionales puede acarrear graves repercusiones, como la exclusión de la lista de eventos futuros en Hotel Journals.
                    </p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <h1></h1>
                <div className='container'>
                    <form onSubmit={handleSubmitMail}>
                        <div className="form-group">
                            <div>
                                <label className='ml-2 mt-3' htmlFor="to">
                                    {/* To */}
                                    Para
                                    <small className='text-danger'>*</small>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={OneAndOnlyOneApplicant?.email}
                                    disabled={true}
                                    placeholder="Enter email"
                                />
                            </div>
                            <div>
                                <label className='ml-2 mt-3' htmlFor="subject">
                                    {/* Subject */}
                                    Asunto
                                    <small className='text-danger'>*</small>
                                </label>
                                <input
                                    type='text'
                                    className="form-control"
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Enter Subject"
                                />
                            </div>
                            <div>
                                <label className='ml-2 mt-3' htmlFor="message">
                                    {/* Message */}
                                    Mensaje
                                    <small className='text-danger'>*</small>
                                </label>
                                {/* <textarea
                                    className="form-control"
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Enter Message"
                                /> */}
                                <ReactQuill
                                    theme="snow"
                                    modules={modules}
                                    value={message}
                                    onChange={setMessage}
                                />
                            </div>

                        </div>

                        <button
                            type='submit'
                            className='btn btn-success'
                        >
                            {loading ? <>
                                <div className='d-flex'>
                                    <PuffLoader
                                        size={25}
                                        color="#ffffff"
                                    /> <span className='pl-2'> Sending ... </span>
                                </div>
                            </> :
                                // 'Send Mail'
                                <div className='d-flex'
                                    style={{
                                        alignItems: 'center',
                                        gap: '4px'
                                    }}>
                                    <FaTelegramPlane />
                                    Enviar Correo
                                </div>
                            }
                        </button>
                    </form>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <ButtonBoots onClick={props.onHide}>
                    {/* Close */}
                    Cerrar
                </ButtonBoots>
            </Modal.Footer>
        </Modal >
    );
}


const ManageParticularJob = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('All');


    useEffect(() => {
        dispatch(getJobSingleAction(id))
    }, [dispatch])


    // useEffect(() => {
    //     dispatch(getHiredCandidatesAction(id))
    // }, [dispatch])

    // useEffect(() => {
    //     dispatch(getRejectedCandidatesAction(id))
    // }, [dispatch])

    // useEffect(() => {
    //     dispatch(getOfferedCandidatesAction(id))
    // }, [dispatch])

    // useEffect(() => {
    //     dispatch(notOfferedCandidatesAction(id))
    // }, [dispatch])

    // const hiredCandidatesReducer = useSelector((state) => state?.HiredCandidatesReducer);
    // const offeredCandidatesReducer = useSelector((state) => state?.OfferedCandidatesReducer);
    // const notOfferedCandidatesReducer = useSelector((state) => state?.notOfferedCandidates);
    // const RejectedCandidatesReducer = useSelector((state) => state?.RejectedCandidatesReducer);

    // const hiredCandidates = hiredCandidatesReducer.map((applicant) => applicant?.user);
    // const offeredCandidates = offeredCandidatesReducer.map((applicant) => applicant?.user);
    // const notOfferedCandidates = notOfferedCandidatesReducer.map((applicant) => applicant?.user);
    // const RejectedCandidates = RejectedCandidatesReducer.map((applicant) => applicant?.user);
    // // console.log(RejectedCandidates);

    // console.log("Hired Candidates Reducer : ", hiredCandidatesReducer);
    // console.log("Offered Candidates Reducer : ", offeredCandidatesReducer);
    // console.log("Not Offered Candidates Reducer : ", notOfferedCandidatesReducer);
    // console.log("Rejected Candidates Reducer : ", RejectedCandidatesReducer);


    // console.log("Hired Candidates : ", hiredCandidates);
    // console.log("Offered Candidates : ", offeredCandidates);
    // console.log("Not Offered Candidates : ", notOfferedCandidates);
    // console.log("Rejected Candidates : ", RejectedCandidates);



    const singleJobReducer = useSelector((state) => state?.getSingleJobReducer);
    console.log("THis is single JobReducer \n ", singleJobReducer)
    const jobTitle = singleJobReducer?.result?.jobTitle;

    console.log("jobApplicants:")
    const jobApplicants = singleJobReducer?.result?.applicants?.map((applicant) => applicant?.user)
    console.log(jobApplicants);
    const appliedUsers = jobApplicants;

    const hiredCandidates = singleJobReducer?.result?.applicants?.filter((applicant) => applicant?.status === 'Hired');
    const allHiredCandidates = hiredCandidates?.map((applicant) => applicant?.user);
    console.log("Hired Candidates: ", allHiredCandidates);

    const offeredCandidates = singleJobReducer?.result?.applicants?.filter((applicant) => applicant?.status === 'Offered');
    const allOfferedCandidates = offeredCandidates?.map((applicant) => applicant?.user);
    console.log("Offered Candidates: ", allOfferedCandidates);

    const notOfferedCandidates = singleJobReducer?.result?.applicants?.filter((applicant) => applicant?.status !== 'Offered');
    const allNotOfferedCandidates = notOfferedCandidates?.map((applicant) => applicant?.user);
    console.log("Not Offered Candidates: ", allNotOfferedCandidates);

    const RejectedCandidates = singleJobReducer?.result?.applicants?.filter((applicant) => applicant?.status === 'Rejected');
    const allRejectedCandidates = RejectedCandidates?.map((applicant) => applicant?.user);
    console.log("Rejected Candidates: ", allRejectedCandidates);


    // useEffect(() => {
    //     if (appliedUsers && hiredCandidates && offeredCandidates && notOfferedCandidates && RejectedCandidates) {
    //         setLoading(false);
    //     }
    // }, [appliedUsers, hiredCandidates, offeredCandidates, notOfferedCandidates, RejectedCandidates])

    useEffect(() => {
        setLoading(false);
    }, [])

    const handleClick = (item) => {
        setSelected(item);
    }

    return (
        <>

            {loading ? (

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <PuffLoader
                        color="red"
                        size={70}
                    />
                </div>

            ) : (
                <div>
                    <ToastContainer />
                    <div className='ManageParticularSidebar'>
                        <RecruiterSidebarFinal />
                    </div>
                    <div className='ManageParticularContent'>
                        <div className='alert alert-primary mt-2 ml-1 mr-1 text-dark text-center '>
                            {jobTitle}
                        </div>
                        {/* <div>
                <ul
                    style={{
                        display: 'flex',
                        listStyle: 'none',
                        padding: '5px',
                        gap: '10px',
                    }}
                >
                    {['All', 'Hired', 'Rejected'].map(item => (
                        <li
                            key={item}
                            onClick={() => handleClick(item)}
                            style={{
                                cursor: 'pointer',
                                borderBottom: item === selected ? '2px solid #000' : 'none'
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div> */}

                        <Tabs>
                            <TabList>
                                <Tab>
                                    {/* All */}
                                    Todo
                                    ({appliedUsers?.length})
                                </Tab>
                                <Tab>
                                    {/* Not Offered */}
                                    Sin Respuesta
                                    ({allNotOfferedCandidates?.length})
                                </Tab>
                                <Tab>
                                    {/* Offered */}
                                    Respondidos
                                    ({allOfferedCandidates?.length})
                                </Tab>
                                <Tab>
                                    {/* Hired */}
                                    Contratado/a
                                    ({allHiredCandidates?.length})
                                </Tab>
                                <Tab>
                                    {/* Rejected */}
                                    Rechazado/a
                                    ({allRejectedCandidates?.length})
                                </Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    {/* All Okay */}
                                    <ApplicantsList2 applicants={appliedUsers} />
                                </TabPanel>
                                <TabPanel>
                                    {/* Not Offered */}
                                    {/* <ApplicantsList2 applicants={notOfferedCandidates} /> */}
                                    <ApplicantsList2 applicants={allNotOfferedCandidates} />
                                </TabPanel>
                                <TabPanel>
                                    {/* Offered */}
                                    {/* <ApplicantsList2 applicants={offeredCandidates} /> */}
                                    <ApplicantsList2 applicants={allOfferedCandidates} />
                                </TabPanel>
                                <TabPanel>
                                    {/* HIred */}
                                    {/* <ApplicantsList2 applicants={hiredCandidates} /> */}
                                    <ApplicantsList2 applicants={allHiredCandidates} />
                                </TabPanel>
                                <TabPanel>
                                    {/* Rejected */}
                                    {/* <ApplicantsList2 applicants={RejectedCandidates} /> */}
                                    <ApplicantsList2 applicants={allRejectedCandidates} />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                    {/* <ApplicantsList applicants={appliedUsers} /> */}
                    {/* <ApplicantsList2 applicants={appliedUsers} /> */}
                </div>
            )}
        </>
    )
}

export default ManageParticularJob
