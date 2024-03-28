import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// Icons 
import { BiPhone } from 'react-icons/bi';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from "react-spinners/PuffLoader";

import { CiLocationOn } from 'react-icons/ci';
import { IoLocationOutline } from "react-icons/io5";
import { RxPencil1 } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
// UsersAction
import PrCss from './userProfile.module.css';
import { fetchAllUsers, fetchSingleUser, updateSingleUserAction } from '../../redux/actions/users';
import ImageCropperReal from '../Recruiters_profile/ImageCropperReal';
import { useStatStyles } from '@chakra-ui/react';
import { IoMdClose, IoMdMail } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';


import PhoneInput from 'react-phone-number-input';
import { parsePhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css';


const ProfilePic = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [loadedImage, setLoadedImage] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  // const users = useSelector((state) => state.usersReducer)
  // const currentUser = users?.allUserDetails?.filter((user) => user._id === id)[0];
  // console.log("this is current user")
  // console.log(currentUser);

  const currentUserReducer = useSelector(state => state.singleUserReducer);
  const currentUser = currentUserReducer?.data?.result;
  const picture = currentUser?.pic;

  console.log("this is picture")
  console.log(picture);

  console.log("this is current user reducer \n")
  console.log(currentUser);


  console.log("this is from profile pic ")
  const allEducationExperiencesReducer = useSelector(state => state.getEducationReducer);
  const allEducationExperiences = allEducationExperiencesReducer?.data?.result;
  const recentEducation = allEducationExperiences?.sort((a, b) => new Date(b.start_date) - new Date(a.start_date))[0];

  // console.log(recentEducation?.degree)
  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, [dispatch])

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch])

  useEffect(() => {
    const img = new Image();
    img.src = picture;
    img.onload = () => {
      setLoadedImage(img);
    }
  }, [picture])

  function MyVerticallyCenteredModalForEdit(props) {
    const oldData = props.oldData;
    const { id: _id } = useParams();
    console.log("This is id : ", _id)

    const [updatedFirstName, setUpdatedFirstName] = useState('');
    const [updatedLastName, setUpdatedLastName] = useState('');
    const [updatedDob, setUpdatedDob] = useState('');
    const [updatedLocation, setUpdatedLocation] = useState('');

    const handleProfileUpdate = (e) => {
      e.preventDefault();
      if (!updatedFirstName || !updatedLastName || !updatedDob || !updatedLocation) {
        toast.error('Please fill all the fields');
        return;
      }

      const updatedProfileData = {
        fname: updatedFirstName,
        lname: updatedLastName,
        dob: updatedDob,
        location: updatedLocation
      }

      console.log("This is updated profile Data : \n", updatedProfileData)

      dispatch(updateSingleUserAction(_id, updatedProfileData)).then((response) => {
        if (response.success) {
          toast.success(response.message);
          props.onHide();
        } else {
          toast.error(response.message);
        }
      })
      console.log("This is updated profile data : ", updatedProfileData);
    }

    useEffect(() => {
      if (oldData) {
        setUpdatedFirstName(oldData?.fname)
        setUpdatedLastName(oldData?.lname)
        setUpdatedDob(oldData?.dob)
        setUpdatedLocation(oldData?.location)
      }
    }, [oldData])

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
        <Modal.Header closeButton style={{ justifyContent: 'center' }}>
          <Modal.Title id="contained-modal-title-vcenter"  >
            <span >
              <FaRegUser
                style={{ marginLeft: '4vw' }}
              /> Edit Personal Details </span>
          </Modal.Title>
          <IoMdClose
            style={{ cursor: 'pointer' }}
            onClick={props.onHide}
          />
        </Modal.Header>
        <Modal.Body>
          {/* <h6><b> Wow the recruiters </b></h6> */}
          {/* <p>
            Edit Profile
          </p> */}
          <form >
            <div class="form-group">
              {/* <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                value={props.value}
                onChange={(e) => props.changevalue(e.target.value)}
                placeholder='Write a short and sweet introduction about yourself to catch recruiters attention.'
                rows="3"
              >
              </textarea> */}
              {/* fname */}
              <div className='form-row' >
                <div className='col-md-6'>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" value={updatedFirstName} className='form-control' onChange={
                    (e) => {
                      setUpdatedFirstName(e.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6' >
                  <label htmlFor="lname"> Last Name </label>
                  <input type="text" value={updatedLastName} className='form-control' onChange={
                    (e) => {
                      setUpdatedLastName(e.target.value)
                    }
                  } />
                </div>
              </div>

              <div className="form-row mt-2 ">
                <div className="col-md-6">
                  {/* <div className="input-field">
                    <PhoneInput
                      international
                      defaultCountry="ES"
                      // value={phoneNumber}
                      // onChange={setPhoneNumber}
                      onChange={
                        (phoneNumber) => {
                          if (typeof phoneNumber === 'string') {
                            const parsedPhoneNumber = parsePhoneNumber(phoneNumber);
                            if (parsedPhoneNumber) {
                              props.setCountryCode(parsedPhoneNumber.countryCallingCode)
                              props.setPhone_no(parsedPhoneNumber.nationalNumber)
                            }
                          }
                        }
                      }
                      placeholder="Phone"
                    />
                  </div> */}
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6">
                  <label htmlFor="dob">DOB</label>
                  <input type="date" className='form-control' value={updatedDob} onChange={
                    (e) => {
                      setUpdatedDob(e.target.value)
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="location">Location</label>
                  <input type="text" className='form-control'
                    value={updatedLocation}
                    onChange={
                      (e) => {
                        setUpdatedLocation(e.target.value)
                      }
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(event) => { event.stopPropagation(); props.onHide(); }} className='btn btn-secondary'> Close</Button>
          {/* <Button onClick={props.deletevalue} className='btn btn-danger' >
            {props.loadingdel ? <>
              <div className='d-flex'>
                <PuffLoader
                  size={25}
                  color="#ffffff"
                /> <span className='pl-2'> Removing ... </span>
              </div>
            </> : 'Remove Intro'}

          </Button> */}
          <Button onClick={handleProfileUpdate} >
            {props.loading ? <>
              <div className='d-flex'>
                <PuffLoader
                  size={25}
                  color="#ffffff"
                /> <span className='pl-2'> Submitting... </span>
              </div>
            </> : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }



  return (
    // <div className={`container mt-1 ${PrCss.mainProfile}`} >
    //     <div className='row'>
    //       <div className='col'>
    //         {/* name and other details */}
    //         <div className={PrCss.leftSection}>
    //           <h1> {currentUser?.fname} {currentUser?.lname}</h1>
    //           <h4> Lorem ipsum dolor </h4>
    //           <h6> Lorem ipsum dolor sit amet </h6>

    //         </div>
    //       </div>

    //       <div className='col '>
    //         <div className={PrCss.rightSection}>
    //           <img src='https://via.placeholder.com/170x170' alt="User's Profile picture" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <>

      {!currentUser ? (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <PuffLoader
            color="red"
            size={70}
          />
        </div>

      ) : (
          <div className='container mt-4' id='profilescroll'>
            {/* Basic  Section */}
            <div class="card" style=
              {{
                boxShadow: '14px 10px 20px 3px #d3beae',
                borderRadius: '25px 25px 25px 25px'
              }}
            >
              <ToastContainer />

              <div class="card-body d-flex">
                <div className='col-md-2'>
                  {loadedImage ? <ImageCropperReal
                    image={picture}
                    alt="userpic"
                  /> : <></>}
                </div>
                <div className='col-md-10'>
                  <div>
                    <div className='d-flex'>
                      <h2 class="card-title" >{currentUser?.fname} {currentUser?.lname}</h2>
                      <RxPencil1 style={{ marginLeft: '10px', marginTop: '1.5rem', cursor: 'pointer' }} onClick={() => setModalShow(true)} />
                      <MyVerticallyCenteredModalForEdit
                        oldData={currentUser}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      // submithandler={handleEditIntro}
                      // value={editTheIntro}
                      // changevalue={setEditTheIntro}
                      // deletevalue={deleteIntro}
                      // loading={loading}
                      // loadingdel={loadingDel}
                      />
                    </div>
                    <p class="card-text p-0 m-0">{recentEducation?.degree}</p>
                    <p class="card-text p-0 m-0">{recentEducation?.school}</p>
                    <hr style={{ width: '100%' }} />
                  </div>
                  <div className='col'>
                    <div className='row justify-content-left'>
                      <div className='col-auto'>
                        <div className='row'>
                          <p class="card-text mr-2 mt-1">
                            <LiaBirthdayCakeSolid />
                          </p>
                          <p class="card-text p-0 m-0">
                            {/* 29/07/2001 (Static) */}
                            {currentUser?.dob ? currentUser?.dob : 'Not Updated' }
                          </p>
                        </div>

                        <div className='row'>
                          <p class="card-text mr-2 mt-1">
                            <CiLocationOn />
                          </p>
                          <p class="card-text p-0 m-0">
                          {currentUser?.location ? currentUser?.location : 'Not Updated'}
                          </p>
                        </div>
                      </div>
                      <div className='col-auto ml-5'>
                        <div className='row'>
                          <p class="card-text mr-2 mt-1">
                            <BiPhone />
                          </p>
                          <p class="card-text p-0 m-0">
                            {currentUser?.country_code} {currentUser?.phone}
                          </p>
                        </div>

                        <div className='row'>
                          <p class="card-text mr-2 mt-1">
                            <IoMdMail />
                          </p>
                          <p class="card-text p-0 m-0">
                            {currentUser?.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  )
}

export default ProfilePic
