import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BiPhone } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { IoLocationOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import { fetchAllUsers } from '../../redux/actions/users';
// import pdfFileImp from './Resume_Nishant_Singh_(2).pdf'
import { getUserCVAction } from '../../redux/actions/userProfile/userCV';

// import pdfFileImp from './MLAssignmentReport.pdf'
// React pdf 
import Pdfcomp from './Pdfcomp';
import { pdfjs } from 'react-pdf';
import { setUserCv } from '../../api';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();





const SideDrawerProfile = (props) => {
    const id = props.id
    const [pdfFile, setPdfFile] = useState(null);


    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersReducer)
    const currentUser = users?.allUserDetails?.filter((user) => user._id === id)[0];
    console.log("this is current user")
    console.log(currentUser);


    console.log("this is from profile pic ")
    const allEducationExperiencesReducer = useSelector(state => state.getEducationReducer);
    const allEducationExperiences = allEducationExperiencesReducer?.data?.result;
    const recentEducation = allEducationExperiences?.sort((a, b) => new Date(b.start_date) - new Date(a.start_date))[0];
    // console.log(recentEducation?.degree)


    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserCVAction(id))
    }, [dispatch, id])


    // Copying start
    const serverUrl = 'http://localhost:5000/';

    const CVUser = useSelector((state) => state.CVsettergetterReducer);
    const singleCV = CVUser?.data?.result?.cv_db;
    console.log("This is user CV")
    console.log(CVUser)

    // console.log("This is pdf file")
    // console.log("id: \n") 
    // console.log(singleCV)

    useEffect(() => {
        setPdfFile(serverUrl+singleCV)
    },[singleCV,id])

    console.log("THis is PDF File User Wise bhaiya jee ");
    console.log(pdfFile);

    return (
        <div>
            {/* upper Card component */}
            <div className='container mt-4' >
                {/* Basic  Section */}
                <div class="card" style=
                    {{
                        // boxShadow: '14px 10px 20px 3px #d3beae',
                        // borderRadius: '25px 25px 25px 25px'
                    }}
                >
                    <div class="card-body d-flex">
                        <div className='col-md-2'>
                            <img src="https://picsum.photos/200" className='img-responsive rounded-circle mt-4' alt="userpic" />
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
                                                <IoLocationOutline />
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


            {/* PDF viewer */}
            <Pdfcomp pdfFile={pdfFile} />
        </div>
    )
}

export default SideDrawerProfile
