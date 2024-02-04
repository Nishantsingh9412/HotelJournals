import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TbLanguageHiragana } from "react-icons/tb";
import { CgSandClock } from "react-icons/cg";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { NavLink, useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";



import { GetCourseSingle } from '../../redux/actions/courseAdmin';
import Cards from './Cards';



const CourseDescription = () => {

  const [loading, setLoading] = useState(true);


  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();



  const course = useSelector((state) => state.GetCourseSingleReducer)
  console.log(course);

  useEffect(() => {
    dispatch(GetCourseSingle(id));
    if (course.result !== undefined) {
      setLoading(false);
    }
  }, [dispatch, id, course.result])


  return (
    // Section 1st start
    <>
      {loading ? (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <ClipLoader 
          color="red"
          size={70}          
          />
        </div>

      ) : (
        
        <div className='container mt-3' >
          <div className="card mb-3" style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)' }}>
            <div className="row g-0">
              <div className="col-md-4 col-sm-12">
                <img className='img-fluid rounded-start p-2 d-block mx-auto' src={course?.result?.banner_image} alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">
                    {course?.result?.title}
                  </h3>
                  <p className="card-text w-100">
                    {/* lorem25 */}
                    {course?.result?.description.substring(0, 98)}...
                  </p>
                  {/* <button className='btn btn-info'>Explore More</button> */}
                  <p> {course?.result?.isFree ? (<></>) : (<p> Price : {course?.result?.price} </p>)}</p>
                  <NavLink to={`${course?.result?.course_link}`} target='_blank'>
                    <button className='mt-3 btn  ' style={{ background: '#E4B49D', fontWeight: 600 }}>
                      Explore More
                    </button>
                  </NavLink>
                </div>
                <div className="row mt-2 mb-3 justify-content-around p-4">
                  <div className="col-md-2 text-center border border-dark rounded p-2 " style={{ background: '#F5F6FB', minWidth:'140px', height:'fit-content' }}>
                    <div className="col" style={{ opacity: 0.7 }}><TbLanguageHiragana size={20} alignmentBaseline='' /> </div>
                    <div className="col" style={{ opacity: 0.7, fontSize: '15px' }}> <small> Languages </small> </div>
                    <div className="col" > <small> {course?.result?.languages}   </small> </div>
                  </div>
                  <div className="col-md-2 text-center border border-dark rounded p-2 " style={{ background: '#F5F6FB' , minWidth:'140px', height:'fit-content'  }}>
                    <div className="col" style={{ opacity: 0.7 }}><CgSandClock size={20} alignmentBaseline='' /> </div>
                    <div className="col" style={{ opacity: 0.7, fontSize: '15px' }}> <small> Duration </small> </div>
                    <div className="col"><small> {course?.result?.duration} </small> </div>
                  </div>
                  <div className="col-md-2 text-center border border-dark rounded p-2 " style={{ background: '#F5F6FB' , minWidth:'140px', height:'fit-content'  }}>
                    <div className="col" style={{ opacity: 0.7 }}><FaArrowUpRightDots size={20} alignmentBaseline='' /> </div>
                    <div className="col" style={{ opacity: 0.7, fontSize: '15px' }}> <small> Difficulty </small> </div>
                    <div className="col"><small> {course?.result?.difficulty} </small> </div>
                  </div>
                  <div className="col-md-2 text-center border border-dark rounded p-2 " style={{ background: '#F5F6FB' , minWidth:'140px', height:'fit-content' }}>
                    <div className="col" style={{ opacity: 0.7 }}><IoIosRocket size={20} alignmentBaseline='' /> </div>
                    <div className="col" style={{ opacity: 0.7, fontSize: '15px' }}> <small> Format </small> </div>
                    <div className="col"><small> {course?.result?.format} </small> </div>
                  </div>
                  {
                    course?.result?.isFree ? (<div className='text-left rounded' style={{ position: 'absolute', top: 10, right: 0, background: 'green', color: 'white', padding: '10px', paddingLeft: '100px' }}>
                      Free
                    </div>) : (
                      // <div className='text-left rounded' style={{ position: 'absolute', top: 10, right: 0, background: 'green', color: 'white', padding: '10px', paddingLeft: '100px' }}>
                      //   {course.price}
                      // </div>
                      <></>
                    )
                  }

                </div>

              </div>
            </div>
          </div>

          {/* Section 1 End */}

          {/* Section 2nd  Start*/}

          <div className='border rounded mb-4' style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)' }}>
            <div className='p-4'>
              <h5 className='font-weight-bold'> What Yo'll Learn </h5>
              <div style={{ opacity: '0.85' }}>
                <p className='text-justify mt-4'>
                  <p className='text-justify mt-4'>
                    {course?.result?.description}...
                  </p>
                </p>
              </div>
            </div>
          </div>

          {/* section  3 Start*/}
          <div className='border rounded mb-3' style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)' }}>
            <div className='p-4'>
              <h3 > Keep learning. Keep growing. </h3>
              <p style={{ fontWeight: 600 }}> Discover this selection of interesting courses </p>
              <div style={{ opacity: '0.85' }}>
                <span>We have a range of courses available: from online courses to short courses and master's degrees. Start your search by checking out our most popular courses below.</span>
                <Cards />
              </div>
            </div>
          </div>


          {/* Section 3 end */}

        </div>
      )}
    </>


  )
}

export default CourseDescription
