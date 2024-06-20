import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Image } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';

// Icons 
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import GridTable from '@nadavshaar/react-grid-table';



// Modules 
import { DeleteACourseAction } from '../../redux/actions/courseAdmin';


const ManageCouseTable = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [MyCourse,setMyCourse] = useState([])

    const cardImageStyle = {
        width: '340px',
        height: '243px',
        // borderRadius:'10px',
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/courses/educatorCourses/${id}`).then((response) => {
            // console.log(response.data);
            if (response?.data?.success) {
                console.log('----------------Courses from GURUJI --------------------')
                console.log(response?.data?.result)
                setMyCourse(response?.data?.result)
            } else {
                console.log(response?.data?.message);
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleConfirmedDelete = (id) => {
        dispatch(DeleteACourseAction(id));
        console.log('Tip Deleted successfully')
        toast.success('Course deleted successfully')
    }


    const handleDelete = (id) => {
        const result = window.confirm('Are you sure you want to delete this course ?');
        if (result) {
            console.log('Delete the course')
            handleConfirmedDelete(id);
        } else {
            console.log('Cancelled')
        }
    }


    // start here


    const UserImage = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner '
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >

                {/* <img src={value} alt="Course Thumbnail" style={{ width: '100px', height: '100px' }} /> */}
                <Image
                    borderRadius='50px'
                    boxSize='50px'
                    src={value}
                    alt='Course Thumbnail'
                    marginLeft={10}
                />

            </div>
        )
    }

    const ActionIcons = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner '
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    padding: '10px'
                }}
            >
                {/* <NavLink to={`/educator/dashboard`} style={{ textDecoration: 'none', color: 'white', padding: '4px' }}> */}
                <IconButton
                    onClick={() => handleDelete(data._id)}
                    colorScheme='red'
                    aria-label='Delete Course'
                    icon={<IoTrashBin />}
                />

                {/* </NavLink> */}
                <NavLink
                    // to={`/educator/dashboard/update/${data._id}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={`/educator/course/update/${data._id}`}
                    target='_blank'
                >
                    <IconButton
                        colorScheme='blue'
                        aria-label='Edit Course'
                        icon={<FaPencil />}
                        ml={2}
                    />
                </NavLink>

                {/* Also Add for view Course  */}
                <NavLink
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={`/courses/${data._id}`} target='_blank'
                >

                    <IconButton
                        colorScheme='green'
                        aria-label='View Course'
                        icon={<IoMdEye />}
                        ml={2}
                    />
                </NavLink>
            </div>
        )
    }




    const columns = [
        {
            id: 1,
            field: 'banner_image',
            // label: 'Course Thumbnail ',
            label: 'Miniatura',
            cellRenderer: UserImage,
            // headerRenderer: CustomHeader
        },
        {
            id: 2,
            field: 'title',
            // label: 'Course Title',
            label: 'Nombre',
            width: '350px'
        },
        // {
        //     id: 3,
        //     field: 'description',
        //     label: 'Course Description',
        //     sort: ({ a, b, isAscending }) => {
        //         let aa = a.split('/').reverse().join(),
        //             bb = b.split('/').reverse().join();
        //         return aa < bb ? isAscending ? -1 : 1 : (aa > bb ? isAscending ? 1 : -1 : 0);
        //     }
        // },
        {
            id: 4,
            field: 'difficulty',
            // label: 'Course Diffuculty',
            label: 'Dificultad',
            // getValue: ({ value }) => value.x + value.y
        },
        {
            id: 5,
            field: 'course_category',
            // label: 'Course Category',
            label: 'Categoría'
        },
        {
            id: 6,
            field: 'Actions',
            // label: 'Actions',
            label: 'Acciones',
            cellRenderer: ActionIcons,
        }
    ];

    const ShowApplicantsTable = () => {
        return (
            <div className='container mt-2' >
                <GridTable columns={columns} rows={MyCourse} texts={{columnVisibility:'Columnas'}} />
            </div>
        );
    };


    return (
        <div>
            <>
                <ToastContainer />
                <div className='container'>
                    <h2 className='pt-4 mb-4 text-center'> Tus cursos  </h2>
                </div>
            </>

            <ShowApplicantsTable />


        </div>
    )
}

export default ManageCouseTable
