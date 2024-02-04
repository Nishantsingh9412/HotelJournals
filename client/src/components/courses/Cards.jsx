import React, { useEffect } from 'react';
import { IoMdTime } from 'react-icons/io';
import { FaArrowUpRightDots } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { GetCourse } from '../../redux/actions/courseAdmin';
import { NavLink } from 'react-router-dom';

const cardImageStyle = {
    width: '100%',
    height: 'auto',
};

const Cards = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCourse());
    }, [dispatch]);

    const AllCoursesData = useSelector((state) => state.getCoursesReducer);
    console.log(AllCoursesData);

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {AllCoursesData?.result?.map((course, index) => (
                    <div className="col" key={course._id}>
                        <div className="card" style={{ border: '1px solid #E4B49D' }}>
                            <img className="card-img-top" src={`${course.banner_image}`} alt="CardImageCap" style={cardImageStyle} />
                            <div className="card-body">
                                <h6 className="card-title text-center" style={{ fontWeight: 'bold' }}>
                                    {course.title}
                                </h6>
                                <p className="card-text text-justify" style={{ opacity: 0.9 }}>
                                    {course.description.substr(0, 180)}...
                                </p>
                                <div className="row">
                                    <p className="card-text ml-3" style={{ opacity: 0.8 }}>
                                        <IoMdTime /> <small> {course.duration} </small>
                                    </p>
                                    <p className="card-text ml-auto mr-3" style={{ opacity: 0.8 }}>
                                        <FaArrowUpRightDots /> <small> {course.difficulty} </small>
                                    </p>
                                </div>
                                <NavLink to={`/courses/${course._id}`} target="_blank">
                                    <button className="mt-3 btn w-100" style={{ background: '#E4B49D', fontWeight: 600 }}>
                                        Enroll Now
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
