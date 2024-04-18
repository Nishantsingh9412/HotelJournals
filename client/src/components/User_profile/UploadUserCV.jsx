import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react'
// Loader
import PuffLoader from "react-spinners/PuffLoader";
// React toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// React bootstrap
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

import PrCss from './userProfile.module.css';
// React Icons
import { FaDownload } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
// Redux
import { deleteUserCVAction, getUserCVAction, setUserCVAction, updateUserCVAction } from '../../redux/actions/userProfile/userCV';



const UploadUserCV = () => {

    const { id } = useParams();
    const [file, setFile] = useState(null);
    const [CVName, setCVName] = useState('');
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
        dispatch(setUserCVAction(id, formData)).then((res) => {
            if (res.success) {
                dispatch(getUserCVAction(id)).then((respo2) => {
                    if (respo2.success) {
                        toast.success(res.message);
                    } else {
                        toast.error('Refresh Page to see changes ');
                    }
                });
            }
        }).finally(() => {
            setLoading(false);
        });
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
        dispatch(deleteUserCVAction(id)).then((response) => {
            if (response.success) {
                setCVName('');
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
            setLoading(false);
        })
    }


    // const DownloadCVButton = ({ cvUrl, filename }) => {
    const handleDownloadCV = async (cvUrl, filename) => {
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

    // return <FaDownload size={'30'} color='#8E7AB5' onClick={handleDownload} />;
    // };


    useEffect(() => {
        if (singleCV) {
            setCVName(singleCV?.split('Z')[1])
        }
    }, [singleCV])



    return (
        <div id='resumescroll' className='mb-4'>
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
                <div className='mt-2'
                    style={{
                        boxShadow: '14px 10px 20px 3px #d3beae',
                        borderRadius: '25px 25px 25px 25px',
                        padding: '2rem'
                    }}
                >
                    <h5>
                        {/* Upload CV */}
                        Subir CV
                    </h5>
                    <form>
                        <input type="file" onChange={e => setFile(e.target.files[0])} />
                        <Button onClick={handlesubmitCV}>
                            {loading ? <>
                                <div className='d-flex'>
                                    <PuffLoader
                                        size={25}
                                        color="#ffffff"
                                    /> <span className='pl-2'> </span>
                                </div>
                            </> :
                                // 'Save'
                                'Guardar'
                            }
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
                                <h5 >
                                    Editar CV
                                </h5>
                            </div>
                            <div className='row mb-4 p-4'>
                                <p>
                                    {/* {singleCV?.split('Z')[1]} */}
                                    {CVName}
                                </p>
                                <div className='col-md-2 d-flex'>
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            handleDownloadCV(singleCV, singleCV?.split('Z')[1])
                                        }}
                                    >

                                        <IconButton
                                        marginLeft={'10px'}
                                        marginRight={'10px'}
                                            aria-label='Download CV'
                                            icon={
                                                <FaDownload
                                                    size={'20'}
                                                    color='#4c9df4' />
                                            }
                                        />
                                        {/* <DownloadCVButton
                                            cvUrl={singleCV}
                                            filename={singleCV?.split('Z')[1]}
                                        /> */}
                                    </div>
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleDeleteCV}
                                    >
                                        <IconButton
                                            // colorScheme='blue'
                                            aria-label='Delete CV'
                                            icon={<MdDelete size={'20'} color='red' />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <Button onClick={handleupdateCV}>
                                {loading ? <>
                                    <div className='d-flex '>
                                        <PuffLoader
                                            size={25}
                                            color="#ffffff"
                                        /> <span className='pl-2'> </span>
                                    </div>
                                </> :
                                    // 'Update CV'
                                    'Actualizar CV '
                                }
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
