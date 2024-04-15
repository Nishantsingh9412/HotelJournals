import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Loader
import PuffLoader from "react-spinners/PuffLoader";
// React toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// React bootstrap
import Modal from 'react-bootstrap/Modal'
import { Button, Toast } from 'react-bootstrap';

import PrCss from './userProfile.module.css';
// React Icons
import { FaDownload } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
// Redux
import { deleteUserCVAction, getUserCVAction, setUserCVAction, updateUserCVAction } from '../../redux/actions/userProfile/userCV';
import { IconButton } from '@chakra-ui/react';


const UploadUserCV = () => {

    const { id } = useParams();
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const serverUrl = process.env.REACT_APP_SERVER_URL_XTRA_SLASH;
    useEffect(() => {
        dispatch(getUserCVAction(id))
    }, [dispatch, id])

    const CVUser = useSelector((state) => state.CVsettergetterReducer);
    const singleCV = CVUser?.data?.result?.cv_db;
    console.log(singleCV)

    const handlesubmitCV = async (e) => {
        e.preventDefault();
        if (!file) {
            return toast.error('Please select a file to upload');
        }
        if (
            file.type !== 'application/pdf' &&
            file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
            file.type !== 'application/msword'
        ) {
            return toast.error('File type should be pdf or docx or doc only');
        }
        if (file.size > 2000000) {
            return toast.error('File size should not exceed 2MB');
        }
        setLoading(true);
        console.log(file)
        const formData = new FormData();
        formData.append('cv', file);
        // Sending the form data to the server
        const response = await dispatch(setUserCVAction(id, formData));
        if (response.success) {
            const respo2 = await dispatch(getUserCVAction(id));
            if (respo2.success) {
                toast.success(response.message);
            } else {
                toast.error('Refresh Page to see changes ');
            }
        } else {
            toast.error(response.message);
        }
        setLoading(false);
    }

    const handleupdateCV = async (e) => {
        e.preventDefault();
        if (!file) {
            return toast.error('Please select a file to upload');
        }
        if (
            file.type !== 'application/pdf' &&
            file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
            file.type !== 'application/msword'
        ) {
            return toast.error('File type should be pdf or docx or doc only');
        }
        if (file.size > 2000000) {
            return toast.error('File size should not exceed 2MB');
        }
        setLoading(true);
        console.log(file)
        const formData = new FormData();
        formData.append('cv', file);
        // Sending the form data to the server
        const response = await dispatch(updateUserCVAction(id, formData));
        if (response.success) {
            const respo2 = await dispatch(getUserCVAction(id));
            if (respo2.success) {
                toast.success(response.message);
            } else {
                toast.error('Refresh Page to see changes ');
            }
        } else {
            toast.error(response.message);
        }
        setLoading(false);
    }

    const handleDeleteCV = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await dispatch(deleteUserCVAction(id));
        if (response.success) {
            // const respo2 = await dispatch(getUserCVAction(id));
            // if(respo2.success){
            toast.success(response.message);
            // }else{
            // toast.error('Refresh Page to see changes ');
            // }
        } else {
            toast.error(response.message);
        }
        setLoading(false);
    }

    const DownloadCVButton = ({ cvUrl, filename }) => {
        const handleDownload = async () => {
            try {
                const response = await fetch(`${serverUrl}${cvUrl}`);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', filename); // or any other extension
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        return <FaDownload size={'30'} color='#8E7AB5' onClick={handleDownload} />;
    };



    return (
        <div id='resumescroll'>
            <ToastContainer />
            {/* <div className={` ${PrCss.addSections}`}>
                <div className="card w-100">
                    <div className="card-body text-center">
                        <i className='fa-solid fa-plus'></i>
                        <p className='card-text'>  CV Or Resume  </p>
                    </div>
                </div>
            </div> */}

            {!singleCV ? (<>
                <div className='mt-2'>
                    <form>
                        <input type="file" onChange={e => setFile(e.target.files[0])} />
                        <Button onClick={handlesubmitCV}>
                            {loading ? <>
                                <div className='d-flex'>
                                    <PuffLoader
                                        size={25}
                                        color="#ffffff"
                                    /> <span className='pl-2'> Submitting... </span>
                                </div>
                            </> : 'Submit'}
                        </Button>
                    </form>
                </div>
            </>) : (
                <>
                    {/* <div className='mt-2' style={}> */}
                    <div class="card mt-3 p-4"
                            style=
                            {{
                                boxShadow: '14px 10px 20px 3px #d3beae',
                                borderRadius: '25px 25px 25px 25px'
                            }}
                        >
                        <form >
                            <div className="col-md-6 ">
                                <h5 style={{fontWeight:'600'}}>Edit CV</h5>
                            </div>
                            <div className='row mb-4 p-4'>
                                <p>{singleCV?.split('Z')[1]}</p>
                                <div className='col-md-2 d-flex'>
                                    <div className="" style={{ cursor: 'pointer' }}>
                                        <DownloadCVButton cvUrl={singleCV} filename={singleCV?.split('Z')[1]} />
                                    </div>
                                    <div className="" style={{ cursor: 'pointer' }} onClick={handleDeleteCV} >
                                        <MdDelete size={'30'} color='red' />
                                    </div>
                                </div>
                            </div>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                            <Button onClick={handleupdateCV}>
                                {loading ? <>
                                    <div className='d-flex '>
                                        <PuffLoader
                                            size={25}
                                            color="#ffffff"
                                        /> <span className='pl-2'> Updating ... </span>
                                    </div>
                                </> : 'Update CV'}
                            </Button>
                        </form>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default UploadUserCV
