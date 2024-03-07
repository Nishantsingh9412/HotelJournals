import React, { useEffect, useState } from 'react'
import { FaEye, FaUserCheck, FaUserTimes } from 'react-icons/fa';
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
} from '@chakra-ui/react'

import { Modal, Button as ButtonBoots } from 'react-bootstrap';
import { IoMdMail } from 'react-icons/io';
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

import './ManageParticularJob.css'
import { UpdateCandidStatsAction, getJobSingleAction } from '../../redux/actions/jobsAdmin';
import { fetchAllUsers } from '../../redux/actions/users';
import ProfilePic from '../User_profile/ProfilePic';
import SideDrawerProfile from './SideDrawerProfile';
import { sendMailAction } from '../../redux/actions/mail';
import SideBar from '../../components/admin/RecruiterDashboard/Sidebar/SideBar';




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


    const handleEye = (e) => {
        e.preventDefault();
        // console.log(`Applicant ID: ${data._id}, Icon Name: Eye`)
    }

    const handleNotepad = async (e) => {
        e.preventDefault();
        console.log("this is notepad", data, data._id)
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
        console.log(`Applicant ID: ${data._id}, Icon Name: UserCheck`)
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
            toast.success('Applicant Rejected Successfully')
        } else {
            toast.error('Applicant Not Rejected Try Again')
        }

        console.log("All params")
        const allParams = [id, data._id, 'Rejected'];
        console.log(allParams)
        console.log(`Applicant ID: ${data._id}, Icon Name: UserTimes`)
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
                {/* <FaEye onClick={handleEye} style={{marginLeft:'20px',cursor:'pointer'}}/> */}
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
                    onClick={handleRejected}
                >
                    <FcCancel style={{ color: 'red' }} />
                </Button>
                {/* <PiNotepad onClick={handleSelected} style={{ marginLeft: '20px', cursor: 'pointer' }} /> */}
                {/* <FcCancel onClick={handleRejected} style={{ marginLeft: '20px', cursor: 'pointer' }} /> */}
            </div>
        </div>
    )
}

// Table Columns
const columns = [
    {
        id: 1,
        field: 'image/fname',
        label: 'Image /First Name',
        cellRenderer: FnameCell
    },
    {
        id: 2,
        field: 'lname',
        label: 'Last Name',
    },
    {
        id: 3,
        field: 'email',
        label: 'Email',
    },
    {
        id: 4,
        field: 'phone',
        label: 'Phone Number',
        cellRenderer: PhoneCell
    },
    {
        id: 5,
        field: 'actionStatus',
        label: 'Action / Status',
        cellRenderer: IconCell

    },
];
// Applicants List Table 
const ApplicantsList2 = ({ applicants }) => {
    return (
        <div className='container mt-2 responsive-table' >
            <GridTable columns={columns} rows={applicants} />
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

// Mail Popup Modal

function UserEmailModal(props) {

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const userId = props.userid;
    const applicant = props.applicant;
    // const OneAndOnlyOneApplicant = applicants?.filter((applicant) => applicant?._id === userId)[0];
    const OneAndOnlyOneApplicant = applicant;

    const dispatch = useDispatch();
    const predefinedMessage =
        `
    <p>Dear <b>${OneAndOnlyOneApplicant?.fname} ${OneAndOnlyOneApplicant?.lname}</b> </p>
    <p>We are delighted to share that your application has advanced to the next stage for the position of <strong>[Position Name]</strong> at <strong>[Company Name]</strong>.</p>
    <p>You have been selected for the <strong>[Next Round Name]</strong>. We encourage you to prepare thoroughly to make the most of this opportunity.</p>
    <p>Should you have any questions or need further information, please do not hesitate to contact us.</p>
    <p>Best Regards,</p>
    [Your Name]<br>
    [Your Position]<br>
    [Company Name]
    `;




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
            toast.success(response.message);
            props.onHide()
        } else {
            toast.error(response.message);
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
            <Modal.Header closeButton>
                <div style={{ textAlign: 'center' }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p> <IoMdMail /> <p className='mt-1'>Send Mail </p>  </p>
                    </Modal.Title>

                    <p className='text-muted'> <b>Note:</b> Sending promotional emails can lead to serious repercussions like debarment from listing future events on Hotel Journals.</p>
                </div>

            </Modal.Header>
            <Modal.Body>

                <h1></h1>
                <div className='container'>
                    <form onSubmit={handleSubmitMail}>

                        <div className="form-group">
                            <div>
                                <label className='ml-2 mt-3' htmlFor="to"> To <small className='text-danger'>*</small></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={OneAndOnlyOneApplicant?.email}
                                    disabled={true}
                                    placeholder="Enter email"
                                />
                            </div>
                            <div>
                                <label className='ml-2 mt-3' htmlFor="subject"> Subject <small className='text-danger'>*</small> </label>
                                <input
                                    type='text'
                                    className="form-control"
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Enter Subject"
                                />
                            </div>
                            <div>
                                <label className='ml-2 mt-3' htmlFor="message"> Message <small className='text-danger'>*</small> </label>
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
                            </> : 'Send Mail'}
                        </button>
                    </form>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <ButtonBoots onClick={props.onHide}>Close</ButtonBoots>
            </Modal.Footer>
        </Modal >
    );
}


const ManageParticularJob = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState('All');

    useEffect(() => {
        dispatch(getJobSingleAction(id))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const singleJobReducer = useSelector((state) => state?.getSingleJobReducer);
    console.log("THis is single JobReducer \n ", singleJobReducer)
    const jobTitle = singleJobReducer?.result?.jobTitle;

    console.log("jobApplicants:")
    const jobApplicants = singleJobReducer?.result?.applicants?.map((applicant) => applicant?.user)
    console.log(jobApplicants);
    const appliedUsers = jobApplicants;


    const handleClick = (item) => {
        setSelected(item);
    }

    return (
        <div>
            <ToastContainer />
            <div className='ManageParticularSidebar'>
                <SideBar />
            </div>
            <div className='ManageParticularContent'>
                <div className='alert alert-primary text-center'>
                    {jobTitle} | Select
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
                        <Tab>All ({appliedUsers?.length})</Tab>
                        <Tab>Not Offered</Tab>
                        <Tab>Offered</Tab>
                        <Tab>Hired</Tab>
                        <Tab>Rejected</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            {/* <p>one!</p> */}
                            <ApplicantsList2 applicants={appliedUsers} />
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                            <ApplicantsList2 applicants={appliedUsers} />
                        </TabPanel>
                        <TabPanel>
                            <ApplicantsList2 applicants={appliedUsers} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            {/* <ApplicantsList applicants={appliedUsers} /> */}
            {/* <ApplicantsList2 applicants={appliedUsers} /> */}
        </div>
    )
}

export default ManageParticularJob
