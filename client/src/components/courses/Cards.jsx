import React, { useEffect } from 'react';
import { IoMdTime } from 'react-icons/io';
import { FaArrowUpRightDots } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { GetCourse } from '../../redux/actions/courseAdmin';
import { Link } from 'react-router-dom';
import CheckBox from "./CheckBox";
import CSS from './Cards.module.css';

const cardImageStyle = {
    width: '100%',
    height: '200px',
};


const Cards = ({ filter }) => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCourse());
    }, [dispatch]);

    const AllCoursesData = useSelector((state) => state.getCoursesReducer);
    console.log(AllCoursesData);

    return (
        <div className=' container'>
            <div className='row'>
                {filter ?
                    <div className={`${CSS.filterBox} col`} style={{ maxWidth: "20rem" }}>
                        <div>
                            <h5>FILTER BY</h5>
                            <div>
                                <div className="ml-2 pb-3">
                                    <hr style={{ background: "#E4B49D" }} />

                                    <h6 className="font-weight-bold">Course Types</h6>
                                    <div className="ml-3">
                                        <CheckBox content={"Bachelors"} />
                                        <CheckBox content={"Masters"} />
                                        <CheckBox content={"Professionals"} />
                                        <CheckBox content={"Shorts"} />
                                    </div>

                                    <h6 className="font-weight-bold mt-3">Course Languages</h6>
                                    <div className="ml-3">
                                        <CheckBox content={"English"} />
                                        <CheckBox content={"Spanish"} />
                                        <CheckBox content={"French"} />
                                        <CheckBox content={"Italian"} />
                                        <CheckBox content={"Portuguese"} />
                                        <CheckBox content={"German"} />
                                    </div>

                                    <h6 className="font-weight-bold mt-3">Categories</h6>
                                    <div className="ml-3">
                                        <CheckBox content={"Web Development"} />
                                        <CheckBox content={"Data Science"} />
                                        <CheckBox content={"Machine Learning"} />
                                        <CheckBox content={"Mobile App Development"} />
                                        <CheckBox content={"Cybersecurity"} />
                                        <CheckBox content={"Digital Marketing"} />
                                        <CheckBox content={"Sales and Marketing"} />
                                        <CheckBox content={"Spa"} />
                                        <CheckBox content={"Tourism"} />
                                        <CheckBox content={"Business Skills"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }


                <div className="container mt-5 col">
                    <div className={CSS.cardContainer} >
                        {AllCoursesData?.result?.map((course, index) => (
                            <div className="" key={course._id} style={{minWidth:""}}>
                                <div className="card" style={{ border: '1px solid #E4B49D' }}>
                                    <img className="card-img-top" src={`${course.banner_image}`} alt="CardImageCap" style={cardImageStyle} />
                                    <div className="card-body" style={{ padding: "10px" }}>
                                        <div style={{ minHeight: "11rem", overflow: "hidden" }}>
                                            <h6 className="card-title" style={{ fontWeight: 'bold' }}>
                                                {course.title}
                                            </h6>
                                            <p className="card-text" style={{ opacity: 0.9, fontSize: "16px!important" }}>
                                    
                                                {course.description.substr(0, 150)}...
                                            </p>
                                        </div>

                                        <div className="row mt-1">
                                            <p className="card-text ml-3" style={{ opacity: 0.8 }}>
                                                <IoMdTime /> <small> {course.duration} </small>
                                            </p>
                                            <p className="card-text ml-auto mr-3" style={{ opacity: 0.8 }}>
                                                <FaArrowUpRightDots /> <small> {course.difficulty} </small>
                                            </p>
                                        </div>
                                        <Link to={`/courses/${course._id}`} >
                                            <button className=" btn w-100" style={{ background: '#E4B49D', fontWeight: 600 }}>
                                                Enroll Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div >

    );
};

export default Cards;