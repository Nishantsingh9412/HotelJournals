import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button, Toast } from 'react-bootstrap';
import PuffLoader from "react-spinners/PuffLoader";
import { Link } from 'react-scroll'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons 
import { FaPencil } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { RxPencil1 } from 'react-icons/rx';

import ProfilePic from './ProfilePic';
import PrCss from './userProfile.module.css';
import { fetchAllUsers } from '../../redux/actions/users'
import { DeleteUserProfile, createProfileAction, getProfileAction, updateUserProfileAction } from '../../redux/actions/userProfile';
// Divided components into different files
import UserExperience from './UserExperience';
import UserEducation from './UserEducation';
import KeySkills from './KeySkills';
import UserCertifications from './UserCertifications';
import UserLanguages from './UserLanguages';
import AdditionalUserInfo from './AdditionalUserInfo';
import UploadUserCV from './UploadUserCV';



function MyVerticallyCenteredModal(props) {
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
          <span ><FaRegUser /> About Me </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6><b> Wow the recruiters </b></h6>
        <p>
          Imagine that you're meeting the CEO of your dream company. What should you say to amaze them?
        </p>
        <form>
          <div class="form-group">
            <textarea
              class="form-control"
              onChange={(e) => props.setintrodesc(e.target.value)}
              placeholder='Write a short and sweet introduction about yourself to catch recruiters attention.'
              rows="3">
            </textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
        <Button onClick={props.submitintro}>
          {props.loading ? <>
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
          <span ><FaRegUser /> About Me </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6><b> Wow the recruiters </b></h6>
        <p>
          Imagine that you're meeting the CEO of your dream company. What should you say to amaze them?
        </p>
        <form>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              value={props.value}
              onChange={(e) => props.changevalue(e.target.value)}
              placeholder='Write a short and sweet introduction about yourself to catch recruiters attention.'
              rows="3"
            >
            </textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
        <Button onClick={props.deletevalue} className='btn btn-danger' >
          {props.loadingdel ? <>
            <div className='d-flex'>
              <PuffLoader
                size={25}
                color="#ffffff"
              /> <span className='pl-2'> Removing ... </span>
            </div>
          </> : 'Remove Intro'}

        </Button>
        <Button onClick={props.submithandler}>
          {props.loading ? <>
            <div className='d-flex'>
              <PuffLoader
                size={25}
                color="#ffffff"
              /> <span className='pl-2'> Submitting... </span>
            </div>
          </> : 'Edit'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


const UserProfile = () => {

  // const a = false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [introdesc, setintrodesc] = useState('');
  const [editTheIntro, setEditTheIntro] = useState('');

  // Getting current User Profile from the database

  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer)
  // console.log(currentUser);
  // Getting current User Profile Data of various fields from DB  from the database
  // const allStates = useSelector((state) => state);
  // console.log(allStates)

  const getProfileState = useSelector((state) => state.getProfileReducer)
  const currentUserProfileData = getProfileState?.data?.result;
  const holaUserIntro = currentUserProfileData?.introduction;
  console.log("Current User Introduction: ", holaUserIntro);

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('Profile'));
    // console.log("Stored profile : ", storedProfile);

    if (!storedProfile || storedProfile?.result?._id !== id || !storedProfile?.result) {
      navigate('/login');
    }

    dispatch(fetchAllUsers());
  }, [dispatch])


  useEffect(() => {
    const fetchProfile = async () => {
      const getsingleProfileData = await dispatch(getProfileAction(id));
      console.log("Get Single Profile Data : ", getsingleProfileData);
    };
    fetchProfile();
  }, [id]);


  useEffect(() => {
    if (holaUserIntro) {
      setEditTheIntro(holaUserIntro);
    }
  }, [holaUserIntro])

  const handleIntroduceYourself = async () => {
    // if(!introdesc){
    //   return toast.error('Please fill the introduction field');
    // }
    setLoading(true);
    const userProfileData = {
      introduction: introdesc,
      userId: id
    }

    const repsonse = await dispatch(createProfileAction(userProfileData));

    if (repsonse.success) {
      const getsingleProfileData = await dispatch(getProfileAction(id));
      setLoading(false)
      setModalShow(false)
      // console.log("Profile Created Successfully");
    } else {
      // console.log("Failed to create Profile");
    }
  }


  const handleEditIntro = async () => {
    if (!editTheIntro) {
      return toast.error('Please fill the introduction field');
    }
    setLoading(true);
    const updatedData = {
      introduction: editTheIntro,
    }

    const response = await dispatch(updateUserProfileAction(id, updatedData));
    console.log(response)
    if (response.success) {

      const getsingleProfileData = await dispatch(getProfileAction(id));
      console.log("Get Single Profile Data : ", getsingleProfileData);

      setLoading(false)
      setModalShow(false)

      console.log("Profile Updated Successfully");
    } else {
      console.log("Failed to Update Profile");
    }
  }

  const deleteIntro = async () => {
    setLoadingDel(true);
    const response = await dispatch(DeleteUserProfile(id));
    if (response.success) {
      const getsingleProfileData = await dispatch(getProfileAction(id));
      console.log("Get Single Profile Data : ", getsingleProfileData);
      setLoadingDel(false)
      setModalShow(false)
      console.log("Desc Deleted Successfully");
    } else {
      console.log("Failed to Delete Desc");
    }
  }

  return (

    <div >   {/*  main container */}
      <ProfilePic />
      <div className='container'>
        <ToastContainer />
        <div className='row pt-2  '>
          {/* <div className={PrCss.contactFollow}> */}
          {/* Profile at 60% completion */}
          {/* <div className='card w-75'>
              <div className='card mt-5'>
                <div class="card-body ">
                  <i class="fa-solid fa-user fa-3x"></i> &nbsp;
                  <span>
                    Profile at 60% Completion
                  </span>
                </div>
              </div>
            </div> */}
          {/*             
            <div class="card" style={{ width: '23vw' }}>
              <div class="card-body text-center">
                <i class="fa-solid fa-envelope"></i> &nbsp;
                <span>
                  Contact
                </span>
              </div>
              <div class="card-body">
                <i class="fa-solid fa-at"></i> &nbsp;
                <span>
                  {currentUser?.email}
                </span>
              </div>
              <div class="card-body">
                <i class="fa-solid fa-phone"></i>&nbsp;
                <span>
                  {currentUser?.country_code} - {currentUser?.phone}
                </span>
              </div>
            </div>
            */}
          {/* </div> */}

          {/* Left Side */}
          {/* Quick Links  */}
          <div className='mt-3 col-md-4' style={{ position: 'sticky', top: '0', height: '100vh', marginTop: '2vw' }}>
            <div class="card" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title">Quick Links</h5>
                {/* All Links */}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Link
                      to="profilescroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link
                      to="experiencescroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Experience
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link
                      to="educationscroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Education
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link
                      to="skillscroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Skills
                    </Link>
                  </li>
                  {
                  /* <li className="list-group-item">
                    <Link
                      to="projectscroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Projects
                    </Link>
                  </li> */
                  }

                  <li className="list-group-item">
                    <Link
                      to="liscencescroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Liscence and Certification
                    </Link>
                  </li>


                  <li className="list-group-item">
                    <Link
                      to="languagescroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Languages
                    </Link>
                  </li>


                  <li className="list-group-item">
                    <Link
                      to="additionlInfoScroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Additional Information
                    </Link>
                  </li>


                  <li className="list-group-item">
                    <Link
                      to="resumescroll"
                      smooth={true}
                      duration={1000}
                      className="card-link"
                      style={{ cursor: 'pointer' }}
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>




          {/* Right Side */}
          {/* All Details */}
          <div className='mt-3 col-md-8'>

            <div class="card"
              style=
              {{
                boxShadow: '14px 10px 20px 3px #d3beae',
                borderRadius: '25px 25px 25px 25px'
              }}
            >
              {/* <div class="card-body border-0">
                <h5 class="card-title">Education</h5>
                <div className='mt-1'>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    Axis institute of technology and management
                    <RxPencil1 style={{ marginLeft: '10px' }} />
                  </div>
                  <p className='text-muted p-0 m-0'> Graduating in 2024, Full Time </p>
                </div>
                <div className='mt-1'>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    Allen House
                    <RxPencil1 style={{ marginLeft: '10px' }} />
                  </div>
                  <p className='text-muted p-0 m-0'> Graduating in 2024, Full Time </p>
                </div>


              </div> */}

            </div>

            {/* About Me Section */}

            {
              !holaUserIntro ?
                (<>
                  <div
                    className={`mt-3 ${PrCss.addSections}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setModalShow(true)}
                  >
                    <div className="card w-100">
                      <div className="card-body text-center">
                        <i className='fa-solid fa-plus'></i>
                        <p className='card-text'> Briefly Introduce Yourself  </p>


                        {/* Modal Start  */}
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          submitintro={handleIntroduceYourself}
                          setintrodesc={setintrodesc}
                          loading={loading}
                        />
                        {/* Modal End */}
                      </div>
                    </div>
                  </div>
                </>) :
                (<>
                  <div className="card mt-3"
                    style=
                    {{
                      boxShadow: '14px 10px 20px 3px #d3beae',
                      borderRadius: '25px 25px 25px 25px'
                    }}
                  >
                    <div className="card-body ">
                      <div className='row'>
                        <h5 className="card-title ml-3 ">About Me</h5>
                        <div className='mt-1' style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
                          <RxPencil1 style={{ marginLeft: '10px' }} />
                        </div>
                      </div>

                      {/* Modal Start */}
                      <MyVerticallyCenteredModalForEdit
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        submithandler={handleEditIntro}
                        value={editTheIntro}
                        changevalue={setEditTheIntro}
                        deletevalue={deleteIntro}
                        loading={loading}
                        loadingdel={loadingDel}
                      />
                      {/* Modal End */}

                      <div className='mt-1'>
                        <p className='text-muted p-0 m-0'>
                          {holaUserIntro.length > 150 ? holaUserIntro.substr(0, 150) + "......" : holaUserIntro}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
                )
            }

            <UserExperience />
            <UserEducation />
            <KeySkills />
            <UserCertifications />
            <UserLanguages />
            <AdditionalUserInfo />
            <UploadUserCV />
          </div>
        </div>
        <div className='row'>
          <p>This is Dummy  Upload CV </p>
          <div className={` ${PrCss.addSections}`}>
            <div className="card w-100">
              <div className="card-body text-center">
                <i className='fa-solid fa-plus'></i>
                <p className='card-text'> Upload your CV's  </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserProfile
