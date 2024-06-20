import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
// Icons
import { IoMdTime } from 'react-icons/io';
import { FaArrowUpRightDots } from 'react-icons/fa6';
//CSS
import CSS from './Cards.module.css';


const SimilarCourses = () => {

    const { id } = useParams();
    const navigate =useNavigate();
    const [similarCoursesState, setSimilarCoursesState] = useState([]);

    const cardImageStyle = {
        width: '100%',
        height: '200px',
    };


    const similarCourses = async () => {
        const similarCoursesData = await axios
            .get(`${process.env.REACT_APP_SERVER_URL}/courses/similarcourses/${id}`)
            .then((res) => {
                console.log('Similar Courses Data: \n');
                console.log(res?.data?.result);
                setSimilarCoursesState(res?.data?.result);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    console.log('Similar Courses State: \n');
    console.log(similarCoursesState);

    useEffect(() => {
        similarCourses();
    }, [])

    return (
        <div>
            {similarCoursesState.length > 0 ?
                <>
                    <div className="container mt-5 col">
                        <div className={CSS.cardContainer} >
                            {similarCoursesState?.map((course, index) => (
                                <div className={CSS.courseCards} key={course._id} style={{ minWidth: "" }}>
                                    <div className="card" style={{ border: '1px solid #E4B49D' }}>
                                        <img className="card-img-top" src={`${course.banner_image}`} alt="CardImageCap" style={cardImageStyle} />
                                        {course.isFree &&
                                            <span style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '-5px',
                                                backgroundColor: '#15803d',
                                                color: 'white',
                                                padding: '5px 20px',
                                                borderRadius: '5px',
                                                textAlign: 'right'
                                            }}>
                                                {/* Free */}
                                                Gratis
                                            </span>
                                        }
                                        <div className="card-body" style={{ padding: "10px" }}>
                                            <div style={{ minHeight: "11rem", overflow: "hidden", wordBreak: 'break-all' }}>
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
                                                    {/* Enroll Now */}
                                                    Registrarme 
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent:'center',
                        }}
                    >
                        <button
                            onClick={() => navigate('/courses')}
                            className='btn btn-primary mt-5'
                            style={{
                                // width: '15%',
                                backgroundColor: '#E4B49D',
                                // color: 'white',
                                padding: '0.7rem',
                                border: 'white',
                                // borderRadius: '50px',
                            }}
                        >
                            {/* View All courses */}
                            Ver todos los cursos 
                        </button>
                    </div>

                </>
                :
                // <h2> No Similar Courses Found</h2>
                <h2
                    style={{
                        textAlign: 'center',
                        margin: '8rem',
                        color: '#8d8888'

                    }}
                >No se encontraron cursos similares</h2>
            }
        </div>
    )
}

export default SimilarCourses
