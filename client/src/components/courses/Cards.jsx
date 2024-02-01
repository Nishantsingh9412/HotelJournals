import React, { useEffect } from 'react'

import { IoMdTime } from "react-icons/io";
import { FaArrowUpRightDots } from "react-icons/fa6";


import { useDispatch, useSelector } from 'react-redux';
import { GetCourse } from '../../redux/actions/courseAdmin';
import { NavLink } from 'react-router-dom';



const cardImageStyle = {
    width: '296px',
    height: '243px',
}

const baseURL = "http://localhost:3000/"
const serverURL = "http://localhost:5000/"


const Cards = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCourse());
    }, [dispatch])

    const AllCoursesData = useSelector((state) => state.getCoursesReducer)
    console.log(AllCoursesData);


    return (
        <div className="container">

            <div className='container flex flex-wrap justify-center gap-4 mb-4 mt-5 pt-3'>
                <div className="card-deck d-flex flex-wrap justify-content-start">
                    {AllCoursesData?.result?.map((course, index) => (
                        <div className="card m-2 " style={{ flex: '0 0 30%', border: '1px solid #E4B49D', }} key={course._id}>
                            <img className="card-img-top " src={`${course.banner_image}`} alt="Card image cap" style={cardImageStyle} />
                            <div className="card-body">
                                <h6 className="card-title text-center" style={{ fontWeight: 'bolder' }}>{course.title}</h6>
                                <p className="card-text text-justify" style={{ opacity: 0.9 }}>{course.description.substr(0, 180)}...</p>
                                <div className='row'>
                                    <p className="card-text ml-3" style={{ opacity: 0.8 }}>  <IoMdTime /> <small> {course.duration} </small>  </p>
                                    <p className="card-text ml-auto mr-3" style={{ opacity: 0.8 }}>  <FaArrowUpRightDots /> <small> {course.difficulty} </small>  </p>
                                </div>
                                <NavLink to={`/courses/${course._id}`} target='_blank'>
                                    <button className='mt-3 btn w-100 ' style={{ background: '#E4B49D', fontWeight: 600 }}>
                                        Enroll Now
                                    </button>
                                    {/* courses/:id */}
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


{/*          
            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" style={cardImageStyle} src={Course1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Lorem ipsum dolor </h5>
                            <p className="card-text">Some quick example text to build the another way to show</p>
                            <p className="card-text">Some quick example text to build   </p>
                            <div className='d-flex mt-3'>
                                <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                                <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                            </div>
                            <button className={`btn mt-5 mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" style={cardImageStyle} src={Course2} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold ">Lorem ipsum dolor</h5>
                        <p className="card-text">Some quick example text to build the another way to show</p>
                        <p className="card-text">Some quick example text to build   </p>
                        <div className='d-flex mt-3'>
                            <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                            <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                        </div>
                        <button className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" style={cardImageStyle} src={Course3} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold"> Lorem ipsum dolor </h5>
                        <p className="card-text">Some quick example text to build the another way to show</p>
                        <p className="card-text">Some quick example text to build   </p>
                        <div className='d-flex mt-3'>
                            <p className="card-text">  <FaRegUser style={{ marginBottom: '3px' }} /> <small> 1200 </small>  </p>
                            <p className="card-text ml-4">  <FiThumbsUp style={{ marginBottom: '3px' }} /> <small> 100%  (14) </small>  </p>
                        </div>
                        <button href="#" className={`btn mt-5 ${CSS.customBtn}`} > <CiShoppingCart size={22} style={{ marginBottom: '4px' }} />  Buy &euro;45 </button>
                    </div>
                </div>
            </div>
        </div>  */}

        </div >



    )
}

export default Cards
