import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Icons 
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaArrowUpRightDots } from "react-icons/fa6";


// Modules 
import { DeleteACourseAction, GetCourse } from '../../../redux/actions/courseAdmin';


const EducatorDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AllCourses = useSelector((state) => state.getCoursesReducer)
    console.log(AllCourses);
    const localStorageData = JSON.parse(localStorage.getItem('Profile'));
    const local_user_id = localStorageData?.result?._id;
    console.log(`LocalUSERID :  ${local_user_id}`);
    const MyCourse = AllCourses?.result?.filter((course) => course.created_by === local_user_id);
    console.log(MyCourse);

    const cardImageStyle = {
        width: '340px',
        height: '243px',
        // borderRadius:'10px',
    }

    const baseURL = "http://localhost:3000/"
    const serverURL = process.env.REACT_APP_SERVER_URL_XTRA_SLASH;

    useEffect(() => {
        dispatch(GetCourse());
    }, [dispatch]);

    const handleConfirmedDelete = (id) => {
        dispatch(DeleteACourseAction(id));
        navigate('/educator/dashboard');
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





    return (
        <div>
            <>
                <ToastContainer />
                <div className='container'>
                    <h2 className='pt-4 mb-4'> Educator Dashboard  </h2>
                    <button className='btn btn-warning text-white'>
                        <NavLink to='/admin/courses' target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
                            Add a new Course
                        </NavLink>
                    </button>
                </div>


                <div className='container flex flex-wrap justify-center gap-4 mb-4 mt-5 pt-3'>
                    <div className="card-deck d-flex flex-wrap justify-content-start">
                        {MyCourse?.map((course, index) => (
                            <div className="card m-2 " style={{ flex: '0 0 30%', border: '1px solid #E4B49D', }} key={course._id}>
                                <img className="card-img-top " src={`${course.banner_image}`} alt="Card image cap" style={cardImageStyle} />
                                <div className="card-body">
                                    <h6 className="card-title text-center" style={{ fontWeight: 'bolder' }}>{course.title}</h6>
                                    <p className="card-text text-justify" style={{ opacity: 0.9 }}>{course.description.substr(0, 180)}...</p>
                                    <div className='row'>
                                        <p className="card-text ml-3" style={{ opacity: 0.8 }}>  <IoMdTime /> <small> {course.duration} </small>  </p>
                                        <p className="card-text ml-auto mr-3" style={{ opacity: 0.8 }}>  <FaArrowUpRightDots /> <small> {course.difficulty} </small>  </p>
                                    </div>
                                    {/* <NavLink to={`/courses/singleCourse/${course._id}`} style={{ textDecoration: 'none', color: 'white', padding: '4px' }}> */}
                                    <NavLink to={`/educator/dashboard`} style={{ textDecoration: 'none', color: 'white', padding: '4px' }}>
                                        <button className='btn btn-danger' onClick={() => handleDelete(course._id)}>
                                            Delete
                                            <IoTrashBin />
                                        </button>
                                    </NavLink>
                                    <NavLink style={{ textDecoration: 'none', color: 'white', padding: '4px' }} to={`/educator/dashboard/update/${course._id}`} target='_blank'> <button className='btn btn-info ml-4 ' >  Edit  <FaPencil /> </button>  </NavLink>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </>

        </div>
    )
}

export default EducatorDashboard
