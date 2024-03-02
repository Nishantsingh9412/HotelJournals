import React, { useEffect, useState } from 'react'
// ToastContainer
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Editor 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
// Sanitizing input
import DOMPurify from 'dompurify';

// React Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PuffLoader from "react-spinners/PuffLoader";
// Icons
import { IoPerson } from "react-icons/io5";
import { IoMdMail } from 'react-icons/io';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// External Files
import { getJobSingleAction } from '../../redux/actions/jobsAdmin';
import { fetchAllUsers } from '../../redux/actions/users';
import { sendMailAction } from '../../redux/actions/mail';

function UserEmailModal(props) {

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const userId = props.userid;
    const applicants = props.applicants;
    const OneAndOnlyOneApplicant = applicants?.filter((applicant) => applicant?._id === userId)[0];

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
            html:sanitizedMessage
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
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}


function UserDetailsModal(props) {
    const applicants = props.applicants;
    const userId = props.userid;

    console.log("Applicants \n");
    console.log(applicants);
    console.log("userId \n");
    console.log(userId);
    // const OneAndOnlyOneApplicant = applicants?.filter((applicant) => applicant?._id === userId);
    const OneAndOnlyOneApplicant = applicants?.filter((applicant) => applicant?._id === userId)[0];
    console.log("OneAndOnlyOneApplicant \n");
    console.log(OneAndOnlyOneApplicant);

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
                    <span ><IoPerson /> Candidate Details </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h6><b> Highlight your achievements </b></h6>
                <p>
                    Write about what you've studied , or where are you studying
                </p> */}
                <div className='container'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{OneAndOnlyOneApplicant?.fname} {OneAndOnlyOneApplicant?.lname}</Card.Title>
                            <Card.Text>
                                <p>Email: {OneAndOnlyOneApplicant?.email}</p>
                                <p>Phone No: {OneAndOnlyOneApplicant?.country_code} {OneAndOnlyOneApplicant?.phone}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                {/* <Button onClick={handleSubmitEducation}>
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Submitting... </span>
                        </div>
                    </> : 'Submit'}
                </Button> */}
            </Modal.Footer>
        </Modal>
    );
}

const ApplicantsList = ({ applicants }) => {
    

    return (
        <div className='container '>
            {applicants?.map((applicant, index) => (
                <Card key={index} className='w-50' style={{ width: '18rem', marginTop: '10px' }}>
                    <Card.Header>
                        <div className='row'>
                            <p className='ml-2'>{applicant?.fname} {applicant?.lname}</p>
                            <div
                                className='ml-auto'
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setUserId(applicant?._id);
                                    setModalShow(true);
                                }}
                            >
                                <IoPerson />
                            </div>

                            <div
                                className='text-primary ml-2 mr-2'
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setUserId(applicant?._id);
                                    setMailModalShow(true);
                                }}
                            >
                                <IoMdMail />
                            </div>
                        </div>
                    </Card.Header>
                    <ListGroup variant="flush">
                        {/* <ListGroup.Item>ID:{applicant?._id}</ListGroup.Item> */}
                        <ListGroup.Item>Email: {applicant?.email}</ListGroup.Item>
                        <ListGroup.Item>Phone No: {applicant?.country_code} {applicant?.phone}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}

            <UserDetailsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                userid={userId}
                applicants={applicants}
            />

            <UserEmailModal
                show={mailModalShow}
                onHide={() => setMailModalShow(false)}
                userid={userId}
                applicants={applicants}
            />

        </div>
    );
}

const FinalizeCandidates = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobSingleAction(id))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    // const singleJobReducer = useSelector((state) => state?.getSingleJobReducer);
    // const jobApplicants = singleJobReducer?.result?.applicants

    // const usersReducer = useSelector((state) => state.usersReducer);
    // const allUSerDetails = usersReducer?.allUserDetails;
    // // const appliedUsers = singleJobReducer?.result?.applicants.filter?.(applicant => usersReducer?.result?.find?.(user => user?._id === applicant));

    // // const appliedUsers = allUSerDetails?.filter((user) => jobApplicants?.map((applicants) => applicants.includes(user?._id)));
    // const appliedUsers = allUSerDetails?.filter((user) => jobApplicants?.includes(user?._id));
    
    const singleJobReducer = useSelector((state) => state?.getSingleJobReducer);
    console.log("jobApplicants:")
    const jobApplicants = singleJobReducer?.result?.applicants?.map((applicant) => applicant?.user)
    console.log(jobApplicants);
    const appliedUsers = jobApplicants;
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <h1> THis is finalize candidates  </h1>
            <ToastContainer />
            <ApplicantsList applicants={appliedUsers} />
            {/* <Button onClick={() => setModalShow(true)}>Launch vertically centered modal</Button> */}

        </div>
    )
}

export default FinalizeCandidates
