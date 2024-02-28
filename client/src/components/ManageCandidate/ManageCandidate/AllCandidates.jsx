import React, { useEffect, useState } from 'react'
import { CiBookmark } from "react-icons/ci";
import { MdAssignment } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { MdEmail } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import ManageStyles from './ManageCandidate.module.css';
import candidatesData from './candidatesData'
import { sendMailAction } from '../../../redux/actions/mail';






const AllCandidates = () => {
    const handleCheckboxChange = (e) => {
        console.log(e.target.checked);
    }
    return (
        <div>
            {candidatesData.map(candidate => (
                <div key={candidate.id} className={ManageStyles.ManageCandidateHeadingmain}>
                    <div className={ManageStyles.checkboxmain}>
                        <input type="checkbox" onChange={(e) => handleCheckboxChange(e, candidate.id)} />
                    </div>
                    <div className={ManageStyles.serialnumbermain}>
                        <div className='text-dark'>{candidate.id}</div>
                    </div>
                    <div className={ManageStyles.applicationnamemain}>
                        <div className={ManageStyles.applicantimg}>
                            <img src={candidate.img} alt="" />
                        </div>
                        <div className={ManageStyles.applicantdetail}>
                            <div className={ManageStyles.name}>
                                <h1>{candidate.name}</h1>
                                <p>{candidate.email}</p>
                                <p>{candidate.college}</p>
                            </div>
                            <div className={ManageStyles.icon}>
                                <CiBookmark />
                            </div>
                        </div>
                    </div>
                    <div className={`${ManageStyles.statusmain}`}>
                        <div className="d-flex ml-4">
                            <MdAssignment  size={20}/> 
                        </div>
                        {/* <div className="d-flex ml-1">
                            <MdEmail size={20}/>
                        </div> */}
                    
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllCandidates
