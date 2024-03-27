import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// Icons 
import { BiPhone } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { IoLocationOutline } from "react-icons/io5";
import { RxPencil1 } from "react-icons/rx";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
// UsersAction
import PrCss from './userProfile.module.css';
import { fetchAllUsers, fetchSingleUser } from '../../redux/actions/users';
import ImageCropperReal from '../Recruiters_profile/ImageCropperReal';
import { useStatStyles } from '@chakra-ui/react';
import { IoMdMail } from 'react-icons/io';


const ProfilePic = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [loadedImage, setLoadedImage] = useState(null);
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
  },[dispatch])

  useEffect(() => {
    const img = new Image();
    img.src = picture;
    img.onload = () => {
      setLoadedImage(img);
    }
  },[picture])

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

    <div className='container mt-4' id='profilescroll'>
      {/* Basic  Section */}
      <div class="card" style=
        {{
          boxShadow: '14px 10px 20px 3px #d3beae',
          borderRadius: '25px 25px 25px 25px'
        }}
      >

        <div class="card-body d-flex">
          <div className='col-md-2'>
           { loadedImage ? <ImageCropperReal 
              image={picture} 
              alt="userpic"
            /> : <></> }
          </div>
          <div className='col-md-10'>
            <div>
              <h2 class="card-title" >{currentUser?.fname} {currentUser?.lname}</h2>
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
                      29/07/2001 (Static)
                    </p>
                  </div>

                  <div className='row'>
                    <p class="card-text mr-2 mt-1">
                      <CiLocationOn />
                    </p>
                    <p class="card-text p-0 m-0">
                      Kanpur (Static)
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
  )
}

export default ProfilePic
