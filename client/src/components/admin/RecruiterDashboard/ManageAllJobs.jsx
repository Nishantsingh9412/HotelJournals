import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader.js';
import copy from 'copy-to-clipboard';
import Swal from 'sweetalert2';
import { Image, IconButton, Box, Text } from '@chakra-ui/react';

import GridTable from '@nadavshaar/react-grid-table';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Icons 
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdEye } from 'react-icons/io';
// import { IoMdTime } from "react-icons/io";
// import { FaArrowUpRightDots } from "react-icons/fa6";

// Modules 
import { DeleteJobAction, GetJobs, getJobsRecruiterAction } from '../../../redux/actions/jobsAdmin.js';
import SideBar from './Sidebar/SideBar.jsx';
import ManageAllStyles from './ManageAllJobs.module.css';
import RecruiterSidebarFinal from '../../Miscellaneous/RecruiterSidebarFinal.jsx';
import { FaCheckCircle } from 'react-icons/fa';

const ManageAllJobs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [componentLoad, setComponentLoad] = useState(true);
    const [showDropDown, setShowDropDown] = useState(false);

    const AllJobs = useSelector((state) => state.AllJobsRecruiterReducer)
    const MyJobs = AllJobs?.result;
    console.log("these are all jobs \n")
    console.log(AllJobs);

    const localStorageData = JSON.parse(localStorage.getItem('Profile'));
    const local_user_id = localStorageData?.result?._id;
    console.log(`local_user_id :  ${local_user_id}`);

    useEffect(() => {
        dispatch(getJobsRecruiterAction(local_user_id));
    }, [dispatch])


    useEffect(() => {
        if (MyJobs) {
            setComponentLoad(false);
        }
    }, [MyJobs])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Deletion of Job
    const handleConfirmedDelete = (id) => {
        dispatch(DeleteJobAction(id));
        // navigate('/job/dashboard');
        console.log('Job Deleted successfully')
        toast.success('Job Deleted Successfully')
    }

    const handleDelete = (id) => {
        // const result = window.confirm('Are you sure you want to delete this Job ?')
        const result = window.confirm('¿Quieres eliminar este empleo? ')
        if (result) {
            console.log('Delete the course')
            handleConfirmedDelete(id);
        } else {
            console.log('Cancelled')
        }
    }

    const baseURL = "http://localhost:3000/"

    const handleShare = (jobId) => {
        copy(`${baseURL}alljobs/${jobId}`);
        // alert(`Copied Url : ${baseURL}alljobs/${jobId}`)
        Swal.fire({
            // title: "Job Copied To Clipboard!",
            title: "Empleo Copiando en Portapapeles ",
            // text: `Copied Url : ${baseURL}alljobs/${jobId}`,
            icon: "success"
        });
    }

    const FnameCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner'
                style={{
                    display: 'flex',
                }}
            >
                {/* <ImageChakra
                    borderRadius='full'
                    boxSize='50px'
                    src={data?.pic}
                    alt='user-image'
                /> */}
                <span className='rgt-text-truncate row-hover' style={{ marginLeft: 10, marginTop: 15 }}>
                    {data?.jobTitle}
                </span>
            </div>
        )
    }

    const ViewCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner' >
                {data.isVerifiedJob &&
                    <div className='mt-2 mb-1'>
                        <a
                            href={`/alljobs/${data._id}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ textDecoration: 'none' }}
                        >
                            <button
                                className="btn btn-sm btn-block w-50"
                                style={{ backgroundColor: '#E4B49D' }}
                            >
                                Job
                            </button>
                        </a>
                        <button
                            className="btn btn-sm btn-block w-50 mt-2"
                            onClick={() => navigate(`/recruiter/jobs/${data._id}/job/manage/`)}
                            style={{ backgroundColor: '#E4B49D' }}
                        >
                            {/* Applicants */}
                            Candidatos
                        </button>
                    </div>
                }
            </div>
        )
    }


    const VerifiedCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner'
                style={{
                    display: 'flex',

                }}
            >
                <span className='rgt-text-truncate row-hover' style={{ marginLeft: 10, marginTop: 15 }}>
                    {data.isVerifiedJob ?
                        <>
                            <span className="badge badge-success">
                                {/* Active */}
                                Activo
                            </span>
                        </>
                        :
                        <>
                            <span className="badge badge-danger">
                                {/* Inactive */}
                                Inactivo
                            </span>
                        </>
                    }
                </span>
            </div>
        )
    }

    const CompanyNameCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner'
                style={{
                    display: 'flex',

                }}
            >
                <span className='rgt-text-truncate row-hover' style={{ marginLeft: 10, marginTop: 15 }}>
                    {data.recruiter_info.companyName ?
                        <>
                            {/* <span className="badge badge-success"> */}
                            {data.recruiter_info.companyName}
                            {/* </span> */}
                        </>
                        :
                        <>
                            {/* <span className="badge badge-danger"> */}

                            {/* </span> */}
                        </>
                    }
                </span>
            </div>
        )
    }




    const IconCell = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        const dispatch = useDispatch();
        const { id } = useParams();
        const [showModal, setModalShow] = useState(false);
        return (
            <div>

                {data.isVerifiedJob ?
                    < div className='rgt-cell-inner'
                        style={{
                            display: 'flex',
                            margin: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <button
                            className="btn btn-sm btn-light mr-2"
                            onClick={() => handleShare(data._id)}
                        >
                            <IoShareSocial />
                        </button>
                        <button
                            className='btn btn-sm btn-light mr-2'
                            onClick={() => window.open(`/recruiter/job/update/${data._id}`, '_blank')}
                        >
                            <FaPencil />
                        </button>
                        <button
                            className='btn btn-sm btn-light mr-2'
                            onClick={() => { handleDelete(data._id) }}
                        >
                            <IoTrashBin />
                        </button>
                    </div >
                    :
                    <div
                        className='mt-2 mb-4'
                    >
                        <span >
                            {/* Check your mail for status  */}
                            Revisa tu correo para conocer el estado
                        </span>

                    </div>

                }
            </div>
        )
    }




    const columns = [
        {
            id: 1,
            field: 'jobTitle',
            label: 'Job Title',
            cellRenderer: FnameCell
        },
        {
            id: 2,
            field: 'isVerifiedJob',
            label: 'Status',
            cellRenderer: VerifiedCell,
        },
        {
            id: 3,
            field: 'ComapnyName',
            label: 'Company Name',
            cellRenderer: CompanyNameCell
        },
        {
            id: 4,
            field: 'actionStatus',
            label: 'Action / Status',
            cellRenderer: IconCell

        },
        {
            id: 5,
            field: 'view',
            label: 'View',
            width: '350px',
            cellRenderer: ViewCell
        },

    ];

    const JobsAll = ({ MyJobs }) => {
        return (
            <div className='container mt-2 responsive-table' >
                <GridTable
                    // isLoading={TableLoading}
                    columns={columns}
                    rows={MyJobs}
                    texts={{
                        search: 'Buscar',
                        // show: 'Mostrar',
                        // showing: 'Mostrando',
                        // entries: 'entradas',
                        noResults: 'No se encontraron datos',
                        // filterPlaceholder: 'Filtrar',
                    }}
                />
            </div>
        );
    };


    return (
        <>
            {componentLoad ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <PuffLoader
                        color="red"
                        size={70}
                    />
                </div>
            ) : (
                <div className='mb-5'>
                    <ToastContainer />
                    <div className={ManageAllStyles.sidebar}>
                        <RecruiterSidebarFinal />
                    </div>
                    <div className={ManageAllStyles.content}>
                        <Box
                            bgGradient="linear(to-r, #f7f7f7 100%, transparent 50%)"
                            h="50px"
                            w="100%"
                            pl={2}
                            pr={2}
                            mt={2}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text fontSize="lg" fontWeight="bold">
                                {/* My Jobs */}
                                Mis Empleos
                            </Text>
                        </Box>
                        <JobsAll MyJobs={MyJobs} />
                    </div>
                </div >
            )}
        </>
    )
}

export default ManageAllJobs
