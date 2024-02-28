import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// React toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// React bootstrap
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
// Spinner
import PuffLoader from "react-spinners/PuffLoader";
// Icons
import { FaBriefcase } from "react-icons/fa";
import { RxPencil1 } from 'react-icons/rx';
import { CiSquarePlus } from "react-icons/ci";



import PrCss from './userProfile.module.css';
import { deleteExperienceAction, getUserExperienceAction, setUserExperienceAction, updateUserExperienceAction } from '../../redux/actions/userProfile/userExperience';



function MyVerticallyCenteredModal(props) {
    const { id } = useParams();
    const [workingHere, setWorkingHere] = useState(false)
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [city, setCity] = useState('');
    const [job_start_date, setJobStartDate] = useState('');
    const [job_end_date, setJobEndDate] = useState('');
    const [is_current_job, setIsCurrentJob] = useState(false);
    // for Jobs Experience Description
    const [jobExperience, setJobExperience] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();


    const handleExperiencePosting = async (e) => {
        e.preventDefault();
        setLoading(true);
        const newExperience = {
            jobTitle: jobTitle,
            company: company,
            department: department,
            city: city,
            job_start_date: job_start_date,
            job_end_date: job_end_date,
            is_current_job: is_current_job,
            jobExperience: jobExperience,
            userId: id
        }
        console.log(newExperience);
        const response = await dispatch(setUserExperienceAction(newExperience));
        if (response.success) {
            const respo2 = await dispatch(getUserExperienceAction(id));
            if (respo2) {
                setLoading(false);
                props.onHide();
                console.log('Experience Added Successfully');
            } else {
                toast.info('Please refresh the page');
            }
        } else {
            console.log('Error in adding Experience');
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
            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <span ><FaBriefcase /> Add Your Experience </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Time to shine </b></h6>
                <p style={{ opacity: 0.8 }}>
                    Write about your past and present experience in detail. Recruiters want to know all about it!
                </p>
                <form onSubmit={props.onsubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label htmlFor="jobTitle"> Job Title </label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobTitle"
                                placeholder="Enter job title"
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group col">
                            <label htmlFor="company"> Company </label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobTitle"
                                placeholder="Provide company name"
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className='row'>
                        <div className="form-group col">
                            <label htmlFor="department"> Department </label>
                            <select
                                className='form-control'
                                onChange={(e) => setDepartment(e.target.value)}
                            >
                                <option value=""> Select Department  </option>
                                <option value="Account Management"> Account Management </option>
                                <option value="Administration"> Administration </option>
                                <option value="Bakery"> Bakery </option>
                                <option value="Business Development"> Business Development </option>
                                <option value="Consulting"> Consulting </option>
                                <option value='Content and Communications'> Content and Communications </option>
                                <option value="Customer Service"> Customer Service </option>
                                <option value="Data and Analytics"> Data and Analytics </option>
                                <option value="Driver"> Driver </option>
                                <option value="Design"> Design </option>
                                <option value="Education"> Education </option>
                                <option value="Event" > Event </option>
                                <option value="F and B Management"> F and B Management </option>
                                <option value="F and B Kitchen"> F and B Kitchen </option>
                                <option value="F and B service"> F and B service </option>
                                <option value="Finance and Accounting"> Finance and Accounting </option>
                                <option value="Gardener">Gardener</option>
                                <option value="Guest Relations"> Guest Relations </option>
                                <option value="Health and Safety"> Health and Safety </option>
                                <option value="Host/Hostess"> Host/Hostess </option>
                                <option value="HouseKeeping"> HouseKeeping </option>
                                <option value="Human Resources"> Human Resources </option>
                                <option value="Information Technology"> Information Technology </option>
                                <option value="Laundry"> Laundry </option>
                                <option value="Legal"> Legal </option>
                                <option value="Lifeguard"> Lifeguard </option>
                                <option value="Logistics"> Logistics </option>
                                <option value="Maintenance"> Maintenance </option>
                                <option value="Management"> Management </option>
                                <option value="Marketing"> Marketing </option>
                                <option value="Media and Design"> Media and Design </option>
                                <option value="Other"> Other </option>
                                <option value="Pastry"> Pastry </option>
                                <option value="Porter"> Porter </option>
                                <option value="Project Management"> Project Management </option>
                                <option value="Public Relations"> Public Relations </option>
                                <option value="Purchasing"> Purchasing </option>
                                <option value="Real State"> Real State </option>
                                <option value="Reception"> Reception </option>
                                <option value="Reservations"> Reservations </option>
                                <option value="Retail"> Retail </option>
                                <option value="Revenue Management"> Revenue Management </option>
                                <option value="Room Division Management"> Room Division Management </option>
                                <option value="Sales"> Sales </option>
                                <option value="Secretary">  Secretary  </option>
                                <option value="Security"> Security </option>
                                <option value="Spa and Wellness"> Spa and Wellness </option>
                                <option value="Sports and Fitness"> Sports and Fitness </option>
                                <option value="Supply Chain"> Supply Chain </option>
                                <option value="Steawarding"> Steawarding </option>
                                <option value="Concierge"> Concierge  </option>
                                <option value="Telephone Operator"> Telephone Operator </option>
                                <option value="Travel Guide"> Travel Guide </option>
                                <option value="Travel Tour Operator"> Travel Tour Operator </option>
                                <option value="Waiter/Waitress"> Waiter/Waitress </option>
                            </select>
                        </div>

                        <div className="form-group col">
                            <label htmlFor="city"> City  </label>
                            <select
                                className='form-control'
                                onChange={(e) => setCity(e.target.value)}
                            >
                                {/* Need Modification  Cities dropdown will be here*/}
                                <option value=""> Select </option>
                                <option value="Kampala"> Kampala </option>
                                <option value="Nairobi"> Nairobi </option>
                                <option value="Kigali"> Kigali </option>
                                <option value="Dar es Salaam"> Dar es Salaam </option>
                                <option value="Juba"> Juba </option>
                                <option value="Addis Ababa"> Addis Ababa </option>
                            </select>
                        </div>
                    </div>
                    {/* for start date and end date */}
                    <div className="form-group row">
                        <div className="col">
                            <label htmlFor="startDate"> Start Date </label>
                            <input
                                type="date"
                                className="form-control"
                                id="startDate"
                                max={props.todaysdate}
                                onChange={(e) => setJobStartDate(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="endDate"> End Date </label>
                            <input
                                type="date"
                                className="form-control"
                                id="endDate"
                                max={props.todaysdate}
                                disabled={workingHere}
                                onChange={(e) => setJobEndDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className='col'>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="currentJob"
                                    onClick={(e) => setWorkingHere(e.target.checked)}
                                    onChange={(e) => setIsCurrentJob(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="currentJob">
                                    Current Job
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <textarea
                            class="form-control"
                            placeholder='ShowCase your Experience'
                            rows="4"
                            onChange={(e) => setJobExperience(e.target.value)}
                        >
                        </textarea>
                    </div>
                </form>
                {/* <form>
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                onChange={(e) => props.setintrodesc(e.target.value)}
                placeholder='Write a short and sweet introduction about yourself to catch recruiters attention.'
                rows="3">
              </textarea>
            </div>
          </form> */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={handleExperiencePosting}>
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

function MyVerticallyCenteredModalforEditExp(props) {
    const id = props.editid
    const delId = props.deleteid
    const { id: id_from_url } = useParams();

    const [workingHere, setWorkingHere] = useState(false)
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [city, setCity] = useState('');
    const [job_start_date, setJobStartDate] = useState('');
    const [job_end_date, setJobEndDate] = useState('');
    const [is_current_job, setIsCurrentJob] = useState(false);
    // for Jobs Experience Description
    const [jobExperience, setJobExperience] = useState('');
    const [loading, setLoading] = useState(false);
    const [delLoading, setdelLoading] = useState(false);

    const dispatch = useDispatch();


    const allExperiences = useSelector((state) => state.getExpReducer);
    const singleData = allExperiences?.data?.result;
    const filteredData = singleData?.filter(data => data._id == id)[0];;
    console.log('Filtered Data', filteredData);

    useEffect(() => {
        setJobTitle(filteredData?.jobTitle)
        setCompany(filteredData?.company)
        setDepartment(filteredData?.department)
        setCity(filteredData?.city)
        setJobStartDate(filteredData?.job_start_date?.split('T')[0])
        setJobEndDate(filteredData?.job_end_date?.split('T')[0])
        setIsCurrentJob(filteredData?.is_current_job)
        setJobExperience(filteredData?.jobExperience)
    }, [filteredData])


    const handleExperiencePostingEdit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const newExperience = {
            jobTitle: jobTitle,
            company: company,
            department: department,
            city: city,
            job_start_date: job_start_date,
            job_end_date: job_end_date,
            is_current_job: is_current_job,
            jobExperience: jobExperience,
        }
        console.log(newExperience);
        const response = await dispatch(updateUserExperienceAction(id, newExperience));
        if (response.success) {
            const respo2 = await dispatch(getUserExperienceAction(id_from_url));
            if (respo2.success) {
                setLoading(false);
                props.onHide();
                console.log('Experience Edited Successfully');
            } else {
                toast.info('Refresh page')
            }

        } else {
            console.log('Error in Editing Experience');
        }

    }

    const deleteExp = async () => {
        setdelLoading(true);
        const response = await dispatch(deleteExperienceAction(delId));
        if (response.success) {
            const respo2 = await dispatch(getUserExperienceAction(id_from_url));
            if (respo2.success) {
                console.log("Get Single Profile Data : ", respo2);
                setdelLoading(false);
                props.onHide();
                console.log("Desc Deleted Successfully");
            } else {
                toast.info('Refresh page')
            }
        } else {
            console.log("Failed to Delete Desc");
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
            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter">
                    <span ><FaBriefcase /> Add Your Experience </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6><b> Time to shine </b></h6>
                <p style={{ opacity: 0.8 }}>
                    Write about your past and present experience in detail. Recr
                </p>
                <form onSubmit={props.onsubmit}>
                    <div className='row'>
                        <div className="form-group col">
                            <label htmlFor="jobTitle"> Job Title </label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobTitle"
                                placeholder="Enter job title"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group col">
                            <label htmlFor="company"> Company </label>
                            <input
                                type="text"
                                className="form-control"
                                value={company}
                                placeholder="Provide company name"
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className='row'>
                        <div className="form-group col">
                            <label htmlFor="department"> Department </label>
                            <select
                                className='form-control'
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            >
                                <option value=""> Select Department  </option>
                                <option value="Account Management"> Account Management </option>
                                <option value="Administration"> Administration </option>
                                <option value="Bakery"> Bakery </option>
                                <option value="Business Development"> Business Development </option>
                                <option value="Consulting"> Consulting </option>
                                <option value='Content and Communications'> Content and Communications </option>
                                <option value="Customer Service"> Customer Service </option>
                                <option value="Data and Analytics"> Data and Analytics </option>
                                <option value="Driver"> Driver </option>
                                <option value="Design"> Design </option>
                                <option value="Education"> Education </option>
                                <option value="Event" > Event </option>
                                <option value="F and B Management"> F and B Management </option>
                                <option value="F and B Kitchen"> F and B Kitchen </option>
                                <option value="F and B service"> F and B service </option>
                                <option value="Finance and Accounting"> Finance and Accounting </option>
                                <option value="Gardener">Gardener</option>
                                <option value="Guest Relations"> Guest Relations </option>
                                <option value="Health and Safety"> Health and Safety </option>
                                <option value="Host/Hostess"> Host/Hostess </option>
                                <option value="HouseKeeping"> HouseKeeping </option>
                                <option value="Human Resources"> Human Resources </option>
                                <option value="Information Technology"> Information Technology </option>
                                <option value="Laundry"> Laundry </option>
                                <option value="Legal"> Legal </option>
                                <option value="Lifeguard"> Lifeguard </option>
                                <option value="Logistics"> Logistics </option>
                                <option value="Maintenance"> Maintenance </option>
                                <option value="Management"> Management </option>
                                <option value="Marketing"> Marketing </option>
                                <option value="Media and Design"> Media and Design </option>
                                <option value="Other"> Other </option>
                                <option value="Pastry"> Pastry </option>
                                <option value="Porter"> Porter </option>
                                <option value="Project Management"> Project Management </option>
                                <option value="Public Relations"> Public Relations </option>
                                <option value="Purchasing"> Purchasing </option>
                                <option value="Real State"> Real State </option>
                                <option value="Reception"> Reception </option>
                                <option value="Reservations"> Reservations </option>
                                <option value="Retail"> Retail </option>
                                <option value="Revenue Management"> Revenue Management </option>
                                <option value="Room Division Management"> Room Division Management </option>
                                <option value="Sales"> Sales </option>
                                <option value="Secretary">  Secretary  </option>
                                <option value="Security"> Security </option>
                                <option value="Spa and Wellness"> Spa and Wellness </option>
                                <option value="Sports and Fitness"> Sports and Fitness </option>
                                <option value="Supply Chain"> Supply Chain </option>
                                <option value="Steawarding"> Steawarding </option>
                                <option value="Concierge"> Concierge  </option>
                                <option value="Telephone Operator"> Telephone Operator </option>
                                <option value="Travel Guide"> Travel Guide </option>
                                <option value="Travel Tour Operator"> Travel Tour Operator </option>
                                <option value="Waiter/Waitress"> Waiter/Waitress </option>
                            </select>
                        </div>

                        <div className="form-group col">
                            <label htmlFor="city"> City  </label>
                            <select
                                className='form-control'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                {/* Need Modification  Cities dropdown will be here*/}
                                <option value=""> Select </option>
                                <option value="Kampala"> Kampala </option>
                                <option value="Nairobi"> Nairobi </option>
                                <option value="Kigali"> Kigali </option>
                                <option value="Dar es Salaam"> Dar es Salaam </option>
                                <option value="Juba"> Juba </option>
                                <option value="Addis Ababa"> Addis Ababa </option>
                            </select>
                        </div>
                    </div>
                    {/* for start date and end date */}
                    <div className="form-group row">
                        <div className="col">
                            <label htmlFor="startDate"> Start Date </label>
                            <input
                                type="date"
                                className="form-control"
                                max={props.todaysdate}
                                value={job_start_date}
                                onChange={(e) => setJobStartDate(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="endDate"> End Date </label>
                            <input
                                type="date"
                                className="form-control"
                                id="endDate"
                                max={props.todaysdate}
                                value={job_end_date}
                                disabled={workingHere}
                                onChange={(e) => setJobEndDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className='col'>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={is_current_job}
                                    id="currentJob"
                                    onClick={(e) => setWorkingHere(e.target.checked)}
                                    onChange={(e) => setIsCurrentJob(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="currentJob">
                                    Current Job
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <textarea
                            class="form-control"
                            placeholder='ShowCase your Experience'
                            rows="4"
                            value={jobExperience}
                            onChange={(e) => setJobExperience(e.target.value)}
                        >
                        </textarea>
                    </div>
                </form>
                {/* <form>
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                onChange={(e) => props.setintrodesc(e.target.value)}
                placeholder='Write a short and sweet introduction about yourself to catch recruiters attention.'
                rows="3">
              </textarea>
            </div>
          </form> */}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
                <Button onClick={deleteExp} className='btn btn-danger' >
                    {delLoading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Removing ... </span>
                        </div>
                    </> : 'Remove Intro'}
                </Button>
                <Button onClick={handleExperiencePostingEdit} >
                    {loading ? <>
                        <div className='d-flex'>
                            <PuffLoader
                                size={25}
                                color="#ffffff"
                            /> <span className='pl-2'> Updating ... </span>
                        </div>
                    </> : 'Update'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}



const UserExperience = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [modalEditShow, setModalEditShow] = useState(false);
    const todayDate = new Date().toISOString().split('T')[0];
    // const [jobTitle, setJobTitle] = useState('');
    useEffect(() => {
        dispatch(getUserExperienceAction(id));
    }, [])

    const allExperiences = useSelector((state) => state.getExpReducer);
    const singleData = allExperiences?.data?.result;
    console.log(singleData, 'Single Data')

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
        <div id='experiencescroll'>
            <ToastContainer />
            {singleData?.length === 0 ?
                (
                    <>
                        <div className={` ${PrCss.addSections}`} onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
                            <div className="card w-100">
                                <div className="card-body text-center">
                                    <i className='fa-solid fa-plus'></i>
                                    <p className='card-text'> Add your experiences  </p>
                                </div>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    todaysdate={todayDate}
                                // setjobstitle={(e) => setJobTitle(e)}
                                // submitintro={handleExperiencePosting}
                                />
                            </div>
                        </div>
                    </>
                ) :
                (<>
                    <div className="card w-100 mt-2"
                        style={{
                            boxShadow: '14px 10px 20px 3px #d3beae',
                            borderRadius: '25px 25px 25px 25px'
                        }}
                    >
                        {singleData?.length > 0 &&
                            <div className="card-body mt-3 mb-0 pb-0">
                                <div className='row justify-content-between ml-2 mr-2'>
                                    <h5 className="card-title">Experience</h5>
                                    <div style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
                                        <CiSquarePlus size={'40'} />
                                    </div>
                                </div>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    todaysdate={todayDate}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        }
                        {singleData && singleData?.map((experience) => {
                            return (
                                <div className="card-body " key={experience._id}>
                                    <hr style={{width:'100%'}} className='p-0'/>
                                    <div className='col' >
                                        <div className="row ">

                                            <div className='card-title'>
                                                {experience.jobTitle}
                                            </div>
                                            <div className='ml-2 mt-1'>
                                                <div style={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        setModalEditShow(true);
                                                        setEditId(experience._id);
                                                        setDeleteId(experience._id)
                                                    }}
                                                >
                                                    <RxPencil1 />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className='card-text'>
                                                <p>{experience.company} - {experience.city}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className='card-text'>
                                                <p>{experience.department}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className='card-text'>
                                                {formatDateAndCalculateDifference(experience.job_start_date, experience.job_end_date)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Modal Start  */}
                    <MyVerticallyCenteredModalforEditExp
                        editid={editId}
                        deleteid={deleteId}
                        show={modalEditShow}
                        todaysdate={todayDate}
                        onHide={() => setModalEditShow(false)}
                    />
                    {/* Modal End */}
                </>
                )}
        </div>
    )
}

export default UserExperience
